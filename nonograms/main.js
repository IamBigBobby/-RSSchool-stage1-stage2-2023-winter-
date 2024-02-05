/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/svg/cross.svg */ \"./src/assets/svg/cross.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nbutton {\n  display: block;\n  border: 2px dotted gray;\n  background-color: white;\n  padding: 5px;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: 1s;\n}\n\nbutton:hover {\n  background-color: aqua;\n}\n\n.wrapper-nonograms__table-wrapper {\n  grid-column: 1/span 2;\n  justify-self: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 500px;\n  height: 530px;\n  background-color: white;\n}\n\n.table-nonograms {\n  border-collapse: collapse;\n  table-layout: fixed;\n}\n\n.table-nonograms td,\nth {\n  border: 1px solid black;\n  width: 25px;\n  height: 25px;\n}\n\n.table-nonograms__cell {\n  position: relative;\n}\n\n.table-nonograms td:nth-child(5n+6) {\n  border-right-width: 4px;\n}\n\n.table-nonograms tr:nth-child(5n+6) td {\n  border-bottom-width: 4px;\n}\n\n.table-nonograms td:nth-child(2) {\n  border-left-width: 4px;\n}\n\n.table-nonograms tr:nth-child(2) td {\n  border-top-width: 4px;\n}\n\n.table-nonograms__cell_keys-left {\n  padding-right: 2px;\n  letter-spacing: 5px;\n  text-align: right;\n}\n\n.table-nonograms__cell_keys-top {\n  vertical-align: bottom;\n}\n\n.table-nonograms__cell_keys-top span {\n  display: block;\n  text-align: center;\n}\n\n.table-nonograms__cell_answer_visible {\n  background-color: yellow;\n  opacity: 0.5;\n}\n\n.table-nonograms_player-point {\n  background-color: black;\n}\n\n.table-nonograms_player-cross {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.wrapper-nonograms {\n  display: grid;\n  grid-template-columns: 350px 350px 100px;\n  justify-content: center;\n  align-content: center;\n  min-width: 700px;\n  border: 3px dotted black;\n}\n@media screen and (max-width: 800px) {\n  .wrapper-nonograms {\n    min-width: 480px;\n    grid-template-columns: 250px 250px;\n    border: none;\n  }\n}\n\n.nonagrams__menu {\n  grid-column: 3;\n  grid-row: 2;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 10px;\n  border-left: 1px solid black;\n}\n@media screen and (max-width: 800px) {\n  .nonagrams__menu {\n    flex-direction: row;\n    flex-wrap: wrap;\n    grid-row: 3;\n    grid-column: 1/span 2;\n    border: none;\n  }\n}\n\n.top-menu-nonograms {\n  grid-column: 1/span 2;\n  padding: 10px;\n  border-bottom: 1px solid black;\n}\n@media screen and (max-width: 800px) {\n  .top-menu-nonograms {\n    grid-column: 1/span 1;\n  }\n}\n\n.top-menu-nonograms__lvl-block {\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n  margin-bottom: 5px;\n}\n@media screen and (max-width: 800px) {\n  .top-menu-nonograms__lvl-block {\n    flex-wrap: wrap;\n  }\n}\n\n.top-menu-nonograms__choose-lvl {\n  display: flex;\n  justify-content: center;\n  gap: 5px;\n}\n\n.top-menu-nonograms__game-info {\n  padding: 10px;\n  text-align: center;\n}\n\n.nonograms__timer {\n  text-align: center;\n  padding: 20px;\n  border-bottom: 1px solid black;\n  border-left: 1px solid black;\n}\n@media screen and (max-width: 800px) {\n  .nonograms__timer {\n    padding: 55px;\n  }\n}\n\n.pop-up-win__background {\n  position: absolute;\n  width: 100%;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.pop-up-win__content {\n  width: 300px;\n  height: 100px;\n  background-color: white;\n  border: 1px dotted black;\n  border-radius: 10px;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n\n.pop-up-win__content p {\n  text-align: center;\n}\n\n.pop-up-win__buttons {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 80%;\n}\n\nbutton {\n  display: block;\n  border: 2px dotted gray;\n  background-color: white;\n  padding: 5px;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: 1s;\n}\n\nbutton:hover {\n  background-color: aqua;\n}\n\n.button_active {\n  background-color: aqua;\n}\n\n.button_disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.score__table {\n  border-collapse: collapse;\n  width: 300px;\n  height: auto;\n}\n\n.score__table th,\n.score__table td {\n  border: 1px solid #dddddd;\n  padding: 8px;\n  text-align: left;\n  background-color: white;\n}\n\n.score__table th {\n  background-color: #f2f2f2;\n}\n\n.pop-up-score__background {\n  position: absolute;\n  width: 100%;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/assets/sounds/glass-knock.mp3":
/*!*******************************************!*\
  !*** ./src/assets/sounds/glass-knock.mp3 ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/sounds/glass-knock.mp3\");\n\n//# sourceURL=webpack:///./src/assets/sounds/glass-knock.mp3?");

/***/ }),

/***/ "./src/assets/sounds/point.mp3":
/*!*************************************!*\
  !*** ./src/assets/sounds/point.mp3 ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/sounds/point.mp3\");\n\n//# sourceURL=webpack:///./src/assets/sounds/point.mp3?");

/***/ }),

/***/ "./src/assets/sounds/wow.mp3":
/*!***********************************!*\
  !*** ./src/assets/sounds/wow.mp3 ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/sounds/wow.mp3\");\n\n//# sourceURL=webpack:///./src/assets/sounds/wow.mp3?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/data/dataMatrix.js":
/*!********************************!*\
  !*** ./src/data/dataMatrix.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   data: () => (/* binding */ data)\n/* harmony export */ });\nconst data = {\n  easy: [\n    {\n      name: \"heart\",\n      matrix: [\n        [0, 1, 0, 1, 0],\n        [1, 0, 1, 0, 1],\n        [1, 0, 0, 0, 1],\n        [0, 1, 0, 1, 0],\n        [0, 0, 1, 0, 0],\n      ],\n    },\n    {\n      name: \"human\",\n      matrix: [\n        [0, 0, 1, 0, 0],\n        [0, 1, 1, 1, 0],\n        [1, 0, 1, 0, 1],\n        [0, 1, 0, 1, 0],\n        [0, 1, 0, 1, 0],\n      ],\n    },\n    {\n      name: \"fish\",\n      matrix: [\n        [0, 1, 0, 0, 0],\n        [1, 1, 1, 1, 0],\n        [0, 1, 0, 1, 0],\n        [0, 1, 1, 1, 0],\n        [0, 0, 0, 0, 0],\n      ],\n    },\n    {\n      name: \"turtle\",\n      matrix: [\n        [1, 0, 1, 0, 1],\n        [0, 1, 1, 1, 0],\n        [0, 1, 1, 1, 0],\n        [0, 1, 1, 1, 0],\n        [1, 0, 0, 0, 1],\n      ],\n    },\n    {\n      name: \"giraffe\",\n      matrix: [\n        [0, 0, 1, 1, 0],\n        [0, 0, 1, 0, 0],\n        [0, 0, 1, 0, 0],\n        [1, 1, 1, 0, 0],\n        [1, 0, 1, 0, 0],\n      ],\n    },\n  ],\n  medium: [\n    {\n      name: \"RS School\",\n      matrix: [\n        [1, 1, 1, 1, 1, 0, 1, 1, 1, 1],\n        [1, 0, 0, 0, 1, 0, 1, 0, 0, 0],\n        [1, 0, 0, 0, 1, 0, 1, 0, 0, 0],\n        [1, 0, 0, 0, 1, 0, 1, 0, 0, 0],\n        [1, 0, 0, 1, 1, 0, 1, 1, 1, 1],\n        [1, 0, 1, 1, 0, 0, 0, 0, 0, 1],\n        [1, 0, 1, 0, 0, 0, 0, 0, 0, 1],\n        [1, 0, 0, 1, 0, 0, 0, 0, 0, 1],\n        [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],\n        [1, 0, 0, 0, 1, 1, 1, 1, 1, 1],\n      ],\n    },\n    {\n      name: \"butterfly\",\n      matrix: [\n        [0, 1, 0, 1, 0, 0, 1, 0, 1, 0],\n        [1, 0, 1, 0, 1, 1, 0, 1, 0, 1],\n        [1, 0, 0, 1, 1, 1, 1, 0, 0, 1],\n        [1, 0, 0, 0, 1, 1, 0, 0, 0, 1],\n        [1, 0, 0, 0, 1, 1, 0, 0, 0, 1],\n        [1, 0, 0, 0, 1, 1, 0, 0, 0, 1],\n        [1, 0, 0, 0, 1, 1, 0, 0, 0, 1],\n        [1, 0, 0, 1, 0, 0, 1, 0, 0, 1],\n        [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],\n        [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],\n      ],\n    },\n    {\n      name: \"snake\",\n      matrix: [\n        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],\n        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],\n        [1, 1, 1, 1, 1, 1, 1, 1, 0, 1],\n        [1, 0, 0, 0, 0, 0, 0, 1, 0, 1],\n        [1, 0, 1, 1, 1, 1, 0, 1, 0, 1],\n        [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],\n        [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],\n        [1, 0, 1, 1, 1, 1, 1, 1, 0, 1],\n        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],\n        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],\n      ],\n    },\n    {\n      name: \"yin yang\",\n      matrix: [\n        [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],\n        [0, 0, 1, 1, 1, 0, 0, 1, 0, 0],\n        [0, 1, 1, 1, 0, 0, 0, 0, 1, 0],\n        [1, 1, 1, 1, 0, 0, 1, 0, 0, 1],\n        [1, 1, 1, 1, 1, 0, 0, 0, 0, 1],\n        [1, 1, 1, 1, 1, 1, 0, 0, 0, 1],\n        [1, 1, 1, 0, 1, 1, 0, 0, 0, 1],\n        [0, 1, 1, 1, 1, 1, 1, 0, 1, 0],\n        [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],\n        [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],\n      ],\n    },\n    {\n      name: \"house\",\n      matrix: [\n        [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],\n        [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],\n        [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],\n        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],\n        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],\n        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],\n        [1, 0, 1, 0, 0, 0, 0, 0, 0, 1],\n        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],\n        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],\n        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],\n      ],\n    },\n  ],\n  hard: [\n    {\n      name: \"rabbit\",\n      matrix: [\n        [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],\n        [0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0],\n        [0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0],\n        [0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0],\n        [0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0],\n        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],\n        [1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],\n        [1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],\n        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],\n        [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],\n        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],\n        [1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],\n        [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],\n        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],\n        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],\n      ],\n    },\n    {\n      name: \"cat\",\n      matrix: [\n        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],\n        [0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],\n        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],\n        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],\n        [0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0],\n        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],\n        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],\n        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],\n        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1],\n        [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],\n        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1],\n        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0],\n        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],\n        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],\n        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],\n      ],\n    },\n    {\n      name: \"bear\",\n      matrix: [\n        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],\n        [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],\n        [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],\n        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],\n        [1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1],\n        [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],\n        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],\n        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],\n        [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],\n        [1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1],\n        [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],\n        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],\n        [0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0],\n        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],\n        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],\n      ],\n    },\n    {\n      name: \"dinosaur\",\n      matrix: [\n        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],\n        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],\n        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1],\n        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],\n        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],\n        [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],\n        [1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],\n        [1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],\n        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],\n        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],\n        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],\n        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],\n        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0],\n        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],\n        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0],\n      ],\n    },\n    {\n      name: \"pikachu meme\",\n      matrix: [\n        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],\n        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],\n        [1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1],\n        [1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0],\n        [0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0],\n        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],\n        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],\n        [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0],\n        [1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1],\n        [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],\n        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],\n        [1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1],\n        [0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0],\n        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],\n        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],\n      ],\n    },\n  ],\n};\n\n\n//# sourceURL=webpack:///./src/data/dataMatrix.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_dataMatrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/dataMatrix */ \"./src/data/dataMatrix.js\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _utils_createTopMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/createTopMenu */ \"./src/utils/createTopMenu.js\");\n/* harmony import */ var _utils_playerLogic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/playerLogic */ \"./src/utils/playerLogic.js\");\nconst { createWrapper, createGame } = __webpack_require__(/*! ./utils/createField */ \"./src/utils/createField.js\");\n\n\n\n\n\nconst firstMatrix = _data_dataMatrix__WEBPACK_IMPORTED_MODULE_0__.data.easy[0].matrix;\n// const firstName = data.easy[0].name;\n\ncreateWrapper();\ncreateGame(firstMatrix);\n(0,_utils_createTopMenu__WEBPACK_IMPORTED_MODULE_2__.createTopMenu)();\n\n(0,_utils_playerLogic__WEBPACK_IMPORTED_MODULE_3__.playerLogic)();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/utils/appearingPopUpWin.js":
/*!****************************************!*\
  !*** ./src/utils/appearingPopUpWin.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   popUpWin: () => (/* binding */ popUpWin)\n/* harmony export */ });\n/* harmony import */ var _createRandomGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createRandomGame */ \"./src/utils/createRandomGame.js\");\n/* harmony import */ var _playerLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playerLogic */ \"./src/utils/playerLogic.js\");\n/* harmony import */ var _startNewGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startNewGame */ \"./src/utils/startNewGame.js\");\n\n\n\n\n\n\nfunction popUpWin() {\n  const createPopUpWinBackground = document.createElement(\"div\");\n  createPopUpWinBackground.classList = \"pop-up-win__background\";\n\n  const seconds = getWinTime();\n\n  createPopUpWinBackground.innerHTML = `\n  <div class=\"pop-up-win__content\">\n  <p>Great! You have solved the nonogram in ${seconds} seconds!</p>\n  <div class=\"pop-up-win__buttons\">\n  <button class=\"pop-up-win__button-random\">random game</button>\n  <button class=\"pop-up-win__button-new-game\">reset game</button>\n  </div>\n  </div>\n  `;\n  document.body.prepend(createPopUpWinBackground);\n\n  const popUpWinBackground = document.querySelector(\".pop-up-win__background\");\n  popUpWinBackground.addEventListener(\"mousedown\", closePopUp);\n\n  const theme = document.querySelector(\n    \".nonograms__menu__toggle-theme\"\n  ).textContent;\n  const popUpContent = document.querySelector(\".pop-up-win__content\");\n\n  if (theme === \"theme: dark\") {\n    popUpContent.style.color = \"black\";\n  }\n\n  const randomButton = document.querySelector(\".pop-up-win__button-random\");\n  randomButton.addEventListener(\"mousedown\", closePopUp);\n  randomButton.addEventListener(\"mousedown\", _createRandomGame__WEBPACK_IMPORTED_MODULE_0__.createRandomGame);\n\n  const newGameButton = document.querySelector(\".pop-up-win__button-new-game\");\n  newGameButton.addEventListener(\"mousedown\", closePopUp);\n}\n\nfunction getWinTime() {\n  const winTime = document.querySelector(\".nonograms__timer\").textContent;\n\n  const minute = Number(winTime.slice(0, 2));\n  const seconds = Number(winTime.slice(3, winTime.length));\n\n  const countingSecond = minute * 60 + seconds;\n  return countingSecond;\n}\n\nfunction closePopUp(event) {\n  if (\n    event.target.classList.contains(\"pop-up-win__background\") ||\n    event.target.classList.contains(\"pop-up-win__button-random\") ||\n    event.target.classList.contains(\"pop-up-win__button-new-game\") ||\n    event.target.classList.contains(\"pop-up-win__button-close\")\n  ) {\n    const popUp = document.querySelector(\".pop-up-win__background\");\n    popUp.remove();\n\n    (0,_startNewGame__WEBPACK_IMPORTED_MODULE_2__.startNewGame)();\n    (0,_playerLogic__WEBPACK_IMPORTED_MODULE_1__.playerLogic)();\n  }\n}\n\n\n//# sourceURL=webpack:///./src/utils/appearingPopUpWin.js?");

/***/ }),

/***/ "./src/utils/appearingScoreBoard.js":
/*!******************************************!*\
  !*** ./src/utils/appearingScoreBoard.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showScoreboard: () => (/* binding */ showScoreboard)\n/* harmony export */ });\n/* harmony import */ var _getWinGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWinGame */ \"./src/utils/getWinGame.js\");\n\n\n\n\nfunction showScoreboard() {\n  const winArr = (0,_getWinGame__WEBPACK_IMPORTED_MODULE_0__.sortWinGame)();\n\n  const createPopUpScoreboardBackground = document.createElement(\"div\");\n  createPopUpScoreboardBackground.classList = \"pop-up-score__background\";\n\n  createPopUpScoreboardBackground.innerHTML = `\n  <div class=\"pop-up-score__content\">\n  <table class=\"score__table\">\n    <thead>\n        <tr>\n            <th>position</th>\n            <th>lvl</th>\n            <th>difficulty</th>\n            <th>time</th>\n        </tr>\n    </thead>\n    <tbody class=\"score__table-info\">\n    </tbody>\n</table>\n  </div>\n  `;\n\n  document.body.prepend(createPopUpScoreboardBackground);\n\n  const theme = document.querySelector(\n    \".nonograms__menu__toggle-theme\"\n  ).textContent;\n  const popUpContent = document.querySelector(\".pop-up-score__content\");\n\n  if (theme === \"theme: dark\") {\n    popUpContent.style.color = \"black\";\n  }\n\n  const tableInfo = document.querySelector(\".score__table-info\");\n\n  for (let i = 0; i < winArr.length; i++) {\n    const stringCreate = document.createElement(\"tr\");\n    stringCreate.className = `score__win-result-${i + 1}`;\n    tableInfo.append(stringCreate);\n\n    const string = document.querySelector(`.score__win-result-${i + 1}`);\n\n    const positionCellCreate = document.createElement(\"td\");\n    positionCellCreate.className = \"score__posotin\";\n    positionCellCreate.innerHTML = `${i + 1}`;\n    string.append(positionCellCreate);\n\n    const lvlCellCreate = document.createElement(\"td\");\n    lvlCellCreate.className = \"score__lvl\";\n    lvlCellCreate.innerHTML = `${winArr[i].lvl}`;\n    string.append(lvlCellCreate);\n\n    const difficultyCellCreate = document.createElement(\"td\");\n    difficultyCellCreate.className = \"score__difficulty\";\n    difficultyCellCreate.innerHTML = `${winArr[i].difficulty}`;\n    string.append(difficultyCellCreate);\n\n    const timeCellCreate = document.createElement(\"td\");\n    timeCellCreate.className = \"score__time\";\n\n    const winTime = winArr[i].time;\n\n    const minutes = Math.floor((winTime % 3600) / 60);\n    const seconds = winTime % 60;\n\n    const strMinutes = minutes.toString().padStart(2, \"0\");\n    const strSeconds = seconds.toString().padStart(2, \"0\");\n\n    timeCellCreate.innerHTML = `${strMinutes}:${strSeconds}`;\n    string.append(timeCellCreate);\n  }\n\n  const popUpScoreboardBackground = document.querySelector(\n    \".pop-up-score__background\"\n  );\n  popUpScoreboardBackground.addEventListener(\"mousedown\", closeScorePopUp);\n}\n\nfunction closeScorePopUp(event) {\n  if (event.target.classList.contains(\"pop-up-score__background\")) {\n    const popUp = document.querySelector(\".pop-up-score__background\");\n    popUp.remove();\n  }\n}\n\n\n//# sourceURL=webpack:///./src/utils/appearingScoreBoard.js?");

/***/ }),

/***/ "./src/utils/changeTheme.js":
/*!**********************************!*\
  !*** ./src/utils/changeTheme.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toggleTheme: () => (/* binding */ toggleTheme)\n/* harmony export */ });\n\n\nfunction toggleTheme(event) {\n  console.log(event.target.textContent);\n  const currentTheme = event.target.textContent;\n  const tableWrapper = document.querySelector(\n    \".wrapper-nonograms__table-wrapper\"\n  );\n\n  if (currentTheme === \"theme: light\") {\n    document.body.style.backgroundColor = \"grey\";\n    document.body.style.color = \"white\";\n    tableWrapper.style.backgroundColor = \"grey\";\n\n    event.target.innerHTML = \"theme: dark\";\n  } else {\n    document.body.style.backgroundColor = \"white\";\n    document.body.style.color = \"black\";\n    tableWrapper.style.backgroundColor = \"white\";\n\n    event.target.innerHTML = \"theme: light\";\n  }\n}\n\n\n//# sourceURL=webpack:///./src/utils/changeTheme.js?");

/***/ }),

/***/ "./src/utils/chooseDifficulty.js":
/*!***************************************!*\
  !*** ./src/utils/chooseDifficulty.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   chooseDifficulty: () => (/* binding */ chooseDifficulty)\n/* harmony export */ });\n/* harmony import */ var _data_dataMatrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/dataMatrix */ \"./src/data/dataMatrix.js\");\n/* harmony import */ var _generateNewGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateNewGame */ \"./src/utils/generateNewGame.js\");\n/* harmony import */ var _getInfoAboutGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getInfoAboutGame */ \"./src/utils/getInfoAboutGame.js\");\n\n\n\n\n\nfunction chooseDifficulty(event) {\n  const nonogramsChooseLvl = document.querySelector(\n    \".top-menu-nonograms__choose-lvl\"\n  );\n\n  if (event === undefined) {\n    for (let i = 0; i < _data_dataMatrix__WEBPACK_IMPORTED_MODULE_0__.data.easy.length; i++) {\n      const lvlButtonCreate = document.createElement(\"button\");\n      lvlButtonCreate.className = \"top-menu-nonograms__easy-choose-button\";\n      lvlButtonCreate.innerHTML = `${_data_dataMatrix__WEBPACK_IMPORTED_MODULE_0__.data.easy[i].name}`;\n      nonogramsChooseLvl.append(lvlButtonCreate);\n\n      const lvlButton = document.querySelectorAll(\n        \".top-menu-nonograms__easy-choose-button\"\n      );\n\n      lvlButton.forEach((button) => {\n        button.addEventListener(\"mousedown\", _generateNewGame__WEBPACK_IMPORTED_MODULE_1__.generateNewGame);\n        button.addEventListener(\"mousedown\", _getInfoAboutGame__WEBPACK_IMPORTED_MODULE_2__.showInfoAboutGame);\n      });\n    }\n  } else {\n    (0,_getInfoAboutGame__WEBPACK_IMPORTED_MODULE_2__.getDifficulty)(event);\n\n    const difficultyClass = event.target.className;\n    const difficulty = difficultyClass\n      .replace(\"top-menu-nonograms__\", \"\")\n      .replace(\"-lvl\", \"\");\n\n    while (nonogramsChooseLvl.firstChild) {\n      nonogramsChooseLvl.removeChild(nonogramsChooseLvl.firstChild);\n    }\n\n    for (let i = 0; i < _data_dataMatrix__WEBPACK_IMPORTED_MODULE_0__.data[difficulty].length; i++) {\n      const lvlButtonCreate = document.createElement(\"button\");\n      lvlButtonCreate.className = `top-menu-nonograms__${difficulty}-choose-button`;\n      lvlButtonCreate.innerHTML = `${_data_dataMatrix__WEBPACK_IMPORTED_MODULE_0__.data[difficulty][i].name}`;\n      nonogramsChooseLvl.append(lvlButtonCreate);\n\n      const lvlButton = document.querySelectorAll(\n        `.top-menu-nonograms__${difficulty}-choose-button`\n      );\n      lvlButton.forEach((button) => {\n        button.addEventListener(\"mousedown\", _generateNewGame__WEBPACK_IMPORTED_MODULE_1__.generateNewGame);\n        button.addEventListener(\"mousedown\", _getInfoAboutGame__WEBPACK_IMPORTED_MODULE_2__.showInfoAboutGame);\n      });\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/utils/chooseDifficulty.js?");

/***/ }),

/***/ "./src/utils/countingAnswersCells.js":
/*!*******************************************!*\
  !*** ./src/utils/countingAnswersCells.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   countingTrueCells: () => (/* binding */ countingTrueCells)\n/* harmony export */ });\n\nfunction countingTrueCells() {\n  const gameCells = document.querySelectorAll(\".table-nonograms__cell\");\n  let countTrueCells = 0;\n  gameCells.forEach((cell) => {\n    if (cell.classList.contains(\"table-nonograms__cell_answer\")) {\n      countTrueCells++;\n    }\n  });\n  return countTrueCells;\n}\n\n\n//# sourceURL=webpack:///./src/utils/countingAnswersCells.js?");

/***/ }),

/***/ "./src/utils/createField.js":
/*!**********************************!*\
  !*** ./src/utils/createField.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createGame: () => (/* binding */ createGame),\n/* harmony export */   createWrapper: () => (/* binding */ createWrapper)\n/* harmony export */ });\n/* harmony import */ var _appearingScoreBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appearingScoreBoard */ \"./src/utils/appearingScoreBoard.js\");\n/* harmony import */ var _createRandomGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createRandomGame */ \"./src/utils/createRandomGame.js\");\n/* harmony import */ var _loadGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadGame */ \"./src/utils/loadGame.js\");\n/* harmony import */ var _openAnswer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./openAnswer */ \"./src/utils/openAnswer.js\");\n/* harmony import */ var _saveGame__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./saveGame */ \"./src/utils/saveGame.js\");\n/* harmony import */ var _startNewGame__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./startNewGame */ \"./src/utils/startNewGame.js\");\n/* harmony import */ var _soundSwitch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./soundSwitch */ \"./src/utils/soundSwitch.js\");\n/* harmony import */ var _changeTheme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./changeTheme */ \"./src/utils/changeTheme.js\");\n\n\n\n\n\n\n\n\n\n\n\nfunction createWrapper() {\n  const wrapperCreate = document.createElement(\"div\");\n  wrapperCreate.className = \"wrapper-nonograms\";\n  document.body.prepend(wrapperCreate);\n\n  const wrapper = document.querySelector(\".wrapper-nonograms\");\n\n  const wrapperNonogramCreate = document.createElement(\"div\");\n  wrapperNonogramCreate.className = \"wrapper-nonograms__table-wrapper\";\n  wrapper.prepend(wrapperNonogramCreate);\n\n  const menuCreate = document.createElement(\"div\");\n  menuCreate.className = \"nonagrams__menu\";\n  wrapper.prepend(menuCreate);\n\n  const menu = document.querySelector(\".nonagrams__menu\");\n\n  const newGameButtonCreate = document.createElement(\"button\");\n  newGameButtonCreate.className = \"nonagrams__menu__new-game\";\n  newGameButtonCreate.innerHTML = \"reset game\";\n  menu.prepend(newGameButtonCreate);\n\n  const randomGameButtonCreate = document.createElement(\"button\");\n  randomGameButtonCreate.className = \"nonagrams__menu__random-game\";\n  randomGameButtonCreate.innerHTML = \"random game\";\n  menu.prepend(randomGameButtonCreate);\n\n  const helpGameButtonCreate = document.createElement(\"button\");\n  helpGameButtonCreate.className = \"nonagrams__menu__help\";\n  helpGameButtonCreate.innerHTML = \"solution: off\";\n  menu.prepend(helpGameButtonCreate);\n\n  const scoreGameButtonCreate = document.createElement(\"button\");\n  scoreGameButtonCreate.className = \"nonagrams__menu__score\";\n  scoreGameButtonCreate.innerHTML = \"score board top 5\";\n  menu.prepend(scoreGameButtonCreate);\n\n  const soundButtonCreate = document.createElement(\"button\");\n  soundButtonCreate.classList = \"nonograms__menu__sound\";\n  soundButtonCreate.innerHTML = \"sound: off\";\n  menu.prepend(soundButtonCreate);\n\n  const saveGameButtonCreate = document.createElement(\"button\");\n  saveGameButtonCreate.className = \"nonograms__menu__save\";\n  saveGameButtonCreate.innerHTML = \"save game\";\n  menu.append(saveGameButtonCreate);\n\n  const toggleThemeButtonCreate = document.createElement(\"button\");\n  toggleThemeButtonCreate.classList = \"nonograms__menu__toggle-theme\";\n  toggleThemeButtonCreate.innerHTML = \"theme: light\";\n  menu.prepend(toggleThemeButtonCreate);\n\n  const loadGameButtonCreate = document.createElement(\"button\");\n  if (!localStorage.getItem(\"IamBigBobby_gameInfo\")) {\n    loadGameButtonCreate.className = \"nonograms__menu__load button_disabled\";\n  } else {\n    loadGameButtonCreate.className = \"nonograms__menu__load\";\n  }\n  loadGameButtonCreate.innerHTML = \"continue last game\";\n  menu.append(loadGameButtonCreate);\n\n  const timer = document.createElement(\"div\");\n  timer.classList = \"nonograms__timer\";\n  timer.innerHTML = \"00:00\";\n  wrapper.prepend(timer);\n\n  const newGameButton = document.querySelector(\".nonagrams__menu__new-game\");\n  const randomGameButton = document.querySelector(\n    \".nonagrams__menu__random-game\"\n  );\n  const helpGameButton = document.querySelector(\".nonagrams__menu__help\");\n  const scoreGameButton = document.querySelector(\".nonagrams__menu__score\");\n  const saveGameButton = document.querySelector(\".nonograms__menu__save\");\n  const loadGameButton = document.querySelector(\".nonograms__menu__load\");\n  const soundButton = document.querySelector(\".nonograms__menu__sound\");\n  const toggleThemeButton = document.querySelector(\n    \".nonograms__menu__toggle-theme\"\n  );\n\n  helpGameButton.addEventListener(\"mousedown\", _openAnswer__WEBPACK_IMPORTED_MODULE_3__.openAnswer);\n  newGameButton.addEventListener(\"mousedown\", _startNewGame__WEBPACK_IMPORTED_MODULE_5__.startNewGame);\n  randomGameButton.addEventListener(\"mousedown\", _createRandomGame__WEBPACK_IMPORTED_MODULE_1__.createRandomGame);\n  saveGameButton.addEventListener(\"mousedown\", _saveGame__WEBPACK_IMPORTED_MODULE_4__.saveGame);\n  scoreGameButton.addEventListener(\"mousedown\", _appearingScoreBoard__WEBPACK_IMPORTED_MODULE_0__.showScoreboard);\n  soundButton.addEventListener(\"mousedown\", _soundSwitch__WEBPACK_IMPORTED_MODULE_6__.switchSound);\n  toggleThemeButton.addEventListener(\"mousedown\", _changeTheme__WEBPACK_IMPORTED_MODULE_7__.toggleTheme);\n\n  if (localStorage.getItem(\"IamBigBobby_gameInfo\")) {\n    loadGameButton.addEventListener(\"mousedown\", _loadGame__WEBPACK_IMPORTED_MODULE_2__.loadGame);\n  }\n}\n\nfunction createGame(arr) {\n  const table = document.createElement(\"table\");\n  table.className = \"table-nonograms\";\n\n  for (let i = 0; i < arr.length; i++) {\n    const row = document.createElement(\"tr\");\n\n    for (let j = 0; j < arr.length; j++) {\n      const cell = document.createElement(\"td\");\n      cell.className = \"table-nonograms__cell\";\n      if (arr[i][j] === 1) {\n        cell.className = \"table-nonograms__cell table-nonograms__cell_answer\";\n      }\n      row.appendChild(cell);\n    }\n\n    table.appendChild(row);\n  }\n  const wrapperNonogram = document.querySelector(\n    \".wrapper-nonograms__table-wrapper\"\n  );\n  wrapperNonogram.append(table);\n\n  countingKeys();\n}\n\nfunction countingKeys() {\n  const table = document.querySelector(\".table-nonograms\");\n\n  // horizontal counting\n  for (let i = 0; i < table.rows.length; i++) {\n    const currentRow = table.rows[i];\n    const newCell = document.createElement(\"td\");\n    newCell.className = \"table-nonograms__cell_keys-left\";\n    currentRow.insertBefore(newCell, currentRow.firstChild);\n\n    let keys = 0;\n\n    for (let j = 0; j < table.rows[i].cells.length; j++) {\n      const cell = table.rows[i].cells[j];\n      const nextCell = table.rows[i].cells[j + 1];\n      if (\n        cell.classList.contains(\"table-nonograms__cell\") &&\n        cell.classList.contains(\"table-nonograms__cell_answer\")\n      ) {\n        keys++;\n      }\n\n      if (\n        nextCell === undefined ||\n        !(\n          nextCell.classList.contains(\"table-nonograms__cell\") &&\n          nextCell.classList.contains(\"table-nonograms__cell_answer\")\n        )\n      ) {\n        if (keys !== 0) {\n          newCell.innerHTML += `|${keys}`;\n          keys = 0;\n        }\n      }\n    }\n\n    if (newCell.textContent === \"\") {\n      newCell.innerHTML = 0;\n    }\n  }\n\n  // vertical counting\n  const newRow = document.createElement(\"tr\");\n\n  for (let i = 0; i < table.rows[0].cells.length; i++) {\n    const newCell = document.createElement(\"td\");\n    newCell.className = \"table-nonograms__cell_keys-top\";\n\n    newRow.appendChild(newCell);\n\n    let keys = 0;\n\n    for (let j = 0; j < table.rows.length; j++) {\n      const cell = table.rows[j].cells[i];\n\n      if (\n        cell.classList.contains(\"table-nonograms__cell\") &&\n        cell.classList.contains(\"table-nonograms__cell_answer\")\n      ) {\n        keys++;\n        if (j === table.rows.length - 1) {\n          if (keys !== 0) {\n            const keySpan = document.createElement(\"span\");\n            keySpan.textContent = keys;\n            newCell.appendChild(keySpan);\n          }\n        }\n      } else {\n        if (keys !== 0) {\n          const keySpan = document.createElement(\"span\");\n          keySpan.textContent = keys;\n          newCell.appendChild(keySpan);\n          keys = 0;\n        }\n      }\n    }\n    if (newCell.textContent === \"\" && i !== 0) {\n      const keySpan = document.createElement(\"span\");\n      keySpan.textContent = 0;\n      newCell.appendChild(keySpan);\n    }\n  }\n  table.insertBefore(newRow, table.firstChild);\n}\n\n\n//# sourceURL=webpack:///./src/utils/createField.js?");

/***/ }),

/***/ "./src/utils/createRandomGame.js":
/*!***************************************!*\
  !*** ./src/utils/createRandomGame.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createRandomGame: () => (/* binding */ createRandomGame)\n/* harmony export */ });\n/* harmony import */ var _data_dataMatrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/dataMatrix */ \"./src/data/dataMatrix.js\");\n/* harmony import */ var _createField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createField */ \"./src/utils/createField.js\");\n/* harmony import */ var _playerLogic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playerLogic */ \"./src/utils/playerLogic.js\");\n/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timer */ \"./src/utils/timer.js\");\n\n\n\n\n\n\nfunction createRandomGame() {\n  const arrDifficulty = [];\n\n  for (let difficulty in _data_dataMatrix__WEBPACK_IMPORTED_MODULE_0__.data) {\n    arrDifficulty.push(difficulty);\n  }\n\n  const randomIndexArrDifficulty = Math.floor(\n    Math.random() * arrDifficulty.length\n  );\n\n  const difficultyRandomLenght =\n    _data_dataMatrix__WEBPACK_IMPORTED_MODULE_0__.data[arrDifficulty[randomIndexArrDifficulty]].length - 1;\n\n  const randomDifficultyLengthIndex = Math.floor(\n    Math.random() * difficultyRandomLenght\n  );\n\n  // console.log(arrDifficulty[randomIndexArrDifficulty]);\n  // console.log(data[arrDifficulty[randomIndexArrDifficulty]]);\n  // console.log(difficultyRandomLenght);\n  // console.log(randomDifficultyLengthIndex);\n\n  (0,_timer__WEBPACK_IMPORTED_MODULE_3__.stopTimer)();\n\n  const randomArr =\n    _data_dataMatrix__WEBPACK_IMPORTED_MODULE_0__.data[arrDifficulty[randomIndexArrDifficulty]][randomDifficultyLengthIndex]\n      .matrix;\n  const randomName =\n    _data_dataMatrix__WEBPACK_IMPORTED_MODULE_0__.data[arrDifficulty[randomIndexArrDifficulty]][randomDifficultyLengthIndex]\n      .name;\n  const randomDifficulty = arrDifficulty[randomIndexArrDifficulty];\n\n  // console.log(randomArr, randomName, randomDifficulty);\n\n  const gameInfo = document.querySelector(\".top-menu-nonograms__game-info\");\n\n  gameInfo.innerHTML = `Difficulty: ${randomDifficulty} / Level: ${randomName}`;\n\n  const table = document.querySelector(\".table-nonograms\");\n  table.remove();\n\n  (0,_createField__WEBPACK_IMPORTED_MODULE_1__.createGame)(randomArr);\n  (0,_playerLogic__WEBPACK_IMPORTED_MODULE_2__.playerLogic)();\n}\n\n\n//# sourceURL=webpack:///./src/utils/createRandomGame.js?");

/***/ }),

/***/ "./src/utils/createTopMenu.js":
/*!************************************!*\
  !*** ./src/utils/createTopMenu.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTopMenu: () => (/* binding */ createTopMenu)\n/* harmony export */ });\n/* harmony import */ var _chooseDifficulty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chooseDifficulty */ \"./src/utils/chooseDifficulty.js\");\n\n\n\nfunction createTopMenu() {\n  const nameNonogramCreate = document.createElement(\"div\");\n  nameNonogramCreate.className = \"top-menu-nonograms\";\n\n  const wrapper = document.querySelector(\".wrapper-nonograms\");\n  wrapper.prepend(nameNonogramCreate);\n\n  const nameNonogram = document.querySelector(\".top-menu-nonograms\");\n\n  // create lvl block\n  const nonogramsLevelsBlockCreate = document.createElement(\"div\");\n  nonogramsLevelsBlockCreate.className = \"top-menu-nonograms__lvl-block\";\n  nameNonogram.append(nonogramsLevelsBlockCreate);\n\n  const nonogramsLevelsBlock = document.querySelector(\n    \".top-menu-nonograms__lvl-block\"\n  );\n\n  const nonogramsLevelEasyCreate = document.createElement(\"button\");\n  nonogramsLevelEasyCreate.className = \"top-menu-nonograms__easy-lvl\";\n  nonogramsLevelEasyCreate.innerHTML = \"easy\";\n  nonogramsLevelsBlock.append(nonogramsLevelEasyCreate);\n\n  const nonogramsLevelMediumCreate = document.createElement(\"button\");\n  nonogramsLevelMediumCreate.className = \"top-menu-nonograms__medium-lvl\";\n  nonogramsLevelMediumCreate.innerHTML = \"medium\";\n  nonogramsLevelsBlock.append(nonogramsLevelMediumCreate);\n\n  const nonogramsLevelHardCreate = document.createElement(\"button\");\n  nonogramsLevelHardCreate.className = \"top-menu-nonograms__hard-lvl\";\n  nonogramsLevelHardCreate.innerHTML = \"hard\";\n  nonogramsLevelsBlock.append(nonogramsLevelHardCreate);\n\n  // create level buttons easy\n  const nonogramsChooseLvlCreate = document.createElement(\"div\");\n  nonogramsChooseLvlCreate.className = \"top-menu-nonograms__choose-lvl\";\n  nameNonogram.append(nonogramsChooseLvlCreate);\n\n  // add listeners\n  const nonogramsLevelEasy = document.querySelector(\n    \".top-menu-nonograms__easy-lvl\"\n  );\n  const nonogramsLevelMedium = document.querySelector(\n    \".top-menu-nonograms__medium-lvl\"\n  );\n  const nonogramsLevelHard = document.querySelector(\n    \".top-menu-nonograms__hard-lvl\"\n  );\n\n  nonogramsLevelEasy.addEventListener(\"mousedown\", _chooseDifficulty__WEBPACK_IMPORTED_MODULE_0__.chooseDifficulty);\n  nonogramsLevelMedium.addEventListener(\"mousedown\", _chooseDifficulty__WEBPACK_IMPORTED_MODULE_0__.chooseDifficulty);\n  nonogramsLevelHard.addEventListener(\"mousedown\", _chooseDifficulty__WEBPACK_IMPORTED_MODULE_0__.chooseDifficulty);\n\n  const createInfoAboutGame = document.createElement(\"div\");\n  createInfoAboutGame.className = \"top-menu-nonograms__game-info\";\n  createInfoAboutGame.innerHTML = `Difficulty: easy / Level: heart`;\n  nameNonogram.append(createInfoAboutGame);\n\n  (0,_chooseDifficulty__WEBPACK_IMPORTED_MODULE_0__.chooseDifficulty)();\n}\n\n\n//# sourceURL=webpack:///./src/utils/createTopMenu.js?");

/***/ }),

/***/ "./src/utils/generateNewGame.js":
/*!**************************************!*\
  !*** ./src/utils/generateNewGame.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateNewGame: () => (/* binding */ generateNewGame)\n/* harmony export */ });\n/* harmony import */ var _data_dataMatrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/dataMatrix */ \"./src/data/dataMatrix.js\");\n/* harmony import */ var _createField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createField */ \"./src/utils/createField.js\");\n/* harmony import */ var _playerLogic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playerLogic */ \"./src/utils/playerLogic.js\");\n/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timer */ \"./src/utils/timer.js\");\n\n\n\n\n\n\n\nfunction generateNewGame(event) {\n  const selectedLvlName = event.target.textContent;\n  let selectedArr;\n  for (let difficulty in _data_dataMatrix__WEBPACK_IMPORTED_MODULE_0__.data) {\n    for (let i = 0; i < _data_dataMatrix__WEBPACK_IMPORTED_MODULE_0__.data[difficulty].length; i++) {\n      if (_data_dataMatrix__WEBPACK_IMPORTED_MODULE_0__.data[difficulty][i].name === selectedLvlName) {\n        selectedArr = _data_dataMatrix__WEBPACK_IMPORTED_MODULE_0__.data[difficulty][i].matrix;\n      }\n    }\n  }\n  (0,_timer__WEBPACK_IMPORTED_MODULE_3__.stopTimer)();\n\n  const table = document.querySelector(\".table-nonograms\");\n  table.remove();\n\n  (0,_createField__WEBPACK_IMPORTED_MODULE_1__.createGame)(selectedArr);\n  (0,_playerLogic__WEBPACK_IMPORTED_MODULE_2__.playerLogic)();\n}\n\n\n//# sourceURL=webpack:///./src/utils/generateNewGame.js?");

/***/ }),

/***/ "./src/utils/getInfoAboutGame.js":
/*!***************************************!*\
  !*** ./src/utils/getInfoAboutGame.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getDifficulty: () => (/* binding */ getDifficulty),\n/* harmony export */   showInfoAboutGame: () => (/* binding */ showInfoAboutGame)\n/* harmony export */ });\n\n\nlet difficulty;\n\nfunction getDifficulty(event) {\n  difficulty = event.target.textContent;\n}\n\nfunction showInfoAboutGame(event) {\n  const lvl = event.target.textContent;\n\n  if (difficulty === undefined) {\n    difficulty = \"easy\";\n  }\n\n  const gameInfo = document.querySelector(\".top-menu-nonograms__game-info\");\n  gameInfo.innerHTML = `Difficulty: ${difficulty} / Level: ${lvl}`;\n}\n\n\n//# sourceURL=webpack:///./src/utils/getInfoAboutGame.js?");

/***/ }),

/***/ "./src/utils/getWinGame.js":
/*!*********************************!*\
  !*** ./src/utils/getWinGame.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getWinGame: () => (/* binding */ getWinGame),\n/* harmony export */   sortWinGame: () => (/* binding */ sortWinGame)\n/* harmony export */ });\n\n\nfunction getWinGame(name, difficulty, time) {\n  const newWinGame = {\n    lvl: name,\n    difficulty: difficulty,\n    time: time,\n  };\n\n  if (localStorage.getItem(\"IamBigBobby_winGames\")) {\n    console.log(\"уже есть\");\n    const existingDataWins = localStorage.getItem(\"IamBigBobby_winGames\");\n\n    const existingData = JSON.parse(existingDataWins);\n\n    existingData.push(newWinGame);\n\n    localStorage.setItem(\"IamBigBobby_winGames\", JSON.stringify(existingData));\n  } else {\n    console.log(\"еще нет\");\n    const winArr = [];\n    winArr.push(newWinGame);\n    localStorage.setItem(\"IamBigBobby_winGames\", JSON.stringify(winArr));\n  }\n}\n\nfunction sortWinGame() {\n  const winGameData = localStorage.getItem(\"IamBigBobby_winGames\");\n  const existingWinGameData = JSON.parse(winGameData);\n\n  existingWinGameData.sort((a, b) => a.time - b.time);\n\n  const topFiveWinArr = existingWinGameData.slice(0, 5);\n\n  return topFiveWinArr;\n}\n\n\n//# sourceURL=webpack:///./src/utils/getWinGame.js?");

/***/ }),

/***/ "./src/utils/loadGame.js":
/*!*******************************!*\
  !*** ./src/utils/loadGame.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadGame: () => (/* binding */ loadGame)\n/* harmony export */ });\n/* harmony import */ var _playerLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playerLogic */ \"./src/utils/playerLogic.js\");\n/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer */ \"./src/utils/timer.js\");\n\n\n\n\n\nfunction loadGame() {\n  // load table\n  const saveTable = localStorage\n    .getItem(\"IamBigBobby_table\")\n    .replace(/\\\\/g, \"\")\n    .replace('<table class=\"table-nonograms\">', \"\")\n    .replace(\"</table>\", \"\")\n    .slice(1, -1);\n\n  const oldTable = document.querySelector(\".table-nonograms\");\n\n  oldTable.remove();\n\n  const wrapper = document.querySelector(\".wrapper-nonograms__table-wrapper\");\n  const newTable = document.createElement(\"table\");\n  newTable.className = \"table-nonograms\";\n\n  newTable.insertAdjacentHTML(\"beforeend\", saveTable);\n\n  wrapper.append(newTable);\n\n  newTable.addEventListener(\"mousedown\", _playerLogic__WEBPACK_IMPORTED_MODULE_0__.clickLogic);\n\n  // load timer\n  (0,_timer__WEBPACK_IMPORTED_MODULE_1__.stopTimer)();\n  const saveSeconds = Number(localStorage.getItem(\"IamBigBobby_timer\"));\n  (0,_timer__WEBPACK_IMPORTED_MODULE_1__.setCurrentSeconds)(saveSeconds);\n  (0,_timer__WEBPACK_IMPORTED_MODULE_1__.activateTimer)();\n\n  // load game info\n  const newGameInfo = localStorage.getItem(\"IamBigBobby_gameInfo\").slice(1, -1);\n  const gameInfo = document.querySelector(\".top-menu-nonograms__game-info\");\n  gameInfo.innerHTML = newGameInfo;\n}\n\n\n//# sourceURL=webpack:///./src/utils/loadGame.js?");

/***/ }),

/***/ "./src/utils/makeSound.js":
/*!********************************!*\
  !*** ./src/utils/makeSound.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   leftClickSound: () => (/* binding */ leftClickSound),\n/* harmony export */   rightClickSound: () => (/* binding */ rightClickSound),\n/* harmony export */   winSound: () => (/* binding */ winSound)\n/* harmony export */ });\n/* harmony import */ var _assets_sounds_point_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/sounds/point.mp3 */ \"./src/assets/sounds/point.mp3\");\n/* harmony import */ var _assets_sounds_glass_knock_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/sounds/glass-knock.mp3 */ \"./src/assets/sounds/glass-knock.mp3\");\n/* harmony import */ var _assets_sounds_wow_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/sounds/wow.mp3 */ \"./src/assets/sounds/wow.mp3\");\n\n\n\n\n\n\nfunction leftClickSound(event) {\n  const pointSound = new Audio(_assets_sounds_point_mp3__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  if (\n    event.button === 0 &&\n    event.target.classList.contains(\"table-nonograms__cell\")\n  ) {\n    pointSound.play();\n  }\n}\n\nfunction rightClickSound(event) {\n  const knockSound = new Audio(_assets_sounds_glass_knock_mp3__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  if (\n    event.button === 2 &&\n    event.target.classList.contains(\"table-nonograms__cell\")\n  ) {\n    knockSound.play();\n  }\n}\n\nfunction winSound() {\n  const wowSound = new Audio(_assets_sounds_wow_mp3__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n  wowSound.play();\n}\n\n\n//# sourceURL=webpack:///./src/utils/makeSound.js?");

/***/ }),

/***/ "./src/utils/openAnswer.js":
/*!*********************************!*\
  !*** ./src/utils/openAnswer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   openAnswer: () => (/* binding */ openAnswer)\n/* harmony export */ });\n/* harmony import */ var _playerLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playerLogic */ \"./src/utils/playerLogic.js\");\n/* harmony import */ var _startNewGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startNewGame */ \"./src/utils/startNewGame.js\");\n/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timer */ \"./src/utils/timer.js\");\n\n\n\n\n\n\nfunction openAnswer(event) {\n  const button = event.target;\n  const status = event.target.textContent;\n  const trueCells = document.querySelectorAll(\".table-nonograms__cell_answer\");\n  const table = document.querySelector(\".table-nonograms\");\n\n  if (status === \"solution: off\") {\n    (0,_timer__WEBPACK_IMPORTED_MODULE_2__.stopTimer)();\n\n    trueCells.forEach((cell) => {\n      cell.classList.add(\"table-nonograms__cell_answer_visible\");\n    });\n\n    table.removeEventListener(\"mousedown\", _playerLogic__WEBPACK_IMPORTED_MODULE_0__.clickLogic);\n\n    event.target.innerHTML = \"solution: on\";\n\n    button.style.backgroundColor = \"aqua\";\n  } else {\n    trueCells.forEach((cell) => {\n      cell.classList.remove(\"table-nonograms__cell_answer_visible\");\n    });\n    event.target.innerHTML = \"solution: off\";\n\n    button.style.backgroundColor = \"white\";\n\n    (0,_startNewGame__WEBPACK_IMPORTED_MODULE_1__.startNewGame)();\n    table.addEventListener(\"mousedown\", _playerLogic__WEBPACK_IMPORTED_MODULE_0__.clickLogic);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/utils/openAnswer.js?");

/***/ }),

/***/ "./src/utils/playerLogic.js":
/*!**********************************!*\
  !*** ./src/utils/playerLogic.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clickLogic: () => (/* binding */ clickLogic),\n/* harmony export */   playerLogic: () => (/* binding */ playerLogic)\n/* harmony export */ });\n/* harmony import */ var _appearingPopUpWin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appearingPopUpWin */ \"./src/utils/appearingPopUpWin.js\");\n/* harmony import */ var _countingAnswersCells__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./countingAnswersCells */ \"./src/utils/countingAnswersCells.js\");\n/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timer */ \"./src/utils/timer.js\");\n/* harmony import */ var _getWinGame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getWinGame */ \"./src/utils/getWinGame.js\");\n/* harmony import */ var _makeSound__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./makeSound */ \"./src/utils/makeSound.js\");\n\n\n\n\n\n\n\nfunction playerLogic() {\n  const table = document.querySelector(\".table-nonograms\");\n\n  document.addEventListener(\"contextmenu\", function (event) {\n    event.preventDefault();\n  });\n  table.addEventListener(\"mousedown\", clickLogic);\n}\n\nfunction clickLogic(event) {\n  const click = event.target;\n  const mouseButton = event.button;\n\n  (0,_timer__WEBPACK_IMPORTED_MODULE_2__.activateTimer)();\n\n  if (mouseButton === 0) {\n    if (\n      click.classList.contains(\"table-nonograms__cell\") &&\n      !click.classList.contains(\"table-nonograms_player-cross\")\n    ) {\n      click.classList.toggle(\"table-nonograms_player-point\");\n      checkWin();\n    }\n  }\n\n  if (mouseButton === 2) {\n    event.preventDefault();\n\n    if (\n      click.classList.contains(\"table-nonograms__cell\") &&\n      !click.classList.contains(\"table-nonograms_player-point\")\n    ) {\n      click.classList.toggle(\"table-nonograms_player-cross\");\n    }\n  }\n}\n\nfunction checkWin() {\n  const trueCellsCounting = (0,_countingAnswersCells__WEBPACK_IMPORTED_MODULE_1__.countingTrueCells)();\n  const trueCellsGame = document.querySelectorAll(\n    \".table-nonograms__cell.table-nonograms__cell_answer.table-nonograms_player-point\"\n  );\n  const pickCellsGame = document.querySelectorAll(\n    \".table-nonograms_player-point\"\n  );\n  const answerCellsGame = document.querySelectorAll(\n    \".table-nonograms__cell_answer\"\n  );\n\n  console.log(trueCellsCounting, trueCellsGame.length);\n\n  if (\n    trueCellsCounting === trueCellsGame.length &&\n    pickCellsGame.length === answerCellsGame.length\n  ) {\n    console.log(\"you win!\");\n    const table = document.querySelector(\".table-nonograms\");\n    table.removeEventListener(\"mousedown\", clickLogic);\n    (0,_appearingPopUpWin__WEBPACK_IMPORTED_MODULE_0__.popUpWin)();\n\n    const lvlInformation = document\n      .querySelector(\".top-menu-nonograms__game-info\")\n      .textContent.replace(\"Difficulty:\", \"\")\n      .replace(\"Level:\", \"\")\n      .replace(/\\s/g, \"\")\n      .split(\"/\");\n\n    const [difficulty, lvl] = lvlInformation;\n    (0,_getWinGame__WEBPACK_IMPORTED_MODULE_3__.getWinGame)(lvl, difficulty, _timer__WEBPACK_IMPORTED_MODULE_2__.currentSeconds);\n\n    const soundButton = document.querySelector(\n      \".nonograms__menu__sound\"\n    ).textContent;\n\n    if (soundButton === \"sound: on\") {\n      (0,_makeSound__WEBPACK_IMPORTED_MODULE_4__.winSound)();\n    }\n\n    (0,_timer__WEBPACK_IMPORTED_MODULE_2__.stopTimer)();\n  } else {\n    console.log(\"not yet\");\n  }\n}\n\n\n//# sourceURL=webpack:///./src/utils/playerLogic.js?");

/***/ }),

/***/ "./src/utils/saveGame.js":
/*!*******************************!*\
  !*** ./src/utils/saveGame.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   saveGame: () => (/* binding */ saveGame)\n/* harmony export */ });\n/* harmony import */ var _loadGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadGame */ \"./src/utils/loadGame.js\");\n/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer */ \"./src/utils/timer.js\");\n\n\n\n\n\nfunction saveGame() {\n  const table = document.querySelector(\".table-nonograms\");\n  const gameInfo = document.querySelector(\n    \".top-menu-nonograms__game-info\"\n  ).textContent;\n  const timer = _timer__WEBPACK_IMPORTED_MODULE_1__.currentSeconds;\n\n  const saveTable = JSON.stringify(table.outerHTML);\n  const saveGameInfo = JSON.stringify(gameInfo);\n\n  localStorage.setItem(\"IamBigBobby_table\", saveTable);\n  localStorage.setItem(\"IamBigBobby_gameInfo\", saveGameInfo);\n  localStorage.setItem(\"IamBigBobby_timer\", timer);\n\n  const loadButton = document.querySelector(\".nonograms__menu__load\");\n  loadButton.classList.remove(\"button_disabled\");\n\n  loadButton.addEventListener(\"mousedown\", _loadGame__WEBPACK_IMPORTED_MODULE_0__.loadGame);\n}\n\n\n//# sourceURL=webpack:///./src/utils/saveGame.js?");

/***/ }),

/***/ "./src/utils/soundSwitch.js":
/*!**********************************!*\
  !*** ./src/utils/soundSwitch.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   switchSound: () => (/* binding */ switchSound)\n/* harmony export */ });\n/* harmony import */ var _makeSound__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeSound */ \"./src/utils/makeSound.js\");\n\n\n\nfunction switchSound(event) {\n  console.log(event.target.textContent);\n  const soundPosition = event.target.textContent;\n  if (soundPosition === \"sound: off\") {\n    const wrapper = document.querySelector(\".wrapper-nonograms\");\n    wrapper.addEventListener(\"mousedown\", _makeSound__WEBPACK_IMPORTED_MODULE_0__.leftClickSound);\n    wrapper.addEventListener(\"mousedown\", _makeSound__WEBPACK_IMPORTED_MODULE_0__.rightClickSound);\n\n    event.target.style.backgroundColor = \"aqua\";\n\n    event.target.innerHTML = \"sound: on\";\n  } else {\n    const wrapper = document.querySelector(\".wrapper-nonograms\");\n    wrapper.removeEventListener(\"mousedown\", _makeSound__WEBPACK_IMPORTED_MODULE_0__.leftClickSound);\n    wrapper.removeEventListener(\"mousedown\", _makeSound__WEBPACK_IMPORTED_MODULE_0__.rightClickSound);\n\n    event.target.style.backgroundColor = \"white\";\n\n    event.target.innerHTML = \"sound: off\";\n  }\n}\n\n\n//# sourceURL=webpack:///./src/utils/soundSwitch.js?");

/***/ }),

/***/ "./src/utils/startNewGame.js":
/*!***********************************!*\
  !*** ./src/utils/startNewGame.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   startNewGame: () => (/* binding */ startNewGame)\n/* harmony export */ });\n/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer */ \"./src/utils/timer.js\");\n\n\n\n\nfunction startNewGame() {\n  const tableCells = document.querySelectorAll(\".table-nonograms__cell\");\n\n  tableCells.forEach((cell) => {\n    if (cell.classList.contains(\"table-nonograms_player-point\")) {\n      cell.classList.remove(\"table-nonograms_player-point\");\n    }\n\n    if (cell.classList.contains(\"table-nonograms_player-cross\")) {\n      cell.classList.remove(\"table-nonograms_player-cross\");\n    }\n  });\n  (0,_timer__WEBPACK_IMPORTED_MODULE_0__.stopTimer)();\n}\n\n\n//# sourceURL=webpack:///./src/utils/startNewGame.js?");

/***/ }),

/***/ "./src/utils/timer.js":
/*!****************************!*\
  !*** ./src/utils/timer.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   activateTimer: () => (/* binding */ activateTimer),\n/* harmony export */   currentSeconds: () => (/* binding */ currentSeconds),\n/* harmony export */   setCurrentSeconds: () => (/* binding */ setCurrentSeconds),\n/* harmony export */   stopTimer: () => (/* binding */ stopTimer)\n/* harmony export */ });\n\n\nlet flagTimer = false;\nlet currentSeconds = 0;\nlet currentTime;\n\nfunction activateTimer() {\n  if (!flagTimer) {\n    flagTimer = true;\n    currentTime = setInterval(updateTimer, 1000);\n  }\n}\n\nfunction stopTimer() {\n  flagTimer = false;\n  currentSeconds = 0;\n\n  clearInterval(currentTime);\n  const timer = document.querySelector(\".nonograms__timer\");\n  timer.innerHTML = \"00:00\";\n}\n\nfunction updateTimer() {\n  let minutes = Math.floor((currentSeconds % 3600) / 60);\n  let seconds = currentSeconds % 60;\n\n  let strMinutes = minutes.toString().padStart(2, \"0\");\n  let strSeconds = seconds.toString().padStart(2, \"0\");\n\n  currentSeconds++;\n\n  const timer = document.querySelector(\".nonograms__timer\");\n\n  timer.innerHTML = `${strMinutes}:${strSeconds}`;\n}\n\nfunction setCurrentSeconds(seconds) {\n  currentSeconds = seconds;\n}\n\n\n//# sourceURL=webpack:///./src/utils/timer.js?");

/***/ }),

/***/ "./src/assets/svg/cross.svg":
/*!**********************************!*\
  !*** ./src/assets/svg/cross.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"99f1e79a34b51769e34f.svg\";\n\n//# sourceURL=webpack:///./src/assets/svg/cross.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;