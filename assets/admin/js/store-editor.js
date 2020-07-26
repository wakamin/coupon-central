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

/***/ "./src/assets/admin/js/store-editor.js":
/*!*********************************************!*\
  !*** ./src/assets/admin/js/store-editor.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

jQuery(document).ready(function ($) {
  "use strict";
  /*=============== Meta box media uploader ====================== */
  // Instantiates the variable that holds the media library frame.

  var metaImageFrame; // Runs when the media button is clicked.

  $("body").click(function (e) {
    // Get the btn
    var btn = e.target; // Check if it's the upload button

    if (!btn || !$(btn).attr("data-target-input")) return;
    if (!btn || !$(btn).attr("data-target-preview")) return; // Get the field target

    var field_target = $(btn).data("target-input");
    var preview_target = $(btn).data("target-preview"); // Prevents the default action from occuring.

    e.preventDefault(); // Sets up the media library frame

    metaImageFrame = wp.media.frames.metaImageFrame = wp.media({
      title: store_logo_picker.title,
      button: {
        text: store_logo_picker.button
      }
    }); // Runs when an image is selected.

    metaImageFrame.on("select", function () {
      // Grabs the attachment selection and creates a JSON representation of the model.
      var media_attachment = metaImageFrame.state().get("selection").first().toJSON(); // Sends the attachment URL to our custom image input field.

      $(field_target).val(media_attachment.url);
      $(preview_target).attr("src", media_attachment.url);
      $(".sd-coupon-store-logo-preview").removeClass("sd-coupon-hide");
    }); // Opens the media library frame.

    metaImageFrame.open();
  });
});

/***/ }),

/***/ 1:
/*!***************************************************!*\
  !*** multi ./src/assets/admin/js/store-editor.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\wamp64\www\coupon\wp-content\plugins\coupon-central\src\assets\admin\js\store-editor.js */"./src/assets/admin/js/store-editor.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9hZG1pbi9qcy9zdG9yZS1lZGl0b3IuanMiXSwibmFtZXMiOlsialF1ZXJ5IiwiZG9jdW1lbnQiLCJyZWFkeSIsIiQiLCJtZXRhSW1hZ2VGcmFtZSIsImNsaWNrIiwiZSIsImJ0biIsInRhcmdldCIsImF0dHIiLCJmaWVsZF90YXJnZXQiLCJkYXRhIiwicHJldmlld190YXJnZXQiLCJwcmV2ZW50RGVmYXVsdCIsIndwIiwibWVkaWEiLCJmcmFtZXMiLCJ0aXRsZSIsInN0b3JlX2xvZ29fcGlja2VyIiwiYnV0dG9uIiwidGV4dCIsIm9uIiwibWVkaWFfYXR0YWNobWVudCIsInN0YXRlIiwiZ2V0IiwiZmlyc3QiLCJ0b0pTT04iLCJ2YWwiLCJ1cmwiLCJyZW1vdmVDbGFzcyIsIm9wZW4iXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQUEsTUFBTSxDQUFDQyxRQUFELENBQU4sQ0FBaUJDLEtBQWpCLENBQXVCLFVBQVVDLENBQVYsRUFBYTtBQUNoQztBQUVBO0FBQ0E7O0FBQ0EsTUFBSUMsY0FBSixDQUxnQyxDQU9oQzs7QUFDQUQsR0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVRSxLQUFWLENBQWdCLFVBQVVDLENBQVYsRUFBYTtBQUN6QjtBQUNBLFFBQUlDLEdBQUcsR0FBR0QsQ0FBQyxDQUFDRSxNQUFaLENBRnlCLENBSXpCOztBQUNBLFFBQUksQ0FBQ0QsR0FBRCxJQUFRLENBQUNKLENBQUMsQ0FBQ0ksR0FBRCxDQUFELENBQU9FLElBQVAsQ0FBWSxtQkFBWixDQUFiLEVBQStDO0FBQy9DLFFBQUksQ0FBQ0YsR0FBRCxJQUFRLENBQUNKLENBQUMsQ0FBQ0ksR0FBRCxDQUFELENBQU9FLElBQVAsQ0FBWSxxQkFBWixDQUFiLEVBQWlELE9BTnhCLENBUXpCOztBQUNBLFFBQUlDLFlBQVksR0FBR1AsQ0FBQyxDQUFDSSxHQUFELENBQUQsQ0FBT0ksSUFBUCxDQUFZLGNBQVosQ0FBbkI7QUFDQSxRQUFJQyxjQUFjLEdBQUdULENBQUMsQ0FBQ0ksR0FBRCxDQUFELENBQU9JLElBQVAsQ0FBWSxnQkFBWixDQUFyQixDQVZ5QixDQVl6Qjs7QUFDQUwsS0FBQyxDQUFDTyxjQUFGLEdBYnlCLENBZXpCOztBQUNBVCxrQkFBYyxHQUFHVSxFQUFFLENBQUNDLEtBQUgsQ0FBU0MsTUFBVCxDQUFnQlosY0FBaEIsR0FBaUNVLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ3ZERSxXQUFLLEVBQUVDLGlCQUFpQixDQUFDRCxLQUQ4QjtBQUV2REUsWUFBTSxFQUFFO0FBQUVDLFlBQUksRUFBRUYsaUJBQWlCLENBQUNDO0FBQTFCO0FBRitDLEtBQVQsQ0FBbEQsQ0FoQnlCLENBcUJ6Qjs7QUFDQWYsa0JBQWMsQ0FBQ2lCLEVBQWYsQ0FBa0IsUUFBbEIsRUFBNEIsWUFBWTtBQUNwQztBQUNBLFVBQUlDLGdCQUFnQixHQUFHbEIsY0FBYyxDQUNoQ21CLEtBRGtCLEdBRWxCQyxHQUZrQixDQUVkLFdBRmMsRUFHbEJDLEtBSGtCLEdBSWxCQyxNQUprQixFQUF2QixDQUZvQyxDQVFwQzs7QUFDQXZCLE9BQUMsQ0FBQ08sWUFBRCxDQUFELENBQWdCaUIsR0FBaEIsQ0FBb0JMLGdCQUFnQixDQUFDTSxHQUFyQztBQUNBekIsT0FBQyxDQUFDUyxjQUFELENBQUQsQ0FBa0JILElBQWxCLENBQXVCLEtBQXZCLEVBQThCYSxnQkFBZ0IsQ0FBQ00sR0FBL0M7QUFDQXpCLE9BQUMsQ0FBQywrQkFBRCxDQUFELENBQW1DMEIsV0FBbkMsQ0FBK0MsZ0JBQS9DO0FBQ0gsS0FaRCxFQXRCeUIsQ0FvQ3pCOztBQUNBekIsa0JBQWMsQ0FBQzBCLElBQWY7QUFDSCxHQXRDRDtBQXVDSCxDQS9DRCxFIiwiZmlsZSI6InN0b3JlLWVkaXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcbiIsImpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgIC8qPT09PT09PT09PT09PT09IE1ldGEgYm94IG1lZGlhIHVwbG9hZGVyID09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuICAgIC8vIEluc3RhbnRpYXRlcyB0aGUgdmFyaWFibGUgdGhhdCBob2xkcyB0aGUgbWVkaWEgbGlicmFyeSBmcmFtZS5cclxuICAgIHZhciBtZXRhSW1hZ2VGcmFtZTtcclxuXHJcbiAgICAvLyBSdW5zIHdoZW4gdGhlIG1lZGlhIGJ1dHRvbiBpcyBjbGlja2VkLlxyXG4gICAgJChcImJvZHlcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAvLyBHZXQgdGhlIGJ0blxyXG4gICAgICAgIHZhciBidG4gPSBlLnRhcmdldDtcclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgaXQncyB0aGUgdXBsb2FkIGJ1dHRvblxyXG4gICAgICAgIGlmICghYnRuIHx8ICEkKGJ0bikuYXR0cihcImRhdGEtdGFyZ2V0LWlucHV0XCIpKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCFidG4gfHwgISQoYnRuKS5hdHRyKFwiZGF0YS10YXJnZXQtcHJldmlld1wiKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyBHZXQgdGhlIGZpZWxkIHRhcmdldFxyXG4gICAgICAgIHZhciBmaWVsZF90YXJnZXQgPSAkKGJ0bikuZGF0YShcInRhcmdldC1pbnB1dFwiKTtcclxuICAgICAgICB2YXIgcHJldmlld190YXJnZXQgPSAkKGJ0bikuZGF0YShcInRhcmdldC1wcmV2aWV3XCIpO1xyXG5cclxuICAgICAgICAvLyBQcmV2ZW50cyB0aGUgZGVmYXVsdCBhY3Rpb24gZnJvbSBvY2N1cmluZy5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIC8vIFNldHMgdXAgdGhlIG1lZGlhIGxpYnJhcnkgZnJhbWVcclxuICAgICAgICBtZXRhSW1hZ2VGcmFtZSA9IHdwLm1lZGlhLmZyYW1lcy5tZXRhSW1hZ2VGcmFtZSA9IHdwLm1lZGlhKHtcclxuICAgICAgICAgICAgdGl0bGU6IHN0b3JlX2xvZ29fcGlja2VyLnRpdGxlLFxyXG4gICAgICAgICAgICBidXR0b246IHsgdGV4dDogc3RvcmVfbG9nb19waWNrZXIuYnV0dG9uIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFJ1bnMgd2hlbiBhbiBpbWFnZSBpcyBzZWxlY3RlZC5cclxuICAgICAgICBtZXRhSW1hZ2VGcmFtZS5vbihcInNlbGVjdFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIEdyYWJzIHRoZSBhdHRhY2htZW50IHNlbGVjdGlvbiBhbmQgY3JlYXRlcyBhIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhlIG1vZGVsLlxyXG4gICAgICAgICAgICB2YXIgbWVkaWFfYXR0YWNobWVudCA9IG1ldGFJbWFnZUZyYW1lXHJcbiAgICAgICAgICAgICAgICAuc3RhdGUoKVxyXG4gICAgICAgICAgICAgICAgLmdldChcInNlbGVjdGlvblwiKVxyXG4gICAgICAgICAgICAgICAgLmZpcnN0KClcclxuICAgICAgICAgICAgICAgIC50b0pTT04oKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFNlbmRzIHRoZSBhdHRhY2htZW50IFVSTCB0byBvdXIgY3VzdG9tIGltYWdlIGlucHV0IGZpZWxkLlxyXG4gICAgICAgICAgICAkKGZpZWxkX3RhcmdldCkudmFsKG1lZGlhX2F0dGFjaG1lbnQudXJsKTtcclxuICAgICAgICAgICAgJChwcmV2aWV3X3RhcmdldCkuYXR0cihcInNyY1wiLCBtZWRpYV9hdHRhY2htZW50LnVybCk7XHJcbiAgICAgICAgICAgICQoXCIuc2QtY291cG9uLXN0b3JlLWxvZ28tcHJldmlld1wiKS5yZW1vdmVDbGFzcyhcInNkLWNvdXBvbi1oaWRlXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBPcGVucyB0aGUgbWVkaWEgbGlicmFyeSBmcmFtZS5cclxuICAgICAgICBtZXRhSW1hZ2VGcmFtZS5vcGVuKCk7XHJcbiAgICB9KTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=