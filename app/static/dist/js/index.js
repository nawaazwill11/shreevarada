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
/******/ 	return __webpack_require__(__webpack_require__.s = "./static/packages/index.pack.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./static/packages/base.pack.js":
/*!**************************************!*\
  !*** ./static/packages/base.pack.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_css_common_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/css/common.scss */ \"./static/src/css/common.scss\");\n/* harmony import */ var _src_js_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/js/common */ \"./static/src/js/common.js\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdGF0aWMvcGFja2FnZXMvYmFzZS5wYWNrLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3RhdGljL3BhY2thZ2VzL2Jhc2UucGFjay5qcz8yZTA1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3JjL2Nzcy9jb21tb24uc2Nzcyc7XG5pbXBvcnQgJy4uL3NyYy9qcy9jb21tb24nO1xuXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./static/packages/base.pack.js\n");

/***/ }),

/***/ "./static/packages/index.pack.js":
/*!***************************************!*\
  !*** ./static/packages/index.pack.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _base_pack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.pack */ \"./static/packages/base.pack.js\");\n/* harmony import */ var _src_css_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/css/index.scss */ \"./static/src/css/index.scss\");\n/* harmony import */ var _src_js_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/js/index */ \"./static/src/js/index.js\");\n/* harmony import */ var _src_js_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_js_index__WEBPACK_IMPORTED_MODULE_2__);\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdGF0aWMvcGFja2FnZXMvaW5kZXgucGFjay5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3N0YXRpYy9wYWNrYWdlcy9pbmRleC5wYWNrLmpzPzg4ZmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2Jhc2UucGFjayc7XG5pbXBvcnQgJy4uL3NyYy9jc3MvaW5kZXguc2Nzcyc7XG5pbXBvcnQgJy4uL3NyYy9qcy9pbmRleCc7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./static/packages/index.pack.js\n");

/***/ }),

/***/ "./static/src/css/common.scss":
/*!************************************!*\
  !*** ./static/src/css/common.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"1441a7909c087dbbe7ce59881b9df8b9.scss\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdGF0aWMvc3JjL2Nzcy9jb21tb24uc2Nzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3N0YXRpYy9zcmMvY3NzL2NvbW1vbi5zY3NzP2M3M2MiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjE0NDFhNzkwOWMwODdkYmJlN2NlNTk4ODFiOWRmOGI5LnNjc3NcIjsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./static/src/css/common.scss\n");

/***/ }),

/***/ "./static/src/css/index.scss":
/*!***********************************!*\
  !*** ./static/src/css/index.scss ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"1441a7909c087dbbe7ce59881b9df8b9.scss\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdGF0aWMvc3JjL2Nzcy9pbmRleC5zY3NzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3RhdGljL3NyYy9jc3MvaW5kZXguc2Nzcz84NDNhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIxNDQxYTc5MDljMDg3ZGJiZTdjZTU5ODgxYjlkZjhiOS5zY3NzXCI7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./static/src/css/index.scss\n");

/***/ }),

/***/ "./static/src/js/common.js":
/*!*********************************!*\
  !*** ./static/src/js/common.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/nav */ \"./static/src/js/components/nav.js\");\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  Object(_components_nav__WEBPACK_IMPORTED_MODULE_0__[\"navInit\"])(); // Initialize navbar\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdGF0aWMvc3JjL2pzL2NvbW1vbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3N0YXRpYy9zcmMvanMvY29tbW9uLmpzPzc2NTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbmF2SW5pdCwgbmF2Q2xvc2UgfSBmcm9tICcuL2NvbXBvbmVudHMvbmF2JztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICAgbmF2SW5pdCgpOyAvLyBJbml0aWFsaXplIG5hdmJhclxufSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./static/src/js/common.js\n");

/***/ }),

/***/ "./static/src/js/components/nav.js":
/*!*****************************************!*\
  !*** ./static/src/js/components/nav.js ***!
  \*****************************************/
/*! exports provided: navInit, navClose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"navInit\", function() { return navInit; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"navClose\", function() { return navClose; });\nfunction navInit() {\n  var fabs = document.querySelectorAll('.fixed-action-btn');\n  M.FloatingActionButton.init(fabs, {\n    direction: 'bottom',\n    hoverEnabled: false\n  });\n}\n\nfunction navClose() {\n  var nav_fab = document.querySelector('.fixed-action-btn');\n  var nav_fab_instance = M.FloatingActionButton.getInstance(nav_fab);\n  nav_fab.close();\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdGF0aWMvc3JjL2pzL2NvbXBvbmVudHMvbmF2LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3RhdGljL3NyYy9qcy9jb21wb25lbnRzL25hdi5qcz9mM2RmIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIG5hdkluaXQoKSB7XG4gICAgY29uc3QgZmFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maXhlZC1hY3Rpb24tYnRuJyk7XG4gICAgTS5GbG9hdGluZ0FjdGlvbkJ1dHRvbi5pbml0KGZhYnMsIHtcbiAgICAgICAgZGlyZWN0aW9uOiAnYm90dG9tJyxcbiAgICAgICAgaG92ZXJFbmFibGVkOiBmYWxzZVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBuYXZDbG9zZSgpIHtcbiAgICBjb25zdCBuYXZfZmFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpeGVkLWFjdGlvbi1idG4nKTtcbiAgICBjb25zdCBuYXZfZmFiX2luc3RhbmNlID0gTS5GbG9hdGluZ0FjdGlvbkJ1dHRvbi5nZXRJbnN0YW5jZShuYXZfZmFiKTtcbiAgICBuYXZfZmFiLmNsb3NlKCk7XG59XG5cbmV4cG9ydCB7IG5hdkluaXQsIG5hdkNsb3NlIH07Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./static/src/js/components/nav.js\n");

/***/ }),

/***/ "./static/src/js/index.js":
/*!********************************!*\
  !*** ./static/src/js/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Service worker registration\nfunction registerSW() {\n  if ('serviceWorker' in navigator) {\n    window.addEventListener('load', function () {\n      navigator.serviceWorker.register('sw.js').then(function (registration) {\n        console.log('Service Worker is registered');\n      })[\"catch\"](function (err) {\n        console.error('Registration failed:', err);\n      });\n    });\n  }\n}\n\nregisterSW();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdGF0aWMvc3JjL2pzL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3RhdGljL3NyYy9qcy9pbmRleC5qcz8wMWUxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFNlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvblxuZnVuY3Rpb24gcmVnaXN0ZXJTVygpIHtcbiAgICBpZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCdzdy5qcycpXG4gICAgICAgICAgICAudGhlbihyZWdpc3RyYXRpb24gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlIFdvcmtlciBpcyByZWdpc3RlcmVkJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignUmVnaXN0cmF0aW9uIGZhaWxlZDonLCBlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0gICBcbn1cbnJlZ2lzdGVyU1coKTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./static/src/js/index.js\n");

/***/ })

/******/ });