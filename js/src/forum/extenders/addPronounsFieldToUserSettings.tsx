import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import Button from 'flarum/common/components/Button';
import PronounsModal from '../components/PronounsModal';

export default function addPronounsFieldToUserSettings() {
  extend('flarum/forum/components/SettingsPage', 'accountItems', function (items) {
    items.add(
      'changePronouns',
      <Button className="Button" onclick={() => app.modal.show(PronounsModal)}>
        {app.translator.trans('oliverbates-pronouns.forum.user.settings.change-pronouns')}
      </Button>
    );
  });
}
