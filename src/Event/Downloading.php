<?php

namespace Nearata\DirectoryListing\Event;

use Flarum\User\User;

/**
 * Requires `Proxy Downloads`
 */
class Downloading
{
    /**
     * @var User
     */
    public $user;

    /**
     * @var string
     */
    public $path;

    /**
     * @var bool
     */
    public $allowed = false;

    public function __construct(User $user, string $path)
    {
        $this->user = $user;
        $this->path = $path;
    }

    public function allowed(bool $value)
    {
        $this->allowed = $value;
    }
}
