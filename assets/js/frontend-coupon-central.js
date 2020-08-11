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
  var sdcc_card_els = {
    show_excerpt: jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sdcc-card__excerpt-show")
  };
  var sdcc_card_data = {};
  sdcc_card_els.show_excerpt.on("click", function () {
    var type = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("data-type");

    if (type == "more") {
      var height = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent(".sdcc-card__excerpt").height();
      height = height + 85;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9mcm9udGVuZC1jb3Vwb24tY2VudHJhbC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsInNkY2NfY2FyZF9lbHMiLCJzaG93X2V4Y2VycHQiLCJzZGNjX2NhcmRfZGF0YSIsIm9uIiwidHlwZSIsImF0dHIiLCJoZWlnaHQiLCJwYXJlbnQiLCJjbG9zZXN0IiwiY3NzIiwic2RjY19zY3JpcHQiLCJzaG93X2xlc3NfdGV4dCIsImh0bWwiLCJyZW1vdmVBdHRyIiwic2hvd19tb3JlX3RleHQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFFQUEsNkNBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBWTtBQUMxQixNQUFJQyxhQUFhLEdBQUc7QUFDaEJDLGdCQUFZLEVBQUVKLDZDQUFDLENBQUMsMEJBQUQ7QUFEQyxHQUFwQjtBQUlBLE1BQUlLLGNBQWMsR0FBRyxFQUFyQjtBQUVBRixlQUFhLENBQUNDLFlBQWQsQ0FBMkJFLEVBQTNCLENBQThCLE9BQTlCLEVBQXVDLFlBQVk7QUFDL0MsUUFBSUMsSUFBSSxHQUFHUCw2Q0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRUSxJQUFSLENBQWEsV0FBYixDQUFYOztBQUVBLFFBQUlELElBQUksSUFBSSxNQUFaLEVBQW9CO0FBQ2hCLFVBQUlFLE1BQU0sR0FBR1QsNkNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVUsTUFBUixDQUFlLHFCQUFmLEVBQXNDRCxNQUF0QyxFQUFiO0FBQ0FBLFlBQU0sR0FBR0EsTUFBTSxHQUFHLEVBQWxCO0FBQ0FULG1EQUFDLENBQUMsSUFBRCxDQUFELENBQ0tXLE9BREwsQ0FDYSxZQURiLEVBRUtDLEdBRkwsQ0FFUztBQUFFSCxjQUFNLFlBQUtBLE1BQUw7QUFBUixPQUZUO0FBSUFULG1EQUFDLENBQUMsSUFBRCxDQUFELENBQVFRLElBQVIsQ0FBYSxXQUFiLEVBQTBCLE1BQTFCO0FBQ0FSLG1EQUFDLENBQUMsSUFBRCxDQUFELENBQVFRLElBQVIsQ0FBYSxPQUFiLEVBQXNCSyxXQUFXLENBQUNDLGNBQWxDO0FBQ0FkLG1EQUFDLENBQUMsSUFBRCxDQUFELENBQVFlLElBQVIsQ0FBYUYsV0FBVyxDQUFDQyxjQUF6QjtBQUNIOztBQUVELFFBQUlQLElBQUksSUFBSSxNQUFaLEVBQW9CO0FBQ2hCUCxtREFBQyxDQUFDLElBQUQsQ0FBRCxDQUFRVyxPQUFSLENBQWdCLFlBQWhCLEVBQThCSyxVQUE5QixDQUF5QyxPQUF6QztBQUNBaEIsbURBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVEsSUFBUixDQUFhLFdBQWIsRUFBMEIsTUFBMUI7QUFDQVIsbURBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVEsSUFBUixDQUFhLE9BQWIsRUFBc0JLLFdBQVcsQ0FBQ0ksY0FBbEM7QUFDQWpCLG1EQUFDLENBQUMsSUFBRCxDQUFELENBQVFlLElBQVIsQ0FBYUYsV0FBVyxDQUFDSSxjQUF6QjtBQUNIO0FBQ0osR0FyQkQ7QUFzQkgsQ0E3QkQsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQSx3QiIsImZpbGUiOiJmcm9udGVuZC1jb3Vwb24tY2VudHJhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcbiIsImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBzZGNjX2NhcmRfZWxzID0ge1xyXG4gICAgICAgIHNob3dfZXhjZXJwdDogJChcIi5zZGNjLWNhcmRfX2V4Y2VycHQtc2hvd1wiKSxcclxuICAgIH07XHJcblxyXG4gICAgbGV0IHNkY2NfY2FyZF9kYXRhID0ge307XHJcblxyXG4gICAgc2RjY19jYXJkX2Vscy5zaG93X2V4Y2VycHQub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IHR5cGUgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLXR5cGVcIik7XHJcblxyXG4gICAgICAgIGlmICh0eXBlID09IFwibW9yZVwiKSB7XHJcbiAgICAgICAgICAgIGxldCBoZWlnaHQgPSAkKHRoaXMpLnBhcmVudChcIi5zZGNjLWNhcmRfX2V4Y2VycHRcIikuaGVpZ2h0KCk7XHJcbiAgICAgICAgICAgIGhlaWdodCA9IGhlaWdodCArIDg1O1xyXG4gICAgICAgICAgICAkKHRoaXMpXHJcbiAgICAgICAgICAgICAgICAuY2xvc2VzdChcIi5zZGNjLWNhcmRcIilcclxuICAgICAgICAgICAgICAgIC5jc3MoeyBoZWlnaHQ6IGAke2hlaWdodH1weGAgfSk7XHJcblxyXG4gICAgICAgICAgICAkKHRoaXMpLmF0dHIoXCJkYXRhLXR5cGVcIiwgXCJsZXNzXCIpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmF0dHIoXCJ0aXRsZVwiLCBzZGNjX3NjcmlwdC5zaG93X2xlc3NfdGV4dCk7XHJcbiAgICAgICAgICAgICQodGhpcykuaHRtbChzZGNjX3NjcmlwdC5zaG93X2xlc3NfdGV4dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZSA9PSBcImxlc3NcIikge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoXCIuc2RjYy1jYXJkXCIpLnJlbW92ZUF0dHIoXCJzdHlsZVwiKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hdHRyKFwiZGF0YS10eXBlXCIsIFwibW9yZVwiKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hdHRyKFwidGl0bGVcIiwgc2RjY19zY3JpcHQuc2hvd19tb3JlX3RleHQpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmh0bWwoc2RjY19zY3JpcHQuc2hvd19tb3JlX3RleHQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7Il0sInNvdXJjZVJvb3QiOiIifQ==