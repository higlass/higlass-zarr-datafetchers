(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["higlass-register"] = factory();
	else
		root["higlass-register"] = factory();
})(window, function() {
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
window.higlassTracks = window.higlassTracks || {};
window.higlassTracksByType = window.higlassTracksByType || {};
window.higlassDataFetchersByType = window.higlassDataFetchersByType || {};

var getRandomName = function getRandomName() {
  return Math.random().toString(36).substring(2, 8);
};

var registerTrack = function registerTrack(trackDef) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$force = _ref.force,
      force = _ref$force === undefined ? false : _ref$force;

  // The following is only needed for backward compatibility
  var name = getRandomName();
  while (window.higlassTracks[name]) {
    name = getRandomName();
  }

  trackDef.name = name;
  window.higlassTracks[trackDef.name] = trackDef;
  // backward compatibility: end

  if (window.higlassTracksByType[trackDef.config.type] && !force) {
    // eslint-disable-next-line
    console.warn('A track with the same type (' + trackDef.config.type + ') was already ' + 'registered. To override it, set force to true.');
  } else {
    window.higlassTracksByType[trackDef.config.type] = trackDef;
  }
};

var registerDataFetcher = function registerDataFetcher(dataFetcherDef) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref2$force = _ref2.force,
      force = _ref2$force === undefined ? false : _ref2$force;

  if (window.higlassDataFetchersByType[dataFetcherDef.config.type] && !force) {
    // eslint-disable-next-line
    console.warn('A data fetcher with the same type (' + dataFetcherDef.config.type + ') was already ' + 'registered. To override it, set force to true.');
  } else {
    window.higlassDataFetchersByType[dataFetcherDef.config.type] = dataFetcherDef;
  }
};

var register = function register(definition) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$pluginType = options.pluginType,
      pluginType = _options$pluginType === undefined ? 'track' : _options$pluginType;

  if (pluginType === 'track') {
    registerTrack(definition, options);
  } else if (pluginType === 'dataFetcher') {
    registerDataFetcher(definition, options);
  }
};

exports.default = register;

/***/ })
/******/ ]);
});