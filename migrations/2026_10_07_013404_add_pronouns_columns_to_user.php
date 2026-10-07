<?php

/*
 * This file is part of oliverbates/flarum-pronouns.
 *
 * Copyright (c) 2026 Oliver Bates.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

use Flarum\Database\Migration;

return Migration::addColumns('users', [
    'pronouns' => ['string', 'length' => 255, 'nullable' => false],
    'pronounsColor' => ['string', 'length' => 20, 'nullable' => true],
]);
