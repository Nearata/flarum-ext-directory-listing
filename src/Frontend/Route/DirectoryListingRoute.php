<?php

namespace Nearata\DirectoryListing\Frontend\Route;

use Flarum\Frontend\Document;
use Psr\Http\Message\ServerRequestInterface;
use Symfony\Contracts\Translation\TranslatorInterface;

class DirectoryListingRoute
{
    protected $translator;

    public function __construct(TranslatorInterface $translator)
    {
        $this->translator = $translator;
    }

    public function __invoke(Document $document, ServerRequestInterface $request)
    {
        $document->title = $this->translator->trans('nearata-directory-listing.forum.page_title');
    }
}
