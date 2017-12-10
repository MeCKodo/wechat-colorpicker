(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var EventBus = (function () {
    function EventBus() {
        this.events = {};
    }
    EventBus.prototype.on = function (type, fn) {
        if (this.events[type]) {
            this.events[type].push(fn);
        }
        else {
            this.events[type] = [fn];
        }
    };
    EventBus.prototype.emit = function (type) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!this.events[type]) {
            return;
        }
        this.events[type].forEach(function (fn) {
            fn.apply(void 0, args);
        });
    };
    EventBus.prototype.off = function (type, fn) {
        var _this = this;
        var typeArr = this.events[type];
        if (!typeArr) {
            return;
        }
        typeArr.forEach(function (cb, index) {
            if (fn === cb) {
                _this.events[type].splice(index, 1);
            }
        });
    };
    return EventBus;
}());
/* harmony default export */ __webpack_exports__["a"] = (new EventBus());


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CHANGE_TAB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHANGE_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return UPDATE_RECENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GET_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CLEAR_COLOR; });
var CHANGE_TAB = 'CHANGE_TAB';
var CHANGE_COLOR = 'CHANGE_COLOR';
var UPDATE_RECENT = 'UPDATE_RECENT';
var GET_COLOR = 'GET_COLOR';
var CLEAR_COLOR = 'CLEAR_COLOR';


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (useSourceMap) {
    var list = [];
    list.toString = function toString() {
        return this.map(function (item) {
            var content = cssWithMappingToString(item, useSourceMap);
            if (item[2]) {
                return "@media " + item[2] + "{" + content + "}";
            }
            else {
                return content;
            }
        }).join("");
    };
    list.i = function (modules, mediaQuery) {
        if (typeof modules === "string")
            modules = [[null, modules, ""]];
        var alreadyImportedModules = {};
        for (var i = 0; i < this.length; i++) {
            var id = this[i][0];
            if (typeof id === "number")
                alreadyImportedModules[id] = true;
        }
        for (i = 0; i < modules.length; i++) {
            var item = modules[i];
            if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
                if (mediaQuery && !item[2]) {
                    item[2] = mediaQuery;
                }
                else if (mediaQuery) {
                    item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
                }
                list.push(item);
            }
        }
    };
    return list;
};
function cssWithMappingToString(item, useSourceMap) {
    var content = item[1] || '';
    var cssMapping = item[3];
    if (!cssMapping) {
        return content;
    }
    if (useSourceMap && typeof btoa === 'function') {
        var sourceMapping = toComment(cssMapping);
        var sourceURLs = cssMapping.sources.map(function (source) {
            return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
        });
        return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
    }
    return [content].join('\n');
}
function toComment(sourceMap) {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
    var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
    return '/*# ' + data + ' */';
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(7);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_css__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__picker_index__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recent_color_index__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_color_index__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toolbar_index__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__eventBus__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__events_type__ = __webpack_require__(1);







var WeChatColorPicker = (function () {
    function WeChatColorPicker(options) {
        var _this = this;
        this.domWrapper = document.createElement('div');
        this.recentComponent = new __WEBPACK_IMPORTED_MODULE_2__recent_color_index__["a" /* default */]();
        this.baseComponent = new __WEBPACK_IMPORTED_MODULE_3__base_color_index__["a" /* default */]();
        this.toolbarComponent = new __WEBPACK_IMPORTED_MODULE_4__toolbar_index__["a" /* default */]();
        if (!options.el) {
            console.error('必须指定el参数');
            return;
        }
        var dogFrg = document.createDocumentFragment();
        dogFrg.appendChild(this.recentComponent.dom);
        dogFrg.appendChild(this.baseComponent.dom);
        dogFrg.appendChild(this.toolbarComponent.dom);
        this.domWrapper.className = 'wechat-colorpicker base-color';
        this.domWrapper.appendChild(dogFrg);
        setTimeout(function () {
            new __WEBPACK_IMPORTED_MODULE_1__picker_index__["a" /* default */]({
                el: '.wechat-picker-box',
                color: '#000',
            });
        });
        __WEBPACK_IMPORTED_MODULE_5__eventBus__["a" /* default */].on(__WEBPACK_IMPORTED_MODULE_6__events_type__["d" /* GET_COLOR */], function (color) { return options.click(color); });
        __WEBPACK_IMPORTED_MODULE_5__eventBus__["a" /* default */].on(__WEBPACK_IMPORTED_MODULE_6__events_type__["c" /* CLEAR_COLOR */], function () { return options.clear(); });
        __WEBPACK_IMPORTED_MODULE_5__eventBus__["a" /* default */].on(__WEBPACK_IMPORTED_MODULE_6__events_type__["b" /* CHANGE_TAB */], function (type) {
            _this.domWrapper.className = "wechat-colorpicker " + type;
        });
        document.querySelector(options.el).appendChild(this.domWrapper);
    }
    return WeChatColorPicker;
}());
if (window) {
    window.WeChatColorPicker = WeChatColorPicker;
}
/* harmony default export */ __webpack_exports__["default"] = (WeChatColorPicker);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(6);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(3)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./style.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n.wechat-colorpicker {\n    padding: 20px;\n    width: 220px;\n    background: #fff;\n    font-weight: 100;\n    border: 1px solid #e7e7eb;\n    text-align: left;\n}\n.wechat-colorpicker.base-color .wechat-picker-box i:first-child {\n    color: #8d8d8d;\n}\n.wechat-colorpicker.more-color .wechat-picker-box i:last-child {\n    color: #8d8d8d;\n}\n.wechat-colorpicker.base-color .wechat-picker {\n    display: none;\n}\n.wechat-colorpicker.more-color .wechat-base-wrapper {\n    display: none;\n}\n.wechat-picker {\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    position: relative;\n}\n\n.wechat-picker-saturation {\n    position: relative;\n    height: 100%;\n    background: -webkit-linear-gradient(left, #fff, #f00);\n    background: linear-gradient(to right, #fff, #f00);\n    float: left;\n    margin-right: 10px;\n    cursor: crosshair;\n}\n\n.wechat-picker-brightness {\n    width: 100%;\n    height: 100%;\n    background: -webkit-linear-gradient(rgba(255, 255, 255, 0), #000);\n    background: linear-gradient(rgba(255, 255, 255, 0), #000);\n}\n\n.wechat-picker-sbSelector {\n    border: 1px solid #fff !important;\n    position: absolute;\n    width: 7px;\n    height: 7px;\n    background: #fff;\n    border-radius: 4px;\n    top: -3px;\n    left: -3px;\n    box-sizing: border-box;\n    z-index: 10;\n}\n\n.wechat-picker-hue {\n    width: 20px;\n    height: 100%;\n    position: relative;\n    float: left;\n    background: -webkit-linear-gradient(#f00 0%, #f0f 17%, #00f 34%, #0ff 50%, #0f0 67%, #ff0 84%, #f00 100%);\n    background: linear-gradient(#f00 0%, #f0f 17%, #00f 34%, #0ff 50%, #0f0 67%, #ff0 84%, #f00 100%);\n}\n\n.wechat-picker-hSelector {\n    position: absolute;\n    top: 0;\n    left: 0;\n    background: #fff;\n    border-bottom: 1px solid #000;\n    width: 20px;\n    height: 5px;\n    border-radius: 50px;\n}\n", ""]);

// exports


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (css) {
    var location = typeof window !== "undefined" && window.location;
    if (!location) {
        throw new Error("fixUrls requires window.location");
    }
    if (!css || typeof css !== "string") {
        return css;
    }
    var baseUrl = location.protocol + "//" + location.host;
    var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");
    var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
        var unquotedOrigUrl = origUrl
            .trim()
            .replace(/^"(.*)"$/, function (o, $1) { return $1; })
            .replace(/^'(.*)'$/, function (o, $1) { return $1; });
        if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
            return fullMatch;
        }
        var newUrl;
        if (unquotedOrigUrl.indexOf("//") === 0) {
            newUrl = unquotedOrigUrl;
        }
        else if (unquotedOrigUrl.indexOf("/") === 0) {
            newUrl = baseUrl + unquotedOrigUrl;
        }
        else {
            newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, "");
        }
        return "url(" + JSON.stringify(newUrl) + ")";
    });
    return fixedCss;
};


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__eventBus__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__events_type__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_tinycolor2__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_tinycolor2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_tinycolor2__);



var isNumber = function (val) { return (typeof val === 'number' || val instanceof Number); };
function SimpleColorPicker(options) {
    if (options === void 0) { options = {}; }
    this.color = null;
    this.width = 0;
    this.widthUnits = 'px';
    this.height = 0;
    this.heightUnits = 'px';
    this.hue = 0;
    this.position = { x: 0, y: 0 };
    this.huePosition = 0;
    this.saturationWidth = 0;
    this.hueHeight = 0;
    this.maxHue = 0;
    this.inputIsNumber = false;
    this._onSaturationMouseDown = this._onSaturationMouseDown.bind(this);
    this._onSaturationMouseMove = this._onSaturationMouseMove.bind(this);
    this._onSaturationMouseUp = this._onSaturationMouseUp.bind(this);
    this._onHueMouseDown = this._onHueMouseDown.bind(this);
    this._onHueMouseMove = this._onHueMouseMove.bind(this);
    this._onHueMouseUp = this._onHueMouseUp.bind(this);
    this.window = options.window || window;
    this.document = this.window.document;
    this.$el = this.document.createElement('div');
    this.$el.className = 'wechat-picker';
    this.$el.innerHTML = "\n      <div class=\"wechat-picker-saturation\">\n        <div class=\"wechat-picker-brightness\"></div>\n        <div class=\"wechat-picker-sbSelector\"></div>\n      </div>\n      <div class=\"wechat-picker-hue\">\n        <div class=\"wechat-picker-hSelector\"></div>\n      </div>";
    this.$saturation = this.$el.querySelector('.wechat-picker-saturation');
    this.$hue = this.$el.querySelector('.wechat-picker-hue');
    this.$sbSelector = this.$el.querySelector('.wechat-picker-sbSelector');
    this.$hSelector = this.$el.querySelector('.wechat-picker-hSelector');
    this.$saturation.addEventListener('mousedown', this._onSaturationMouseDown);
    this.$saturation.addEventListener('touchstart', this._onSaturationMouseDown);
    this.$hue.addEventListener('mousedown', this._onHueMouseDown);
    this.$hue.addEventListener('touchstart', this._onHueMouseDown);
    if (options.el) {
        this.appendTo(options.el);
    }
    if (options.background) {
        this.setBackgroundColor(options.background);
    }
    if (options.widthUnits) {
        this.widthUnits = options.widthUnits;
    }
    if (options.heightUnits) {
        this.heightUnits = options.heightUnits;
    }
    this.setSize(options.width || 220, options.height || 150);
    this.setColor(options.color);
    __WEBPACK_IMPORTED_MODULE_0__eventBus__["a" /* default */].on(__WEBPACK_IMPORTED_MODULE_1__events_type__["a" /* CHANGE_COLOR */], options.onChange || function () { });
    return this;
}
SimpleColorPicker.prototype.appendTo = function (el) {
    if (typeof el === 'string') {
        document.querySelector(el).appendChild(this.$el);
    }
    else {
        el.appendChild(this.$el);
    }
    return this;
};
SimpleColorPicker.prototype.remove = function () {
    this._onSaturationMouseUp();
    this._onHueMouseUp();
    this.$saturation.removeEventListener('mousedown', this._onSaturationMouseDown);
    this.$saturation.removeEventListener('touchstart', this._onSaturationMouseDown);
    this.$hue.removeEventListener('mousedown', this._onHueMouseDown);
    this.$hue.removeEventListener('touchstart', this._onHueMouseDown);
    this.off();
    if (this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el);
    }
};
SimpleColorPicker.prototype.setColor = function (color) {
    if (isNumber(color)) {
        this.inputIsNumber = true;
        color = numberToHex(color);
    }
    else {
        this.inputIsNumber = false;
    }
    this.color = __WEBPACK_IMPORTED_MODULE_2_tinycolor2___default()(color);
    var hsvColor = this.color.toHsv();
    if (!isNaN(hsvColor.h)) {
        this.hue = hsvColor.h;
    }
    this._moveSelectorTo(this.saturationWidth * hsvColor.s, (1 - hsvColor.v) * this.hueHeight);
    this._updateHue();
    return this;
};
SimpleColorPicker.prototype.setSize = function (width, height) {
    this.width = width;
    this.height = height;
    this.$el.style.width = this.width + this.widthUnits;
    this.$el.style.height = this.height + this.heightUnits;
    this.saturationWidth = this.width - 30;
    this.$saturation.style.width = this.saturationWidth + 'px';
    this.hueHeight = this.height;
    this.maxHue = this.hueHeight - 2;
    return this;
};
SimpleColorPicker.prototype.setBackgroundColor = function (color) {
    if (isNumber(color)) {
        color = numberToHex(color);
    }
    this.$el.style.background = __WEBPACK_IMPORTED_MODULE_2_tinycolor2___default()(color).toHexString();
    return this;
};
SimpleColorPicker.prototype.setNoBackground = function () {
    this.$el.style.padding = '0px';
    this.$el.style.background = 'none';
};
SimpleColorPicker.prototype.onChange = function () {
    __WEBPACK_IMPORTED_MODULE_0__eventBus__["a" /* default */].emit(__WEBPACK_IMPORTED_MODULE_1__events_type__["a" /* CHANGE_COLOR */], this.getHexString());
    return this;
};
SimpleColorPicker.prototype.getColor = function () {
    if (this.inputIsNumber) {
        return this.getHexNumber();
    }
    return this.color.toString();
};
SimpleColorPicker.prototype.getHexString = function () {
    return this.color.toHexString().toUpperCase();
};
SimpleColorPicker.prototype.getHexNumber = function () {
    return parseInt(this.color.toHex(), 16);
};
SimpleColorPicker.prototype.getRGB = function () {
    return this.color.toRgb();
};
SimpleColorPicker.prototype.getHSV = function () {
    return this.color.toHsv();
};
SimpleColorPicker.prototype.isDark = function () {
    return this.color.isDark();
};
SimpleColorPicker.prototype.isLight = function () {
    return this.color.isLight();
};
SimpleColorPicker.prototype._moveSelectorTo = function (x, y) {
    this.position.x = clamp(x, 0, this.saturationWidth);
    this.position.y = clamp(y, 0, this.hueHeight);
    this.$sbSelector.style.webkitTransform = "translate3d(" + this.position.x + "px, " + this.position.y + "px, 0)";
};
SimpleColorPicker.prototype._updateColorFromPosition = function () {
    this.color = __WEBPACK_IMPORTED_MODULE_2_tinycolor2___default()({
        h: this.hue,
        s: this.position.x / this.saturationWidth,
        v: 1 - (this.position.y / this.hueHeight)
    });
    this._updateColor();
};
SimpleColorPicker.prototype._moveHueTo = function (y) {
    this.huePosition = clamp(y, 0, this.maxHue);
    this.$hSelector.style.webkitTransform = "translate3d(0," + this.huePosition + "px, 0)";
};
SimpleColorPicker.prototype._updateHueFromPosition = function () {
    var hsvColor = this.color.toHsv();
    this.hue = 360 * (1 - (this.huePosition / this.maxHue));
    this.color = __WEBPACK_IMPORTED_MODULE_2_tinycolor2___default()({ h: this.hue, s: hsvColor.s, v: hsvColor.v });
    this._updateHue();
};
SimpleColorPicker.prototype._updateHue = function () {
    var hueColor = __WEBPACK_IMPORTED_MODULE_2_tinycolor2___default()({ h: this.hue, s: 1, v: 1 });
    this.$saturation.style.background = "linear-gradient(to right, #fff, " + hueColor.toHexString() + ")";
    this._updateColor();
};
SimpleColorPicker.prototype._updateColor = function () {
    this.$sbSelector.style.background = this.color.toHexString();
    this.$sbSelector.style.borderColor = this.color.isDark() ? '#fff' : '#000';
    __WEBPACK_IMPORTED_MODULE_0__eventBus__["a" /* default */].emit(__WEBPACK_IMPORTED_MODULE_1__events_type__["a" /* CHANGE_COLOR */], this.color.toHexString());
};
SimpleColorPicker.prototype._onSaturationMouseDown = function (e) {
    var sbOffset = this.$saturation.getBoundingClientRect();
    var xPos = getMousePosition(e).x;
    var yPos = getMousePosition(e).y;
    this._moveSelectorTo(xPos - sbOffset.left, yPos - sbOffset.top);
    this._updateColorFromPosition();
    this.window.addEventListener('mouseup', this._onSaturationMouseUp);
    this.window.addEventListener('touchend', this._onSaturationMouseUp);
    this.window.addEventListener('mousemove', this._onSaturationMouseMove);
    this.window.addEventListener('touchmove', this._onSaturationMouseMove);
    e.preventDefault();
};
SimpleColorPicker.prototype._onSaturationMouseMove = function (e) {
    var sbOffset = this.$saturation.getBoundingClientRect();
    var xPos = getMousePosition(e).x;
    var yPos = getMousePosition(e).y;
    this._moveSelectorTo(xPos - sbOffset.left, yPos - sbOffset.top);
    this._updateColorFromPosition();
};
SimpleColorPicker.prototype._onSaturationMouseUp = function () {
    this.window.removeEventListener('mouseup', this._onSaturationMouseUp);
    this.window.removeEventListener('touchend', this._onSaturationMouseUp);
    this.window.removeEventListener('mousemove', this._onSaturationMouseMove);
    this.window.removeEventListener('touchmove', this._onSaturationMouseMove);
};
SimpleColorPicker.prototype._onHueMouseDown = function (e) {
    var hOffset = this.$hue.getBoundingClientRect();
    var yPos = getMousePosition(e).y;
    this._moveHueTo(yPos - hOffset.top);
    this._updateHueFromPosition();
    this.window.addEventListener('mouseup', this._onHueMouseUp);
    this.window.addEventListener('touchend', this._onHueMouseUp);
    this.window.addEventListener('mousemove', this._onHueMouseMove);
    this.window.addEventListener('touchmove', this._onHueMouseMove);
    e.preventDefault();
};
SimpleColorPicker.prototype._onHueMouseMove = function (e) {
    var hOffset = this.$hue.getBoundingClientRect();
    var yPos = getMousePosition(e).y;
    this._moveHueTo(yPos - hOffset.top);
    this._updateHueFromPosition();
};
SimpleColorPicker.prototype._onHueMouseUp = function () {
    this.window.removeEventListener('mouseup', this._onHueMouseUp);
    this.window.removeEventListener('touchend', this._onHueMouseUp);
    this.window.removeEventListener('mousemove', this._onHueMouseMove);
    this.window.removeEventListener('touchmove', this._onHueMouseMove);
};
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
function getMousePosition(e) {
    e = (e.type.indexOf('touch') === 0) ? e.touches[0] : e;
    return {
        x: e.clientX,
        y: e.clientY
    };
}
function numberToHex(color) {
    return '#' + ('00000' + (color | 0).toString(16)).substr(-6);
}
/* harmony default export */ __webpack_exports__["a"] = (SimpleColorPicker);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;
(function (Math) {
    var trimLeft = /^\s+/, trimRight = /\s+$/, tinyCounter = 0, mathRound = Math.round, mathMin = Math.min, mathMax = Math.max, mathRandom = Math.random;
    function tinycolor(color, opts) {
        color = (color) ? color : '';
        opts = opts || {};
        if (color instanceof tinycolor) {
            return color;
        }
        if (!(this instanceof tinycolor)) {
            return new tinycolor(color, opts);
        }
        var rgb = inputToRGB(color);
        this._originalInput = color,
            this._r = rgb.r,
            this._g = rgb.g,
            this._b = rgb.b,
            this._a = rgb.a,
            this._roundA = mathRound(100 * this._a) / 100,
            this._format = opts.format || rgb.format;
        this._gradientType = opts.gradientType;
        if (this._r < 1) {
            this._r = mathRound(this._r);
        }
        if (this._g < 1) {
            this._g = mathRound(this._g);
        }
        if (this._b < 1) {
            this._b = mathRound(this._b);
        }
        this._ok = rgb.ok;
        this._tc_id = tinyCounter++;
    }
    tinycolor.prototype = {
        isDark: function () {
            return this.getBrightness() < 128;
        },
        isLight: function () {
            return !this.isDark();
        },
        isValid: function () {
            return this._ok;
        },
        getOriginalInput: function () {
            return this._originalInput;
        },
        getFormat: function () {
            return this._format;
        },
        getAlpha: function () {
            return this._a;
        },
        getBrightness: function () {
            var rgb = this.toRgb();
            return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
        },
        getLuminance: function () {
            var rgb = this.toRgb();
            var RsRGB, GsRGB, BsRGB, R, G, B;
            RsRGB = rgb.r / 255;
            GsRGB = rgb.g / 255;
            BsRGB = rgb.b / 255;
            if (RsRGB <= 0.03928) {
                R = RsRGB / 12.92;
            }
            else {
                R = Math.pow(((RsRGB + 0.055) / 1.055), 2.4);
            }
            if (GsRGB <= 0.03928) {
                G = GsRGB / 12.92;
            }
            else {
                G = Math.pow(((GsRGB + 0.055) / 1.055), 2.4);
            }
            if (BsRGB <= 0.03928) {
                B = BsRGB / 12.92;
            }
            else {
                B = Math.pow(((BsRGB + 0.055) / 1.055), 2.4);
            }
            return (0.2126 * R) + (0.7152 * G) + (0.0722 * B);
        },
        setAlpha: function (value) {
            this._a = boundAlpha(value);
            this._roundA = mathRound(100 * this._a) / 100;
            return this;
        },
        toHsv: function () {
            var hsv = rgbToHsv(this._r, this._g, this._b);
            return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };
        },
        toHsvString: function () {
            var hsv = rgbToHsv(this._r, this._g, this._b);
            var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
            return (this._a == 1) ?
                "hsv(" + h + ", " + s + "%, " + v + "%)" :
                "hsva(" + h + ", " + s + "%, " + v + "%, " + this._roundA + ")";
        },
        toHsl: function () {
            var hsl = rgbToHsl(this._r, this._g, this._b);
            return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };
        },
        toHslString: function () {
            var hsl = rgbToHsl(this._r, this._g, this._b);
            var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
            return (this._a == 1) ?
                "hsl(" + h + ", " + s + "%, " + l + "%)" :
                "hsla(" + h + ", " + s + "%, " + l + "%, " + this._roundA + ")";
        },
        toHex: function (allow3Char) {
            return rgbToHex(this._r, this._g, this._b, allow3Char);
        },
        toHexString: function (allow3Char) {
            return '#' + this.toHex(allow3Char);
        },
        toHex8: function (allow4Char) {
            return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
        },
        toHex8String: function (allow4Char) {
            return '#' + this.toHex8(allow4Char);
        },
        toRgb: function () {
            return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };
        },
        toRgbString: function () {
            return (this._a == 1) ?
                "rgb(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" :
                "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
        },
        toPercentageRgb: function () {
            return { r: mathRound(bound01(this._r, 255) * 100) + "%", g: mathRound(bound01(this._g, 255) * 100) + "%", b: mathRound(bound01(this._b, 255) * 100) + "%", a: this._a };
        },
        toPercentageRgbString: function () {
            return (this._a == 1) ?
                "rgb(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" :
                "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
        },
        toName: function () {
            if (this._a === 0) {
                return "transparent";
            }
            if (this._a < 1) {
                return false;
            }
            return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
        },
        toFilter: function (secondColor) {
            var hex8String = '#' + rgbaToArgbHex(this._r, this._g, this._b, this._a);
            var secondHex8String = hex8String;
            var gradientType = this._gradientType ? "GradientType = 1, " : "";
            if (secondColor) {
                var s = tinycolor(secondColor);
                secondHex8String = '#' + rgbaToArgbHex(s._r, s._g, s._b, s._a);
            }
            return "progid:DXImageTransform.Microsoft.gradient(" + gradientType + "startColorstr=" + hex8String + ",endColorstr=" + secondHex8String + ")";
        },
        toString: function (format) {
            var formatSet = !!format;
            format = format || this._format;
            var formattedString = false;
            var hasAlpha = this._a < 1 && this._a >= 0;
            var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");
            if (needsAlphaFormat) {
                if (format === "name" && this._a === 0) {
                    return this.toName();
                }
                return this.toRgbString();
            }
            if (format === "rgb") {
                formattedString = this.toRgbString();
            }
            if (format === "prgb") {
                formattedString = this.toPercentageRgbString();
            }
            if (format === "hex" || format === "hex6") {
                formattedString = this.toHexString();
            }
            if (format === "hex3") {
                formattedString = this.toHexString(true);
            }
            if (format === "hex4") {
                formattedString = this.toHex8String(true);
            }
            if (format === "hex8") {
                formattedString = this.toHex8String();
            }
            if (format === "name") {
                formattedString = this.toName();
            }
            if (format === "hsl") {
                formattedString = this.toHslString();
            }
            if (format === "hsv") {
                formattedString = this.toHsvString();
            }
            return formattedString || this.toHexString();
        },
        clone: function () {
            return tinycolor(this.toString());
        },
        _applyModification: function (fn, args) {
            var color = fn.apply(null, [this].concat([].slice.call(args)));
            this._r = color._r;
            this._g = color._g;
            this._b = color._b;
            this.setAlpha(color._a);
            return this;
        },
        lighten: function () {
            return this._applyModification(lighten, arguments);
        },
        brighten: function () {
            return this._applyModification(brighten, arguments);
        },
        darken: function () {
            return this._applyModification(darken, arguments);
        },
        desaturate: function () {
            return this._applyModification(desaturate, arguments);
        },
        saturate: function () {
            return this._applyModification(saturate, arguments);
        },
        greyscale: function () {
            return this._applyModification(greyscale, arguments);
        },
        spin: function () {
            return this._applyModification(spin, arguments);
        },
        _applyCombination: function (fn, args) {
            return fn.apply(null, [this].concat([].slice.call(args)));
        },
        analogous: function () {
            return this._applyCombination(analogous, arguments);
        },
        complement: function () {
            return this._applyCombination(complement, arguments);
        },
        monochromatic: function () {
            return this._applyCombination(monochromatic, arguments);
        },
        splitcomplement: function () {
            return this._applyCombination(splitcomplement, arguments);
        },
        triad: function () {
            return this._applyCombination(triad, arguments);
        },
        tetrad: function () {
            return this._applyCombination(tetrad, arguments);
        }
    };
    tinycolor.fromRatio = function (color, opts) {
        if (typeof color == "object") {
            var newColor = {};
            for (var i in color) {
                if (color.hasOwnProperty(i)) {
                    if (i === "a") {
                        newColor[i] = color[i];
                    }
                    else {
                        newColor[i] = convertToPercentage(color[i]);
                    }
                }
            }
            color = newColor;
        }
        return tinycolor(color, opts);
    };
    function inputToRGB(color) {
        var rgb = { r: 0, g: 0, b: 0 };
        var a = 1;
        var s = null;
        var v = null;
        var l = null;
        var ok = false;
        var format = false;
        if (typeof color == "string") {
            color = stringInputToObject(color);
        }
        if (typeof color == "object") {
            if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
                rgb = rgbToRgb(color.r, color.g, color.b);
                ok = true;
                format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
            }
            else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
                s = convertToPercentage(color.s);
                v = convertToPercentage(color.v);
                rgb = hsvToRgb(color.h, s, v);
                ok = true;
                format = "hsv";
            }
            else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
                s = convertToPercentage(color.s);
                l = convertToPercentage(color.l);
                rgb = hslToRgb(color.h, s, l);
                ok = true;
                format = "hsl";
            }
            if (color.hasOwnProperty("a")) {
                a = color.a;
            }
        }
        a = boundAlpha(a);
        return {
            ok: ok,
            format: color.format || format,
            r: mathMin(255, mathMax(rgb.r, 0)),
            g: mathMin(255, mathMax(rgb.g, 0)),
            b: mathMin(255, mathMax(rgb.b, 0)),
            a: a
        };
    }
    function rgbToRgb(r, g, b) {
        return {
            r: bound01(r, 255) * 255,
            g: bound01(g, 255) * 255,
            b: bound01(b, 255) * 255
        };
    }
    function rgbToHsl(r, g, b) {
        r = bound01(r, 255);
        g = bound01(g, 255);
        b = bound01(b, 255);
        var max = mathMax(r, g, b), min = mathMin(r, g, b);
        var h, s, l = (max + min) / 2;
        if (max == min) {
            h = s = 0;
        }
        else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }
            h /= 6;
        }
        return { h: h, s: s, l: l };
    }
    function hslToRgb(h, s, l) {
        var r, g, b;
        h = bound01(h, 360);
        s = bound01(s, 100);
        l = bound01(l, 100);
        function hue2rgb(p, q, t) {
            if (t < 0)
                t += 1;
            if (t > 1)
                t -= 1;
            if (t < 1 / 6)
                return p + (q - p) * 6 * t;
            if (t < 1 / 2)
                return q;
            if (t < 2 / 3)
                return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        }
        if (s === 0) {
            r = g = b = l;
        }
        else {
            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
        }
        return { r: r * 255, g: g * 255, b: b * 255 };
    }
    function rgbToHsv(r, g, b) {
        r = bound01(r, 255);
        g = bound01(g, 255);
        b = bound01(b, 255);
        var max = mathMax(r, g, b), min = mathMin(r, g, b);
        var h, s, v = max;
        var d = max - min;
        s = max === 0 ? 0 : d / max;
        if (max == min) {
            h = 0;
        }
        else {
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }
            h /= 6;
        }
        return { h: h, s: s, v: v };
    }
    function hsvToRgb(h, s, v) {
        h = bound01(h, 360) * 6;
        s = bound01(s, 100);
        v = bound01(v, 100);
        var i = Math.floor(h), f = h - i, p = v * (1 - s), q = v * (1 - f * s), t = v * (1 - (1 - f) * s), mod = i % 6, r = [v, q, p, p, t, v][mod], g = [t, v, v, q, p, p][mod], b = [p, p, t, v, v, q][mod];
        return { r: r * 255, g: g * 255, b: b * 255 };
    }
    function rgbToHex(r, g, b, allow3Char) {
        var hex = [
            pad2(mathRound(r).toString(16)),
            pad2(mathRound(g).toString(16)),
            pad2(mathRound(b).toString(16))
        ];
        if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
            return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
        }
        return hex.join("");
    }
    function rgbaToHex(r, g, b, a, allow4Char) {
        var hex = [
            pad2(mathRound(r).toString(16)),
            pad2(mathRound(g).toString(16)),
            pad2(mathRound(b).toString(16)),
            pad2(convertDecimalToHex(a))
        ];
        if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
            return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
        }
        return hex.join("");
    }
    function rgbaToArgbHex(r, g, b, a) {
        var hex = [
            pad2(convertDecimalToHex(a)),
            pad2(mathRound(r).toString(16)),
            pad2(mathRound(g).toString(16)),
            pad2(mathRound(b).toString(16))
        ];
        return hex.join("");
    }
    tinycolor.equals = function (color1, color2) {
        if (!color1 || !color2) {
            return false;
        }
        return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
    };
    tinycolor.random = function () {
        return tinycolor.fromRatio({
            r: mathRandom(),
            g: mathRandom(),
            b: mathRandom()
        });
    };
    function desaturate(color, amount) {
        amount = (amount === 0) ? 0 : (amount || 10);
        var hsl = tinycolor(color).toHsl();
        hsl.s -= amount / 100;
        hsl.s = clamp01(hsl.s);
        return tinycolor(hsl);
    }
    function saturate(color, amount) {
        amount = (amount === 0) ? 0 : (amount || 10);
        var hsl = tinycolor(color).toHsl();
        hsl.s += amount / 100;
        hsl.s = clamp01(hsl.s);
        return tinycolor(hsl);
    }
    function greyscale(color) {
        return tinycolor(color).desaturate(100);
    }
    function lighten(color, amount) {
        amount = (amount === 0) ? 0 : (amount || 10);
        var hsl = tinycolor(color).toHsl();
        hsl.l += amount / 100;
        hsl.l = clamp01(hsl.l);
        return tinycolor(hsl);
    }
    function brighten(color, amount) {
        amount = (amount === 0) ? 0 : (amount || 10);
        var rgb = tinycolor(color).toRgb();
        rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * -(amount / 100))));
        rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * -(amount / 100))));
        rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * -(amount / 100))));
        return tinycolor(rgb);
    }
    function darken(color, amount) {
        amount = (amount === 0) ? 0 : (amount || 10);
        var hsl = tinycolor(color).toHsl();
        hsl.l -= amount / 100;
        hsl.l = clamp01(hsl.l);
        return tinycolor(hsl);
    }
    function spin(color, amount) {
        var hsl = tinycolor(color).toHsl();
        var hue = (hsl.h + amount) % 360;
        hsl.h = hue < 0 ? 360 + hue : hue;
        return tinycolor(hsl);
    }
    function complement(color) {
        var hsl = tinycolor(color).toHsl();
        hsl.h = (hsl.h + 180) % 360;
        return tinycolor(hsl);
    }
    function triad(color) {
        var hsl = tinycolor(color).toHsl();
        var h = hsl.h;
        return [
            tinycolor(color),
            tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
            tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
        ];
    }
    function tetrad(color) {
        var hsl = tinycolor(color).toHsl();
        var h = hsl.h;
        return [
            tinycolor(color),
            tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
            tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
            tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
        ];
    }
    function splitcomplement(color) {
        var hsl = tinycolor(color).toHsl();
        var h = hsl.h;
        return [
            tinycolor(color),
            tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l }),
            tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l })
        ];
    }
    function analogous(color, results, slices) {
        results = results || 6;
        slices = slices || 30;
        var hsl = tinycolor(color).toHsl();
        var part = 360 / slices;
        var ret = [tinycolor(color)];
        for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results;) {
            hsl.h = (hsl.h + part) % 360;
            ret.push(tinycolor(hsl));
        }
        return ret;
    }
    function monochromatic(color, results) {
        results = results || 6;
        var hsv = tinycolor(color).toHsv();
        var h = hsv.h, s = hsv.s, v = hsv.v;
        var ret = [];
        var modification = 1 / results;
        while (results--) {
            ret.push(tinycolor({ h: h, s: s, v: v }));
            v = (v + modification) % 1;
        }
        return ret;
    }
    tinycolor.mix = function (color1, color2, amount) {
        amount = (amount === 0) ? 0 : (amount || 50);
        var rgb1 = tinycolor(color1).toRgb();
        var rgb2 = tinycolor(color2).toRgb();
        var p = amount / 100;
        var rgba = {
            r: ((rgb2.r - rgb1.r) * p) + rgb1.r,
            g: ((rgb2.g - rgb1.g) * p) + rgb1.g,
            b: ((rgb2.b - rgb1.b) * p) + rgb1.b,
            a: ((rgb2.a - rgb1.a) * p) + rgb1.a
        };
        return tinycolor(rgba);
    };
    tinycolor.readability = function (color1, color2) {
        var c1 = tinycolor(color1);
        var c2 = tinycolor(color2);
        return (Math.max(c1.getLuminance(), c2.getLuminance()) + 0.05) / (Math.min(c1.getLuminance(), c2.getLuminance()) + 0.05);
    };
    tinycolor.isReadable = function (color1, color2, wcag2) {
        var readability = tinycolor.readability(color1, color2);
        var wcag2Parms, out;
        out = false;
        wcag2Parms = validateWCAG2Parms(wcag2);
        switch (wcag2Parms.level + wcag2Parms.size) {
            case "AAsmall":
            case "AAAlarge":
                out = readability >= 4.5;
                break;
            case "AAlarge":
                out = readability >= 3;
                break;
            case "AAAsmall":
                out = readability >= 7;
                break;
        }
        return out;
    };
    tinycolor.mostReadable = function (baseColor, colorList, args) {
        var bestColor = null;
        var bestScore = 0;
        var readability;
        var includeFallbackColors, level, size;
        args = args || {};
        includeFallbackColors = args.includeFallbackColors;
        level = args.level;
        size = args.size;
        for (var i = 0; i < colorList.length; i++) {
            readability = tinycolor.readability(baseColor, colorList[i]);
            if (readability > bestScore) {
                bestScore = readability;
                bestColor = tinycolor(colorList[i]);
            }
        }
        if (tinycolor.isReadable(baseColor, bestColor, { "level": level, "size": size }) || !includeFallbackColors) {
            return bestColor;
        }
        else {
            args.includeFallbackColors = false;
            return tinycolor.mostReadable(baseColor, ["#fff", "#000"], args);
        }
    };
    var names = tinycolor.names = {
        aliceblue: "f0f8ff",
        antiquewhite: "faebd7",
        aqua: "0ff",
        aquamarine: "7fffd4",
        azure: "f0ffff",
        beige: "f5f5dc",
        bisque: "ffe4c4",
        black: "000",
        blanchedalmond: "ffebcd",
        blue: "00f",
        blueviolet: "8a2be2",
        brown: "a52a2a",
        burlywood: "deb887",
        burntsienna: "ea7e5d",
        cadetblue: "5f9ea0",
        chartreuse: "7fff00",
        chocolate: "d2691e",
        coral: "ff7f50",
        cornflowerblue: "6495ed",
        cornsilk: "fff8dc",
        crimson: "dc143c",
        cyan: "0ff",
        darkblue: "00008b",
        darkcyan: "008b8b",
        darkgoldenrod: "b8860b",
        darkgray: "a9a9a9",
        darkgreen: "006400",
        darkgrey: "a9a9a9",
        darkkhaki: "bdb76b",
        darkmagenta: "8b008b",
        darkolivegreen: "556b2f",
        darkorange: "ff8c00",
        darkorchid: "9932cc",
        darkred: "8b0000",
        darksalmon: "e9967a",
        darkseagreen: "8fbc8f",
        darkslateblue: "483d8b",
        darkslategray: "2f4f4f",
        darkslategrey: "2f4f4f",
        darkturquoise: "00ced1",
        darkviolet: "9400d3",
        deeppink: "ff1493",
        deepskyblue: "00bfff",
        dimgray: "696969",
        dimgrey: "696969",
        dodgerblue: "1e90ff",
        firebrick: "b22222",
        floralwhite: "fffaf0",
        forestgreen: "228b22",
        fuchsia: "f0f",
        gainsboro: "dcdcdc",
        ghostwhite: "f8f8ff",
        gold: "ffd700",
        goldenrod: "daa520",
        gray: "808080",
        green: "008000",
        greenyellow: "adff2f",
        grey: "808080",
        honeydew: "f0fff0",
        hotpink: "ff69b4",
        indianred: "cd5c5c",
        indigo: "4b0082",
        ivory: "fffff0",
        khaki: "f0e68c",
        lavender: "e6e6fa",
        lavenderblush: "fff0f5",
        lawngreen: "7cfc00",
        lemonchiffon: "fffacd",
        lightblue: "add8e6",
        lightcoral: "f08080",
        lightcyan: "e0ffff",
        lightgoldenrodyellow: "fafad2",
        lightgray: "d3d3d3",
        lightgreen: "90ee90",
        lightgrey: "d3d3d3",
        lightpink: "ffb6c1",
        lightsalmon: "ffa07a",
        lightseagreen: "20b2aa",
        lightskyblue: "87cefa",
        lightslategray: "789",
        lightslategrey: "789",
        lightsteelblue: "b0c4de",
        lightyellow: "ffffe0",
        lime: "0f0",
        limegreen: "32cd32",
        linen: "faf0e6",
        magenta: "f0f",
        maroon: "800000",
        mediumaquamarine: "66cdaa",
        mediumblue: "0000cd",
        mediumorchid: "ba55d3",
        mediumpurple: "9370db",
        mediumseagreen: "3cb371",
        mediumslateblue: "7b68ee",
        mediumspringgreen: "00fa9a",
        mediumturquoise: "48d1cc",
        mediumvioletred: "c71585",
        midnightblue: "191970",
        mintcream: "f5fffa",
        mistyrose: "ffe4e1",
        moccasin: "ffe4b5",
        navajowhite: "ffdead",
        navy: "000080",
        oldlace: "fdf5e6",
        olive: "808000",
        olivedrab: "6b8e23",
        orange: "ffa500",
        orangered: "ff4500",
        orchid: "da70d6",
        palegoldenrod: "eee8aa",
        palegreen: "98fb98",
        paleturquoise: "afeeee",
        palevioletred: "db7093",
        papayawhip: "ffefd5",
        peachpuff: "ffdab9",
        peru: "cd853f",
        pink: "ffc0cb",
        plum: "dda0dd",
        powderblue: "b0e0e6",
        purple: "800080",
        rebeccapurple: "663399",
        red: "f00",
        rosybrown: "bc8f8f",
        royalblue: "4169e1",
        saddlebrown: "8b4513",
        salmon: "fa8072",
        sandybrown: "f4a460",
        seagreen: "2e8b57",
        seashell: "fff5ee",
        sienna: "a0522d",
        silver: "c0c0c0",
        skyblue: "87ceeb",
        slateblue: "6a5acd",
        slategray: "708090",
        slategrey: "708090",
        snow: "fffafa",
        springgreen: "00ff7f",
        steelblue: "4682b4",
        tan: "d2b48c",
        teal: "008080",
        thistle: "d8bfd8",
        tomato: "ff6347",
        turquoise: "40e0d0",
        violet: "ee82ee",
        wheat: "f5deb3",
        white: "fff",
        whitesmoke: "f5f5f5",
        yellow: "ff0",
        yellowgreen: "9acd32"
    };
    var hexNames = tinycolor.hexNames = flip(names);
    function flip(o) {
        var flipped = {};
        for (var i in o) {
            if (o.hasOwnProperty(i)) {
                flipped[o[i]] = i;
            }
        }
        return flipped;
    }
    function boundAlpha(a) {
        a = parseFloat(a);
        if (isNaN(a) || a < 0 || a > 1) {
            a = 1;
        }
        return a;
    }
    function bound01(n, max) {
        if (isOnePointZero(n)) {
            n = "100%";
        }
        var processPercent = isPercentage(n);
        n = mathMin(max, mathMax(0, parseFloat(n)));
        if (processPercent) {
            n = parseInt(n * max, 10) / 100;
        }
        if ((Math.abs(n - max) < 0.000001)) {
            return 1;
        }
        return (n % max) / parseFloat(max);
    }
    function clamp01(val) {
        return mathMin(1, mathMax(0, val));
    }
    function parseIntFromHex(val) {
        return parseInt(val, 16);
    }
    function isOnePointZero(n) {
        return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
    }
    function isPercentage(n) {
        return typeof n === "string" && n.indexOf('%') != -1;
    }
    function pad2(c) {
        return c.length == 1 ? '0' + c : '' + c;
    }
    function convertToPercentage(n) {
        if (n <= 1) {
            n = (n * 100) + "%";
        }
        return n;
    }
    function convertDecimalToHex(d) {
        return Math.round(parseFloat(d) * 255).toString(16);
    }
    function convertHexToDecimal(h) {
        return (parseIntFromHex(h) / 255);
    }
    var matchers = (function () {
        var CSS_INTEGER = "[-\\+]?\\d+%?";
        var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
        var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";
        var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
        var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
        return {
            CSS_UNIT: new RegExp(CSS_UNIT),
            rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
            rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
            hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
            hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
            hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
            hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
            hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
        };
    })();
    function isValidCSSUnit(color) {
        return !!matchers.CSS_UNIT.exec(color);
    }
    function stringInputToObject(color) {
        color = color.replace(trimLeft, '').replace(trimRight, '').toLowerCase();
        var named = false;
        if (names[color]) {
            color = names[color];
            named = true;
        }
        else if (color == 'transparent') {
            return { r: 0, g: 0, b: 0, a: 0, format: "name" };
        }
        var match;
        if ((match = matchers.rgb.exec(color))) {
            return { r: match[1], g: match[2], b: match[3] };
        }
        if ((match = matchers.rgba.exec(color))) {
            return { r: match[1], g: match[2], b: match[3], a: match[4] };
        }
        if ((match = matchers.hsl.exec(color))) {
            return { h: match[1], s: match[2], l: match[3] };
        }
        if ((match = matchers.hsla.exec(color))) {
            return { h: match[1], s: match[2], l: match[3], a: match[4] };
        }
        if ((match = matchers.hsv.exec(color))) {
            return { h: match[1], s: match[2], v: match[3] };
        }
        if ((match = matchers.hsva.exec(color))) {
            return { h: match[1], s: match[2], v: match[3], a: match[4] };
        }
        if ((match = matchers.hex8.exec(color))) {
            return {
                r: parseIntFromHex(match[1]),
                g: parseIntFromHex(match[2]),
                b: parseIntFromHex(match[3]),
                a: convertHexToDecimal(match[4]),
                format: named ? "name" : "hex8"
            };
        }
        if ((match = matchers.hex6.exec(color))) {
            return {
                r: parseIntFromHex(match[1]),
                g: parseIntFromHex(match[2]),
                b: parseIntFromHex(match[3]),
                format: named ? "name" : "hex"
            };
        }
        if ((match = matchers.hex4.exec(color))) {
            return {
                r: parseIntFromHex(match[1] + '' + match[1]),
                g: parseIntFromHex(match[2] + '' + match[2]),
                b: parseIntFromHex(match[3] + '' + match[3]),
                a: convertHexToDecimal(match[4] + '' + match[4]),
                format: named ? "name" : "hex8"
            };
        }
        if ((match = matchers.hex3.exec(color))) {
            return {
                r: parseIntFromHex(match[1] + '' + match[1]),
                g: parseIntFromHex(match[2] + '' + match[2]),
                b: parseIntFromHex(match[3] + '' + match[3]),
                format: named ? "name" : "hex"
            };
        }
        return false;
    }
    function validateWCAG2Parms(parms) {
        var level, size;
        parms = parms || { "level": "AA", "size": "small" };
        level = (parms.level || "AA").toUpperCase();
        size = (parms.size || "small").toLowerCase();
        if (level !== "AA" && level !== "AAA") {
            level = "AA";
        }
        if (size !== "small" && size !== "large") {
            size = "small";
        }
        return { "level": level, "size": size };
    }
    if (typeof module !== "undefined" && module.exports) {
        module.exports = tinycolor;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () { return tinycolor; }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
    else {
        window.tinycolor = tinycolor;
    }
})(Math);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_css__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__eventBus__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_type__ = __webpack_require__(1);



var RecentComponent = (function () {
    function RecentComponent() {
        var _this = this;
        this.maxColorLen = 8;
        this.storagePrefix = '__wechat__picker__color__';
        this.dom = document.createElement('div');
        this.dom.className = 'wechat-recent-color';
        this.dom.addEventListener('click', RecentComponent.getRecentColor);
        this.render();
        __WEBPACK_IMPORTED_MODULE_1__eventBus__["a" /* default */].on(__WEBPACK_IMPORTED_MODULE_2__events_type__["e" /* UPDATE_RECENT */], function (color) {
            _this.setRecentColor(color);
            _this.render();
        });
    }
    RecentComponent.prototype.setRecentColor = function (color) {
        var ls = window.localStorage;
        var colorArr = ls.getItem(this.storagePrefix);
        if (colorArr) {
            var temp = colorArr.split(',');
            var hasColor = temp.indexOf(color);
            if (hasColor > -1) {
                temp.splice(hasColor, 1);
            }
            temp.unshift(color);
            if (temp.length > this.maxColorLen) {
                temp.pop();
            }
            colorArr = temp.join(',');
        }
        ls.setItem(this.storagePrefix, colorArr ? colorArr : color);
    };
    RecentComponent.getRecentColor = function (e) {
        var target = e.target;
        if (target.tagName === 'LI') {
            if (target.classList.contains('wechat-recent-item')) {
                __WEBPACK_IMPORTED_MODULE_1__eventBus__["a" /* default */].emit(__WEBPACK_IMPORTED_MODULE_2__events_type__["d" /* GET_COLOR */], target.getAttribute('data-color'));
            }
            else {
                __WEBPACK_IMPORTED_MODULE_1__eventBus__["a" /* default */].emit(__WEBPACK_IMPORTED_MODULE_2__events_type__["c" /* CLEAR_COLOR */]);
            }
        }
    };
    RecentComponent.prototype.genList = function () {
        var li = function (color) { return "<li class=\"wechat-recent-item\" \n                              data-color=\"" + color + "\" \n                              style=\"background: " + color + "\">\n                        </li>"; };
        var ls = window.localStorage;
        var colorArr = ls.getItem(this.storagePrefix);
        return colorArr ?
            colorArr.split(',').map(function (color) { return li(color); }).join('') :
            '';
    };
    RecentComponent.prototype.render = function () {
        this.dom.innerHTML = "\n                        <p>\u6700\u8FD1\u4F7F\u7528\u989C\u8272</p>\n                        <ul>\n                          <li class=\"wechat-clear-color\"></li>  \n                        </ul>\n                        ";
        this.dom.querySelector('.wechat-clear-color').insertAdjacentHTML('afterend', this.genList());
    };
    return RecentComponent;
}());
/* harmony default export */ __webpack_exports__["a"] = (RecentComponent);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(12);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(3)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./style.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, ".wechat-recent-color p {\n  font-size: 14px;\n  margin:0 0 5px 0;\n  color: #8d8d8d;\n}\n.wechat-clear-color {\n  position: relative;\n  background: #fff;\n}\n.wechat-clear-color:after {\n  content: '';\n  position: absolute;\n  top: -3px;\n  right: 9px;\n  width: 1px;\n  height: 25px;\n  background: red;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n.wechat-recent-color ul {\n  padding: 0;\n  margin: 0;\n  font-size: 0;\n}\n.wechat-recent-color li {\n  list-style: none;\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  margin: 0 4px 4px 0;\n  border: 1px solid #e7e7eb;\n  cursor: pointer;\n}", ""]);

// exports


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_css__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__eventBus__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_type__ = __webpack_require__(1);



var BaseComponent = (function () {
    function BaseComponent() {
        this.baseColorArr = ['ffffff', 'ffd7d5', 'ffdaa9', 'fffed5', 'd4fa00', '73fcd6', 'a5c8ff', 'ffacd5', 'ff7faa', 'd6d6d6', 'ffacaa', 'ffb995', 'fffb00', '73fa79', '00fcff', '78acfe', 'd84fa9', 'ff4f79', 'b2b2b2', 'd7aba9', 'ff6827', 'ffda51', '00d100', '00d5ff', '0080ff', 'ac39ff', 'ff2941', '888888', '7a4442', 'ff4c00', 'ffa900', '3da742', '3daad6', '0052ff', '7a4fd6', 'd92142', '000000', '7b0c00', 'ff4c41', 'd6a841', '407600', '007aaa', '021eaa', '797baa', 'ab1942'];
        this.dom = document.createElement('div');
        this.dom.className = 'wechat-picker-box';
        this.dom.innerHTML = "<p>\n                          <i data-type=\"base\">\u57FA\u672C\u8272</i><i data-type=\"more\">\u66F4\u591A\u989C\u8272</i>\n                        </p>\n                        <div class=\"wechat-base-wrapper\">\n                          " + this.genBaseList() + "\n                        </div>";
        this.dom.addEventListener('click', BaseComponent.clickHandler.bind(this));
    }
    BaseComponent.prototype.genBaseList = function () {
        var span = function (color) { return "<span data-color=\"" + color + "\" style=\"background: " + color + "\"></span>"; };
        return this.baseColorArr.map(function (color) { return span("#" + color); }).join('');
    };
    BaseComponent.clickHandler = function (e) {
        var target = e.target;
        if (target.tagName === 'SPAN') {
            BaseComponent.selectColor(target);
        }
        else if (target.tagName === 'I') {
            BaseComponent.switchTab(target.getAttribute('data-type'));
        }
    };
    BaseComponent.selectColor = function (target) {
        var color = target.getAttribute('data-color');
        __WEBPACK_IMPORTED_MODULE_1__eventBus__["a" /* default */].emit(__WEBPACK_IMPORTED_MODULE_2__events_type__["e" /* UPDATE_RECENT */], color);
        __WEBPACK_IMPORTED_MODULE_1__eventBus__["a" /* default */].emit(__WEBPACK_IMPORTED_MODULE_2__events_type__["d" /* GET_COLOR */], color);
    };
    BaseComponent.switchTab = function (type) {
        if (!type)
            return;
        __WEBPACK_IMPORTED_MODULE_1__eventBus__["a" /* default */].emit(__WEBPACK_IMPORTED_MODULE_2__events_type__["b" /* CHANGE_TAB */], type === 'base' ? 'base-color' : 'more-color');
    };
    BaseComponent.prototype.destory = function () {
        this.dom.removeEventListener('click', BaseComponent.clickHandler.bind(this));
    };
    return BaseComponent;
}());
/* harmony default export */ __webpack_exports__["a"] = (BaseComponent);


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(15);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(3)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./style.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, ".wechat-picker-box {\n    padding: 0 0 12px;\n    border-bottom: 1px dotted #e7e7eb;\n}\n.wechat-picker-box span {\n    cursor: pointer;\n}\n.wechat-picker-box p {\n    color: #d2d2d2;\n    font-size: 14px;\n}\n.wechat-picker-box p i {\n    font-style: normal;\n    padding: 0 .5em;\n    border-left: 1px solid #e7e7eb;\n}\n.wechat-picker-box p i:first-child {\n    padding-left: 0;\n    border-left-width: 0;\n}\n.wechat-base-wrapper {\n    font-size: 0;\n}\n.wechat-base-wrapper span {\n    display: inline-block;\n    width: 18px;\n    height: 18px;\n    margin: 0 4px 4px 0;\n    border: 1px solid #e7e7eb;\n}", ""]);

// exports


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_css__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__eventBus__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_type__ = __webpack_require__(1);



var Toolbar = (function () {
    function Toolbar() {
        this.dom = document.createElement('div');
        this.dom.className = 'wechat-picker-toolbar';
        this.render();
        this.i = this.dom.querySelector('i');
        this.input = this.dom.querySelector('input');
        this.button = this.dom.querySelector('button');
        this.setColor();
        this.button.addEventListener('click', this.clickButton.bind(this));
        this.input.addEventListener('input', this.onChange.bind(this));
    }
    Toolbar.prototype.setColor = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1__eventBus__["a" /* default */].on(__WEBPACK_IMPORTED_MODULE_2__events_type__["a" /* CHANGE_COLOR */], function (color) {
            _this.i.style.background = color;
            _this.input.value = color.substr(1);
        });
    };
    Toolbar.prototype.clickButton = function () {
        var color = "#" + this.input.value;
        if (!/^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(color)) {
            return;
        }
        __WEBPACK_IMPORTED_MODULE_1__eventBus__["a" /* default */].emit(__WEBPACK_IMPORTED_MODULE_2__events_type__["e" /* UPDATE_RECENT */], color);
        __WEBPACK_IMPORTED_MODULE_1__eventBus__["a" /* default */].emit(__WEBPACK_IMPORTED_MODULE_2__events_type__["d" /* GET_COLOR */], color);
    };
    Toolbar.prototype.onChange = function () {
        this.i.style.backgroundColor = "#" + this.input.value;
    };
    Toolbar.prototype.render = function () {
        this.dom.innerHTML = "\n                        <i></i>\n                        <div><span>#</span><input maxlength=\"6\" type=\"text\"></div>\n                        <button>\u786E\u8BA4</button>\n                        ";
    };
    return Toolbar;
}());
/* harmony default export */ __webpack_exports__["a"] = (Toolbar);


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(18);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(3)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./style.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n.wechat-picker-toolbar {\n  padding: 15px 0 0;\n}\n\n.wechat-picker-toolbar i {\n  float: left;\n  width: 24px;\n  height: 24px;\n  margin-right: 6px;\n  background: #000;\n  border: 1px solid #e7e7eb;\n  cursor: pointer;\n}\n.wechat-picker-toolbar div {\n  position: relative;\n  display: inline-block;\n  width: 98px;\n  height: 24px;\n  padding: 0 5px;\n  border: 1px solid #e7e7eb;\n}\n.wechat-picker-toolbar div span {\n  position: absolute;\n  top: 2px;\n  font-size: 14px;\n  color: #222;\n  font-weight: 400;\n}\n.wechat-picker-toolbar div input {\n  outline: 0;\n  width: 60px;\n  border: 0;\n  margin: 0 0 0 10px;\n  color: #222;\n  font-size: 14px;\n}\n.wechat-picker-toolbar button {\n  float: right;\n  margin-left: 6px;\n  padding: 0 20px;\n  height: 26px;\n  line-height: 26px;\n  border-radius: 3px;\n  -moz-border-radius: 3px;\n  -webkit-border-radius: 3px;\n  font-size: 14px;\n  cursor: pointer;\n  border: 1px solid #e7e7eb;\n  background-color: #fff;\n  color: #222;\n  outline: 0;\n}\n.wechat-picker-toolbar button:hover {\n  border: 1px solid #dadbe0;\n}", ""]);

// exports


/***/ })
/******/ ]);
});