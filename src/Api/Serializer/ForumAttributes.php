<?php

namespace Nearata\DirectoryListing\Api\Serializer;

use Flarum\Api\Serializer\ForumSerializer;

class ForumAttributes
{
    public function __invoke(ForumSerializer $serializer, $model, $attributes)
    {
        return [
            'canNearataDirectoryListingView' => $serializer->getActor()->can('nearata-directory-listing.view-directory-content')
        ];
    }
}
