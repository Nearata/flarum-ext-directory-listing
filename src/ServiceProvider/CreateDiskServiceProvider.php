<?php

namespace Nearata\DirectoryListing\ServiceProvider;

use Flarum\Foundation\AbstractServiceProvider;
use Illuminate\Support\Str;

class CreateDiskServiceProvider extends AbstractServiceProvider
{
    public function register()
    {
        /** @var \Flarum\Settings\SettingsRepositoryInterface */
        $settings = $this->container->make('flarum.settings');

        $suffix = $settings->get('nearata-directory-listing.folder_suffix');

        if (is_null($suffix) || empty($suffix)) {
            $suffix = Str::random(20);
            $settings->set('nearata-directory-listing.folder_suffix', $suffix);
        }

        /** @var \Illuminate\Filesystem\Filesystem */
        $filesystem = $this->container->make('files');

        $filesystem->ensureDirectoryExists('assets/nearataDirectoryListing-' . $suffix);
    }
}
