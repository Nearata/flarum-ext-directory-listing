<?php

namespace Nearata\DirectoryListing\Api\Controller;

use Flarum\Http\RequestUtil;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Contracts\Filesystem\Factory as FilesystemFactory;
use Illuminate\Support\Arr;
use Laminas\Diactoros\CallbackStream;
use Laminas\Diactoros\Response\EmptyResponse;
use Laminas\Diactoros\Response\RedirectResponse;
use Laminas\Diactoros\Response\TextResponse;
use Nearata\DirectoryListing\Event\Downloaded;
use Nearata\DirectoryListing\Event\Downloading;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class DownloadController implements RequestHandlerInterface
{
    /** @var \Illuminate\Filesystem\FilesystemAdapter */
    protected $filesystem;

    protected $settings;

    protected $events;

    public function __construct(FilesystemFactory $filesystem, SettingsRepositoryInterface $settings, Dispatcher $events)
    {
        $this->filesystem = $filesystem->disk('nearataDirectoryListing');
        $this->settings = $settings;
        $this->events = $events;
    }

    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $path = (string) Arr::get($request->getQueryParams(), 'path');

        if (!$this->settings->get('nearata-directory-listing.proxy_download')) {
            return new RedirectResponse($this->filesystem->url($path));
        }

        $actor = RequestUtil::getActor($request);

        $event = new Downloading($actor, $path);

        $this->events->dispatch($event);

        if ($actor->cannot('nearata-directory-listing.download-files') && !$event->allowed) {
            return new EmptyResponse(403);
        }

        if (is_null($path) || empty($path)) {
            return new EmptyResponse(400);
        }

        if (!$this->filesystem->exists($path)) {
            return new EmptyResponse(404);
        }

        // this fixes download not starting for big files
        $stream = new CallbackStream(function () use ($path) {
            $rs = fopen($this->filesystem->path($path), 'rb');

            while (!feof($rs)) {
                echo fread($rs, 2048);
            }

            fclose($rs);
        });

        $this->events->dispatch(new Downloaded($actor, $path));

        return (new TextResponse($stream))
            ->withHeader('Content-Type', $this->filesystem->mimeType($path))
            ->withHeader('Content-Length', $this->filesystem->size($path))
            ->withHeader('Content-Disposition', sprintf('attachment; filename=%s', basename($path)));
    }
}
