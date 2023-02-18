<?php

namespace Nearata\DirectoryListing\Filesystem;

use Flarum\Foundation\Paths;
use Flarum\Http\UrlGenerator;
use Flarum\Settings\SettingsRepositoryInterface;

class DirectoryListingDisk
{
    protected $settings;

    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    public function __invoke(Paths $paths, UrlGenerator $url)
    {
        $suffix = $this->settings->get('nearata-directory-listing.folder_suffix');

        return [
            'root' => "$paths->public/assets/nearataDirectoryListing-$suffix",
            'url'  => $url->to('forum')->path("assets/nearataDirectoryListing-$suffix")
        ];
    }
}
