import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import Stream from 'flarum/common/utils/Stream';

export default function addPronounsFieldToSignUp() {
  extend('flarum/forum/components/SignUpModal', 'oninit', function () {
    this.pronouns = Stream('');
  });

  extend('flarum/forum/components/SignUpModal', 'fields', function (items) {
    const pronounsLabel = app.translator.trans('oliverbates-pronouns.forum.sign_up.pronouns-placeholder');

    items.add(
      'pronouns',
      <div className="Form-group">
        <label className="label">{pronounsLabel}</label>
        <input
          className="FormControl"
          name="pronouns"
          type="text"
          placeholder={pronounsLabel}
          aria-label={pronounsLabel}
          bidi={this.pronouns}
          disabled={this.loading || this.isProvided('pronouns')}
          required="true"
        />
      </div>,
      25
    );
  });

  extend('flarum/forum/components/SignUpModal', 'submitData', function (data) {
    data.pronouns = this.pronouns();
  });
}
