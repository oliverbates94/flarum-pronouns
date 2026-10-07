import Extend from 'flarum/common/extenders';
import app from 'flarum/admin/app';

export default [
  new Extend.Admin()
    .permission(
      () => ({
        icon: 'fas fa-user-tag',
        label: app.translator.trans('oliverbates-pronouns.admin.permissions.edit-own-pronouns-label'),
        permission: 'oliverbates-pronouns.editOwnPronouns',
      }),
      'start'
    )
    .setting(() => ({
      setting: 'oliverbates-pronouns.maxLength',
      type: 'number',
      min: 1,
      max: 255,
      label: app.translator.trans('oliverbates-pronouns.admin.settings.max-pronouns-length-label'),
      help: app.translator.trans('oliverbates-pronouns.admin.settings.max-pronouns-length-help'),
    }))
    .setting(() => ({
      setting: 'oliverbates-pronouns.defaultPronounsColor',
      type: 'color-preview',
      label: app.translator.trans('oliverbates-pronouns.admin.settings.default-pronouns-color-label'),
      help: app.translator.trans('oliverbates-pronouns.admin.settings.default-pronouns-color-help'),
    })),
];
