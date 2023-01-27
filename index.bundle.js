"use strict";
(self["webpackChunkknight_travails"] = self["webpackChunkknight_travails"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    border: 0;\n    margin: 0;\n}\n\nbody {\n    font-size: 16px;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n}\n\nheader {\n    display: grid;\n    place-content: center;\n}\n\n#title {\n    font-size: 2rem;\n    padding: 0.5rem 0 0.5rem 0;\n}\n\nmain {\n    padding: 0.5rem;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-evenly;\n    row-gap: 10px;\n    flex-grow: 1;\n}\n\n#controls {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-evenly;\n    gap: 1rem;\n}\n\nbutton {\n    font-size: 1rem;\n    color: white;\n    border: none;\n    border-radius: 4px;\n    padding: 0.35rem 0.4rem;\n    background-color: midnightblue;\n    transition: transform 200ms ease-in;\n}\n\nbutton:hover {\n    transform: scale(1.05);\n}\n\nbutton.onPosition {\n    border: 2px solid gray;\n}\n\n#chessBoard {\n    display: grid;\n    grid-template-columns: repeat(8, minmax(15px, 75px));\n    grid-template-rows: repeat(8, minmax(15px, 75px));\n    flex-grow: 1;\n}\n\n.box {\n    /* width: 10px;\n    height: 10px; */\n    font-size: 1.5rem;\n    border: 1px solid black;\n}\n\n.box.black {\n    background-color: #999;\n}\n\n.box.white {\n    background-color: white;\n}\n\n.box.start {\n    background-color: skyblue;\n}\n\n.box.end {\n    background-color: limegreen;\n}\n\n.box.path {\n    background-color: orange;\n}\n\nfooter {\n    display: flex;\n    justify-content: center;\n}\n\na {\n    text-decoration: none;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;IAGI,sBAAsB;IACtB,SAAS;IACT,SAAS;AACb;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,eAAe;IACf,0BAA0B;AAC9B;;AAEA;IACI,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,eAAe;IACf,mBAAmB;IACnB,6BAA6B;IAC7B,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,mBAAmB;IACnB,6BAA6B;IAC7B,SAAS;AACb;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,uBAAuB;IACvB,8BAA8B;IAC9B,mCAAmC;AACvC;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,oDAAoD;IACpD,iDAAiD;IACjD,YAAY;AAChB;;AAEA;IACI;mBACe;IACf,iBAAiB;IACjB,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,qBAAqB;AACzB","sourcesContent":["*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    border: 0;\n    margin: 0;\n}\n\nbody {\n    font-size: 16px;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n}\n\nheader {\n    display: grid;\n    place-content: center;\n}\n\n#title {\n    font-size: 2rem;\n    padding: 0.5rem 0 0.5rem 0;\n}\n\nmain {\n    padding: 0.5rem;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-evenly;\n    row-gap: 10px;\n    flex-grow: 1;\n}\n\n#controls {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-evenly;\n    gap: 1rem;\n}\n\nbutton {\n    font-size: 1rem;\n    color: white;\n    border: none;\n    border-radius: 4px;\n    padding: 0.35rem 0.4rem;\n    background-color: midnightblue;\n    transition: transform 200ms ease-in;\n}\n\nbutton:hover {\n    transform: scale(1.05);\n}\n\nbutton.onPosition {\n    border: 2px solid gray;\n}\n\n#chessBoard {\n    display: grid;\n    grid-template-columns: repeat(8, minmax(15px, 75px));\n    grid-template-rows: repeat(8, minmax(15px, 75px));\n    flex-grow: 1;\n}\n\n.box {\n    /* width: 10px;\n    height: 10px; */\n    font-size: 1.5rem;\n    border: 1px solid black;\n}\n\n.box.black {\n    background-color: #999;\n}\n\n.box.white {\n    background-color: white;\n}\n\n.box.start {\n    background-color: skyblue;\n}\n\n.box.end {\n    background-color: limegreen;\n}\n\n.box.path {\n    background-color: orange;\n}\n\nfooter {\n    display: flex;\n    justify-content: center;\n}\n\na {\n    text-decoration: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_html_elements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/html_elements.js */ "./src/modules/html_elements.js");




console.log('knight travails');

(0,_modules_html_elements_js__WEBPACK_IMPORTED_MODULE_1__.start)();

/***/ }),

/***/ "./src/modules/chess_board.js":
/*!************************************!*\
  !*** ./src/modules/chess_board.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findPath": () => (/* binding */ findPath),
/* harmony export */   "setDestination": () => (/* binding */ setDestination),
/* harmony export */   "setStart": () => (/* binding */ setStart),
/* harmony export */   "unInitialize": () => (/* binding */ unInitialize)
/* harmony export */ });
/* harmony import */ var _chess_box_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chess_box_node.js */ "./src/modules/chess_box_node.js");


const chessBoard = (function() {
    const dx = [-2, -1, 1, 2, -2, -1, 1, 2];
    const dy = [-1, -2, -2, -1, 1, 2, 2, 1];
    let start, destination, queue, visited;

    const setStart = function(startCoord) {
        start = new _chess_box_node_js__WEBPACK_IMPORTED_MODULE_0__["default"](startCoord[0], startCoord[1], 0, null);
    }

    const setDestination  = function(destCoord) {
        destination = new _chess_box_node_js__WEBPACK_IMPORTED_MODULE_0__["default"](destCoord[0], destCoord[1]);
    }

    const initialize = function() {
        queue = [start];
        visited = Array.from({length: 8}, () => Array.from({length: 8}, () => false)); // use this to understand if need in future https://stackoverflow.com/questions/4852017/how-to-initialize-an-arrays-length-in-javascript
        visited[start.x][start.y] = true;
    }

    const unInitialize = function() {
        start = null;
        destination = null;
        queue = null;
        visited = null;
    }

    const findPath = function() {
        if(!start || !destination) return;
        initialize();
        while(queue.length > 0) {
            const firstQueueNode = queue.shift();
            if(firstQueueNode.equals(destination)) {
                return getPath(firstQueueNode);
            }
            for(let i=0; i<8; i++) {
                const newNode = new _chess_box_node_js__WEBPACK_IMPORTED_MODULE_0__["default"](firstQueueNode.x+dx[i], firstQueueNode.y+dy[i], null, firstQueueNode);
                if(newNode.onBoard() && !visited[newNode.x][newNode.y]) {
                    visited[newNode.x][newNode.y] = true;
                    newNode.moves = firstQueueNode.moves + 1;
                    queue.push(newNode);
                }
            }
        }
        return -1;
    }

    function getPath(destChessBoxNode) {
        const moveEndPoints = getMoveEndPoints(destChessBoxNode);
        const pathCoordinates = [moveEndPoints[0]];
        let start, end;
        for(let i=0; i<moveEndPoints.length-1; i++) {
            start = moveEndPoints[i];
            end = moveEndPoints[i+1];
            if(isXmoreThanY()) {
                moveX(2);
                moveY(1);
            } else {
                moveY(2);
                moveX(1);
            }
        }
        // pathCoordinates.push(end);
        function isXmoreThanY() {
            return Math.abs(start[0] - end[0]) > Math.abs(start[1] - end[1]);
        }

        function moveX(numOfTimeToRun) {
            let startPlaceholder = start[0];
            let endPlaceholder = end[0];
            const incrementValue = (endPlaceholder - startPlaceholder) / Math.abs(endPlaceholder - startPlaceholder);
            while(numOfTimeToRun > 0) {
                pathCoordinates.push([pathCoordinates.slice(-1)[0][0] + incrementValue, pathCoordinates.slice(-1)[0][1]]);
                numOfTimeToRun -= 1;
            }
        }

        function moveY(numOfTimeToRun) {
            let startPlaceholder = start[1];
            let endPlaceholder = end[1];
            const incrementValue = (endPlaceholder - startPlaceholder) / Math.abs(endPlaceholder - startPlaceholder);
            while(numOfTimeToRun > 0) {
                pathCoordinates.push([pathCoordinates.slice(-1)[0][0], pathCoordinates.slice(-1)[0][1] + incrementValue]);
                numOfTimeToRun -= 1;
            }
        }
        return pathCoordinates;
    }

    function getMoveEndPoints(chessBoxNode) {
        let node = chessBoxNode;
        let pathCoordinates = [];
        while(node) {
            pathCoordinates.unshift([node.x, node.y]);
            node = node.parent;
        }
        return pathCoordinates;
    }

    return{
        setStart,
        setDestination,
        findPath,
        unInitialize
    }
})();

const {setStart: setStart, setDestination: setDestination, findPath: findPath, unInitialize: unInitialize} = chessBoard;


/***/ }),

/***/ "./src/modules/chess_box_node.js":
/*!***************************************!*\
  !*** ./src/modules/chess_box_node.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ChessBoxNode)
/* harmony export */ });
function ChessBoxNode(x, y, moves=null, parent=null) {
    this.x = x;
    this.y = y;
    this.moves = moves;
    this.parent = parent;
}

ChessBoxNode.prototype.equals = function(otherChessBoxNode) {
    if(!ChessBoxNode.prototype.isPrototypeOf(otherChessBoxNode)) {
        return false;
    }
    if(!(this.x === otherChessBoxNode.x && this.y === otherChessBoxNode.y)) {
        return false;
    }
    return true;
}

ChessBoxNode.prototype.onBoard = function() {
    return this.x > -1 && this.x < 8 && this.y > -1 && this.y < 8;
}


/***/ }),

/***/ "./src/modules/html_connector_chess_board.js":
/*!***************************************************!*\
  !*** ./src/modules/html_connector_chess_board.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "knightPlacement": () => (/* binding */ knightPlacement),
/* harmony export */   "randomKnightPlacement": () => (/* binding */ randomKnightPlacement),
/* harmony export */   "reset": () => (/* binding */ reset),
/* harmony export */   "selectDestination": () => (/* binding */ selectDestination),
/* harmony export */   "travails": () => (/* binding */ travails)
/* harmony export */ });
/* harmony import */ var _chess_board_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chess_board.js */ "./src/modules/chess_board.js");
/* harmony import */ var _html_elements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./html_elements.js */ "./src/modules/html_elements.js");



const htmlConnectToChessBoard = (function() {

    let toggleKnightPlacement = false, toggleSelectDestination = false;

    const knightPlacement = function(coord) {
        if(toggleKnightPlacement === true && Array.isArray(coord)) {
            (0,_html_elements_js__WEBPACK_IMPORTED_MODULE_1__.updateChessBoardBoxClassStart)(coord[0] + '' + coord[1]);
            (0,_chess_board_js__WEBPACK_IMPORTED_MODULE_0__.setStart)(coord);
            toggleKnightPlacement = false;
            (0,_html_elements_js__WEBPACK_IMPORTED_MODULE_1__.updateButtonStyle)();
        } else if(toggleKnightPlacement === false && !Array.isArray(coord)) {
            toggleKnightPlacement = true;
            toggleSelectDestination = false;
            (0,_html_elements_js__WEBPACK_IMPORTED_MODULE_1__.clearPath)();
        }
    }

    const randomKnightPlacement = function() {
        ;(0,_html_elements_js__WEBPACK_IMPORTED_MODULE_1__.updateButtonStyle)();
        (0,_html_elements_js__WEBPACK_IMPORTED_MODULE_1__.clearPath)();
        const [x, y] = [ Math.floor(Math.random() * 8), Math.floor(Math.random() * 8) ];
        (0,_html_elements_js__WEBPACK_IMPORTED_MODULE_1__.updateChessBoardBoxClassStart)(x + '' + y);
        (0,_chess_board_js__WEBPACK_IMPORTED_MODULE_0__.setStart)([x, y]);
    }

    const selectDestination = function(coord) {
        if(toggleSelectDestination === true && Array.isArray(coord)) {
            (0,_html_elements_js__WEBPACK_IMPORTED_MODULE_1__.updateChessBoardBoxClassEnd)(coord[0] + '' + coord[1]);
            (0,_chess_board_js__WEBPACK_IMPORTED_MODULE_0__.setDestination)(coord);
            toggleSelectDestination = false;
            (0,_html_elements_js__WEBPACK_IMPORTED_MODULE_1__.updateButtonStyle)();
        } else if(toggleSelectDestination === false && !Array.isArray(coord)) {
            toggleSelectDestination = true;
            toggleKnightPlacement = false;
            (0,_html_elements_js__WEBPACK_IMPORTED_MODULE_1__.clearPath)();
        }
    }

    const travails = function() {
        ;(0,_html_elements_js__WEBPACK_IMPORTED_MODULE_1__.updateButtonStyle)();
        const path = (0,_chess_board_js__WEBPACK_IMPORTED_MODULE_0__.findPath)();
        path ?  path.forEach((coord, i) => {
            (0,_html_elements_js__WEBPACK_IMPORTED_MODULE_1__.updateChessBoardBoxClassPath)(coord[0] + "" + coord[1])
            if(i % 3 === 0) {
                (0,_html_elements_js__WEBPACK_IMPORTED_MODULE_1__.updateChessBoardBoxTextContent)(coord[0] + "" + coord[1], Math.floor(i / 3));
            }
        }) : 'doNothing';
    }

    const reset = function() {
        toggleSelectDestination = false;
        toggleKnightPlacement = false;
        (0,_html_elements_js__WEBPACK_IMPORTED_MODULE_1__.updateButtonStyle)();
        (0,_chess_board_js__WEBPACK_IMPORTED_MODULE_0__.unInitialize)();
        (0,_html_elements_js__WEBPACK_IMPORTED_MODULE_1__.updateChessBoardBoxClassStart)();
        (0,_html_elements_js__WEBPACK_IMPORTED_MODULE_1__.updateChessBoardBoxClassEnd)();
        (0,_html_elements_js__WEBPACK_IMPORTED_MODULE_1__.clearPath)()
    }

    return {
        knightPlacement,
        randomKnightPlacement,
        selectDestination,
        travails,
        reset,
    };
})();

const { knightPlacement: knightPlacement, 
        randomKnightPlacement: randomKnightPlacement, 
        selectDestination: selectDestination,
        travails: travails,
        reset: reset } = htmlConnectToChessBoard;



/***/ }),

/***/ "./src/modules/html_elements.js":
/*!**************************************!*\
  !*** ./src/modules/html_elements.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearPath": () => (/* binding */ clearPath),
/* harmony export */   "start": () => (/* binding */ start),
/* harmony export */   "updateButtonStyle": () => (/* binding */ updateButtonStyle),
/* harmony export */   "updateChessBoardBoxClassEnd": () => (/* binding */ updateChessBoardBoxClassEnd),
/* harmony export */   "updateChessBoardBoxClassPath": () => (/* binding */ updateChessBoardBoxClassPath),
/* harmony export */   "updateChessBoardBoxClassStart": () => (/* binding */ updateChessBoardBoxClassStart),
/* harmony export */   "updateChessBoardBoxTextContent": () => (/* binding */ updateChessBoardBoxTextContent)
/* harmony export */ });
/* harmony import */ var _html_connector_chess_board_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html_connector_chess_board.js */ "./src/modules/html_connector_chess_board.js");


function makeHeader() {
    const body = document.querySelector('body');
    const header = document.createElement('header');
    body.appendChild(header);
}

function makeMain() {
    const body = document.querySelector('body');
    const main = document.createElement('main');
    body.appendChild(main);
}

function makeFooter() {
    const body = document.querySelector('body');
    const footer = document.createElement('footer');
    body.appendChild(footer);
}

function makeSourceCodeLinkDiv() {
    const footer = document.querySelector('footer');
    const div = makeDiv({id: 'sourceCodeLink', title: 'Source Code'});
    const link = document.createElement('a');
    link.setAttribute('href', 'https://github.com/4C-75-63-6B-79/Knights_Travails');
    link.textContent = 'Source Code';
    div.appendChild(link);
    footer.appendChild(div);
}

function makeDiv({id, classNames, textContent, title, dataAttributeName, dataAttributeValue, callBackFunction}) {
    const div = document.createElement('div');
    id ? div.setAttribute('id', id) : 'doNothing';
    classNames ? classNames.split(' ').forEach(eleClass => div.classList.add(eleClass)) : 'doNothing';
    textContent ? div.textContent = textContent : 'doNothing';
    title ? div.setAttribute('title', title) : 'doNothing';
    dataAttributeName ? div.setAttribute(`data-${dataAttributeName}`, '') : 'doNothing';
    dataAttributeValue && dataAttributeName ? div.setAttribute(`data-${dataAttributeName}`, dataAttributeValue) : 'doNothing';
    callBackFunction ? div.addEventListener('click', callBackFunction) : 'doNothing';
    return div;
}

function makeButton({id, classNames, textContent, title, callBackFunction}) {
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    id ? button.setAttribute('id', id) : 'doNothing';
    classNames ? classNames.split(' ').forEach(eleClass => button.classList.add(eleClass)) : 'doNothing';
    textContent ? button.textContent = textContent : 'do Nothing';
    title ? button.setAttribute('title', title) : 'doNothing';
    callBackFunction ? callBackFunction.forEach(eleFunction => button.addEventListener('click', eleFunction)) : 'doNothing';
    return button;
}

function makeTitleDiv() {
    const header = document.querySelector('header');
    const titleDiv = makeDiv({id: 'title', title: 'Knight Travails', textContent: 'Knight Travails'});
    header.appendChild(titleDiv);
}

function makeControlsDiv() {
    const main = document.querySelector('main');
    const controlDiv = makeDiv({id: 'controls'});
    main.appendChild(controlDiv);
}

function makeControlButton() {
    const controlDiv = document.getElementById('controls');
    controlDiv.appendChild(makeButton({id: 'placeKnight', title: 'Place Knight Button', textContent: 'Place Knight', callBackFunction: [_html_connector_chess_board_js__WEBPACK_IMPORTED_MODULE_0__.knightPlacement, updateButtonStyle]}));
    controlDiv.appendChild(makeButton({id: 'randomlyPlaceKnight', title: 'Randomly Place Knight Button', textContent: 'Randomly Place Knight', callBackFunction: [_html_connector_chess_board_js__WEBPACK_IMPORTED_MODULE_0__.randomKnightPlacement]}));
    controlDiv.appendChild(makeButton({id: 'selectDestination', title: 'Select Destination Button', textContent: 'Select Destination', callBackFunction: [_html_connector_chess_board_js__WEBPACK_IMPORTED_MODULE_0__.selectDestination, updateButtonStyle]}));
    controlDiv.appendChild(makeButton({id: 'startTravails', title: 'Start Travails Button', textContent: 'Start Travails', callBackFunction: [_html_connector_chess_board_js__WEBPACK_IMPORTED_MODULE_0__.travails]}));
    controlDiv.appendChild(makeButton({id: 'clearBoard', title: 'Clear Board Button', textContent: 'Clear Board', callBackFunction: [_html_connector_chess_board_js__WEBPACK_IMPORTED_MODULE_0__.reset, clearPath]}));
}

function updateButtonStyle(event) {
    const buttonWithOnPosition = document.querySelector('.onPosition');
    if(event) {
        buttonWithOnPosition ? buttonWithOnPosition.classList.remove('onPosition') : 'doNothing';
        event.target.classList.add('onPosition');
    } else {
        buttonWithOnPosition ? buttonWithOnPosition.classList.remove('onPosition') : 'doNothing';
    }
}

function makeChessBoardDiv() {
    const main = document.querySelector('main');
    const chessBoardDiv = makeDiv({id: 'chessBoard'});
    main.appendChild(chessBoardDiv);
}

function chessBoardBoxClicked(event) {
    const x = Number(event.target.getAttribute('data-coordinates').charAt(0));
    const y = Number(event.target.getAttribute('data-coordinates').charAt(1));
    (0,_html_connector_chess_board_js__WEBPACK_IMPORTED_MODULE_0__.knightPlacement)([x, y]);
    (0,_html_connector_chess_board_js__WEBPACK_IMPORTED_MODULE_0__.selectDestination)([x, y]);
}

function makeChessBoardBoxDiv() {
    const chessBoardDiv = document.getElementById('chessBoard');
    for(let i=0; i<8; i++) {
        for(let j=0; j<8; j++) {
            chessBoardDiv.appendChild(makeDiv({
                id: `box${j+1}${Math.abs(8-i)}`, 
                classNames: `box ${(j + Math.abs(7-i)) % 2 === 0 ? 'black' : 'white'}`, 
                // textContent: `${j+1}${Math.abs(8-i)}`,  
                title: `Box ${String.fromCharCode(64 + Math.abs(j+1))}${8-i}`,
                dataAttributeName: 'coordinates',
                dataAttributeValue: `${j}${Math.abs(7-i)}`,
                callBackFunction: chessBoardBoxClicked,
            }));
        }
    }
}

function updateChessBoardBoxClassStart(boxAttribute) {
    const boxWithClassStart = document.querySelector(`.box.start`);
    boxWithClassStart ? boxWithClassStart.classList.remove('start') : 'doNothing' ;
    const box = document.querySelector(` div.box[data-coordinates = '${boxAttribute}']`);
    box ? box.classList.add('start') : 'doNothing';
}

function updateChessBoardBoxClassPath(boxAttribute) {
    const box = document.querySelector(` div.box[data-coordinates = '${boxAttribute}']`);
    box ? box.classList.add('path') : 'doNothing';
}

function updateChessBoardBoxTextContent(boxAttribute, text) {
    const box = document.querySelector(` div.box[data-coordinates = '${boxAttribute}']`);
    box.textContent = box ?  text : '';
}

function updateChessBoardBoxClassEnd(boxAttribute) {
    const boxWithClassEnd = document.querySelector(`.box.end`);
    boxWithClassEnd ? boxWithClassEnd.classList.remove('end') : 'doNothing' ;
    const box = document.querySelector(` div.box[data-coordinates = '${boxAttribute}']`);
    box ? box.classList.add('end') : 'doNothing';
}

function clearPath() {
    const boxexWithClassPath = document.querySelectorAll('.box.path');
    boxexWithClassPath ? Array.from(boxexWithClassPath).forEach(box => {box.classList.remove('path'); box.textContent = '';}): 'doNothing';
}

function start() {
    makeHeader();
    makeMain();
    makeFooter();
    makeTitleDiv();
    makeControlsDiv();
    makeChessBoardDiv();
    makeControlButton();
    makeChessBoardBoxDiv();
    makeSourceCodeLinkDiv();
}

 

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUk7QUFDNUU7QUFDQSx1Q0FBdUMsRUFBRSxFQUFFLGNBQWM7QUFDekQ7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVFQUF1RSxhQUFhO0FBQ3BGO0FBQ0E7O0FBRUE7QUFDQSx1RUFBdUUsYUFBYTtBQUNwRjtBQUNBOztBQUVBO0FBQ0EsdUVBQXVFLGFBQWE7QUFDcEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1RUFBdUUsYUFBYTtBQUNwRjtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3RUFBd0UsOEJBQThCLHNCQUFzQjtBQUM1SDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU1pRCIsInNvdXJjZXMiOlsid2VicGFjazovL2tuaWdodF90cmF2YWlscy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8va25pZ2h0X3RyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9rbmlnaHRfdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRfdHJhdmFpbHMvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8va25pZ2h0X3RyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2tuaWdodF90cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8va25pZ2h0X3RyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2tuaWdodF90cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRfdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9rbmlnaHRfdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9rbmlnaHRfdHJhdmFpbHMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8va25pZ2h0X3RyYXZhaWxzLy4vc3JjL21vZHVsZXMvY2hlc3NfYm9hcmQuanMiLCJ3ZWJwYWNrOi8va25pZ2h0X3RyYXZhaWxzLy4vc3JjL21vZHVsZXMvY2hlc3NfYm94X25vZGUuanMiLCJ3ZWJwYWNrOi8va25pZ2h0X3RyYXZhaWxzLy4vc3JjL21vZHVsZXMvaHRtbF9jb25uZWN0b3JfY2hlc3NfYm9hcmQuanMiLCJ3ZWJwYWNrOi8va25pZ2h0X3RyYXZhaWxzLy4vc3JjL21vZHVsZXMvaHRtbF9lbGVtZW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiN0aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgcGFkZGluZzogMC41cmVtIDAgMC41cmVtIDA7XFxufVxcblxcbm1haW4ge1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIHJvdy1nYXA6IDEwcHg7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuI2NvbnRyb2xzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHBhZGRpbmc6IDAuMzVyZW0gMC40cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtaWRuaWdodGJsdWU7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcyBlYXNlLWluO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG5idXR0b24ub25Qb3NpdGlvbiB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XFxufVxcblxcbiNjaGVzc0JvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOCwgbWlubWF4KDE1cHgsIDc1cHgpKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoOCwgbWlubWF4KDE1cHgsIDc1cHgpKTtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4uYm94IHtcXG4gICAgLyogd2lkdGg6IDEwcHg7XFxuICAgIGhlaWdodDogMTBweDsgKi9cXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uYm94LmJsYWNrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTtcXG59XFxuXFxuLmJveC53aGl0ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYm94LnN0YXJ0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcXG59XFxuXFxuLmJveC5lbmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaW1lZ3JlZW47XFxufVxcblxcbi5ib3gucGF0aCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztJQUdJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2Qiw4QkFBOEI7SUFDOUIsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG9EQUFvRDtJQUNwRCxpREFBaUQ7SUFDakQsWUFBWTtBQUNoQjs7QUFFQTtJQUNJO21CQUNlO0lBQ2YsaUJBQWlCO0lBQ2pCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3RpdGxlIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMCAwLjVyZW0gMDtcXG59XFxuXFxubWFpbiB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgcm93LWdhcDogMTBweDtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4jY29udHJvbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgcGFkZGluZzogMC4zNXJlbSAwLjRyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG1pZG5pZ2h0Ymx1ZTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zIGVhc2UtaW47XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbmJ1dHRvbi5vblBvc2l0aW9uIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcXG59XFxuXFxuI2NoZXNzQm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg4LCBtaW5tYXgoMTVweCwgNzVweCkpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg4LCBtaW5tYXgoMTVweCwgNzVweCkpO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbi5ib3gge1xcbiAgICAvKiB3aWR0aDogMTBweDtcXG4gICAgaGVpZ2h0OiAxMHB4OyAqL1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5ib3guYmxhY2sge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5O1xcbn1cXG5cXG4uYm94LndoaXRlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5ib3guc3RhcnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xcbn1cXG5cXG4uYm94LmVuZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpbWVncmVlbjtcXG59XFxuXFxuLmJveC5wYXRoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmltcG9ydCB7IHN0YXJ0IH0gZnJvbSBcIi4vbW9kdWxlcy9odG1sX2VsZW1lbnRzLmpzXCI7XG5cbmNvbnNvbGUubG9nKCdrbmlnaHQgdHJhdmFpbHMnKTtcblxuc3RhcnQoKTsiLCJpbXBvcnQgQ2hlc3NCb3hOb2RlIGZyb20gXCIuL2NoZXNzX2JveF9ub2RlLmpzXCI7XG5cbmNvbnN0IGNoZXNzQm9hcmQgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZHggPSBbLTIsIC0xLCAxLCAyLCAtMiwgLTEsIDEsIDJdO1xuICAgIGNvbnN0IGR5ID0gWy0xLCAtMiwgLTIsIC0xLCAxLCAyLCAyLCAxXTtcbiAgICBsZXQgc3RhcnQsIGRlc3RpbmF0aW9uLCBxdWV1ZSwgdmlzaXRlZDtcblxuICAgIGNvbnN0IHNldFN0YXJ0ID0gZnVuY3Rpb24oc3RhcnRDb29yZCkge1xuICAgICAgICBzdGFydCA9IG5ldyBDaGVzc0JveE5vZGUoc3RhcnRDb29yZFswXSwgc3RhcnRDb29yZFsxXSwgMCwgbnVsbCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0RGVzdGluYXRpb24gID0gZnVuY3Rpb24oZGVzdENvb3JkKSB7XG4gICAgICAgIGRlc3RpbmF0aW9uID0gbmV3IENoZXNzQm94Tm9kZShkZXN0Q29vcmRbMF0sIGRlc3RDb29yZFsxXSk7XG4gICAgfVxuXG4gICAgY29uc3QgaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBxdWV1ZSA9IFtzdGFydF07XG4gICAgICAgIHZpc2l0ZWQgPSBBcnJheS5mcm9tKHtsZW5ndGg6IDh9LCAoKSA9PiBBcnJheS5mcm9tKHtsZW5ndGg6IDh9LCAoKSA9PiBmYWxzZSkpOyAvLyB1c2UgdGhpcyB0byB1bmRlcnN0YW5kIGlmIG5lZWQgaW4gZnV0dXJlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ4NTIwMTcvaG93LXRvLWluaXRpYWxpemUtYW4tYXJyYXlzLWxlbmd0aC1pbi1qYXZhc2NyaXB0XG4gICAgICAgIHZpc2l0ZWRbc3RhcnQueF1bc3RhcnQueV0gPSB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IHVuSW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBzdGFydCA9IG51bGw7XG4gICAgICAgIGRlc3RpbmF0aW9uID0gbnVsbDtcbiAgICAgICAgcXVldWUgPSBudWxsO1xuICAgICAgICB2aXNpdGVkID0gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBmaW5kUGF0aCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZighc3RhcnQgfHwgIWRlc3RpbmF0aW9uKSByZXR1cm47XG4gICAgICAgIGluaXRpYWxpemUoKTtcbiAgICAgICAgd2hpbGUocXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgZmlyc3RRdWV1ZU5vZGUgPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgaWYoZmlyc3RRdWV1ZU5vZGUuZXF1YWxzKGRlc3RpbmF0aW9uKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXRQYXRoKGZpcnN0UXVldWVOb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPDg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld05vZGUgPSBuZXcgQ2hlc3NCb3hOb2RlKGZpcnN0UXVldWVOb2RlLngrZHhbaV0sIGZpcnN0UXVldWVOb2RlLnkrZHlbaV0sIG51bGwsIGZpcnN0UXVldWVOb2RlKTtcbiAgICAgICAgICAgICAgICBpZihuZXdOb2RlLm9uQm9hcmQoKSAmJiAhdmlzaXRlZFtuZXdOb2RlLnhdW25ld05vZGUueV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmlzaXRlZFtuZXdOb2RlLnhdW25ld05vZGUueV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBuZXdOb2RlLm1vdmVzID0gZmlyc3RRdWV1ZU5vZGUubW92ZXMgKyAxO1xuICAgICAgICAgICAgICAgICAgICBxdWV1ZS5wdXNoKG5ld05vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UGF0aChkZXN0Q2hlc3NCb3hOb2RlKSB7XG4gICAgICAgIGNvbnN0IG1vdmVFbmRQb2ludHMgPSBnZXRNb3ZlRW5kUG9pbnRzKGRlc3RDaGVzc0JveE5vZGUpO1xuICAgICAgICBjb25zdCBwYXRoQ29vcmRpbmF0ZXMgPSBbbW92ZUVuZFBvaW50c1swXV07XG4gICAgICAgIGxldCBzdGFydCwgZW5kO1xuICAgICAgICBmb3IobGV0IGk9MDsgaTxtb3ZlRW5kUG9pbnRzLmxlbmd0aC0xOyBpKyspIHtcbiAgICAgICAgICAgIHN0YXJ0ID0gbW92ZUVuZFBvaW50c1tpXTtcbiAgICAgICAgICAgIGVuZCA9IG1vdmVFbmRQb2ludHNbaSsxXTtcbiAgICAgICAgICAgIGlmKGlzWG1vcmVUaGFuWSgpKSB7XG4gICAgICAgICAgICAgICAgbW92ZVgoMik7XG4gICAgICAgICAgICAgICAgbW92ZVkoMSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1vdmVZKDIpO1xuICAgICAgICAgICAgICAgIG1vdmVYKDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHBhdGhDb29yZGluYXRlcy5wdXNoKGVuZCk7XG4gICAgICAgIGZ1bmN0aW9uIGlzWG1vcmVUaGFuWSgpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmFicyhzdGFydFswXSAtIGVuZFswXSkgPiBNYXRoLmFicyhzdGFydFsxXSAtIGVuZFsxXSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBtb3ZlWChudW1PZlRpbWVUb1J1bikge1xuICAgICAgICAgICAgbGV0IHN0YXJ0UGxhY2Vob2xkZXIgPSBzdGFydFswXTtcbiAgICAgICAgICAgIGxldCBlbmRQbGFjZWhvbGRlciA9IGVuZFswXTtcbiAgICAgICAgICAgIGNvbnN0IGluY3JlbWVudFZhbHVlID0gKGVuZFBsYWNlaG9sZGVyIC0gc3RhcnRQbGFjZWhvbGRlcikgLyBNYXRoLmFicyhlbmRQbGFjZWhvbGRlciAtIHN0YXJ0UGxhY2Vob2xkZXIpO1xuICAgICAgICAgICAgd2hpbGUobnVtT2ZUaW1lVG9SdW4gPiAwKSB7XG4gICAgICAgICAgICAgICAgcGF0aENvb3JkaW5hdGVzLnB1c2goW3BhdGhDb29yZGluYXRlcy5zbGljZSgtMSlbMF1bMF0gKyBpbmNyZW1lbnRWYWx1ZSwgcGF0aENvb3JkaW5hdGVzLnNsaWNlKC0xKVswXVsxXV0pO1xuICAgICAgICAgICAgICAgIG51bU9mVGltZVRvUnVuIC09IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBtb3ZlWShudW1PZlRpbWVUb1J1bikge1xuICAgICAgICAgICAgbGV0IHN0YXJ0UGxhY2Vob2xkZXIgPSBzdGFydFsxXTtcbiAgICAgICAgICAgIGxldCBlbmRQbGFjZWhvbGRlciA9IGVuZFsxXTtcbiAgICAgICAgICAgIGNvbnN0IGluY3JlbWVudFZhbHVlID0gKGVuZFBsYWNlaG9sZGVyIC0gc3RhcnRQbGFjZWhvbGRlcikgLyBNYXRoLmFicyhlbmRQbGFjZWhvbGRlciAtIHN0YXJ0UGxhY2Vob2xkZXIpO1xuICAgICAgICAgICAgd2hpbGUobnVtT2ZUaW1lVG9SdW4gPiAwKSB7XG4gICAgICAgICAgICAgICAgcGF0aENvb3JkaW5hdGVzLnB1c2goW3BhdGhDb29yZGluYXRlcy5zbGljZSgtMSlbMF1bMF0sIHBhdGhDb29yZGluYXRlcy5zbGljZSgtMSlbMF1bMV0gKyBpbmNyZW1lbnRWYWx1ZV0pO1xuICAgICAgICAgICAgICAgIG51bU9mVGltZVRvUnVuIC09IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGhDb29yZGluYXRlcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRNb3ZlRW5kUG9pbnRzKGNoZXNzQm94Tm9kZSkge1xuICAgICAgICBsZXQgbm9kZSA9IGNoZXNzQm94Tm9kZTtcbiAgICAgICAgbGV0IHBhdGhDb29yZGluYXRlcyA9IFtdO1xuICAgICAgICB3aGlsZShub2RlKSB7XG4gICAgICAgICAgICBwYXRoQ29vcmRpbmF0ZXMudW5zaGlmdChbbm9kZS54LCBub2RlLnldKTtcbiAgICAgICAgICAgIG5vZGUgPSBub2RlLnBhcmVudDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aENvb3JkaW5hdGVzO1xuICAgIH1cblxuICAgIHJldHVybntcbiAgICAgICAgc2V0U3RhcnQsXG4gICAgICAgIHNldERlc3RpbmF0aW9uLFxuICAgICAgICBmaW5kUGF0aCxcbiAgICAgICAgdW5Jbml0aWFsaXplXG4gICAgfVxufSkoKTtcblxuY29uc3Qge3NldFN0YXJ0OiBzZXRTdGFydCwgc2V0RGVzdGluYXRpb246IHNldERlc3RpbmF0aW9uLCBmaW5kUGF0aDogZmluZFBhdGgsIHVuSW5pdGlhbGl6ZTogdW5Jbml0aWFsaXplfSA9IGNoZXNzQm9hcmQ7XG5leHBvcnQge3NldFN0YXJ0LCBzZXREZXN0aW5hdGlvbiwgZmluZFBhdGgsIHVuSW5pdGlhbGl6ZX07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hlc3NCb3hOb2RlKHgsIHksIG1vdmVzPW51bGwsIHBhcmVudD1udWxsKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMubW92ZXMgPSBtb3ZlcztcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbn1cblxuQ2hlc3NCb3hOb2RlLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbihvdGhlckNoZXNzQm94Tm9kZSkge1xuICAgIGlmKCFDaGVzc0JveE5vZGUucHJvdG90eXBlLmlzUHJvdG90eXBlT2Yob3RoZXJDaGVzc0JveE5vZGUpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYoISh0aGlzLnggPT09IG90aGVyQ2hlc3NCb3hOb2RlLnggJiYgdGhpcy55ID09PSBvdGhlckNoZXNzQm94Tm9kZS55KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5DaGVzc0JveE5vZGUucHJvdG90eXBlLm9uQm9hcmQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy54ID4gLTEgJiYgdGhpcy54IDwgOCAmJiB0aGlzLnkgPiAtMSAmJiB0aGlzLnkgPCA4O1xufVxuIiwiaW1wb3J0IHsgc2V0U3RhcnQsIHNldERlc3RpbmF0aW9uLCBmaW5kUGF0aCwgdW5Jbml0aWFsaXplIH0gZnJvbSAnLi9jaGVzc19ib2FyZC5qcyc7XG5pbXBvcnQgeyB1cGRhdGVCdXR0b25TdHlsZSwgdXBkYXRlQ2hlc3NCb2FyZEJveENsYXNzU3RhcnQsIHVwZGF0ZUNoZXNzQm9hcmRCb3hDbGFzc1BhdGgsIHVwZGF0ZUNoZXNzQm9hcmRCb3hUZXh0Q29udGVudCwgdXBkYXRlQ2hlc3NCb2FyZEJveENsYXNzRW5kLCBjbGVhclBhdGggfSBmcm9tICcuL2h0bWxfZWxlbWVudHMuanMnO1xuXG5jb25zdCBodG1sQ29ubmVjdFRvQ2hlc3NCb2FyZCA9IChmdW5jdGlvbigpIHtcblxuICAgIGxldCB0b2dnbGVLbmlnaHRQbGFjZW1lbnQgPSBmYWxzZSwgdG9nZ2xlU2VsZWN0RGVzdGluYXRpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IGtuaWdodFBsYWNlbWVudCA9IGZ1bmN0aW9uKGNvb3JkKSB7XG4gICAgICAgIGlmKHRvZ2dsZUtuaWdodFBsYWNlbWVudCA9PT0gdHJ1ZSAmJiBBcnJheS5pc0FycmF5KGNvb3JkKSkge1xuICAgICAgICAgICAgdXBkYXRlQ2hlc3NCb2FyZEJveENsYXNzU3RhcnQoY29vcmRbMF0gKyAnJyArIGNvb3JkWzFdKTtcbiAgICAgICAgICAgIHNldFN0YXJ0KGNvb3JkKTtcbiAgICAgICAgICAgIHRvZ2dsZUtuaWdodFBsYWNlbWVudCA9IGZhbHNlO1xuICAgICAgICAgICAgdXBkYXRlQnV0dG9uU3R5bGUoKTtcbiAgICAgICAgfSBlbHNlIGlmKHRvZ2dsZUtuaWdodFBsYWNlbWVudCA9PT0gZmFsc2UgJiYgIUFycmF5LmlzQXJyYXkoY29vcmQpKSB7XG4gICAgICAgICAgICB0b2dnbGVLbmlnaHRQbGFjZW1lbnQgPSB0cnVlO1xuICAgICAgICAgICAgdG9nZ2xlU2VsZWN0RGVzdGluYXRpb24gPSBmYWxzZTtcbiAgICAgICAgICAgIGNsZWFyUGF0aCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmFuZG9tS25pZ2h0UGxhY2VtZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHVwZGF0ZUJ1dHRvblN0eWxlKCk7XG4gICAgICAgIGNsZWFyUGF0aCgpO1xuICAgICAgICBjb25zdCBbeCwgeV0gPSBbIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDgpLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA4KSBdO1xuICAgICAgICB1cGRhdGVDaGVzc0JvYXJkQm94Q2xhc3NTdGFydCh4ICsgJycgKyB5KTtcbiAgICAgICAgc2V0U3RhcnQoW3gsIHldKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3REZXN0aW5hdGlvbiA9IGZ1bmN0aW9uKGNvb3JkKSB7XG4gICAgICAgIGlmKHRvZ2dsZVNlbGVjdERlc3RpbmF0aW9uID09PSB0cnVlICYmIEFycmF5LmlzQXJyYXkoY29vcmQpKSB7XG4gICAgICAgICAgICB1cGRhdGVDaGVzc0JvYXJkQm94Q2xhc3NFbmQoY29vcmRbMF0gKyAnJyArIGNvb3JkWzFdKTtcbiAgICAgICAgICAgIHNldERlc3RpbmF0aW9uKGNvb3JkKTtcbiAgICAgICAgICAgIHRvZ2dsZVNlbGVjdERlc3RpbmF0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICB1cGRhdGVCdXR0b25TdHlsZSgpO1xuICAgICAgICB9IGVsc2UgaWYodG9nZ2xlU2VsZWN0RGVzdGluYXRpb24gPT09IGZhbHNlICYmICFBcnJheS5pc0FycmF5KGNvb3JkKSkge1xuICAgICAgICAgICAgdG9nZ2xlU2VsZWN0RGVzdGluYXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgdG9nZ2xlS25pZ2h0UGxhY2VtZW50ID0gZmFsc2U7XG4gICAgICAgICAgICBjbGVhclBhdGgoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHRyYXZhaWxzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHVwZGF0ZUJ1dHRvblN0eWxlKCk7XG4gICAgICAgIGNvbnN0IHBhdGggPSBmaW5kUGF0aCgpO1xuICAgICAgICBwYXRoID8gIHBhdGguZm9yRWFjaCgoY29vcmQsIGkpID0+IHtcbiAgICAgICAgICAgIHVwZGF0ZUNoZXNzQm9hcmRCb3hDbGFzc1BhdGgoY29vcmRbMF0gKyBcIlwiICsgY29vcmRbMV0pXG4gICAgICAgICAgICBpZihpICUgMyA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZUNoZXNzQm9hcmRCb3hUZXh0Q29udGVudChjb29yZFswXSArIFwiXCIgKyBjb29yZFsxXSwgTWF0aC5mbG9vcihpIC8gMykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSA6ICdkb05vdGhpbmcnO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRvZ2dsZVNlbGVjdERlc3RpbmF0aW9uID0gZmFsc2U7XG4gICAgICAgIHRvZ2dsZUtuaWdodFBsYWNlbWVudCA9IGZhbHNlO1xuICAgICAgICB1cGRhdGVCdXR0b25TdHlsZSgpO1xuICAgICAgICB1bkluaXRpYWxpemUoKTtcbiAgICAgICAgdXBkYXRlQ2hlc3NCb2FyZEJveENsYXNzU3RhcnQoKTtcbiAgICAgICAgdXBkYXRlQ2hlc3NCb2FyZEJveENsYXNzRW5kKCk7XG4gICAgICAgIGNsZWFyUGF0aCgpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAga25pZ2h0UGxhY2VtZW50LFxuICAgICAgICByYW5kb21LbmlnaHRQbGFjZW1lbnQsXG4gICAgICAgIHNlbGVjdERlc3RpbmF0aW9uLFxuICAgICAgICB0cmF2YWlscyxcbiAgICAgICAgcmVzZXQsXG4gICAgfTtcbn0pKCk7XG5cbmNvbnN0IHsga25pZ2h0UGxhY2VtZW50OiBrbmlnaHRQbGFjZW1lbnQsIFxuICAgICAgICByYW5kb21LbmlnaHRQbGFjZW1lbnQ6IHJhbmRvbUtuaWdodFBsYWNlbWVudCwgXG4gICAgICAgIHNlbGVjdERlc3RpbmF0aW9uOiBzZWxlY3REZXN0aW5hdGlvbixcbiAgICAgICAgdHJhdmFpbHM6IHRyYXZhaWxzLFxuICAgICAgICByZXNldDogcmVzZXQgfSA9IGh0bWxDb25uZWN0VG9DaGVzc0JvYXJkO1xuXG5leHBvcnQgeyBrbmlnaHRQbGFjZW1lbnQsIHJhbmRvbUtuaWdodFBsYWNlbWVudCwgc2VsZWN0RGVzdGluYXRpb24sIHRyYXZhaWxzLCByZXNldCB9OyIsImltcG9ydCB7IGtuaWdodFBsYWNlbWVudCwgcmFuZG9tS25pZ2h0UGxhY2VtZW50LCBzZWxlY3REZXN0aW5hdGlvbiwgdHJhdmFpbHMsIHJlc2V0IH0gZnJvbSAnLi9odG1sX2Nvbm5lY3Rvcl9jaGVzc19ib2FyZC5qcyc7XG5cbmZ1bmN0aW9uIG1ha2VIZWFkZXIoKSB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG59XG5cbmZ1bmN0aW9uIG1ha2VNYWluKCkge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKG1haW4pO1xufVxuXG5mdW5jdGlvbiBtYWtlRm9vdGVyKCkge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xufVxuXG5mdW5jdGlvbiBtYWtlU291cmNlQ29kZUxpbmtEaXYoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyJyk7XG4gICAgY29uc3QgZGl2ID0gbWFrZURpdih7aWQ6ICdzb3VyY2VDb2RlTGluaycsIHRpdGxlOiAnU291cmNlIENvZGUnfSk7XG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICdodHRwczovL2dpdGh1Yi5jb20vNEMtNzUtNjMtNkItNzkvS25pZ2h0c19UcmF2YWlscycpO1xuICAgIGxpbmsudGV4dENvbnRlbnQgPSAnU291cmNlIENvZGUnO1xuICAgIGRpdi5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZGl2KTtcbn1cblxuZnVuY3Rpb24gbWFrZURpdih7aWQsIGNsYXNzTmFtZXMsIHRleHRDb250ZW50LCB0aXRsZSwgZGF0YUF0dHJpYnV0ZU5hbWUsIGRhdGFBdHRyaWJ1dGVWYWx1ZSwgY2FsbEJhY2tGdW5jdGlvbn0pIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpZCA/IGRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpIDogJ2RvTm90aGluZyc7XG4gICAgY2xhc3NOYW1lcyA/IGNsYXNzTmFtZXMuc3BsaXQoJyAnKS5mb3JFYWNoKGVsZUNsYXNzID0+IGRpdi5jbGFzc0xpc3QuYWRkKGVsZUNsYXNzKSkgOiAnZG9Ob3RoaW5nJztcbiAgICB0ZXh0Q29udGVudCA/IGRpdi50ZXh0Q29udGVudCA9IHRleHRDb250ZW50IDogJ2RvTm90aGluZyc7XG4gICAgdGl0bGUgPyBkaXYuc2V0QXR0cmlidXRlKCd0aXRsZScsIHRpdGxlKSA6ICdkb05vdGhpbmcnO1xuICAgIGRhdGFBdHRyaWJ1dGVOYW1lID8gZGl2LnNldEF0dHJpYnV0ZShgZGF0YS0ke2RhdGFBdHRyaWJ1dGVOYW1lfWAsICcnKSA6ICdkb05vdGhpbmcnO1xuICAgIGRhdGFBdHRyaWJ1dGVWYWx1ZSAmJiBkYXRhQXR0cmlidXRlTmFtZSA/IGRpdi5zZXRBdHRyaWJ1dGUoYGRhdGEtJHtkYXRhQXR0cmlidXRlTmFtZX1gLCBkYXRhQXR0cmlidXRlVmFsdWUpIDogJ2RvTm90aGluZyc7XG4gICAgY2FsbEJhY2tGdW5jdGlvbiA/IGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbGxCYWNrRnVuY3Rpb24pIDogJ2RvTm90aGluZyc7XG4gICAgcmV0dXJuIGRpdjtcbn1cblxuZnVuY3Rpb24gbWFrZUJ1dHRvbih7aWQsIGNsYXNzTmFtZXMsIHRleHRDb250ZW50LCB0aXRsZSwgY2FsbEJhY2tGdW5jdGlvbn0pIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgIGlkID8gYnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCBpZCkgOiAnZG9Ob3RoaW5nJztcbiAgICBjbGFzc05hbWVzID8gY2xhc3NOYW1lcy5zcGxpdCgnICcpLmZvckVhY2goZWxlQ2xhc3MgPT4gYnV0dG9uLmNsYXNzTGlzdC5hZGQoZWxlQ2xhc3MpKSA6ICdkb05vdGhpbmcnO1xuICAgIHRleHRDb250ZW50ID8gYnV0dG9uLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQgOiAnZG8gTm90aGluZyc7XG4gICAgdGl0bGUgPyBidXR0b24uc2V0QXR0cmlidXRlKCd0aXRsZScsIHRpdGxlKSA6ICdkb05vdGhpbmcnO1xuICAgIGNhbGxCYWNrRnVuY3Rpb24gPyBjYWxsQmFja0Z1bmN0aW9uLmZvckVhY2goZWxlRnVuY3Rpb24gPT4gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWxlRnVuY3Rpb24pKSA6ICdkb05vdGhpbmcnO1xuICAgIHJldHVybiBidXR0b247XG59XG5cbmZ1bmN0aW9uIG1ha2VUaXRsZURpdigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcbiAgICBjb25zdCB0aXRsZURpdiA9IG1ha2VEaXYoe2lkOiAndGl0bGUnLCB0aXRsZTogJ0tuaWdodCBUcmF2YWlscycsIHRleHRDb250ZW50OiAnS25pZ2h0IFRyYXZhaWxzJ30pO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZURpdik7XG59XG5cbmZ1bmN0aW9uIG1ha2VDb250cm9sc0RpdigpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgIGNvbnN0IGNvbnRyb2xEaXYgPSBtYWtlRGl2KHtpZDogJ2NvbnRyb2xzJ30pO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY29udHJvbERpdik7XG59XG5cbmZ1bmN0aW9uIG1ha2VDb250cm9sQnV0dG9uKCkge1xuICAgIGNvbnN0IGNvbnRyb2xEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udHJvbHMnKTtcbiAgICBjb250cm9sRGl2LmFwcGVuZENoaWxkKG1ha2VCdXR0b24oe2lkOiAncGxhY2VLbmlnaHQnLCB0aXRsZTogJ1BsYWNlIEtuaWdodCBCdXR0b24nLCB0ZXh0Q29udGVudDogJ1BsYWNlIEtuaWdodCcsIGNhbGxCYWNrRnVuY3Rpb246IFtrbmlnaHRQbGFjZW1lbnQsIHVwZGF0ZUJ1dHRvblN0eWxlXX0pKTtcbiAgICBjb250cm9sRGl2LmFwcGVuZENoaWxkKG1ha2VCdXR0b24oe2lkOiAncmFuZG9tbHlQbGFjZUtuaWdodCcsIHRpdGxlOiAnUmFuZG9tbHkgUGxhY2UgS25pZ2h0IEJ1dHRvbicsIHRleHRDb250ZW50OiAnUmFuZG9tbHkgUGxhY2UgS25pZ2h0JywgY2FsbEJhY2tGdW5jdGlvbjogW3JhbmRvbUtuaWdodFBsYWNlbWVudF19KSk7XG4gICAgY29udHJvbERpdi5hcHBlbmRDaGlsZChtYWtlQnV0dG9uKHtpZDogJ3NlbGVjdERlc3RpbmF0aW9uJywgdGl0bGU6ICdTZWxlY3QgRGVzdGluYXRpb24gQnV0dG9uJywgdGV4dENvbnRlbnQ6ICdTZWxlY3QgRGVzdGluYXRpb24nLCBjYWxsQmFja0Z1bmN0aW9uOiBbc2VsZWN0RGVzdGluYXRpb24sIHVwZGF0ZUJ1dHRvblN0eWxlXX0pKTtcbiAgICBjb250cm9sRGl2LmFwcGVuZENoaWxkKG1ha2VCdXR0b24oe2lkOiAnc3RhcnRUcmF2YWlscycsIHRpdGxlOiAnU3RhcnQgVHJhdmFpbHMgQnV0dG9uJywgdGV4dENvbnRlbnQ6ICdTdGFydCBUcmF2YWlscycsIGNhbGxCYWNrRnVuY3Rpb246IFt0cmF2YWlsc119KSk7XG4gICAgY29udHJvbERpdi5hcHBlbmRDaGlsZChtYWtlQnV0dG9uKHtpZDogJ2NsZWFyQm9hcmQnLCB0aXRsZTogJ0NsZWFyIEJvYXJkIEJ1dHRvbicsIHRleHRDb250ZW50OiAnQ2xlYXIgQm9hcmQnLCBjYWxsQmFja0Z1bmN0aW9uOiBbcmVzZXQsIGNsZWFyUGF0aF19KSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUJ1dHRvblN0eWxlKGV2ZW50KSB7XG4gICAgY29uc3QgYnV0dG9uV2l0aE9uUG9zaXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub25Qb3NpdGlvbicpO1xuICAgIGlmKGV2ZW50KSB7XG4gICAgICAgIGJ1dHRvbldpdGhPblBvc2l0aW9uID8gYnV0dG9uV2l0aE9uUG9zaXRpb24uY2xhc3NMaXN0LnJlbW92ZSgnb25Qb3NpdGlvbicpIDogJ2RvTm90aGluZyc7XG4gICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdvblBvc2l0aW9uJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYnV0dG9uV2l0aE9uUG9zaXRpb24gPyBidXR0b25XaXRoT25Qb3NpdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdvblBvc2l0aW9uJykgOiAnZG9Ob3RoaW5nJztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1ha2VDaGVzc0JvYXJkRGl2KCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgY29uc3QgY2hlc3NCb2FyZERpdiA9IG1ha2VEaXYoe2lkOiAnY2hlc3NCb2FyZCd9KTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNoZXNzQm9hcmREaXYpO1xufVxuXG5mdW5jdGlvbiBjaGVzc0JvYXJkQm94Q2xpY2tlZChldmVudCkge1xuICAgIGNvbnN0IHggPSBOdW1iZXIoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1jb29yZGluYXRlcycpLmNoYXJBdCgwKSk7XG4gICAgY29uc3QgeSA9IE51bWJlcihldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvb3JkaW5hdGVzJykuY2hhckF0KDEpKTtcbiAgICBrbmlnaHRQbGFjZW1lbnQoW3gsIHldKTtcbiAgICBzZWxlY3REZXN0aW5hdGlvbihbeCwgeV0pO1xufVxuXG5mdW5jdGlvbiBtYWtlQ2hlc3NCb2FyZEJveERpdigpIHtcbiAgICBjb25zdCBjaGVzc0JvYXJkRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoZXNzQm9hcmQnKTtcbiAgICBmb3IobGV0IGk9MDsgaTw4OyBpKyspIHtcbiAgICAgICAgZm9yKGxldCBqPTA7IGo8ODsgaisrKSB7XG4gICAgICAgICAgICBjaGVzc0JvYXJkRGl2LmFwcGVuZENoaWxkKG1ha2VEaXYoe1xuICAgICAgICAgICAgICAgIGlkOiBgYm94JHtqKzF9JHtNYXRoLmFicyg4LWkpfWAsIFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZXM6IGBib3ggJHsoaiArIE1hdGguYWJzKDctaSkpICUgMiA9PT0gMCA/ICdibGFjaycgOiAnd2hpdGUnfWAsIFxuICAgICAgICAgICAgICAgIC8vIHRleHRDb250ZW50OiBgJHtqKzF9JHtNYXRoLmFicyg4LWkpfWAsICBcbiAgICAgICAgICAgICAgICB0aXRsZTogYEJveCAke1N0cmluZy5mcm9tQ2hhckNvZGUoNjQgKyBNYXRoLmFicyhqKzEpKX0kezgtaX1gLFxuICAgICAgICAgICAgICAgIGRhdGFBdHRyaWJ1dGVOYW1lOiAnY29vcmRpbmF0ZXMnLFxuICAgICAgICAgICAgICAgIGRhdGFBdHRyaWJ1dGVWYWx1ZTogYCR7an0ke01hdGguYWJzKDctaSl9YCxcbiAgICAgICAgICAgICAgICBjYWxsQmFja0Z1bmN0aW9uOiBjaGVzc0JvYXJkQm94Q2xpY2tlZCxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlQ2hlc3NCb2FyZEJveENsYXNzU3RhcnQoYm94QXR0cmlidXRlKSB7XG4gICAgY29uc3QgYm94V2l0aENsYXNzU3RhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYm94LnN0YXJ0YCk7XG4gICAgYm94V2l0aENsYXNzU3RhcnQgPyBib3hXaXRoQ2xhc3NTdGFydC5jbGFzc0xpc3QucmVtb3ZlKCdzdGFydCcpIDogJ2RvTm90aGluZycgO1xuICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCBkaXYuYm94W2RhdGEtY29vcmRpbmF0ZXMgPSAnJHtib3hBdHRyaWJ1dGV9J11gKTtcbiAgICBib3ggPyBib3guY2xhc3NMaXN0LmFkZCgnc3RhcnQnKSA6ICdkb05vdGhpbmcnO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDaGVzc0JvYXJkQm94Q2xhc3NQYXRoKGJveEF0dHJpYnV0ZSkge1xuICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCBkaXYuYm94W2RhdGEtY29vcmRpbmF0ZXMgPSAnJHtib3hBdHRyaWJ1dGV9J11gKTtcbiAgICBib3ggPyBib3guY2xhc3NMaXN0LmFkZCgncGF0aCcpIDogJ2RvTm90aGluZyc7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNoZXNzQm9hcmRCb3hUZXh0Q29udGVudChib3hBdHRyaWJ1dGUsIHRleHQpIHtcbiAgICBjb25zdCBib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAgZGl2LmJveFtkYXRhLWNvb3JkaW5hdGVzID0gJyR7Ym94QXR0cmlidXRlfSddYCk7XG4gICAgYm94LnRleHRDb250ZW50ID0gYm94ID8gIHRleHQgOiAnJztcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ2hlc3NCb2FyZEJveENsYXNzRW5kKGJveEF0dHJpYnV0ZSkge1xuICAgIGNvbnN0IGJveFdpdGhDbGFzc0VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5ib3guZW5kYCk7XG4gICAgYm94V2l0aENsYXNzRW5kID8gYm94V2l0aENsYXNzRW5kLmNsYXNzTGlzdC5yZW1vdmUoJ2VuZCcpIDogJ2RvTm90aGluZycgO1xuICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCBkaXYuYm94W2RhdGEtY29vcmRpbmF0ZXMgPSAnJHtib3hBdHRyaWJ1dGV9J11gKTtcbiAgICBib3ggPyBib3guY2xhc3NMaXN0LmFkZCgnZW5kJykgOiAnZG9Ob3RoaW5nJztcbn1cblxuZnVuY3Rpb24gY2xlYXJQYXRoKCkge1xuICAgIGNvbnN0IGJveGV4V2l0aENsYXNzUGF0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib3gucGF0aCcpO1xuICAgIGJveGV4V2l0aENsYXNzUGF0aCA/IEFycmF5LmZyb20oYm94ZXhXaXRoQ2xhc3NQYXRoKS5mb3JFYWNoKGJveCA9PiB7Ym94LmNsYXNzTGlzdC5yZW1vdmUoJ3BhdGgnKTsgYm94LnRleHRDb250ZW50ID0gJyc7fSk6ICdkb05vdGhpbmcnO1xufVxuXG5mdW5jdGlvbiBzdGFydCgpIHtcbiAgICBtYWtlSGVhZGVyKCk7XG4gICAgbWFrZU1haW4oKTtcbiAgICBtYWtlRm9vdGVyKCk7XG4gICAgbWFrZVRpdGxlRGl2KCk7XG4gICAgbWFrZUNvbnRyb2xzRGl2KCk7XG4gICAgbWFrZUNoZXNzQm9hcmREaXYoKTtcbiAgICBtYWtlQ29udHJvbEJ1dHRvbigpO1xuICAgIG1ha2VDaGVzc0JvYXJkQm94RGl2KCk7XG4gICAgbWFrZVNvdXJjZUNvZGVMaW5rRGl2KCk7XG59XG5cbmV4cG9ydCAgeyBzdGFydCwgdXBkYXRlQnV0dG9uU3R5bGUsIFxuICAgICAgICB1cGRhdGVDaGVzc0JvYXJkQm94Q2xhc3NTdGFydCwgXG4gICAgICAgIHVwZGF0ZUNoZXNzQm9hcmRCb3hDbGFzc1BhdGgsXG4gICAgICAgIHVwZGF0ZUNoZXNzQm9hcmRCb3hUZXh0Q29udGVudCwgXG4gICAgICAgIHVwZGF0ZUNoZXNzQm9hcmRCb3hDbGFzc0VuZCwgY2xlYXJQYXRoIH07ICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==