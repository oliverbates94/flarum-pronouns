import app from 'flarum/forum/app';
import FormModal from 'flarum/common/components/FormModal';
import Button from 'flarum/common/components/Button';
import ColorPreviewInput from 'flarum/common/components/ColorPreviewInput';
import Stream from 'flarum/common/utils/Stream';
import Form from 'flarum/common/components/Form';

/**
 * Modal that allows to change the current user pronouns
 */
export default class PronounsModal extends FormModal {
  oninit(vnode) {
    super.oninit(vnode);
    this.pronouns = Stream(app.session.user.data.attributes.pronouns);
    this.pronounsColor = Stream(app.session.user.data.attributes.pronounsColor);
  }

  className() {
    return 'PronounsModal Modal--small';
  }

  title() {
    return app.translator.trans('oliverbates-pronouns.forum.user.settings.change-pronouns');
  }

  content() {
    return (
      <div className="Modal-body">
        <Form className="Form--centered">
          <div className="Form-group">
            <input type="text" autocomplete="off" name="pronouns" className="FormControl" bidi={this.pronouns} disabled={this.loading} />
            <ColorPreviewInput
              name="pronounsColor"
              className="FormControl"
              placeholder={this.pronounsColor() ?? app.translator.trans('oliverbates-pronouns.forum.user.settings.choose-pronouns-color')}
              bidi={this.pronounsColor}
              disable={this.loading}
            />
          </div>
          <div className="Form-group Form-controls">
            <Button className="Button Button--primary Button--block" type="submit" loading={this.loading}>
              {app.translator.trans('oliverbates-pronouns.forum.user.settings.submit')}
            </Button>
          </div>
        </Form>
      </div>
    );
  }

  onsubmit(e) {
    e.preventDefault();

    if (this.pronouns() === app.session.user.pronouns && this.pronounsColor() == app.session.user.pronounsColor) {
      this.hide();
      return;
    }

    this.loading = true;

    app.session.user
      .save(
        {
          pronouns: this.pronouns(),
          pronounsColor: this.pronounsColor(),
        },
        {
          errorHandler: this.onerror.bind(this),
        }
      )
      .then(this.hide.bind(this))
      .catch(() => {
        this.loading = false;
        m.redraw();
      });
  }
}
