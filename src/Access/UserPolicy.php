<?php

/*
 * This file is part of oliverbates/flarum-pronouns.
 *
 * Copyright (c) 2026 Oliver Bates.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Oliverbates\Pronouns\Access;

use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\Access\AbstractPolicy;
use Flarum\User\User;

class UserPolicy extends AbstractPolicy
{
    public function __construct(
        protected SettingsRepositoryInterface $settings
    ) {
    }

    public function editPronouns(User $actor, User $user): ?string
    {
        if ($actor->isGuest() && !$user->exists) {  // new user
            return $this->allow();
	    } elseif ($actor->id === $user->id && $actor->hasPermission('oliverbates-pronouns.editOwnPronouns')) {  // own pronouns
            return $this->allow();
        } elseif ($actor->can('edit', $user)) {  // admin/moderator
            return $this->allow();
        }

        return null;
    }
}
