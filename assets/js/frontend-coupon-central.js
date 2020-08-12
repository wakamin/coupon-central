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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/frontend-coupon-central.js":
/*!**************************************************!*\
  !*** ./src/assets/js/frontend-coupon-central.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  var sdcc_card = {
    els: {
      show_excerpt: jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sdcc-card__excerpt-show")
    },
    data: {}
  };
  sdcc_card.els.show_excerpt.on("click", function () {
    var type = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("data-type");
    var excerpt_el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent(".sdcc-card__excerpt");
    var title_el = excerpt_el.prev(".sdcc-card__title");

    if (type == "more") {
      var excerpt_height = excerpt_el.height();
      var title_height = title_el.height();
      var height = excerpt_height + title_height + 70;
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest(".sdcc-card").css({
        height: "".concat(height, "px")
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("data-type", "less");
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("title", sdcc_script.show_less_text);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).html(sdcc_script.show_less_text);
    }

    if (type == "less") {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest(".sdcc-card").removeAttr("style");
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("data-type", "more");
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("title", sdcc_script.show_more_text);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).html(sdcc_script.show_more_text);
    }
  });
});

/***/ }),

/***/ 1:
/*!********************************************************!*\
  !*** multi ./src/assets/js/frontend-coupon-central.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\wamp64\www\coupon\wp-content\plugins\coupon-central\src\assets\js\frontend-coupon-central.js */"./src/assets/js/frontend-coupon-central.js");


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9mcm9udGVuZC1jb3Vwb24tY2VudHJhbC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsInNkY2NfY2FyZCIsImVscyIsInNob3dfZXhjZXJwdCIsImRhdGEiLCJvbiIsInR5cGUiLCJhdHRyIiwiZXhjZXJwdF9lbCIsInBhcmVudCIsInRpdGxlX2VsIiwicHJldiIsImV4Y2VycHRfaGVpZ2h0IiwiaGVpZ2h0IiwidGl0bGVfaGVpZ2h0IiwiY2xvc2VzdCIsImNzcyIsInNkY2Nfc2NyaXB0Iiwic2hvd19sZXNzX3RleHQiLCJodG1sIiwicmVtb3ZlQXR0ciIsInNob3dfbW9yZV90ZXh0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBRUFBLDZDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVk7QUFDMUIsTUFBSUMsU0FBUyxHQUFHO0FBQ1pDLE9BQUcsRUFBRTtBQUNEQyxrQkFBWSxFQUFFTCw2Q0FBQyxDQUFDLDBCQUFEO0FBRGQsS0FETztBQUlaTSxRQUFJLEVBQUU7QUFKTSxHQUFoQjtBQU9BSCxXQUFTLENBQUNDLEdBQVYsQ0FBY0MsWUFBZCxDQUEyQkUsRUFBM0IsQ0FBOEIsT0FBOUIsRUFBdUMsWUFBWTtBQUMvQyxRQUFJQyxJQUFJLEdBQUdSLDZDQUFDLENBQUMsSUFBRCxDQUFELENBQVFTLElBQVIsQ0FBYSxXQUFiLENBQVg7QUFDQSxRQUFJQyxVQUFVLEdBQUdWLDZDQUFDLENBQUMsSUFBRCxDQUFELENBQVFXLE1BQVIsQ0FBZSxxQkFBZixDQUFqQjtBQUNBLFFBQUlDLFFBQVEsR0FBR0YsVUFBVSxDQUFDRyxJQUFYLENBQWdCLG1CQUFoQixDQUFmOztBQUVBLFFBQUlMLElBQUksSUFBSSxNQUFaLEVBQW9CO0FBQ2hCLFVBQUlNLGNBQWMsR0FBR0osVUFBVSxDQUFDSyxNQUFYLEVBQXJCO0FBQ0EsVUFBSUMsWUFBWSxHQUFHSixRQUFRLENBQUNHLE1BQVQsRUFBbkI7QUFDQSxVQUFJQSxNQUFNLEdBQUdELGNBQWMsR0FBR0UsWUFBakIsR0FBZ0MsRUFBN0M7QUFDQWhCLG1EQUFDLENBQUMsSUFBRCxDQUFELENBQ0tpQixPQURMLENBQ2EsWUFEYixFQUVLQyxHQUZMLENBRVM7QUFBRUgsY0FBTSxZQUFLQSxNQUFMO0FBQVIsT0FGVDtBQUlBZixtREFBQyxDQUFDLElBQUQsQ0FBRCxDQUFRUyxJQUFSLENBQWEsV0FBYixFQUEwQixNQUExQjtBQUNBVCxtREFBQyxDQUFDLElBQUQsQ0FBRCxDQUFRUyxJQUFSLENBQWEsT0FBYixFQUFzQlUsV0FBVyxDQUFDQyxjQUFsQztBQUNBcEIsbURBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXFCLElBQVIsQ0FBYUYsV0FBVyxDQUFDQyxjQUF6QjtBQUNIOztBQUVELFFBQUlaLElBQUksSUFBSSxNQUFaLEVBQW9CO0FBQ2hCUixtREFBQyxDQUFDLElBQUQsQ0FBRCxDQUFRaUIsT0FBUixDQUFnQixZQUFoQixFQUE4QkssVUFBOUIsQ0FBeUMsT0FBekM7QUFDQXRCLG1EQUFDLENBQUMsSUFBRCxDQUFELENBQVFTLElBQVIsQ0FBYSxXQUFiLEVBQTBCLE1BQTFCO0FBQ0FULG1EQUFDLENBQUMsSUFBRCxDQUFELENBQVFTLElBQVIsQ0FBYSxPQUFiLEVBQXNCVSxXQUFXLENBQUNJLGNBQWxDO0FBQ0F2QixtREFBQyxDQUFDLElBQUQsQ0FBRCxDQUFRcUIsSUFBUixDQUFhRixXQUFXLENBQUNJLGNBQXpCO0FBQ0g7QUFDSixHQXhCRDtBQXlCSCxDQWpDRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBLHdCIiwiZmlsZSI6ImZyb250ZW5kLWNvdXBvbi1jZW50cmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuIiwiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IHNkY2NfY2FyZCA9IHtcclxuICAgICAgICBlbHM6IHtcclxuICAgICAgICAgICAgc2hvd19leGNlcnB0OiAkKFwiLnNkY2MtY2FyZF9fZXhjZXJwdC1zaG93XCIpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YToge30sXHJcbiAgICB9O1xyXG5cclxuICAgIHNkY2NfY2FyZC5lbHMuc2hvd19leGNlcnB0Lm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCB0eXBlID0gJCh0aGlzKS5hdHRyKFwiZGF0YS10eXBlXCIpO1xyXG4gICAgICAgIGxldCBleGNlcnB0X2VsID0gJCh0aGlzKS5wYXJlbnQoXCIuc2RjYy1jYXJkX19leGNlcnB0XCIpO1xyXG4gICAgICAgIGxldCB0aXRsZV9lbCA9IGV4Y2VycHRfZWwucHJldihcIi5zZGNjLWNhcmRfX3RpdGxlXCIpO1xyXG5cclxuICAgICAgICBpZiAodHlwZSA9PSBcIm1vcmVcIikge1xyXG4gICAgICAgICAgICBsZXQgZXhjZXJwdF9oZWlnaHQgPSBleGNlcnB0X2VsLmhlaWdodCgpO1xyXG4gICAgICAgICAgICBsZXQgdGl0bGVfaGVpZ2h0ID0gdGl0bGVfZWwuaGVpZ2h0KCk7XHJcbiAgICAgICAgICAgIGxldCBoZWlnaHQgPSBleGNlcnB0X2hlaWdodCArIHRpdGxlX2hlaWdodCArIDcwO1xyXG4gICAgICAgICAgICAkKHRoaXMpXHJcbiAgICAgICAgICAgICAgICAuY2xvc2VzdChcIi5zZGNjLWNhcmRcIilcclxuICAgICAgICAgICAgICAgIC5jc3MoeyBoZWlnaHQ6IGAke2hlaWdodH1weGAgfSk7XHJcblxyXG4gICAgICAgICAgICAkKHRoaXMpLmF0dHIoXCJkYXRhLXR5cGVcIiwgXCJsZXNzXCIpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmF0dHIoXCJ0aXRsZVwiLCBzZGNjX3NjcmlwdC5zaG93X2xlc3NfdGV4dCk7XHJcbiAgICAgICAgICAgICQodGhpcykuaHRtbChzZGNjX3NjcmlwdC5zaG93X2xlc3NfdGV4dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZSA9PSBcImxlc3NcIikge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoXCIuc2RjYy1jYXJkXCIpLnJlbW92ZUF0dHIoXCJzdHlsZVwiKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hdHRyKFwiZGF0YS10eXBlXCIsIFwibW9yZVwiKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hdHRyKFwidGl0bGVcIiwgc2RjY19zY3JpcHQuc2hvd19tb3JlX3RleHQpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmh0bWwoc2RjY19zY3JpcHQuc2hvd19tb3JlX3RleHQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7Il0sInNvdXJjZVJvb3QiOiIifQ==