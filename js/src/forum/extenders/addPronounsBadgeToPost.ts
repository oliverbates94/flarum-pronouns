import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import ItemList from 'flarum/common/utils/ItemList';
import UserCard from 'flarum/forum/components/UserCard';
import Icon from 'flarum/common/components/Icon';
import PronounsBadge from '../components/PronounsBadge';

import type Mithril from 'mithril';
import type User from 'flarum/common/models/User';

export default function addPronounsFieldToPost() {
  extend('flarum/forum/components/PostUser', 'userViewItems', function (items, user, post) {
    items.add(
      'pronouns',
      PronounsBadge.component({
        user: user,
      }),
      55
    );
  });
}
