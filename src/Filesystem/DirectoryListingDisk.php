<?php

namespace Nearata\DirectoryListing\Filesystem;

use Flarum\Foundation\Paths;
use Flarum\Http\UrlGenerator;

class DirectoryListingDisk
{
    public function __invoke(Paths $paths, UrlGenerator $url)
    {
        return [
            'root' => "$paths->public/assets/nearataDirectoryListing",
            'url'  => $url->to('forum')->path('assets/nearataDirectoryListing')
        ];
    }
}
