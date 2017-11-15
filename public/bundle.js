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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n//if we want this page to render a App component into root component\n//of the views/index.ejs page, we create the react compnent and do\n//ReactDom.render here on this page.\n//this page will be invoked after the views/index.ejs has been looaded into\n//browser \n\n\n//this page if placed in /public folder can be directlyh linked from\n//views/index.ejs. If we use react, then webpack would make this the\n//source (entry) file from which to transpile(create) the public/bundle.js\n//file, which the views/index.ejs file will link to instead of the now\n//obsolete public/index.js file. THE PUBLIC/INDEX.JS FILE WILL BE MOVED \n//TO THE SRC/INDEX.JS LOCATION, SO ONLY THE PUBLIC/BUNDLE.JS FILE \n//WILL REMAIN IN THE PUBLIC FOLDER SO IT CAN BE  LINKED WITH THE \n//VIEWS/INDEX.EJS , ALONG WITH OTHER STATIC FILES E.G PNG, CSS ...\n\n//here, we just do a simple text replacement of the 'root' div on the \n//views/index.ejs page. We could render a react component instead, if\n//that's what we wanted. if we do that, we need to import the \n//react modules, and compose a react component, e.g <App/>\nvar root = document.getElementById('root');\n\nroot.innerHTML = 'this is NEW10 text set by src/index.js, replacing old text in\\n  index.ejs. This is src/index.js file, but now is public/bundle.js file\\n  and public/bundle.js file is now linked to views/index.ejs\\n   instead of the normal public/index.js which now has been moved to \\n  src/index.js because it is no longer linked to views/index.ejs so no\\n  need for it to be in the /public folder. we can leave it in the /public\\n  folder if we wanted to, but it is not linked to, it is only used as \\n  a source  to compile the public/bundle.js file';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvaW5kZXguanM/MWZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2lmIHdlIHdhbnQgdGhpcyBwYWdlIHRvIHJlbmRlciBhIEFwcCBjb21wb25lbnQgaW50byByb290IGNvbXBvbmVudFxyXG4vL29mIHRoZSB2aWV3cy9pbmRleC5lanMgcGFnZSwgd2UgY3JlYXRlIHRoZSByZWFjdCBjb21wbmVudCBhbmQgZG9cclxuLy9SZWFjdERvbS5yZW5kZXIgaGVyZSBvbiB0aGlzIHBhZ2UuXHJcbi8vdGhpcyBwYWdlIHdpbGwgYmUgaW52b2tlZCBhZnRlciB0aGUgdmlld3MvaW5kZXguZWpzIGhhcyBiZWVuIGxvb2FkZWQgaW50b1xyXG4vL2Jyb3dzZXIgXHJcbiBcclxuXHJcbi8vdGhpcyBwYWdlIGlmIHBsYWNlZCBpbiAvcHVibGljIGZvbGRlciBjYW4gYmUgZGlyZWN0bHloIGxpbmtlZCBmcm9tXHJcbi8vdmlld3MvaW5kZXguZWpzLiBJZiB3ZSB1c2UgcmVhY3QsIHRoZW4gd2VicGFjayB3b3VsZCBtYWtlIHRoaXMgdGhlXHJcbi8vc291cmNlIChlbnRyeSkgZmlsZSBmcm9tIHdoaWNoIHRvIHRyYW5zcGlsZShjcmVhdGUpIHRoZSBwdWJsaWMvYnVuZGxlLmpzXHJcbi8vZmlsZSwgd2hpY2ggdGhlIHZpZXdzL2luZGV4LmVqcyBmaWxlIHdpbGwgbGluayB0byBpbnN0ZWFkIG9mIHRoZSBub3dcclxuLy9vYnNvbGV0ZSBwdWJsaWMvaW5kZXguanMgZmlsZS4gVEhFIFBVQkxJQy9JTkRFWC5KUyBGSUxFIFdJTEwgQkUgTU9WRUQgXHJcbi8vVE8gVEhFIFNSQy9JTkRFWC5KUyBMT0NBVElPTiwgU08gT05MWSBUSEUgUFVCTElDL0JVTkRMRS5KUyBGSUxFIFxyXG4vL1dJTEwgUkVNQUlOIElOIFRIRSBQVUJMSUMgRk9MREVSIFNPIElUIENBTiBCRSAgTElOS0VEIFdJVEggVEhFIFxyXG4vL1ZJRVdTL0lOREVYLkVKUyAsIEFMT05HIFdJVEggT1RIRVIgU1RBVElDIEZJTEVTIEUuRyBQTkcsIENTUyAuLi5cclxuXHJcbi8vaGVyZSwgd2UganVzdCBkbyBhIHNpbXBsZSB0ZXh0IHJlcGxhY2VtZW50IG9mIHRoZSAncm9vdCcgZGl2IG9uIHRoZSBcclxuLy92aWV3cy9pbmRleC5lanMgcGFnZS4gV2UgY291bGQgcmVuZGVyIGEgcmVhY3QgY29tcG9uZW50IGluc3RlYWQsIGlmXHJcbi8vdGhhdCdzIHdoYXQgd2Ugd2FudGVkLiBpZiB3ZSBkbyB0aGF0LCB3ZSBuZWVkIHRvIGltcG9ydCB0aGUgXHJcbi8vcmVhY3QgbW9kdWxlcywgYW5kIGNvbXBvc2UgYSByZWFjdCBjb21wb25lbnQsIGUuZyA8QXBwLz5cclxubGV0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXHJcblxyXG5yb290LmlubmVySFRNTCA9XHJcbiBgdGhpcyBpcyBORVcxMCB0ZXh0IHNldCBieSBzcmMvaW5kZXguanMsIHJlcGxhY2luZyBvbGQgdGV4dCBpblxyXG4gIGluZGV4LmVqcy4gVGhpcyBpcyBzcmMvaW5kZXguanMgZmlsZSwgYnV0IG5vdyBpcyBwdWJsaWMvYnVuZGxlLmpzIGZpbGVcclxuICBhbmQgcHVibGljL2J1bmRsZS5qcyBmaWxlIGlzIG5vdyBsaW5rZWQgdG8gdmlld3MvaW5kZXguZWpzXHJcbiAgIGluc3RlYWQgb2YgdGhlIG5vcm1hbCBwdWJsaWMvaW5kZXguanMgd2hpY2ggbm93IGhhcyBiZWVuIG1vdmVkIHRvIFxyXG4gIHNyYy9pbmRleC5qcyBiZWNhdXNlIGl0IGlzIG5vIGxvbmdlciBsaW5rZWQgdG8gdmlld3MvaW5kZXguZWpzIHNvIG5vXHJcbiAgbmVlZCBmb3IgaXQgdG8gYmUgaW4gdGhlIC9wdWJsaWMgZm9sZGVyLiB3ZSBjYW4gbGVhdmUgaXQgaW4gdGhlIC9wdWJsaWNcclxuICBmb2xkZXIgaWYgd2Ugd2FudGVkIHRvLCBidXQgaXQgaXMgbm90IGxpbmtlZCB0bywgaXQgaXMgb25seSB1c2VkIGFzIFxyXG4gIGEgc291cmNlICB0byBjb21waWxlIHRoZSBwdWJsaWMvYnVuZGxlLmpzIGZpbGVgXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);