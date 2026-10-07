import app from 'flarum/admin/app';
import { extend } from 'flarum/common/extend';

export { default as extend } from './extend';

app.initializers.add('oliverbates-pronouns', () => {});
