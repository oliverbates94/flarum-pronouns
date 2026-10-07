import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import ColorPreviewInput from 'flarum/common/components/ColorPreviewInput';
import Stream from 'flarum/common/utils/Stream';

export default function addPronounsFieldToEditUserModal() {
  extend('flarum/common/components/EditUserModal', 'oninit', function () {
    this.pronouns = Stream(this.attrs.user.data.attributes.pronouns);
    this.pronounsColor = Stream(this.attrs.user.data.attributes.pronounsColor);
  });

  extend('flarum/common/components/EditUserModal', 'fields', function (items) {
    items.add(
      'pronouns',
      <div className="Form-group">
        <label>{app.translator.trans('oliverbates-pronouns.forum.user.settings.pronouns-heading')}</label>
        <input
          className="FormControl"
          placeholder={app.translator.trans('oliverbates-pronouns.forum.user.settings.insert-pronouns')}
          value={this.pronouns()}
          bidi={this.pronouns}
        />
        <ColorPreviewInput
          name="pronounsColor"
          className="FormControl"
          placeholder={this.pronounsColor()}
          value={this.pronounsColor()}
          bidi={this.pronounsColor}
        />
      </div>,
      100
    );
  });

  extend('flarum/common/components/EditUserModal', 'data', function (data) {
    if (this.pronouns() !== this.attrs.user.pronouns) {
      data.pronouns = this.pronouns();
    }
    if (this.pronounsColor() !== this.attrs.user.pronounsColor) {
      data.pronounsColor = this.pronounsColor();
    }
  });
}
