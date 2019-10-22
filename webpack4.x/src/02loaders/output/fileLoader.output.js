/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/fileLoader/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/fileLoader/index.js":
/*!*********************************!*\
  !*** ./src/fileLoader/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _static_imgs_pic_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../static/imgs/pic.jpg */ \"./static/imgs/pic.jpg\");\n/* harmony import */ var _static_imgs_pic_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_static_imgs_pic_jpg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _static_imgs_small_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../static/imgs/small.png */ \"./static/imgs/small.png\");\n/* harmony import */ var _static_imgs_small_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_static_imgs_small_png__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconsole.log(_static_imgs_pic_jpg__WEBPACK_IMPORTED_MODULE_0___default.a, _static_imgs_small_png__WEBPACK_IMPORTED_MODULE_1___default.a);\n\n//# sourceURL=webpack:///./src/fileLoader/index.js?");

/***/ }),

/***/ "./static/imgs/pic.jpg":
/*!*****************************!*\
  !*** ./static/imgs/pic.jpg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/pic.jpg\";\n\n//# sourceURL=webpack:///./static/imgs/pic.jpg?");

/***/ }),

/***/ "./static/imgs/small.png":
/*!*******************************!*\
  !*** ./static/imgs/small.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,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\"\n\n//# sourceURL=webpack:///./static/imgs/small.png?");

/***/ })

/******/ });