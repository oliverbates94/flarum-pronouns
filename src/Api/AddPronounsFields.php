<?php

/*
 * This file is part of oliverbates/flarum-pronouns.
 *
 * Copyright (c) 2026 Oliver Bates.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Oliverbates\Pronouns\Api;

use Flarum\Api\Context;
use Flarum\Api\Schema;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\User;
use Oliverbates\Pronouns\Validator\PronounsValidator;
use Illuminate\Support\Str;

class AddPronounsFields
{
    public function __construct(
        protected SettingsRepositoryInterface $settings,
        protected PronounsValidator $validator
    ) {
    }

    public function __invoke(): array
    {
        return [
            Schema\Str::make('pronouns')
                ->get(fn (User $user, Context $context) => $user->pronouns)
                ->writable(fn (User $user, Context $context) => $context->getActor()->can('editPronouns', $user))
                ->set(function (User $user, string $value, Context $context) {
                    $this->validator->assertValid(['pronouns' => $value]);
                    $user->pronouns = $value;
                }),

            Schema\Str::make('pronounsColor')
                ->get(fn (User $user, Context $context) => $user->pronounsColor)
                ->writable(fn (User $user, Context $context) => $context->getActor()->can('editPronouns', $user))
				->rule('hex_color')
                ->set(function (User $user, string $value, Context $context) {
                    $user->pronounsColor = $value;
                }),

            Schema\Boolean::make('canEditPronouns')
                ->get(fn (User $user, Context $context) => $context->getActor()->can('editPronouns', $user)),
        ];
    }
}
