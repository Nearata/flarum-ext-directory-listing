<?php

namespace Nearata\DirectoryListing\Api\Controller;

use Flarum\Http\RequestUtil;
use Illuminate\Contracts\Filesystem\Factory as FilesystemFactory;
use Illuminate\Support\Arr;
use Laminas\Diactoros\Response\EmptyResponse;
use Laminas\Diactoros\Response\JsonResponse;
use League\Flysystem\Util;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Server\RequestHandlerInterface;

class ListingController implements RequestHandlerInterface
{
    /** @var \Illuminate\Filesystem\FilesystemAdapter */
    protected $filesystem;

    public function __construct(FilesystemFactory $filesystem)
    {
        $this->filesystem = $filesystem->disk('nearataDirectoryListing');
    }

    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $path = (string) Arr::get($request->getParsedBody(), 'path');

        if (is_null($path)) {
            return new EmptyResponse(400);
        }

        $actor = RequestUtil::getActor($request);

        if ($actor->cannot('nearata-directory-listing.view-directory-content')) {
            return new EmptyResponse(403);
        }

        $files = collect($this->filesystem->listContents(Util::normalizePath($path)));

        $sort = $files->sortBy(function ($v, $k) {
            return $v;
        });

        return new JsonResponse([
            'data' => $sort->values()->all()
        ]);
    }
}
