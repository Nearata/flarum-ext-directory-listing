<?php

namespace Nearata\DirectoryListing\Event;

use Flarum\User\User;

/**
 * Requires `Proxy Downloads`
 */
class Downloaded
{
    /**
     * @var User
     */
    public $user;

    /**
     * @var string
     */
    public $path;

    public function __construct(User $user, string $path)
    {
        $this->user = $user;
        $this->path = $path;
    }
}
