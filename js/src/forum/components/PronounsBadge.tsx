import app from 'flarum/forum/app';
import Component from 'flarum/common/Component';
import Badge from 'flarum/common/components/Badge';

/**
 * Badge with the given user pronouns and given user background color
 */
export default class PronounsBadge extends Component {
  oninit(vnode) {
    super.oninit(vnode);
  }

  view() {
    const user = this.attrs.user;
    const pronouns = user.data.attributes.pronouns;
    let pronounsColor = user.data.attributes.pronounsColor;
    if (!pronouns) {
	  // for all the users that were present before the plugin was enabled and
	  // did not set their own pronouns
      return null;
    }

    if (!pronounsColor) {
	  // for all the users that were present before the plugin was enabled and
	  // did not set their own pronounsColor
      pronounsColor = app.forum.attribute('oliverbates-pronouns.defaultPronounsColor');
    }

    return Badge.component({
      // label: , TODO: we could use the 'label' to maybe let people write more about their own pronouns? Maybe it's useless
      textContent: pronouns,
      color: pronounsColor,
	  type: "pronouns"
    });
  }
}
