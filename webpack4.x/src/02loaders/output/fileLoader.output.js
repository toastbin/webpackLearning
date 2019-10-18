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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/02loaders/src/fileLoader/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/02loaders/src/fileLoader/index.js":
/*!***********************************************!*\
  !*** ./src/02loaders/src/fileLoader/index.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _static_imgs_pic_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../static/imgs/pic.jpg */ \"./src/02loaders/static/imgs/pic.jpg\");\n/* harmony import */ var _static_imgs_pic_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_static_imgs_pic_jpg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _static_imgs_small_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../static/imgs/small.png */ \"./src/02loaders/static/imgs/small.png\");\n/* harmony import */ var _static_imgs_small_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_static_imgs_small_png__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\n\r\n\r\nconsole.log(_static_imgs_pic_jpg__WEBPACK_IMPORTED_MODULE_0___default.a, _static_imgs_small_png__WEBPACK_IMPORTED_MODULE_1___default.a);\n\n//# sourceURL=webpack:///./src/02loaders/src/fileLoader/index.js?");

/***/ }),

/***/ "./src/02loaders/static/imgs/pic.jpg":
/*!*******************************************!*\
  !*** ./src/02loaders/static/imgs/pic.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"59af6486e42055859374a08d4783b463.jpg\";\n\n//# sourceURL=webpack:///./src/02loaders/static/imgs/pic.jpg?");

/***/ }),

/***/ "./src/02loaders/static/imgs/small.png":
/*!*********************************************!*\
  !*** ./src/02loaders/static/imgs/small.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"031466acdcb266f8da963a41c6e46009.png\";\n\n//# sourceURL=webpack:///./src/02loaders/static/imgs/small.png?");

/***/ })

/******/ });