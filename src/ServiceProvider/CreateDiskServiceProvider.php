<?php

namespace Nearata\DirectoryListing\ServiceProvider;

use Flarum\Foundation\AbstractServiceProvider;

class CreateDiskServiceProvider extends AbstractServiceProvider
{
    public function register()
    {
        /** @var \Illuminate\Filesystem\Filesystem */
        $filesystem = $this->container->make('files');

        /** @var \Flarum\Settings\SettingsRepositoryInterface */
        $settings = $this->container->make('flarum.settings');

        $suffix = $settings->get('nearata-directory-listing.folder_suffix');

        $filesystem->ensureDirectoryExists("assets/nearataDirectoryListing$suffix");
    }
}
