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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400;1,500&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*\\n  Reset code\\n*/\\n*,\\n*::before,\\n*::after {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  font-family: Roboto, Arial, Helvetica, sans-serif;\\n  font-size: 1.1rem;\\n  line-height: 1.5;\\n  min-height: 90vh;\\n}\\n\\nbody,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\np,\\nul,\\nli {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nbutton,\\ninput,\\nlabel {\\n  font-family: inherit;\\n  background-color: inherit;\\n  color: inherit;\\n}\\n\\nselect, option {\\n  font-size: 1.2rem;\\n  background-color: hsl(var(--clr-dark));\\n  color: hsl(var(--clr-light));\\n}\\n\\n/*\\n  Custom properties\\n*/\\n:root {\\n  --clr-dark: 230 35% 7%;\\n  --clr-light: 231 77% 90%;\\n  --clr-white: 0 0% 100%;\\n}\\n\\n/*\\n  colors\\n*/\\n.bg-dark {\\n  background-color: hsl(var(--clr-dark));\\n}\\n\\n.bg-light {\\n  background-color: hsl(var(--clr-light));\\n}\\n\\n.bg-white {\\n  background-color: hsl(var(--clr-white));\\n}\\n\\n.color-dark {\\n  color: hsl(var(--clr-dark));\\n}\\n\\n.color-light {\\n  color: hsl(var(--clr-light));\\n}\\n\\n.color-white {\\n  color: hsl(var(--clr-white));\\n}\\n\\nh1 {\\n  margin-top: 20px;\\n  margin-bottom: 20px;\\n}\\n\\n.round-border-light {\\n  border: 1px solid hsl(var(--clr-white));\\n  border-radius: 8px;\\n}\\n\\n.round-border-dark {\\n  border: 1px solid hsl(var(--clr-dark));\\n  border-radius: 8px;\\n}\\n\\n.circular-border-light {\\n  border: 1px solid hsl(var(--clr-white));\\n  border-radius: 50%;\\n}\\n\\n.circular-border-dark {\\n  border: 1px solid hsl(var(--clr-dark));\\n  border-radius: 50%;\\n}\\n\\n#score-container {\\n  margin-top: 20px;\\n  max-height: 60vh;\\n  scroll-behavior: auto;\\n  overflow-y: auto;\\n}\\n\\n.score-row {\\n  width: 100%;\\n}\\n\\nbutton {\\n  width: 100px;\\n  height: 40px;\\n  padding: 8px;\\n}\\n\\n.score-row:nth-child(even) {\\n  background-color: hsl(var(--clr-dark) / 0.5);\\n}\\n\\n.main-container {\\n  padding-inline: 2rem;\\n  margin-inline: auto;\\n  max-width: 60rem;\\n}\\n\\n.flex {\\n  display: flex;\\n  gap: var(--gap, 2rem);\\n}\\n\\n.grid {\\n  display: grid;\\n  gap: var(--gap, 1rem);\\n}\\n\\n.text-center {\\n  text-align: center;\\n}\\n\\n.text-left {\\n  text-align: left;\\n}\\n\\n.column-direction {\\n  flex-direction: column;\\n}\\n\\n.align-center {\\n  align-items: center;\\n}\\n\\n.space-around {\\n  justify-content: space-around;\\n}\\n\\n.justify-center {\\n  justify-content: center;\\n}\\n\\n.button-danger {\\n  background-color: brown;\\n  color: white;\\n}\\n\\n.section {\\n  width: 100%;\\n  max-height: 100vh;\\n  margin-inline: auto;\\n}\\n\\n.imageMedal\\n{\\n  width: 60px;\\n  height: auto;\\n}\\n\\n.wrap {\\n  flex-wrap: wrap;\\n}\\n\\n.flex-1 {\\n  flex: 1;\\n}\\n\\n.flex-2 {\\n  flex: 2;\\n}\\n\\ninput {\\n  font-size: 1.2rem;\\n}\\n\\n.recent-scores {\\n  max-height: 80vh;\\n}\\n\\n.input-score {\\n  max-height: 40vh;\\n}\\n\\n.box-border {\\n  border-radius: 8px;\\n  border: 2px solid hsl(var(--clr-light));\\n}\\n\\n.hidden {\\n  display: none;\\n}\\n\\n.padding-10 {\\n  padding-inline: 10px;\\n}\\n\\n.clickable {\\n  cursor: pointer;\\n}\\n\\nbutton:hover {\\n  background-color: hsl(var(--clr-light) / 0.6);\\n}\\n\\n@media (max-width: 360px) {\\n  #score-container {\\n    height: 60vh;\\n  }\\n}\\n\\n@media (orientation: landscape) {\\n  .section {\\n    width: 85%;\\n    min-height: 80vh;\\n  }\\n\\n  .main-container {\\n    width: 100%;\\n    margin-inline: auto;\\n    min-height: 80vh;\\n  }\\n\\n  #score-container {\\n    height: 80%;\\n    width: 90%;\\n    scroll-behavior: auto;\\n    overflow-y: auto;\\n  }\\n}\\n\\n@media (max-height: 360px) {\\n  .score-container {\\n    height: 35vh;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpacktemplate/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpacktemplate/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpacktemplate/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpacktemplate/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpacktemplate/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpacktemplate/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpacktemplate/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpacktemplate/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpacktemplate/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpacktemplate/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_first_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/first.png */ \"./src/assets/first.png\");\n/* harmony import */ var _assets_second_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/second.png */ \"./src/assets/second.png\");\n/* harmony import */ var _assets_third_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/third.png */ \"./src/assets/third.png\");\n/* harmony import */ var _assets_noplace_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/noplace.png */ \"./src/assets/noplace.png\");\n/* harmony import */ var _gitHubDataProvider_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gitHubDataProvider.js */ \"./src/gitHubDataProvider.js\");\n\n\n\n\n\n\nclass App {\n  scoreList = [];\n\n  reposList = [];\n  // const URL_REPO = 'https://api.github.com/repos/VicPeralta/leaderboard/stargazers';\n  // const URL_REPO = 'https://api.github.com/repos/awaisanwar544/git-leaderboard/stargazers';\n  //                https://github.com/awaisanwar544/git-leaderboard\n\n  async getDataFromProvider(user, repo) {\n    this.scoreList = await (0,_gitHubDataProvider_js__WEBPACK_IMPORTED_MODULE_4__.getStarGazersForUserRepo)(user, repo);\n  }\n\n  static showMessage(message) {\n    const element = document.getElementById('message');\n    element.textContent = message;\n    element.classList.remove('hidden');\n  }\n\n  static hideMessage() {\n    document.getElementById('message').classList.add('hidden');\n  }\n\n  async updateData() {\n    App.showMessage('Updating data...');\n    if (this.reposList.length === 0) {\n      await this.updateRepoList();\n    }\n    const repoName = document.getElementById('repos').value;\n    const gitHubUser = document.getElementById('user');\n    this.getDataFromProvider(gitHubUser.value, repoName).then(() => {\n      App.hideMessage();\n      this.updateList();\n    });\n  }\n\n  async FillRepoList() {\n    const list = document.getElementById('repos');\n    list.innerHTML = '';\n    let innerHTML = '';\n    this.reposList.forEach((repo) => {\n      innerHTML += `<option value=\"${repo.name}\">${repo.name}</option>`;\n    });\n    list.innerHTML = innerHTML;\n  }\n\n  async updateRepoList() {\n    const gitHubUser = document.getElementById('user');\n    this.reposList = await (0,_gitHubDataProvider_js__WEBPACK_IMPORTED_MODULE_4__.getReposForUser)(gitHubUser.value);\n    this.taskReposFilled = this.FillRepoList();\n  }\n\n  static getUserCard(user, imageToUse) {\n    const divCard = document.createElement('div');\n    divCard.classList.add('padding-10', 'flex', 'round-border-light', 'align-center', 'space-around', 'clickable', 'score-row');\n    divCard.setAttribute('data-profile', user.profile);\n    divCard.innerHTML = `\n      <div class='flex-1 justify-center'>\n        <img class='imageMedal'src=${imageToUse} alt=\"\" width=\"50\" height=\"50\" />\n      </div>\n      <div class='flex-2'>\n        <p>${user.user}</p>\n        <p>Points: ${user.score}</p>\n      </div>\n      <div class='flex-1'>\n        <img src='${user.photo}' class='circular-border-dark' alt=\"\" width=\"50\" height=\"50\"/>\n      </div>\n    `;\n    divCard.addEventListener('click', (e) => {\n      window.open(e.currentTarget.dataset.profile, '_blank');\n    });\n    return divCard;\n  }\n\n  updateList() {\n    const scoresContainer = document.getElementById('score-container');\n    // Removes all user cards elements\n    while (scoresContainer.firstChild) {\n      scoresContainer.removeChild(scoresContainer.firstChild);\n    }\n    let position = 1;\n    let lastScore = 0;\n    let index = 0;\n    this.scoreList.forEach((task) => {\n      let imageToUse = '';\n      if (index === 0) position = 1;\n      else if (lastScore > task.score) position += 1;\n      if (position === 1) imageToUse = _assets_first_png__WEBPACK_IMPORTED_MODULE_0__;\n      else if (position === 2) imageToUse = _assets_second_png__WEBPACK_IMPORTED_MODULE_1__;\n      else if (position === 3) imageToUse = _assets_third_png__WEBPACK_IMPORTED_MODULE_2__;\n      else imageToUse = _assets_noplace_png__WEBPACK_IMPORTED_MODULE_3__;\n      scoresContainer.appendChild(App.getUserCard(task, imageToUse));\n      lastScore = task.score;\n      index += 1;\n    });\n  }\n\n  addListeners() {\n    document.getElementById('repos').addEventListener('change', () => {\n      this.updateData();\n    });\n    document.getElementById('update-btn').addEventListener('click', async () => {\n      const user = document.getElementById('user');\n      if (!user.checkValidity()) {\n        user.reportValidity();\n        return;\n      }\n      await this.updateRepoList();\n      this.updateData();\n    });\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n\n//# sourceURL=webpack://webpacktemplate/./src/app.js?");

/***/ }),

/***/ "./src/gitHubDataProvider.js":
/*!***********************************!*\
  !*** ./src/gitHubDataProvider.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStarGazersForUserRepo\": () => (/* binding */ getStarGazersForUserRepo),\n/* harmony export */   \"getReposForUser\": () => (/* binding */ getReposForUser)\n/* harmony export */ });\n/*\n  Return JSON information about the startGazers\n  or an empty array\n*/\nasync function getStargazers(user, repo) {\n  try {\n    const urlRepo = `https://api.github.com/repos/${user}/${repo}/stargazers`;\n    const data = await fetch(urlRepo).then((data) => data.json());\n    return data;\n  } catch {\n    return [];\n  }\n}\n/*\n  Returns an object containing relevant information about a single user\n  Name, Followers, Repos, Profile and Photo\n*/\nasync function getUserInfo(userUrl) {\n  try {\n    const completeInfoUser = await fetch(userUrl).then((data) => data.json());\n    return {\n      score: completeInfoUser.followers,\n      user: completeInfoUser.name,\n      repos: completeInfoUser.public_repos,\n      profile: completeInfoUser.html_url,\n      photo: completeInfoUser.avatar_url,\n    };\n  } catch {\n    return {};\n  }\n}\n/*\n  Returns an array containing StarGazers data:\n  Name, Followers, Repos, Profile and Photo\n*/\nasync function getStarGazersForUserRepo(user, repo) {\n  let starGazers = await getStargazers(user, repo);\n  const promisesArray = [];\n  for (let i = 0; i < starGazers.length; i += 1) {\n    promisesArray.push(getUserInfo(starGazers[i].url));\n  }\n  starGazers = await Promise.all(promisesArray);\n  starGazers.sort((first, second) => {\n    if (first.score > second.score) return -1;\n    if (first.score < second.score) return 1;\n    return 0;\n  });\n  return starGazers;\n}\n\nasync function getReposForUser(user) {\n  try {\n    const urlRepo = `https://api.github.com/users/${user}/repos`;\n    const data = await fetch(urlRepo).then((data) => data.json());\n    return data.filter((element) => element.stargazers_count > 0)\n      .sort((first, second) => {\n        if (first.stargazers_count > second.stargazers_count) return -1;\n        if (first.stargazers_count < second.stargazers_count) return 1;\n        return 0;\n      });\n  } catch {\n    return [];\n  }\n}\n\n\n\n//# sourceURL=webpack://webpacktemplate/./src/gitHubDataProvider.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.js */ \"./src/app.js\");\n\n\n\n\nconst theApp = new _app_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\ntheApp.updateData();\ntheApp.addListeners();\n\n//# sourceURL=webpack://webpacktemplate/./src/index.js?");

/***/ }),

/***/ "./src/assets/first.png":
/*!******************************!*\
  !*** ./src/assets/first.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"588b19b1294af5a6a6ca.png\";\n\n//# sourceURL=webpack://webpacktemplate/./src/assets/first.png?");

/***/ }),

/***/ "./src/assets/noplace.png":
/*!********************************!*\
  !*** ./src/assets/noplace.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"efa803b8710cd2b6be79.png\";\n\n//# sourceURL=webpack://webpacktemplate/./src/assets/noplace.png?");

/***/ }),

/***/ "./src/assets/second.png":
/*!*******************************!*\
  !*** ./src/assets/second.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"000417430b55b9312c29.png\";\n\n//# sourceURL=webpack://webpacktemplate/./src/assets/second.png?");

/***/ }),

/***/ "./src/assets/third.png":
/*!******************************!*\
  !*** ./src/assets/third.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8d0595ccaa3aa9c1251c.png\";\n\n//# sourceURL=webpack://webpacktemplate/./src/assets/third.png?");

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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