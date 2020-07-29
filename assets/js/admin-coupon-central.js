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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/admin-coupon-central.js":
/*!***********************************************!*\
  !*** ./src/assets/js/admin-coupon-central.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

jQuery(document).ready(function ($) {
  "use strict";
  /*=============== Meta box media uploader ================ */

  $(".sdcc-datepicker").datepicker();
  /*=============== Meta box media uploader ================ */
  // Instantiates the variable that holds the media library frame.

  var metaImageFrame; // Runs when the media button is clicked.

  $(".sdcc-media__add-btn").on("click", function () {
    // Get the field target
    var field_target = $(this).data("target-input");
    var preview_target = $(this).data("target-preview"); // Sets up the media library frame

    metaImageFrame = wp.media.frames.metaImageFrame = wp.media({
      title: sdc_media_upload.title,
      button: {
        text: sdc_media_upload.button
      }
    }); // Runs when an image is selected.

    metaImageFrame.on("select", function () {
      // Grabs the attachment selection and creates a JSON representation of the model.
      var media_attachment = metaImageFrame.state().get("selection").first().toJSON(); // Sends the attachment URL to our custom image input field.

      $(field_target).val(media_attachment.url);
      $(preview_target).attr("src", media_attachment.url);
      $(preview_target).parent().removeClass("sdcc-hide");
      $(".sdcc-media__remove-wrapper").removeClass("sdcc-hide");
    }); // Opens the media library frame.

    metaImageFrame.open();
  }); // On click remove media button

  $(".sdcc-media__remove").on("click", function (e) {
    e.preventDefault(); // Get the field target

    var field_target = $(this).data("target-input");
    var preview_target = $(this).data("target-preview");
    $(field_target).val("");
    $(preview_target).attr("src", "");
    $(preview_target).parent().addClass("sdcc-hide");
    $(".sdcc-media__remove-wrapper").addClass("sdcc-hide");
  });
});

/***/ }),

/***/ 0:
/*!*****************************************************!*\
  !*** multi ./src/assets/js/admin-coupon-central.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\wamp64\www\coupon\wp-content\plugins\coupon-central\src\assets\js\admin-coupon-central.js */"./src/assets/js/admin-coupon-central.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9hZG1pbi1jb3Vwb24tY2VudHJhbC5qcyJdLCJuYW1lcyI6WyJqUXVlcnkiLCJkb2N1bWVudCIsInJlYWR5IiwiJCIsImRhdGVwaWNrZXIiLCJtZXRhSW1hZ2VGcmFtZSIsIm9uIiwiZmllbGRfdGFyZ2V0IiwiZGF0YSIsInByZXZpZXdfdGFyZ2V0Iiwid3AiLCJtZWRpYSIsImZyYW1lcyIsInRpdGxlIiwic2RjX21lZGlhX3VwbG9hZCIsImJ1dHRvbiIsInRleHQiLCJtZWRpYV9hdHRhY2htZW50Iiwic3RhdGUiLCJnZXQiLCJmaXJzdCIsInRvSlNPTiIsInZhbCIsInVybCIsImF0dHIiLCJwYXJlbnQiLCJyZW1vdmVDbGFzcyIsIm9wZW4iLCJlIiwicHJldmVudERlZmF1bHQiLCJhZGRDbGFzcyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBQSxNQUFNLENBQUNDLFFBQUQsQ0FBTixDQUFpQkMsS0FBakIsQ0FBdUIsVUFBVUMsQ0FBVixFQUFhO0FBQ2hDO0FBRUE7O0FBQ0FBLEdBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCQyxVQUF0QjtBQUVBO0FBQ0E7O0FBQ0EsTUFBSUMsY0FBSixDQVJnQyxDQVVoQzs7QUFDQUYsR0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEJHLEVBQTFCLENBQTZCLE9BQTdCLEVBQXNDLFlBQVk7QUFDOUM7QUFDQSxRQUFJQyxZQUFZLEdBQUdKLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUssSUFBUixDQUFhLGNBQWIsQ0FBbkI7QUFDQSxRQUFJQyxjQUFjLEdBQUdOLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUssSUFBUixDQUFhLGdCQUFiLENBQXJCLENBSDhDLENBSzlDOztBQUNBSCxrQkFBYyxHQUFHSyxFQUFFLENBQUNDLEtBQUgsQ0FBU0MsTUFBVCxDQUFnQlAsY0FBaEIsR0FBaUNLLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ3ZERSxXQUFLLEVBQUVDLGdCQUFnQixDQUFDRCxLQUQrQjtBQUV2REUsWUFBTSxFQUFFO0FBQUVDLFlBQUksRUFBRUYsZ0JBQWdCLENBQUNDO0FBQXpCO0FBRitDLEtBQVQsQ0FBbEQsQ0FOOEMsQ0FXOUM7O0FBQ0FWLGtCQUFjLENBQUNDLEVBQWYsQ0FBa0IsUUFBbEIsRUFBNEIsWUFBWTtBQUNwQztBQUNBLFVBQUlXLGdCQUFnQixHQUFHWixjQUFjLENBQ2hDYSxLQURrQixHQUVsQkMsR0FGa0IsQ0FFZCxXQUZjLEVBR2xCQyxLQUhrQixHQUlsQkMsTUFKa0IsRUFBdkIsQ0FGb0MsQ0FRcEM7O0FBQ0FsQixPQUFDLENBQUNJLFlBQUQsQ0FBRCxDQUFnQmUsR0FBaEIsQ0FBb0JMLGdCQUFnQixDQUFDTSxHQUFyQztBQUNBcEIsT0FBQyxDQUFDTSxjQUFELENBQUQsQ0FBa0JlLElBQWxCLENBQXVCLEtBQXZCLEVBQThCUCxnQkFBZ0IsQ0FBQ00sR0FBL0M7QUFDQXBCLE9BQUMsQ0FBQ00sY0FBRCxDQUFELENBQWtCZ0IsTUFBbEIsR0FBMkJDLFdBQTNCLENBQXVDLFdBQXZDO0FBQ0F2QixPQUFDLENBQUMsNkJBQUQsQ0FBRCxDQUFpQ3VCLFdBQWpDLENBQTZDLFdBQTdDO0FBQ0gsS0FiRCxFQVo4QyxDQTJCOUM7O0FBQ0FyQixrQkFBYyxDQUFDc0IsSUFBZjtBQUNILEdBN0JELEVBWGdDLENBMENoQzs7QUFDQXhCLEdBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCRyxFQUF6QixDQUE0QixPQUE1QixFQUFxQyxVQUFVc0IsQ0FBVixFQUFhO0FBQzlDQSxLQUFDLENBQUNDLGNBQUYsR0FEOEMsQ0FHOUM7O0FBQ0EsUUFBSXRCLFlBQVksR0FBR0osQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSyxJQUFSLENBQWEsY0FBYixDQUFuQjtBQUNBLFFBQUlDLGNBQWMsR0FBR04sQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSyxJQUFSLENBQWEsZ0JBQWIsQ0FBckI7QUFFQUwsS0FBQyxDQUFDSSxZQUFELENBQUQsQ0FBZ0JlLEdBQWhCLENBQW9CLEVBQXBCO0FBQ0FuQixLQUFDLENBQUNNLGNBQUQsQ0FBRCxDQUFrQmUsSUFBbEIsQ0FBdUIsS0FBdkIsRUFBOEIsRUFBOUI7QUFDQXJCLEtBQUMsQ0FBQ00sY0FBRCxDQUFELENBQWtCZ0IsTUFBbEIsR0FBMkJLLFFBQTNCLENBQW9DLFdBQXBDO0FBQ0EzQixLQUFDLENBQUMsNkJBQUQsQ0FBRCxDQUFpQzJCLFFBQWpDLENBQTBDLFdBQTFDO0FBQ0gsR0FYRDtBQVlILENBdkRELEUiLCJmaWxlIjoiYWRtaW4tY291cG9uLWNlbnRyYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJqUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICAvKj09PT09PT09PT09PT09PSBNZXRhIGJveCBtZWRpYSB1cGxvYWRlciA9PT09PT09PT09PT09PT09ICovXHJcbiAgICAkKFwiLnNkY2MtZGF0ZXBpY2tlclwiKS5kYXRlcGlja2VyKCk7XHJcblxyXG4gICAgLyo9PT09PT09PT09PT09PT0gTWV0YSBib3ggbWVkaWEgdXBsb2FkZXIgPT09PT09PT09PT09PT09PSAqL1xyXG4gICAgLy8gSW5zdGFudGlhdGVzIHRoZSB2YXJpYWJsZSB0aGF0IGhvbGRzIHRoZSBtZWRpYSBsaWJyYXJ5IGZyYW1lLlxyXG4gICAgdmFyIG1ldGFJbWFnZUZyYW1lO1xyXG5cclxuICAgIC8vIFJ1bnMgd2hlbiB0aGUgbWVkaWEgYnV0dG9uIGlzIGNsaWNrZWQuXHJcbiAgICAkKFwiLnNkY2MtbWVkaWFfX2FkZC1idG5cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gR2V0IHRoZSBmaWVsZCB0YXJnZXRcclxuICAgICAgICB2YXIgZmllbGRfdGFyZ2V0ID0gJCh0aGlzKS5kYXRhKFwidGFyZ2V0LWlucHV0XCIpO1xyXG4gICAgICAgIHZhciBwcmV2aWV3X3RhcmdldCA9ICQodGhpcykuZGF0YShcInRhcmdldC1wcmV2aWV3XCIpO1xyXG5cclxuICAgICAgICAvLyBTZXRzIHVwIHRoZSBtZWRpYSBsaWJyYXJ5IGZyYW1lXHJcbiAgICAgICAgbWV0YUltYWdlRnJhbWUgPSB3cC5tZWRpYS5mcmFtZXMubWV0YUltYWdlRnJhbWUgPSB3cC5tZWRpYSh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBzZGNfbWVkaWFfdXBsb2FkLnRpdGxlLFxyXG4gICAgICAgICAgICBidXR0b246IHsgdGV4dDogc2RjX21lZGlhX3VwbG9hZC5idXR0b24gfSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gUnVucyB3aGVuIGFuIGltYWdlIGlzIHNlbGVjdGVkLlxyXG4gICAgICAgIG1ldGFJbWFnZUZyYW1lLm9uKFwic2VsZWN0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gR3JhYnMgdGhlIGF0dGFjaG1lbnQgc2VsZWN0aW9uIGFuZCBjcmVhdGVzIGEgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB0aGUgbW9kZWwuXHJcbiAgICAgICAgICAgIHZhciBtZWRpYV9hdHRhY2htZW50ID0gbWV0YUltYWdlRnJhbWVcclxuICAgICAgICAgICAgICAgIC5zdGF0ZSgpXHJcbiAgICAgICAgICAgICAgICAuZ2V0KFwic2VsZWN0aW9uXCIpXHJcbiAgICAgICAgICAgICAgICAuZmlyc3QoKVxyXG4gICAgICAgICAgICAgICAgLnRvSlNPTigpO1xyXG5cclxuICAgICAgICAgICAgLy8gU2VuZHMgdGhlIGF0dGFjaG1lbnQgVVJMIHRvIG91ciBjdXN0b20gaW1hZ2UgaW5wdXQgZmllbGQuXHJcbiAgICAgICAgICAgICQoZmllbGRfdGFyZ2V0KS52YWwobWVkaWFfYXR0YWNobWVudC51cmwpO1xyXG4gICAgICAgICAgICAkKHByZXZpZXdfdGFyZ2V0KS5hdHRyKFwic3JjXCIsIG1lZGlhX2F0dGFjaG1lbnQudXJsKTtcclxuICAgICAgICAgICAgJChwcmV2aWV3X3RhcmdldCkucGFyZW50KCkucmVtb3ZlQ2xhc3MoXCJzZGNjLWhpZGVcIik7XHJcbiAgICAgICAgICAgICQoXCIuc2RjYy1tZWRpYV9fcmVtb3ZlLXdyYXBwZXJcIikucmVtb3ZlQ2xhc3MoXCJzZGNjLWhpZGVcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIE9wZW5zIHRoZSBtZWRpYSBsaWJyYXJ5IGZyYW1lLlxyXG4gICAgICAgIG1ldGFJbWFnZUZyYW1lLm9wZW4oKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIE9uIGNsaWNrIHJlbW92ZSBtZWRpYSBidXR0b25cclxuICAgICQoXCIuc2RjYy1tZWRpYV9fcmVtb3ZlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIC8vIEdldCB0aGUgZmllbGQgdGFyZ2V0XHJcbiAgICAgICAgdmFyIGZpZWxkX3RhcmdldCA9ICQodGhpcykuZGF0YShcInRhcmdldC1pbnB1dFwiKTtcclxuICAgICAgICB2YXIgcHJldmlld190YXJnZXQgPSAkKHRoaXMpLmRhdGEoXCJ0YXJnZXQtcHJldmlld1wiKTtcclxuXHJcbiAgICAgICAgJChmaWVsZF90YXJnZXQpLnZhbChcIlwiKTtcclxuICAgICAgICAkKHByZXZpZXdfdGFyZ2V0KS5hdHRyKFwic3JjXCIsIFwiXCIpO1xyXG4gICAgICAgICQocHJldmlld190YXJnZXQpLnBhcmVudCgpLmFkZENsYXNzKFwic2RjYy1oaWRlXCIpO1xyXG4gICAgICAgICQoXCIuc2RjYy1tZWRpYV9fcmVtb3ZlLXdyYXBwZXJcIikuYWRkQ2xhc3MoXCJzZGNjLWhpZGVcIik7XHJcbiAgICB9KTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=