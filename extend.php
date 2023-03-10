<?php

namespace Nearata\DirectoryListing;

use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Extend;
use Nearata\DirectoryListing\Api\Controller\ListingController;
use Nearata\DirectoryListing\Api\Controller\DownloadController;
use Nearata\DirectoryListing\Api\Serializer\ForumAttributes;
use Nearata\DirectoryListing\Filesystem\DirectoryListingDisk;
use Nearata\DirectoryListing\Frontend\Route\DirectoryListingRoute;
use Nearata\DirectoryListing\ServiceProvider\CreateDiskServiceProvider;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less')
        ->route('/directoryListing', 'nearata.directory-listing', DirectoryListingRoute::class),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/less/admin.less'),

    new Extend\Locales(__DIR__.'/locale'),

    (new Extend\Filesystem)
        ->disk('nearataDirectoryListing', DirectoryListingDisk::class),

    (new Extend\ServiceProvider)
        ->register(CreateDiskServiceProvider::class),

    (new Extend\Routes('api'))
        ->post('/nearata/directoryListing', 'nearata-directory-listing.index', ListingController::class)
        ->get('/nearata/directoryListing/download', 'nearata-directory-listing.download', DownloadController::class),

    (new Extend\Settings)
        ->default('nearata-directory-listing.proxy_download', false)
        ->default('nearata-directory-listing.folder_suffix', ''),

    (new Extend\ApiSerializer(ForumSerializer::class))
        ->attributes(ForumAttributes::class)
];
