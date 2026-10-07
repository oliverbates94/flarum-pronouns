<?php

/*
 * This file is part of oliverbates/flarum-pronouns.
 *
 * Copyright (c) 2026 Oliver Bates.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Oliverbates\Pronouns;

use Flarum\Extend;
use Flarum\User\User;
use Flarum\Api\Resource;
use Oliverbates\Pronouns\Api\AddPronounsFields;
use Oliverbates\Pronouns\Access\UserPolicy;

return [
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js'),
    
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),
    
    new Extend\Locales(__DIR__.'/locale'),

	(new Extend\ApiResource(Resource\UserResource::class))
        ->fields(AddPronounsFields::class),

    (new Extend\Policy())
        ->modelPolicy(User::class, UserPolicy::class),

   (new Extend\Settings)
      ->serializeToForum('oliverbates-pronouns.maxLength', 'oliverbates-pronouns.maxLength')
      ->serializeToForum('oliverbates-pronouns.defaultPronounsColor', 'oliverbates-pronouns.defaultPronounsColor')
      ->default('oliverbates-pronouns.maxLength', 32)
      ->default('oliverbates-pronouns.defaultPronounsColor', "#123456"),
];
