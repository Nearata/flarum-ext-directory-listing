<?php

namespace Nearata\DirectoryListing\Api\Controller;

use Illuminate\Contracts\Filesystem\Factory as FilesystemFactory;
use Illuminate\Support\Arr;
use Laminas\Diactoros\Response\JsonResponse;
use League\Flysystem\Util;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Symfony\Component\HttpFoundation\Exception\BadRequestException;

class DirectoryListingController implements RequestHandlerInterface
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
            throw new BadRequestException;
        }

        return new JsonResponse([
            'data' => $this->filesystem->listContents(Util::normalizePath($path))
        ]);
    }
}
