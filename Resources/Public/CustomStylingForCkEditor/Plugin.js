/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _neosUiExtensibility = __webpack_require__(2);
	
	var _neosUiExtensibility2 = _interopRequireDefault(_neosUiExtensibility);
	
	var _reactUiComponents = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _neosUiExtensibility2.default)('main', {}, function (globalRegistry) {
	    var richtextToolbar = globalRegistry.get('richtextToolbar');
	
	    richtextToolbar.add('Neos.Neos.Ui.ExtensibilityExamples:MyCustomButton1', {
	        formattingRule: 'Neos.Neos.Ui.ExtensibilityExamples:MyCustomSpan',
	        component: _reactUiComponents.IconButton,
	        callbackPropName: 'onClick',
	
	        icon: 'facebook',
	        hoverStyle: 'brand'
	    });
	
	    var formattingRules = globalRegistry.get('ckEditor').get('formattingRules');
	
	    formattingRules.add('Neos.Neos.Ui.ExtensibilityExamples:MyCustomSpan', {
	        style: { element: 'span', attributes: { style: 'background-color: red' } },
	        config: formattingRules.config.addToExtraAllowedContent('span[style]')
	    });
	});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.createConsumerApi = undefined;
	
	var _createConsumerApi = __webpack_require__(3);
	
	var _createConsumerApi2 = _interopRequireDefault(_createConsumerApi);
	
	var _readFromConsumerApi = __webpack_require__(6);
	
	var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _readFromConsumerApi2.default)('manifest');
	exports.createConsumerApi = _createConsumerApi2.default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = createConsumerApi;
	
	var _package = __webpack_require__(4);
	
	var _manifest = __webpack_require__(5);
	
	var _manifest2 = _interopRequireDefault(_manifest);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var createReadOnlyValue = function createReadOnlyValue(value) {
	    return {
	        value: value,
	        writable: false,
	        enumerable: false,
	        configurable: true
	    };
	};
	
	function createConsumerApi(manifests, exposureMap) {
	    var api = {};
	
	    Object.keys(exposureMap).forEach(function (key) {
	        Object.defineProperty(api, key, createReadOnlyValue(exposureMap[key]));
	    });
	
	    Object.defineProperty(api, '@manifest', createReadOnlyValue((0, _manifest2.default)(manifests)));
	
	    Object.defineProperty(window, '@Neos:HostPluginAPI', createReadOnlyValue(api));
	    Object.defineProperty(window['@Neos:HostPluginAPI'], 'VERSION', createReadOnlyValue(_package.version));
	}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = {
		"name": "@neos-project/neos-ui-extensibility",
		"version": "1.0.0-beta3",
		"description": "Extensibility mechanisms for the Neos CMS UI",
		"main": "./src/index.js",
		"scripts": {
			"prebuild": "check-dependencies && yarn clean",
			"test": "yarn jest",
			"test:watch": "yarn jest -- --watch",
			"build": "exit 0",
			"build:watch": "exit 0",
			"clean": "rimraf ./lib ./dist",
			"lint": "eslint src",
			"jest": "PWD=$(pwd) NODE_ENV=test jest -w 1 --coverage"
		},
		"dependencies": {
			"@neos-project/build-essentials": "1.0.0-beta3",
			"babel-core": "^6.13.2",
			"babel-eslint": "^7.1.1",
			"babel-loader": "^6.2.4",
			"babel-plugin-transform-decorators-legacy": "^1.3.4",
			"babel-plugin-transform-object-rest-spread": "^6.20.1",
			"babel-plugin-webpack-alias": "^2.1.1",
			"babel-preset-es2015": "^6.13.2",
			"babel-preset-react": "^6.3.13",
			"babel-preset-stage-0": "^6.3.13",
			"chalk": "^1.1.3",
			"css-loader": "^0.26.0",
			"file-loader": "^0.10.0",
			"json-loader": "^0.5.4",
			"postcss-loader": "^1.0.0",
			"react-dev-utils": "^0.5.0",
			"style-loader": "^0.13.1"
		},
		"bin": {
			"neos-react-scripts": "./bin/neos-react-scripts.js"
		},
		"jest": {
			"transformIgnorePatterns": [],
			"setupFiles": [
				"./node_modules/@neos-project/build-essentials/src/setup-browser-env.js"
			],
			"transform": {
				"neos-ui-extensibility/src/.+\\.jsx?$": "./node_modules/.bin/babel-jest",
				"node_modules/@neos-project/.+\\.jsx?$": "./node_modules/.bin/babel-jest"
			}
		}
	};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	exports.default = function (manifests) {
	    return function manifest(identifier, options, bootstrap) {
	        manifests.push(_defineProperty({}, identifier, {
	            options: options,
	            bootstrap: bootstrap
	        }));
	    };
	};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = readFromConsumerApi;
	function readFromConsumerApi(key) {
	    return function () {
	        if (window['@Neos:HostPluginAPI'] && window['@Neos:HostPluginAPI']['@' + key]) {
	            var _window$NeosHostPlu;
	
	            return (_window$NeosHostPlu = window['@Neos:HostPluginAPI'])['@' + key].apply(_window$NeosHostPlu, arguments);
	        }
	
	        throw new Error('You are trying to read from a consumer api that hasn\'t been initialized yet!');
	    };
	}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _readFromConsumerApi = __webpack_require__(6);
	
	var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().ReactUiComponents;

/***/ })
/******/ ]);
//# sourceMappingURL=Plugin.js.map