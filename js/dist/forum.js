/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/forum/components/PronounsBadge.tsx"
/*!************************************************!*\
  !*** ./src/forum/components/PronounsBadge.tsx ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PronounsBadge)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Badge */ "flarum/common/components/Badge");
/* harmony import */ var flarum_common_components_Badge__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Badge__WEBPACK_IMPORTED_MODULE_2__);




/**
 * Badge with the given user pronouns and given user background color
 */
class PronounsBadge extends (flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()) {
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
      pronounsColor = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('oliverbates-pronouns.defaultPronounsColor');
    }
    return flarum_common_components_Badge__WEBPACK_IMPORTED_MODULE_2___default().component({
      // label: , TODO: we could use the 'label' to maybe let people write more about their own pronouns? Maybe it's useless
      textContent: pronouns,
      color: pronounsColor,
      type: "pronouns"
    });
  }
}
flarum.reg.add('oliverbates-pronouns', 'forum/components/PronounsBadge', PronounsBadge);

/***/ },

/***/ "./src/forum/components/PronounsModal.tsx"
/*!************************************************!*\
  !*** ./src/forum/components/PronounsModal.tsx ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PronounsModal)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_components_FormModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/FormModal */ "flarum/common/components/FormModal");
/* harmony import */ var flarum_common_components_FormModal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_FormModal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_ColorPreviewInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/ColorPreviewInput */ "flarum/common/components/ColorPreviewInput");
/* harmony import */ var flarum_common_components_ColorPreviewInput__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_ColorPreviewInput__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/Form */ "flarum/common/components/Form");
/* harmony import */ var flarum_common_components_Form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Form__WEBPACK_IMPORTED_MODULE_5__);







/**
 * Modal that allows to change the current user pronouns
 */
class PronounsModal extends (flarum_common_components_FormModal__WEBPACK_IMPORTED_MODULE_1___default()) {
  oninit(vnode) {
    super.oninit(vnode);
    this.pronouns = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_4___default()((flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().session).user.data.attributes.pronouns);
    this.pronounsColor = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_4___default()((flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().session).user.data.attributes.pronounsColor);
  }
  className() {
    return 'PronounsModal Modal--small';
  }
  title() {
    return flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('oliverbates-pronouns.forum.user.settings.change-pronouns');
  }
  content() {
    return m("div", {
      className: "Modal-body"
    }, m((flarum_common_components_Form__WEBPACK_IMPORTED_MODULE_5___default()), {
      className: "Form--centered"
    }, m("div", {
      className: "Form-group"
    }, m("input", {
      type: "text",
      autocomplete: "off",
      name: "pronouns",
      className: "FormControl",
      bidi: this.pronouns,
      disabled: this.loading
    }), m((flarum_common_components_ColorPreviewInput__WEBPACK_IMPORTED_MODULE_3___default()), {
      name: "pronounsColor",
      className: "FormControl",
      placeholder: this.pronounsColor() ?? flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('oliverbates-pronouns.forum.user.settings.choose-pronouns-color'),
      bidi: this.pronounsColor,
      disable: this.loading
    })), m("div", {
      className: "Form-group Form-controls"
    }, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
      className: "Button Button--primary Button--block",
      type: "submit",
      loading: this.loading
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('oliverbates-pronouns.forum.user.settings.submit')))));
  }
  onsubmit(e) {
    e.preventDefault();
    if (this.pronouns() === (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().session).user.pronouns && this.pronounsColor() == (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().session).user.pronounsColor) {
      this.hide();
      return;
    }
    this.loading = true;
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().session.user.save({
      pronouns: this.pronouns(),
      pronounsColor: this.pronounsColor()
    }, {
      errorHandler: this.onerror.bind(this)
    }).then(this.hide.bind(this)).catch(() => {
      this.loading = false;
      m.redraw();
    });
  }
}
flarum.reg.add('oliverbates-pronouns', 'forum/components/PronounsModal', PronounsModal);

/***/ },

/***/ "./src/forum/extenders/addPronounsBadgeToPost.ts"
/*!*******************************************************!*\
  !*** ./src/forum/extenders/addPronounsBadgeToPost.ts ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addPronounsFieldToPost)
/* harmony export */ });
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PronounsBadge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/PronounsBadge */ "./src/forum/components/PronounsBadge.tsx");


function addPronounsFieldToPost() {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)('flarum/forum/components/PostUser', 'userViewItems', function (items, user, post) {
    items.add('pronouns', _components_PronounsBadge__WEBPACK_IMPORTED_MODULE_1__["default"].component({
      user: user
    }), 55);
  });
}
flarum.reg.add('oliverbates-pronouns', 'forum/extenders/addPronounsBadgeToPost', addPronounsFieldToPost);

/***/ },

/***/ "./src/forum/extenders/addPronounsBadgeToUserPage.ts"
/*!***********************************************************!*\
  !*** ./src/forum/extenders/addPronounsBadgeToUserPage.ts ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addPronounsFieldToUserPage)
/* harmony export */ });
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_forum_components_UserCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/components/UserCard */ "flarum/forum/components/UserCard");
/* harmony import */ var flarum_forum_components_UserCard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_UserCard__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_PronounsBadge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PronounsBadge */ "./src/forum/components/PronounsBadge.tsx");



function addPronounsFieldToUserPage() {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_components_UserCard__WEBPACK_IMPORTED_MODULE_1___default().prototype), 'infoItems', function (items) {
    // @ts-expect-error
    const user = this.attrs.user;
    items.add('pronouns', _components_PronounsBadge__WEBPACK_IMPORTED_MODULE_2__["default"].component({
      user: user
    }), 55);
  });
}
flarum.reg.add('oliverbates-pronouns', 'forum/extenders/addPronounsBadgeToUserPage', addPronounsFieldToUserPage);

/***/ },

/***/ "./src/forum/extenders/addPronounsFieldToEditUserModal.tsx"
/*!*****************************************************************!*\
  !*** ./src/forum/extenders/addPronounsFieldToEditUserModal.tsx ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addPronounsFieldToEditUserModal)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_ColorPreviewInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/ColorPreviewInput */ "flarum/common/components/ColorPreviewInput");
/* harmony import */ var flarum_common_components_ColorPreviewInput__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_ColorPreviewInput__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3__);




function addPronounsFieldToEditUserModal() {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)('flarum/common/components/EditUserModal', 'oninit', function () {
    this.pronouns = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()(this.attrs.user.data.attributes.pronouns);
    this.pronounsColor = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()(this.attrs.user.data.attributes.pronounsColor);
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)('flarum/common/components/EditUserModal', 'fields', function (items) {
    items.add('pronouns', m("div", {
      className: "Form-group"
    }, m("label", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('oliverbates-pronouns.forum.user.settings.pronouns-heading')), m("input", {
      className: "FormControl",
      placeholder: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('oliverbates-pronouns.forum.user.settings.insert-pronouns'),
      value: this.pronouns(),
      bidi: this.pronouns
    }), m((flarum_common_components_ColorPreviewInput__WEBPACK_IMPORTED_MODULE_2___default()), {
      name: "pronounsColor",
      className: "FormControl",
      placeholder: this.pronounsColor(),
      value: this.pronounsColor(),
      bidi: this.pronounsColor
    })), 100);
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)('flarum/common/components/EditUserModal', 'data', function (data) {
    if (this.pronouns() !== this.attrs.user.pronouns) {
      data.pronouns = this.pronouns();
    }
    if (this.pronounsColor() !== this.attrs.user.pronounsColor) {
      data.pronounsColor = this.pronounsColor();
    }
  });
}
flarum.reg.add('oliverbates-pronouns', 'forum/extenders/addPronounsFieldToEditUserModal', addPronounsFieldToEditUserModal);

/***/ },

/***/ "./src/forum/extenders/addPronounsFieldToSignUp.tsx"
/*!**********************************************************!*\
  !*** ./src/forum/extenders/addPronounsFieldToSignUp.tsx ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addPronounsFieldToSignUp)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_2__);



function addPronounsFieldToSignUp() {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)('flarum/forum/components/SignUpModal', 'oninit', function () {
    this.pronouns = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_2___default()('');
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)('flarum/forum/components/SignUpModal', 'fields', function (items) {
    const pronounsLabel = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('oliverbates-pronouns.forum.sign_up.pronouns-placeholder');
    items.add('pronouns', m("div", {
      className: "Form-group"
    }, m("label", {
      className: "label"
    }, pronounsLabel), m("input", {
      className: "FormControl",
      name: "pronouns",
      type: "text",
      placeholder: pronounsLabel,
      "aria-label": pronounsLabel,
      bidi: this.pronouns,
      disabled: this.loading || this.isProvided('pronouns'),
      required: "true"
    })), 25);
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)('flarum/forum/components/SignUpModal', 'submitData', function (data) {
    data.pronouns = this.pronouns();
  });
}
flarum.reg.add('oliverbates-pronouns', 'forum/extenders/addPronounsFieldToSignUp', addPronounsFieldToSignUp);

/***/ },

/***/ "./src/forum/extenders/addPronounsFieldToUserSettings.tsx"
/*!****************************************************************!*\
  !*** ./src/forum/extenders/addPronounsFieldToUserSettings.tsx ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addPronounsFieldToUserSettings)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_PronounsModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PronounsModal */ "./src/forum/components/PronounsModal.tsx");




function addPronounsFieldToUserSettings() {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)('flarum/forum/components/SettingsPage', 'accountItems', function (items) {
    items.add('changePronouns', m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
      className: "Button",
      onclick: () => flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().modal.show(_components_PronounsModal__WEBPACK_IMPORTED_MODULE_3__["default"])
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('oliverbates-pronouns.forum.user.settings.change-pronouns')));
  });
}
flarum.reg.add('oliverbates-pronouns', 'forum/extenders/addPronounsFieldToUserSettings', addPronounsFieldToUserSettings);

/***/ },

/***/ "./src/forum/index.ts"
/*!****************************!*\
  !*** ./src/forum/index.ts ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _extenders_addPronounsFieldToUserSettings_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extenders/addPronounsFieldToUserSettings.tsx */ "./src/forum/extenders/addPronounsFieldToUserSettings.tsx");
/* harmony import */ var _extenders_addPronounsFieldToEditUserModal_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extenders/addPronounsFieldToEditUserModal.tsx */ "./src/forum/extenders/addPronounsFieldToEditUserModal.tsx");
/* harmony import */ var _extenders_addPronounsFieldToSignUp_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extenders/addPronounsFieldToSignUp.tsx */ "./src/forum/extenders/addPronounsFieldToSignUp.tsx");
/* harmony import */ var _extenders_addPronounsBadgeToUserPage_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./extenders/addPronounsBadgeToUserPage.ts */ "./src/forum/extenders/addPronounsBadgeToUserPage.ts");
/* harmony import */ var _extenders_addPronounsBadgeToPost_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./extenders/addPronounsBadgeToPost.ts */ "./src/forum/extenders/addPronounsBadgeToPost.ts");






flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('oliverbates-pronouns', () => {
  (0,_extenders_addPronounsFieldToUserSettings_tsx__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_extenders_addPronounsFieldToEditUserModal_tsx__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_extenders_addPronounsFieldToSignUp_tsx__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_extenders_addPronounsBadgeToUserPage_ts__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_extenders_addPronounsBadgeToPost_ts__WEBPACK_IMPORTED_MODULE_5__["default"])();
});

/***/ },

/***/ "flarum/common/Component"
/*!*************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/Component')" ***!
  \*************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/Component');

/***/ },

/***/ "flarum/common/components/Badge"
/*!********************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/Badge')" ***!
  \********************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/components/Badge');

/***/ },

/***/ "flarum/common/components/Button"
/*!*********************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/Button')" ***!
  \*********************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/components/Button');

/***/ },

/***/ "flarum/common/components/ColorPreviewInput"
/*!********************************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/ColorPreviewInput')" ***!
  \********************************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/components/ColorPreviewInput');

/***/ },

/***/ "flarum/common/components/Form"
/*!*******************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/Form')" ***!
  \*******************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/components/Form');

/***/ },

/***/ "flarum/common/components/FormModal"
/*!************************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/FormModal')" ***!
  \************************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/components/FormModal');

/***/ },

/***/ "flarum/common/extend"
/*!**********************************************************!*\
  !*** external "flarum.reg.get('core', 'common/extend')" ***!
  \**********************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/extend');

/***/ },

/***/ "flarum/common/utils/Stream"
/*!****************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/utils/Stream')" ***!
  \****************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/utils/Stream');

/***/ },

/***/ "flarum/forum/app"
/*!******************************************************!*\
  !*** external "flarum.reg.get('core', 'forum/app')" ***!
  \******************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'forum/app');

/***/ },

/***/ "flarum/forum/components/UserCard"
/*!**********************************************************************!*\
  !*** external "flarum.reg.get('core', 'forum/components/UserCard')" ***!
  \**********************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'forum/components/UserCard');

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		flarum.reg._webpack_runtimes["oliverbates-pronouns"] ||= __webpack_require__;// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./forum.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.ts");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map