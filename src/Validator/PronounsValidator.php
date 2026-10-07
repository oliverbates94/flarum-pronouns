<?php

/*
 * This file is part of oliverbates/flarum-pronouns.
 *
 * Copyright (c) 2026 Oliver Bates.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Oliverbates\Pronouns\Validator;

use Flarum\Foundation\AbstractValidator;
use Flarum\Locale\TranslatorInterface;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Validation\Factory;

class PronounsValidator extends AbstractValidator
{
    public function __construct(
        Factory $validator,
        TranslatorInterface $translator,
        protected SettingsRepositoryInterface $settings
    ) {
        parent::__construct($validator, $translator);
    }

    protected function getRules(): array
    {
        return [
            'pronouns' => [
                'string',
                'max:'.$this->settings->get('oliverbates-pronuns.maxLength', 32),
            ],
        ];
    }
}
