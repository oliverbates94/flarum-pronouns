import { extend } from 'flarum/common/extend';
import ItemList from 'flarum/common/utils/ItemList';
import UserCard from 'flarum/forum/components/UserCard';
import PronounsBadge from '../components/PronounsBadge';

import type Mithril from 'mithril';
import type User from 'flarum/common/models/User';

export default function addPronounsFieldToUserPage() {
  extend(UserCard.prototype, 'infoItems', function (items: ItemList<Mithril.Children>) {
    // @ts-expect-error
    const user = this.attrs.user as User;

    items.add(
      'pronouns',
      PronounsBadge.component({
        user: user,
      }),
      55
    );
  });
}
