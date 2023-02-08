<?php

namespace Nearata\DirectoryListing\ServiceProvider;

use Flarum\Foundation\AbstractServiceProvider;

class CreateDiskServiceProvider extends AbstractServiceProvider
{
    public function boot()
    {
        /** @var \Illuminate\Filesystem\Filesystem */
        $filesystem = $this->container->make('files');

        $filesystem->ensureDirectoryExists('assets/nearataDirectoryListing');
    }
}
