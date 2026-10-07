import app from 'flarum/forum/app';

import { extend } from 'flarum/common/extend';
import addPronounsFieldToUserSettings from './extenders/addPronounsFieldToUserSettings.tsx';
import addPronounsFieldToEditUserModal from './extenders/addPronounsFieldToEditUserModal.tsx';
import addPronounsFieldToSignUp from './extenders/addPronounsFieldToSignUp.tsx';
import addPronounsBadgeToUserPage from './extenders/addPronounsBadgeToUserPage.ts';
import addPronounsBadgeToPost from './extenders/addPronounsBadgeToPost.ts';

app.initializers.add('oliverbates-pronouns', () => {
  addPronounsFieldToUserSettings();
  addPronounsFieldToEditUserModal();
  addPronounsFieldToSignUp();

  addPronounsBadgeToUserPage();
  addPronounsBadgeToPost();
});
