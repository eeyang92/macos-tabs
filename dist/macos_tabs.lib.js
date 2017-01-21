module.exports =
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
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(1);
	module.exports.TabBody = __webpack_require__(22);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(3);
	
	var _tab_header = __webpack_require__(4);
	
	var _tab_header2 = _interopRequireDefault(_tab_header);
	
	var _tab_body = __webpack_require__(22);
	
	var _tab_body2 = _interopRequireDefault(_tab_body);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MacOSTabs = function (_Component) {
		_inherits(MacOSTabs, _Component);
	
		function MacOSTabs(props) {
			_classCallCheck(this, MacOSTabs);
	
			var _this = _possibleConstructorReturn(this, (MacOSTabs.__proto__ || Object.getPrototypeOf(MacOSTabs)).call(this, props));
	
			_this.state = {
				activeTabIndex: _this.props.activeTabIndex || 0
			};
			return _this;
		}
	
		_createClass(MacOSTabs, [{
			key: 'getActiveTabIndex',
			value: function getActiveTabIndex() {
				var activeTabIndex = typeof this.props.activeTabIndex === 'number' ? this.props.activeTabIndex : this.state.activeTabIndex;
	
				if (activeTabIndex >= this.props.tabs.length) {
					activeTabIndex = this.props.tabs.length - 1;
				}
	
				return activeTabIndex;
			}
		}, {
			key: 'setActiveTab',
			value: function setActiveTab(index) {
				if (this.props.autoActiveTab) {
					this.setState({
						activeTabIndex: index
					});
				}
			}
		}, {
			key: 'onSetActiveTab',
			value: function onSetActiveTab(index) {
				if (this.props.onSetActiveTab) {
					this.props.onSetActiveTab(index);
				}
	
				this.setActiveTab(index);
			}
		}, {
			key: 'onAddTabButtonClick',
			value: function onAddTabButtonClick(e, tabs) {
				if (this.props.onAddTabButtonClick) {
					this.props.onAddTabButtonClick(e);
				}
	
				this.setActiveTab(tabs.length); // Purposely set to last index + 1
			}
		}, {
			key: 'onCloseTabButtonClick',
			value: function onCloseTabButtonClick(e, tabs, closedTabIndex) {
				if (this.props.onCloseTabButtonClick) {
					this.props.onCloseTabButtonClick(e, closedTabIndex);
				}
	
				var activeTabIndex = this.getActiveTabIndex();
	
				if (closedTabIndex <= activeTabIndex) {
					this.onSetActiveTab(activeTabIndex === 0 ? 0 : activeTabIndex - 1);
				}
			}
		}, {
			key: 'onDragOut',
			value: function onDragOut(e, data, tabs, index) {
				if (this.props.onDragOut) {
					this.props.onDragOut(e, index);
				}
			}
		}, {
			key: 'onDragStop',
			value: function onDragStop(e, data, tabs, activeTabIndex) {
				if (this.props.onDragStop) {
					this.props.onDragStop(e, activeTabIndex, tabs);
				}
	
				this.onSetActiveTab(activeTabIndex);
			}
		}, {
			key: 'onTabClick',
			value: function onTabClick(e, index) {
				if (this.props.onTabClick) {
					this.props.onTabClick(e, index);
				}
	
				this.onSetActiveTab(index);
			}
		}, {
			key: 'onTabMouseEnter',
			value: function onTabMouseEnter(e, index) {
				if (this.props.onTabMouseEnter) {
					this.props.onTabMouseEnter(e, index);
				}
			}
		}, {
			key: 'onTabMouseLeave',
			value: function onTabMouseLeave(e, index) {
				if (this.props.onTabMouseLeave) {
					this.props.onTabMouseLeave(e, index);
				}
			}
		}, {
			key: 'shouldRenderHeader',
			value: function shouldRenderHeader() {
				if (this.props.showHeader || this.props.tabs.length > 0) {
					return true;
				}
	
				return false;
			}
		}, {
			key: 'formatHeight',
			value: function formatHeight(height) {
				if (typeof height === 'number') {
					return height + 'px';
				}
	
				return height;
			}
		}, {
			key: 'setTabVisibility',
			value: function setTabVisibility() {
				if (this.props.tabs.length === 0) {
					return this.props.defaultContent;
				}
	
				var toRender = [];
	
				for (var i = 0; i < this.props.tabs.length; i++) {
					var _tab = this.props.tabs[i];
	
					var shouldDisplay = {
						display: i === this.getActiveTabIndex()
					};
	
					toRender.push(_react2.default.createElement(
						_tab_body2.default,
						_extends({}, shouldDisplay, _tab.props, {
							key: _tab.props.tabId
						}),
						_tab.props.children
					));
				}
	
				return toRender;
			}
		}, {
			key: 'renderCustomBodyElement',
			value: function renderCustomBodyElement() {
				var customBodyElementId = this.props.customBodyElementId;
	
				if (customBodyElementId) {
					(0, _reactDom.render)(_react2.default.createElement(
						'div',
						{ style: { height: '100%' } },
						this.setTabVisibility()
					), document.getElementById(customBodyElementId));
				}
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				this.renderCustomBodyElement();
			}
		}, {
			key: 'componentDidUpdate',
			value: function componentDidUpdate() {
				this.renderCustomBodyElement();
			}
		}, {
			key: 'render',
			value: function render() {
				var headerHeight = this.shouldRenderHeader() ? this.formatHeight(this.props.headerHeight) : 0;
				var activeTabIndex = this.getActiveTabIndex();
				var shouldRenderFullHeight = !this.props.customBodyElementId ? { height: '100%' } : null;
	
				return _react2.default.createElement(
					'div',
					{ style: shouldRenderFullHeight },
					this.shouldRenderHeader() && _react2.default.createElement(
						'div',
						{ style: { height: headerHeight } },
						_react2.default.createElement(_tab_header2.default, {
							onSetActiveTab: this.onSetActiveTab.bind(this),
							onAddTabButtonClick: this.onAddTabButtonClick.bind(this),
							onCloseTabButtonClick: this.onCloseTabButtonClick.bind(this),
							onDragOut: this.onDragOut.bind(this),
							dragOutDistance: this.props.dragOutDistance,
							onDragStop: this.onDragStop.bind(this),
							onTabClick: this.onTabClick.bind(this),
							onMouseEnter: this.onTabMouseEnter.bind(this),
							onMouseLeave: this.onTabMouseLeave.bind(this),
							activeTabIndex: activeTabIndex,
							addTabPosition: this.props.addTabPosition,
							scrollX: this.props.scrollX,
							scrollY: this.props.scrollY,
							tabs: this.props.tabs,
							styles: this.props.styles,
							classNames: this.props.classNames,
							icons: this.props.icons
						})
					),
					!this.props.customBodyElementId && _react2.default.createElement(
						'div',
						{ style: { height: 'calc(100% - ' + headerHeight + ')' } },
						this.setTabVisibility()
					)
				);
			}
		}]);
	
		return MacOSTabs;
	}(_react.Component);
	
	MacOSTabs.defaultProps = {
		tabs: [],
		activeTabIndex: 0,
		scrollX: 'normal',
		scrollY: 'disabled',
		addTabPosition: 'end',
		showHeader: true,
		headerHeight: 24,
		dragOutDistance: 40,
		autoActiveTab: true,
		styles: {},
		classNames: {},
		icons: {}
	};
	exports.default = MacOSTabs;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react-dom");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _jquery = __webpack_require__(6);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _lodash = __webpack_require__(7);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _lodash3 = __webpack_require__(8);
	
	var _lodash4 = _interopRequireDefault(_lodash3);
	
	var _tab = __webpack_require__(9);
	
	var _tab2 = _interopRequireDefault(_tab);
	
	var _add_tab_button = __webpack_require__(16);
	
	var _add_tab_button2 = _interopRequireDefault(_add_tab_button);
	
	var _virtual_tabs = __webpack_require__(19);
	
	var _virtual_tabs2 = _interopRequireDefault(_virtual_tabs);
	
	var _tab_header = __webpack_require__(20);
	
	var _tab_header2 = _interopRequireDefault(_tab_header);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TabHeader = function (_Component) {
		_inherits(TabHeader, _Component);
	
		function TabHeader(props) {
			_classCallCheck(this, TabHeader);
	
			var _this = _possibleConstructorReturn(this, (TabHeader.__proto__ || Object.getPrototypeOf(TabHeader)).call(this, props));
	
			_this.id = 0;
			_this.tabBarRef = null;
			_this.tabRefs = {};
			_this.virtualTabs = null;
	
			_this.onScroll = (0, _lodash4.default)(_this.onScroll, 4, { leading: true }).bind(_this);
			return _this;
		}
	
		_createClass(TabHeader, [{
			key: 'componentDidUpdate',
			value: function componentDidUpdate(prevProps) {
				if (!(0, _lodash2.default)(prevProps.tabs, this.props.tabs)) {
					this.resetTabPositions();
				}
	
				if (prevProps.activeTabIndex !== this.props.activeTabIndex) {
					if (this.props.tabs.length && this.props.activeTabIndex > -1) {
						this.focusTab(this.props.activeTabIndex, 300);
					}
				}
			}
		}, {
			key: 'renderTab',
			value: function renderTab(index) {
				var id = this.props.tabs[index].props.tabId;
				var label = this.props.tabs[index].props.label;
	
				return _react2.default.createElement(_tab2.default, {
					key: id,
					id: id,
					onCloseTabButtonClick: this.onCloseTabButtonClick.bind(this, id),
					onDragStart: this.onDragStart.bind(this, id),
					onDrag: this.onDrag.bind(this, id),
					onDragStop: this.onDragStop.bind(this),
					getRef: this.onGetRef.bind(this, id),
					label: label,
					onMouseEnter: this.onMouseEnter.bind(this, id),
					onMouseLeave: this.onMouseLeave.bind(this, id),
					onClick: this.onTabClick.bind(this, id),
					onMouseDown: this.onTabMouseDown.bind(this, id),
					active: this.props.activeTabIndex === index,
					styles: this.props.styles,
					classNames: this.props.classNames,
					icons: this.props.icons
				});
			}
		}, {
			key: 'renderTabs',
			value: function renderTabs(tabs) {
				var renderList = [];
	
				for (var _index = 0; _index < tabs.length; _index++) {
					renderList.push(this.renderTab(_index));
				}
	
				return renderList;
			}
		}, {
			key: 'onAddTabButtonClick',
			value: function onAddTabButtonClick(e) {
				var currentTabs = this.props.tabs.slice(0);
	
				if (this.props.onAddTabButtonClick) {
					this.props.onAddTabButtonClick(e, currentTabs);
				}
			}
		}, {
			key: 'focusTab',
			value: function focusTab(index, ms) {
				var id = this.props.tabs[index].props.tabId;
	
				var $tab = (0, _jquery2.default)(this.tabRefs[id]);
				var position = $tab.position().left;
				var width = $tab.width();
	
				var $innerTabScrollSelector = (0, _jquery2.default)('.innerTabScrollSelector');
				var innerTabScrollSelectorWidth = $innerTabScrollSelector.width();
	
				if (position < 0) {
					$innerTabScrollSelector.animate({
						scrollLeft: $innerTabScrollSelector.scrollLeft() + position
					}, ms);
				} else if (position + width > innerTabScrollSelectorWidth) {
					$innerTabScrollSelector.animate({
						scrollLeft: $innerTabScrollSelector.scrollLeft() + (position + width) - innerTabScrollSelectorWidth + 2
					}, ms);
				}
			}
		}, {
			key: 'setActiveTab',
			value: function setActiveTab(index) {
				if (this.props.onSetActiveTab) {
					this.props.onSetActiveTab(index);
				}
			}
		}, {
			key: 'onCloseTabButtonClick',
			value: function onCloseTabButtonClick(id, e) {
				var closedTabIndex = this.findTabIndexById(id);
	
				if (closedTabIndex > -1) {
					var currentTabs = this.props.tabs.slice(0);
	
					if (this.props.onCloseTabButtonClick) {
						this.props.onCloseTabButtonClick(e, currentTabs, closedTabIndex);
					}
				}
			}
		}, {
			key: 'onTabClick',
			value: function onTabClick(id, e) {
				var index = this.findTabIndexById(id);
	
				if (this.props.onTabClick) {
					this.props.onTabClick(e, index);
				}
			}
		}, {
			key: 'onMouseEnter',
			value: function onMouseEnter(id, e) {
				var index = this.findTabIndexById(id);
	
				if (this.props.onMouseEnter) {
					this.props.onMouseEnter(e, index);
				}
			}
		}, {
			key: 'onMouseLeave',
			value: function onMouseLeave(id, e) {
				var index = this.findTabIndexById(id);
	
				if (this.props.onMouseLeave) {
					this.props.onMouseLeave(e, index);
				}
			}
		}, {
			key: 'onTabMouseDown',
			value: function onTabMouseDown(id, e) {
				var index = this.findTabIndexById(id);
	
				this.setActiveTab(index);
			}
		}, {
			key: 'findTabIndexById',
			value: function findTabIndexById(id) {
				for (var _index2 = 0; _index2 < this.props.tabs.length; _index2++) {
					if (id === this.props.tabs[_index2].props.tabId) {
						return _index2;
					}
				}
	
				return -1;
			}
		}, {
			key: 'findTabIdByIndex',
			value: function findTabIdByIndex(index) {
				if (!this.props.tabs[index]) {
					return -1;
				}
	
				return this.props.tabs[index].props.tabId;
			}
		}, {
			key: 'onTabBarRef',
			value: function onTabBarRef(ref) {
				this.tabBarRef = ref;
	
				(0, _jquery2.default)(ref).on('mousewheel', this.onScroll);
			}
		}, {
			key: 'onScroll',
			value: function onScroll(e) {
				var deltaX = e.originalEvent.deltaX;
				var deltaY = e.originalEvent.deltaY;
				var $target = (0, _jquery2.default)('.innerTabScrollSelector');
	
				if (this.props.scrollX !== 'normal') {
					e.preventDefault();
				}
	
				if (this.props.scrollX === 'reversed') {
					$target.scrollLeft($target.scrollLeft() - deltaX);
				}
	
				if (this.props.scrollY === 'normal') {
					$target.scrollLeft($target.scrollLeft() - deltaY);
				} else if (this.props.scrollY === 'reversed') {
					$target.scrollLeft($target.scrollLeft() + deltaY);
				}
			}
		}, {
			key: 'onGetRef',
			value: function onGetRef(id, ref) {
				if (ref) {
					this.tabRefs[id] = ref;
				} else if (this.tabRefs[id]) {
					delete this.tabRefs[id];
				}
			}
		}, {
			key: 'onDragOut',
			value: function onDragOut(e, data, tabs, index) {
				if (this.props.onDragOut) {
					this.props.onDragOut(e, data, tabs, index);
				}
			}
		}, {
			key: 'onDragStart',
			value: function onDragStart(id, e, data) {
				this.virtualTabs = new _virtual_tabs2.default(this.props.tabs, this.tabRefs, id);
			}
		}, {
			key: 'onDrag',
			value: function onDrag(id, e, data) {
				if (data.y > this.props.dragOutDistance || data.y < -this.props.dragOutDistance) {
					var _index3 = this.findTabIndexById(id);
	
					this.onDragOut(e, data, this.props.tabs.slice(0), _index3);
				}
	
				if (this.virtualTabs) {
					this.virtualTabs.move(data.x);
				}
			}
		}, {
			key: 'onDragStop',
			value: function onDragStop(e, data) {
				var _this2 = this;
	
				if (this.virtualTabs) {
					(function () {
						var idOrder = _this2.virtualTabs.getTabIds();
						var newTabs = [];
	
						var _iteratorNormalCompletion = true;
						var _didIteratorError = false;
						var _iteratorError = undefined;
	
						try {
							var _loop = function _loop() {
								var tabId = _step.value;
	
								var tabIndex = _this2.props.tabs.findIndex(function (tab) {
									return tabId === tab.props.tabId;
								});
	
								newTabs.push(_this2.props.tabs[tabIndex]);
							};
	
							for (var _iterator = idOrder[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
								_loop();
							}
						} catch (err) {
							_didIteratorError = true;
							_iteratorError = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion && _iterator.return) {
									_iterator.return();
								}
							} finally {
								if (_didIteratorError) {
									throw _iteratorError;
								}
							}
						}
	
						var currentActiveTabId = _this2.findTabIdByIndex(_this2.props.activeTabIndex);
						var nextActiveTabIndex = newTabs.findIndex(function (tab) {
							return tab.props.tabId === currentActiveTabId;
						});
	
						if (_this2.props.onDragStop) {
							_this2.props.onDragStop(e, data, newTabs, nextActiveTabIndex);
						}
	
						_this2.virtualTabs = null;
					})();
				}
			}
		}, {
			key: 'resetTabPositions',
			value: function resetTabPositions() {
				for (var _key in this.tabRefs) {
					var $ref = (0, _jquery2.default)(this.tabRefs[_key]);
	
					if ($ref.css('transition') !== 'transform 0.0s linear' || $ref.css('transform') !== 'translate(0px, 0px)') {
						$ref.css({
							transition: 'transform 0.0s linear',
							transform: 'translate(0px, 0px)'
						});
					}
				}
			}
		}, {
			key: 'render',
			value: function render() {
				var _this3 = this;
	
				var tabs = this.renderTabs(this.props.tabs);
				var outerTabClassName = (0, _classnames2.default)('outerTabContainerSelector', _tab_header2.default.macOSTabs, this.props.classNames.outerTabContainer);
				var innerTabClassName = (0, _classnames2.default)('innerTabScrollSelector', _tab_header2.default.macOSTabs, _tab_header2.default.macOSTabsInner, this.props.classNames.innerTabContainer);
				var addTabButton = _react2.default.createElement(_add_tab_button2.default, {
					onClick: this.onAddTabButtonClick.bind(this),
					style: this.props.styles.addTabButton,
					className: this.props.classNames.addTabButton,
					icon: this.props.icons.addTabButton
				});
	
				return _react2.default.createElement(
					'ul',
					{ className: outerTabClassName, style: this.props.styles.outerTabContainer },
					this.props.addTabPosition === 'start' && addTabButton,
					_react2.default.createElement(
						'ul',
						{
							className: innerTabClassName,
							style: this.props.styles.innerTabContainer,
							ref: function ref(input) {
								return _this3.onTabBarRef(input);
							}
						},
						tabs
					),
					this.props.addTabPosition === 'end' && addTabButton
				);
			}
		}]);
	
		return TabHeader;
	}(_react.Component);
	
	TabHeader.defaultProps = {
		scrollX: 'normal',
		scrollY: 'disabled',
		addTabPosition: 'end',
		activeTabIndex: 0,
		tabs: [],
		dragOutDistance: 40,
		styles: {},
		classNames: {},
		icons: {}
	};
	exports.default = TabHeader;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("classnames");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("jquery");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("lodash.isequal");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("lodash.throttle");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _jquery = __webpack_require__(6);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _reactDraggable = __webpack_require__(10);
	
	var _reactDraggable2 = _interopRequireDefault(_reactDraggable);
	
	var _close_tab_button = __webpack_require__(11);
	
	var _close_tab_button2 = _interopRequireDefault(_close_tab_button);
	
	var _tab = __webpack_require__(12);
	
	var _tab2 = _interopRequireDefault(_tab);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Tab = function (_Component) {
		_inherits(Tab, _Component);
	
		function Tab() {
			_classCallCheck(this, Tab);
	
			return _possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).apply(this, arguments));
		}
	
		_createClass(Tab, [{
			key: 'onDragStart',
			value: function onDragStart(e, data) {
				if (this.props.onDragStart) {
					this.props.onDragStart(e, data);
				}
			}
		}, {
			key: 'onDrag',
			value: function onDrag(e, data) {
				// this.onClick()
	
				if (this.props.onDrag) {
					this.props.onDrag(e, data);
				}
			}
		}, {
			key: 'onDragStop',
			value: function onDragStop(e, data) {
				if (this.props.onDragStop) {
					this.props.onDragStop(e, data);
				}
			}
		}, {
			key: 'onMouseEnter',
			value: function onMouseEnter(e) {
				if (this.props.onMouseEnter) {
					this.props.onMouseEnter(e);
				}
			}
		}, {
			key: 'onMouseLeave',
			value: function onMouseLeave(e) {
				if (this.props.onMouseLeave) {
					this.props.onMouseLeave(e);
				}
			}
		}, {
			key: 'onClick',
			value: function onClick(e) {
				if (e) {
					// e.stopPropagation()
					// e.preventDefault()
	
					if (this.props.onClick) {
						this.props.onClick(e);
					}
				}
			}
		}, {
			key: 'onMouseDown',
			value: function onMouseDown(e) {
				if (e) {
					// e.stopPropagation()
					// e.preventDefault()
	
					if (this.props.onMouseDown) {
						this.props.onMouseDown(e);
					}
				}
			}
		}, {
			key: 'onCloseTabButtonClick',
			value: function onCloseTabButtonClick(e) {
				if (this.props.onCloseTabButtonClick) {
					this.props.onCloseTabButtonClick(e);
				}
			}
		}, {
			key: 'getRef',
			value: function getRef(ref) {
				if (this.props.getRef) {
					this.props.getRef(ref);
				}
			}
		}, {
			key: 'render',
			value: function render() {
				var id = this.props.id;
				var macOSTabClassName = void 0;
				var macOSTabStyle = void 0;
	
				if (this.props.active) {
					macOSTabClassName = (0, _classnames2.default)(_tab2.default.macOSTabNormal, _tab2.default.macOSTabActive, this.props.classNames.tabActive);
					macOSTabStyle = this.props.styles.tabActive;
				} else {
					macOSTabClassName = (0, _classnames2.default)(_tab2.default.macOSTabNormal, this.props.classNames.tab);
					macOSTabStyle = this.props.styles.tab;
				}
	
				var closeTabButton = _react2.default.createElement(_close_tab_button2.default, {
					onClick: this.onCloseTabButtonClick.bind(this),
					className: this.props.classNames.closeTabButton,
					style: this.props.styles.closeTabButton,
					icon: this.props.icons.closeTabButton
				});
	
				return _react2.default.createElement(
					_reactDraggable2.default,
					{
						id: 'draggable_tabs_' + id,
						axis: 'x',
						cancel: '.closeTabButton',
						zIndex: 50,
						bounds: (0, _jquery2.default)('.outerTabContainerSelector').get()[0],
						onStart: this.onDragStart.bind(this),
						onDrag: this.onDrag.bind(this),
						onStop: this.onDragStop.bind(this),
						position: { x: 0, y: 0 },
						offsetParent: (0, _jquery2.default)('.innerTabScrollSelector').get()[0],
						onMouseDown: this.onMouseDown.bind(this)
					},
					_react2.default.createElement(
						'li',
						{
							className: macOSTabClassName,
							style: macOSTabStyle,
							onClick: this.onClick.bind(this),
							onMouseEnter: this.onMouseEnter.bind(this),
							onMouseLeave: this.onMouseLeave.bind(this),
							ref: this.getRef.bind(this)
						},
						this.props.closeTabButtonPosition === 'start' && closeTabButton,
						_react2.default.createElement(
							'div',
							{ className: _tab2.default.macOSTabLabel },
							this.props.label
						),
						this.props.closeTabButtonPosition === 'end' && closeTabButton
					)
				);
			}
		}]);
	
		return Tab;
	}(_react.Component);
	
	Tab.defaultProps = {
		closeTabButtonPosition: 'start',
		label: '',
		active: false,
		styles: {},
		classNames: {},
		icons: {}
	};
	
	
	Tab.propTypes = {
		id: _react2.default.PropTypes.number.isRequired
	};
	
	exports.default = Tab;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("react-draggable");

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _tab = __webpack_require__(12);
	
	var _tab2 = _interopRequireDefault(_tab);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CloseTabButton = function (_Component) {
		_inherits(CloseTabButton, _Component);
	
		function CloseTabButton() {
			_classCallCheck(this, CloseTabButton);
	
			return _possibleConstructorReturn(this, (CloseTabButton.__proto__ || Object.getPrototypeOf(CloseTabButton)).apply(this, arguments));
		}
	
		_createClass(CloseTabButton, [{
			key: 'onClick',
			value: function onClick(e) {
				if (this.props.onClick) {
					e.stopPropagation();
	
					this.props.onClick(e);
				}
			}
		}, {
			key: 'onMouseDown',
			value: function onMouseDown(e) {
				e.stopPropagation();
			}
		}, {
			key: 'render',
			value: function render() {
				var className = (0, _classnames2.default)('closeTabButton', _tab2.default.macOSCloseTabButton, this.props.className);
	
				return _react2.default.createElement(
					'div',
					{
						className: className,
						onClick: this.onClick.bind(this),
						onMouseDown: this.onMouseDown.bind(this),
						style: this.props.style
					},
					this.props.icon ? this.props.icon : '×'
				);
			}
		}]);
	
		return CloseTabButton;
	}(_react.Component);
	
	exports.default = CloseTabButton;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?modules!./tab.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?modules!./tab.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports
	
	
	// module
	exports.push([module.id, "._1wJApClIWMK9zKNcHGjCmp {\n\tborder: 1px solid #929292;\n\theight: 24px;\n\tcolor: #626569;\n\tbackground-color: #BDBABD;\n\tlist-style-type: none;\n\tflex: 1 1 0%;\n\ttext-align: center;\n\tmin-width: 103px;\n\tfont-family: -apple-system, BlinkMacSystemFont, sans-serif;\n\tfont-size: 11px;\n\tmargin-right: -1px;\n\tline-height: 22px;\n\tvertical-align: middle;\n\tbox-sizing: border-box; \n\tcursor: default;\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\tuser-select: none;\n}\n\n._1wJApClIWMK9zKNcHGjCmp:hover {\n\tbackground-color: #B6B4B6;\n\tborder-color: #949494;\n}\n\n._36QrwyOHeCFnNFHTkXxCKf {\n\tcolor: #444444;\n\tbackground-color: #D2CFD2;\n\tborder-color: #AEAEAE;\n\tz-index: 1000;\n}\n\n._36QrwyOHeCFnNFHTkXxCKf:hover {\n\tbackground-color: #D2CFD2;\n\tborder-color: #AEAEAE;\n}\n\n._29wYAXaODhm2xwV6ZBcXQq {\n\theight: 16px;\n\twidth: 16px;\n\tmargin: 0;\n\tpadding: 0;\n\ttext-align: center;\n\tvertical-align: top;\n\tz-index: 100;\n\tposition: absolute;\n\ttop: 3px;\n\tleft: 5px;\n\tcolor: #666366;\n\topacity: 0;\n\tfont-size: 20px;\n\t/*font-family: -apple-system, BlinkMacSystemFont, sans-serif;*/\n\ttext-align: center;\n\tvertical-align: middle;\n\tline-height: 14px;\n\tfont-weight: 200;\n}\n\n._29wYAXaODhm2xwV6ZBcXQq:hover {\n\tborder-radius: 2px;\n\tbackground: rgba(0, 0, 0, 0.08);\n}\n\n._1wJApClIWMK9zKNcHGjCmp:hover ._29wYAXaODhm2xwV6ZBcXQq {\n\topacity: 1;\n}\n\n.IkI7Zyq9R3IdN-Q2dGe5i {\n\theight: 100%;\n\twhite-space: nowrap;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\tpadding-left: 25px;\n\tpadding-right: 25px;\n}\n", ""]);
	
	// exports
	exports.locals = {
		"macOSTabNormal": "_1wJApClIWMK9zKNcHGjCmp",
		"macOSTabActive": "_36QrwyOHeCFnNFHTkXxCKf",
		"macOSCloseTabButton": "_29wYAXaODhm2xwV6ZBcXQq",
		"macOSTabLabel": "IkI7Zyq9R3IdN-Q2dGe5i"
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _add_tab_button = __webpack_require__(17);
	
	var _add_tab_button2 = _interopRequireDefault(_add_tab_button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AddTabButton = function (_Component) {
		_inherits(AddTabButton, _Component);
	
		function AddTabButton() {
			_classCallCheck(this, AddTabButton);
	
			return _possibleConstructorReturn(this, (AddTabButton.__proto__ || Object.getPrototypeOf(AddTabButton)).apply(this, arguments));
		}
	
		_createClass(AddTabButton, [{
			key: 'onClick',
			value: function onClick(e) {
				if (this.props.onClick) {
					this.props.onClick(e);
				}
			}
		}, {
			key: 'render',
			value: function render() {
				var className = (0, _classnames2.default)(_add_tab_button2.default.macOSAddTabButton, this.props.className);
	
				return _react2.default.createElement(
					'li',
					{
						className: className,
						style: this.props.style,
						onClick: this.onClick.bind(this)
					},
					this.props.icon ? this.props.icon : '+'
				);
			}
		}]);
	
		return AddTabButton;
	}(_react.Component);
	
	exports.default = AddTabButton;
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(18);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?modules!./add_tab_button.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?modules!./add_tab_button.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports
	
	
	// module
	exports.push([module.id, "._26_-k7E1vnaJ9onLvUiYgo {\n\theight: 100%;\n\twidth: 28px;\n\tcolor: #2F2F2F;\n\tbackground-color: #C1C0C1;\n\tmargin: 0;\n\tpadding: 0;\n\tfloat: right;\n\tborder: 1px solid #939393;\n\tfont-family: -apple-system, BlinkMacSystemFont, sans-serif;\n\ttext-align: center;\n\tlist-style-type: none;\n\tz-index: 100;\n\tline-height: 18px;\n\tfont-size: 21px;\n\tfont-weight: 100;\n\tvertical-align: middle;\n\tbox-sizing: border-box;\n\tcursor: default;\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\tuser-select: none;\n}\n", ""]);
	
	// exports
	exports.locals = {
		"macOSAddTabButton": "_26_-k7E1vnaJ9onLvUiYgo"
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(6);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var VirtualTabs = function () {
		function VirtualTabs(tabs, refs, sourceId) {
			_classCallCheck(this, VirtualTabs);
	
			this.tabs = tabs.map(function (tab) {
				return {
					id: tab.props.tabId,
					offsetX: 0
				};
			});
	
			this.refs = refs;
			this.sourceId = sourceId;
			this.direction = null;
			this.currentX = 0;
			this.switchNumber = 0;
	
			this.calculateSwitchNumbers();
		}
	
		_createClass(VirtualTabs, [{
			key: 'getTabIds',
			value: function getTabIds() {
				return this.tabs.map(function (tab) {
					return tab.id;
				});
			}
		}, {
			key: 'calculateSwitchNumbers',
			value: function calculateSwitchNumbers() {
				var width = this.refs[this.sourceId].getBoundingClientRect().width;
	
				this.leftTrigger = width * (-0.5 + this.switchNumber);
				this.rightTrigger = width * (0.5 + this.switchNumber);
			}
		}, {
			key: 'getIndex',
			value: function getIndex(id) {
				return this.tabs.findIndex(function (element) {
					return element.id === id;
				});
			}
		}, {
			key: 'getIdToLeft',
			value: function getIdToLeft(sourceId) {
				var sourceIndex = this.getIndex(sourceId);
				var targetIndex = sourceIndex - 1;
	
				if (targetIndex > -1) {
					var targetId = this.tabs[targetIndex].id;
	
					return targetId;
				}
	
				return -1;
			}
		}, {
			key: 'getIdToRight',
			value: function getIdToRight(sourceId) {
				var sourceIndex = this.getIndex(sourceId);
				var targetIndex = sourceIndex + 1;
	
				if (targetIndex < this.tabs.length) {
					var targetId = this.tabs[targetIndex].id;
	
					return targetId;
				}
	
				return -1;
			}
		}, {
			key: 'swapTabs',
			value: function swapTabs(sourceId, targetId, directionNum) {
				var sourceIndex = this.getIndex(this.sourceId);
				var targetIndex = this.getIndex(targetId);
				var targetRef = this.refs[targetId];
	
				if (targetIndex > -1 && targetIndex < this.tabs.length) {
					this.tabs[targetIndex].offsetX -= targetRef.getBoundingClientRect().width * directionNum;
	
					// Note: jQuery animate doesn't work here
	
					(0, _jquery2.default)(targetRef).css({
						transition: 'transform 0.1s linear',
						transform: 'translate(' + this.tabs[targetIndex].offsetX + 'px, 0px)'
					});
	
					this.switchNumber += directionNum;
	
					this.calculateSwitchNumbers();
	
					var temp = this.tabs[sourceIndex];
	
					this.tabs[sourceIndex] = this.tabs[targetIndex];
					this.tabs[targetIndex] = temp;
				}
			}
		}, {
			key: 'move',
			value: function move(x) {
				if (x < this.currentX) {
					this.direction = 'left';
					this.currentX = x;
				} else if (x > this.currentX) {
					this.direction = 'right';
					this.currentX = x;
				}
	
				if (this.direction === 'left') {
					if (x < this.leftTrigger) {
						var targetId = this.getIdToLeft(this.sourceId);
	
						this.swapTabs(this.sourceId, targetId, -1);
					}
				} else if (this.direction === 'right') {
					if (x > this.rightTrigger) {
						var _targetId = this.getIdToRight(this.sourceId);
	
						this.swapTabs(this.sourceId, _targetId, 1);
					}
				}
			}
		}]);
	
		return VirtualTabs;
	}();
	
	exports.default = VirtualTabs;
	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(21);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?modules!./tab_header.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?modules!./tab_header.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports
	
	
	// module
	exports.push([module.id, "._1dW_DdnsBhrwodgjX5IbEh {\n\theight: 100%;\n\twidth: 100%;\n\tbackground-color: grey;\n\tmargin: 0;\n\tpadding: 0;\n\tdisplay: flex;\n\tposition: relative;\n}\n\n._1zK2HUp5op8UNrZzaxQ8ot {\n\toverflow-x: scroll;\n}\n\n._1zK2HUp5op8UNrZzaxQ8ot::-webkit-scrollbar { \n\tdisplay: none;\n}\n", ""]);
	
	// exports
	exports.locals = {
		"macOSTabs": "_1dW_DdnsBhrwodgjX5IbEh",
		"macOSTabsInner": "_1zK2HUp5op8UNrZzaxQ8ot"
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TabBody = function (_Component) {
		_inherits(TabBody, _Component);
	
		function TabBody() {
			_classCallCheck(this, TabBody);
	
			return _possibleConstructorReturn(this, (TabBody.__proto__ || Object.getPrototypeOf(TabBody)).apply(this, arguments));
		}
	
		_createClass(TabBody, [{
			key: 'render',
			value: function render() {
				var display = this.props.display ? 'block' : 'none';
	
				return _react2.default.createElement(
					'div',
					{
						id: 'macos-tab-body-' + this.props.tabId,
						className: this.props.className,
						style: _extends({ height: '100%', display: display }, this.props.style)
					},
					this.props.children
				);
			}
		}]);
	
		return TabBody;
	}(_react.Component);
	
	TabBody.defaultProps = {
		label: ''
	};
	exports.default = TabBody;
	module.exports = exports['default'];

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWU0NDUyZTQwM2ZiNTFhYWViNmUiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hY29zX3RhYnMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb21cIiIsIndlYnBhY2s6Ly8vLi9zcmMvdGFiX2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoLmlzZXF1YWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2gudGhyb3R0bGVcIiIsIndlYnBhY2s6Ly8vLi9zcmMvdGFiLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRyYWdnYWJsZVwiIiwid2VicGFjazovLy8uL3NyYy9jbG9zZV90YWJfYnV0dG9uLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy90YWIuY3NzPzliYWUiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL3RhYi5jc3MiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkZF90YWJfYnV0dG9uLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9hZGRfdGFiX2J1dHRvbi5jc3M/MjRjNiIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvYWRkX3RhYl9idXR0b24uY3NzIiwid2VicGFjazovLy8uL3NyYy92aXJ0dWFsX3RhYnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL3RhYl9oZWFkZXIuY3NzP2ZlZjkiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL3RhYl9oZWFkZXIuY3NzIiwid2VicGFjazovLy8uL3NyYy90YWJfYm9keS5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwicmVxdWlyZSIsIlRhYkJvZHkiLCJNYWNPU1RhYnMiLCJwcm9wcyIsInN0YXRlIiwiYWN0aXZlVGFiSW5kZXgiLCJ0YWJzIiwibGVuZ3RoIiwiaW5kZXgiLCJhdXRvQWN0aXZlVGFiIiwic2V0U3RhdGUiLCJvblNldEFjdGl2ZVRhYiIsInNldEFjdGl2ZVRhYiIsImUiLCJvbkFkZFRhYkJ1dHRvbkNsaWNrIiwiY2xvc2VkVGFiSW5kZXgiLCJvbkNsb3NlVGFiQnV0dG9uQ2xpY2siLCJnZXRBY3RpdmVUYWJJbmRleCIsImRhdGEiLCJvbkRyYWdPdXQiLCJvbkRyYWdTdG9wIiwib25UYWJDbGljayIsIm9uVGFiTW91c2VFbnRlciIsIm9uVGFiTW91c2VMZWF2ZSIsInNob3dIZWFkZXIiLCJoZWlnaHQiLCJkZWZhdWx0Q29udGVudCIsInRvUmVuZGVyIiwiaSIsInRhYiIsInNob3VsZERpc3BsYXkiLCJkaXNwbGF5IiwicHVzaCIsInRhYklkIiwiY2hpbGRyZW4iLCJjdXN0b21Cb2R5RWxlbWVudElkIiwic2V0VGFiVmlzaWJpbGl0eSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXJDdXN0b21Cb2R5RWxlbWVudCIsImhlYWRlckhlaWdodCIsInNob3VsZFJlbmRlckhlYWRlciIsImZvcm1hdEhlaWdodCIsInNob3VsZFJlbmRlckZ1bGxIZWlnaHQiLCJiaW5kIiwiZHJhZ091dERpc3RhbmNlIiwiYWRkVGFiUG9zaXRpb24iLCJzY3JvbGxYIiwic2Nyb2xsWSIsInN0eWxlcyIsImNsYXNzTmFtZXMiLCJpY29ucyIsImRlZmF1bHRQcm9wcyIsIlRhYkhlYWRlciIsImlkIiwidGFiQmFyUmVmIiwidGFiUmVmcyIsInZpcnR1YWxUYWJzIiwib25TY3JvbGwiLCJsZWFkaW5nIiwicHJldlByb3BzIiwicmVzZXRUYWJQb3NpdGlvbnMiLCJmb2N1c1RhYiIsImxhYmVsIiwib25EcmFnU3RhcnQiLCJvbkRyYWciLCJvbkdldFJlZiIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsIm9uVGFiTW91c2VEb3duIiwicmVuZGVyTGlzdCIsInJlbmRlclRhYiIsImN1cnJlbnRUYWJzIiwic2xpY2UiLCJtcyIsIiR0YWIiLCJwb3NpdGlvbiIsImxlZnQiLCJ3aWR0aCIsIiRpbm5lclRhYlNjcm9sbFNlbGVjdG9yIiwiaW5uZXJUYWJTY3JvbGxTZWxlY3RvcldpZHRoIiwiYW5pbWF0ZSIsInNjcm9sbExlZnQiLCJmaW5kVGFiSW5kZXhCeUlkIiwicmVmIiwib24iLCJkZWx0YVgiLCJvcmlnaW5hbEV2ZW50IiwiZGVsdGFZIiwiJHRhcmdldCIsInByZXZlbnREZWZhdWx0IiwieSIsIm1vdmUiLCJ4IiwiaWRPcmRlciIsImdldFRhYklkcyIsIm5ld1RhYnMiLCJ0YWJJbmRleCIsImZpbmRJbmRleCIsImN1cnJlbnRBY3RpdmVUYWJJZCIsImZpbmRUYWJJZEJ5SW5kZXgiLCJuZXh0QWN0aXZlVGFiSW5kZXgiLCJrZXkiLCIkcmVmIiwiY3NzIiwidHJhbnNpdGlvbiIsInRyYW5zZm9ybSIsInJlbmRlclRhYnMiLCJvdXRlclRhYkNsYXNzTmFtZSIsIm1hY09TVGFicyIsIm91dGVyVGFiQ29udGFpbmVyIiwiaW5uZXJUYWJDbGFzc05hbWUiLCJtYWNPU1RhYnNJbm5lciIsImlubmVyVGFiQ29udGFpbmVyIiwiYWRkVGFiQnV0dG9uIiwiaW5wdXQiLCJvblRhYkJhclJlZiIsIlRhYiIsIm9uQ2xpY2siLCJvbk1vdXNlRG93biIsImdldFJlZiIsIm1hY09TVGFiQ2xhc3NOYW1lIiwibWFjT1NUYWJTdHlsZSIsImFjdGl2ZSIsIm1hY09TVGFiTm9ybWFsIiwibWFjT1NUYWJBY3RpdmUiLCJ0YWJBY3RpdmUiLCJjbG9zZVRhYkJ1dHRvbiIsImdldCIsImNsb3NlVGFiQnV0dG9uUG9zaXRpb24iLCJtYWNPU1RhYkxhYmVsIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsIkNsb3NlVGFiQnV0dG9uIiwic3RvcFByb3BhZ2F0aW9uIiwiY2xhc3NOYW1lIiwibWFjT1NDbG9zZVRhYkJ1dHRvbiIsInN0eWxlIiwiaWNvbiIsIkFkZFRhYkJ1dHRvbiIsIm1hY09TQWRkVGFiQnV0dG9uIiwiVmlydHVhbFRhYnMiLCJyZWZzIiwic291cmNlSWQiLCJtYXAiLCJvZmZzZXRYIiwiZGlyZWN0aW9uIiwiY3VycmVudFgiLCJzd2l0Y2hOdW1iZXIiLCJjYWxjdWxhdGVTd2l0Y2hOdW1iZXJzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibGVmdFRyaWdnZXIiLCJyaWdodFRyaWdnZXIiLCJlbGVtZW50Iiwic291cmNlSW5kZXgiLCJnZXRJbmRleCIsInRhcmdldEluZGV4IiwidGFyZ2V0SWQiLCJkaXJlY3Rpb25OdW0iLCJ0YXJnZXRSZWYiLCJ0ZW1wIiwiZ2V0SWRUb0xlZnQiLCJzd2FwVGFicyIsImdldElkVG9SaWdodCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0FBLFFBQU9DLE9BQVAsR0FBaUIsbUJBQUFDLENBQVEsQ0FBUixDQUFqQjtBQUNBRixRQUFPQyxPQUFQLENBQWVFLE9BQWYsR0FBeUIsbUJBQUFELENBQVEsRUFBUixDQUF6QixDOzs7Ozs7Ozs7Ozs7Ozs7O0FDQ0E7Ozs7QUFDQTs7QUFFQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7S0F5R3FCRSxTOzs7QUFzQnBCLHFCQUFZQyxLQUFaLEVBQTBCO0FBQUE7O0FBQUEscUhBQ25CQSxLQURtQjs7QUFHekIsU0FBS0MsS0FBTCxHQUFhO0FBQ1pDLG9CQUFnQixNQUFLRixLQUFMLENBQVdFLGNBQVgsSUFBNkI7QUFEakMsSUFBYjtBQUh5QjtBQU16Qjs7Ozt1Q0FFbUI7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RjlELE8iLCJmaWxlIjoibWFjb3NfdGFicy5saWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1ZTQ0NTJlNDAzZmI1MWFhZWI2ZSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9zcmMvbWFjb3NfdGFicycpXG5tb2R1bGUuZXhwb3J0cy5UYWJCb2R5ID0gcmVxdWlyZSgnLi9zcmMvdGFiX2JvZHknKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaW5kZXguanMiLCIvLyBAZmxvd1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nXG5cbmltcG9ydCBUYWJIZWFkZXIgZnJvbSAnLi90YWJfaGVhZGVyJ1xuaW1wb3J0IFRhYkJvZHkgZnJvbSAnLi90YWJfYm9keSdcblxudHlwZSBJRCA9IG51bWJlciB8IHN0cmluZ1xudHlwZSBUYWJzID0gQXJyYXk8VGFiQm9keT5cblxudHlwZSBQcm9wcyA9IHtcblx0Ly8gb25DbGljayBldmVudCB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgQWRkVGFiQnV0dG9uIG9uIGEgdGFiIGhlYWRlclxuXHRvbkFkZFRhYkJ1dHRvbkNsaWNrOiAoZTogRXZlbnQpID0+IHZvaWQsXG5cblx0Ly8gb25DbGljayBldmVudCB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgQ2xvc2VUYWJCdXR0b24gb24gYSB0YWIgaGVhZGVyXG5cdG9uQ2xvc2VUYWJCdXR0b25DbGljazogKGU6IEV2ZW50LCBpbmRleDogbnVtYmVyKSA9PiB2b2lkLFxuXG5cdC8vIEV2ZW50IHdoZW4gdGhlIHVzZXIgc3RvcHMgZHJhZ2dpbmcgYSBoZWFkZXJcblx0Ly8gVGhlIHVwZGF0ZWQgdGFicyBjb250YWluIHRoZSBuZXcgb3JkZXJpbmcsIHlvdSBjYW4gZGlyZWN0bHkgdXBkYXRlIHlvdXIgc3RhdGUgd2l0aFxuXHQvLyB0aGVzZSByZXR1cm5lZCB0YWJzXG5cdC8vIFRoZSB1cGRhdGVkIGluZGV4IG9mIHRoZSBhY3RpdmUgdGFiIGlzIGFsc28gcHJvdmlkZWRcblx0b25EcmFnU3RvcDogKGU6IEV2ZW50LCBpbmRleDogbnVtYmVyLCB0YWJzOiBUYWJzKSA9PiB2b2lkLFxuXG5cdC8vIEV2ZW50IHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIGEgdGFiIGhlYWRlclxuXHQvLyBUaGUgaW5kZXggb2YgdGhlIGNsaWNrZWQgaGVhZGVyIGlzIHBhc3NlZCBiYWNrXG5cdG9uVGFiQ2xpY2s6IChlOiBFdmVudCwgaW5kZXg6IG51bWJlcikgPT4gdm9pZCxcblxuXHQvLyBFdmVudCB3aGVuIHRoZSB1c2VyJ3MgbW91c2UgZW50ZXJzIGEgdGFiIGhlYWRlclxuXHRvblRhYk1vdXNlRW50ZXI6IChlOiBFdmVudCwgaW5kZXg6IG51bWJlcikgPT4gdm9pZCxcblxuXHQvLyBFdmVuIHdoZW4gdGhlIHVzZXIncyBtb3VzZSBsZWF2ZXMgYSB0YWIgaGVhZGVyXG5cdG9uVGFiTW91c2VMZWF2ZTogKGU6IEV2ZW50LCBpbmRleDogbnVtYmVyKSA9PiB2b2lkLFxuXG5cdC8vIEV2ZW50IHdoZW4gdGhlIGFjdGl2ZVRhYkluZGV4IGlzIHVwZGF0ZWQgaW50ZXJuYWxseVxuXHQvLyBUaGlzIGFsbG93cyB5b3UgdG8ga2VlcCB0cmFjayBvZiB0aGUgYWN0aXZlVGFiSW5kZXggZXZlblxuXHQvLyBpZiB5b3UgYXJlIGxldHRpbmcgTWFjT1NUYWJzIGhhbmRsZSB0aGUgc3RhdGVcblx0b25TZXRBY3RpdmVUYWI6IChpbmRleDogbnVtYmVyKSA9PiB2b2lkLFxuXG5cdC8vIFNwZWNpZnkgdGhlIHBvc2l0aW9uIG9mIGFkZFRhYkJ1dHRvblxuXHRhZGRUYWJQb3NpdGlvbjogJ25vbmUnIHwgJ3N0YXJ0JyB8ICdlbmQnLFxuXG5cdC8vIERlY2xhcmUgd2hldGhlciBvciBub3QgeW91IHdhbnQgdG8gbWFuYWdlIHRoZSBhY3RpdmVUYWJJbmRleFxuXHRhdXRvQWN0aXZlVGFiOiBib29sZWFuLFxuXG5cdC8vIENhbiBiZSB1c2VkIHRvIHNldCBpbml0aWFsIGFjdGl2ZSB0YWIgaW5kZXhcblx0Ly8gSWYgYXV0b0FjdGl2ZVRhYiBpcyBmYWxzZSwgdGhlbiB5b3Ugc2hvdWxkIGhhdmUgbWV0aG9kc1xuXHQvLyB0byBtYW5hZ2UgdGhlIGFjdGl2ZVRhYkluZGV4IHN0YXRlXG5cdGFjdGl2ZVRhYkluZGV4OiBudW1iZXIsXG5cblx0Ly8gVGFiIGNvbnRlbnQgc2hvdWxkIGJlIHdyYXBwZWQgaW4gYSBUYWJCb2R5IGNvbXBvbmVudCB3aXRoIHRoZSBjb3JyZWN0IHByb3BzXG5cdC8vIFRhYnMgb3JkZXIgY2FuIGJlIG1vZGlmaWVkIHByb2dyYW1tYXRpY2FsbHkgYnkgbWFudWFsbHkgY2hhbmdpbmcgdGhlIG9yZGVyXG5cdC8vIG9mIHRoZSBhcnJheVxuXHR0YWJzOiBUYWJzLFxuXG5cdC8vIERlY2xhcmUgYSBkaXYgb3IgcmVhY3QgY29tcG9uZW50IHRvIHJlbmRlciB3aGVuIHRoZXJlIGFyZSBubyB0YWJzIG9wZW5cblx0ZGVmYXVsdENvbnRlbnQ6IE9iamVjdCxcblxuXHQvLyBGbGFnIHRvIHNob3cgb3IgaGlkZSB0YWIgaGVhZGVyc1xuXHRzaG93SGVhZGVyOiBib29sZWFuLFxuXG5cdC8vIERlY2xhcmUgdGhlIGhlYWRlciBoZWlnaHQgaW4gcHggKG5vdGU6IHN0eWxlcyBoYXZlIG5vdCBiZWVuIHRlc3RlZCB3aXRoXG5cdC8vIGFueXRoaW5nIGJlc2lkZXMgdGhlIGRlZmF1bHQgb2YgMjRweCwgdGhpcyBpcyBhIFdJUClcblx0aGVhZGVySGVpZ2h0OiBudW1iZXIgfCBzdHJpbmcsXG5cblx0Ly8gRGVjbGFyZSBhIGN1c3RvbSBlbGVtZW50IHRoYXQgdGhlIGJvZHkgc2hvdWxkIGJlIHJlbmRlcmVkIGludG9cblx0Ly8gaW5zdGVhZCBvZiBkaXJlY3RseSBiZWxvdyB0aGUgdGFiIGhlYWRlcnNcblx0Ly8gaS5lLiA8ZGl2IGlkPVwidGFiQm9keVwiIC8+XG5cdGN1c3RvbUJvZHlFbGVtZW50SWQ6IHN0cmluZyxcblxuXHQvLyBTZXQgdGFiIHNjcm9sbCBiZWhhdmlvclxuXHRzY3JvbGxYOiAnbm9ybWFsJyB8ICdyZXZlcnNlZCcgfCAnZGlzYWJsZWQnLFxuXG5cdC8vIFNldCB0YWIgc2Nyb2xsIGJlaGF2aW9yXG5cdHNjcm9sbFk6ICdub3JtYWwnIHwgJ3JldmVyc2VkJyB8ICdkaXNhYmxlZCcsXG5cblx0Ly8gQXBwbHkgY3VzdG9tIHN0eWxlcyB0byBzcGVjaWZpZWQgY29tcG9uZW50KHMpXG5cdHN0eWxlczoge1xuXHRcdGFkZFRhYkJ1dHRvbj86IE9iamVjdCxcblx0XHRjbG9zZVRhYkJ1dHRvbj86IE9iamVjdCxcblx0XHR0YWI/OiBPYmplY3QsXG5cdFx0dGFiQWN0aXZlPzogT2JqZWN0LFxuXHRcdG91dGVyVGFiQ29udGFpbmVyPzogT2JqZWN0LFxuXHRcdGlubmVyVGFiQ29udGFpbmVyPzogT2JqZWN0XG5cdH0sXG5cblx0Ly8gQXBwbHkgY3VzdG9tIGNsYXNzbmFtZXMgdG8gc3BlY2lmaWVkIGNvbXBvbmVudChzKVxuXHRjbGFzc05hbWVzOiB7XG5cdFx0YWRkVGFiQnV0dG9uPzogc3RyaW5nLFxuXHRcdGNsb3NlVGFiQnV0dG9uPzogc3RyaW5nLFxuXHRcdHRhYj86IHN0cmluZyxcblx0XHR0YWJBY3RpdmU/OiBzdHJpbmcsXG5cdFx0b3V0ZXJUYWJDb250YWluZXI/OiBzdHJpbmcsXG5cdFx0aW5uZXJUYWJDb250YWluZXI/OiBzdHJpbmdcblx0fSxcblxuXHQvLyBPdmVycmlkZSBpY29ucyBvbiBidXR0b25zXG5cdGljb25zOiB7XG5cdFx0YWRkVGFiQnV0dG9uPzogT2JqZWN0IHwgc3RyaW5nLFxuXHRcdGNsb3NlVGFiQnV0dG9uPzogT2JqZWN0IHwgc3RyaW5nXG5cdH0sXG5cblx0Ly8gRXhwZXJpbWVudGFsL05vdCBDb21wbGV0ZWRcblx0b25EcmFnT3V0OiAoZTogRXZlbnQsIG91dFRhYkluZGV4OiBudW1iZXIpID0+IHZvaWQsXG5cdGRyYWdPdXREaXN0YW5jZTogbnVtYmVyXG59XG5cbnR5cGUgU3RhdGUgPSB7XG5cdGFjdGl2ZVRhYkluZGV4OiBudW1iZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFjT1NUYWJzIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0cHJvcHM6IFByb3BzXG5cdHN0YXRlOiBTdGF0ZVxuXG5cdGlkOiBJRFxuXHRtYXBwaW5nOiBPYmplY3RcblxuXHRzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuXHRcdHRhYnM6IFtdLFxuXHRcdGFjdGl2ZVRhYkluZGV4OiAwLFxuXHRcdHNjcm9sbFg6ICdub3JtYWwnLFxuXHRcdHNjcm9sbFk6ICdkaXNhYmxlZCcsXG5cdFx0YWRkVGFiUG9zaXRpb246ICdlbmQnLFxuXHRcdHNob3dIZWFkZXI6IHRydWUsXG5cdFx0aGVhZGVySGVpZ2h0OiAyNCxcblx0XHRkcmFnT3V0RGlzdGFuY2U6IDQwLFxuXHRcdGF1dG9BY3RpdmVUYWI6IHRydWUsXG5cdFx0c3R5bGVzOiB7fSxcblx0XHRjbGFzc05hbWVzOiB7fSxcblx0XHRpY29uczoge31cblx0fVxuXG5cdGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGFjdGl2ZVRhYkluZGV4OiB0aGlzLnByb3BzLmFjdGl2ZVRhYkluZGV4IHx8IDBcblx0XHR9XG5cdH1cblxuXHRnZXRBY3RpdmVUYWJJbmRleCgpIHtcblx0XHRsZXQgYWN0aXZlVGFiSW5kZXggPSAodHlwZW9mIHRoaXMucHJvcHMuYWN0aXZlVGFiSW5kZXggPT09ICdudW1iZXInKSA/IHRoaXMucHJvcHMuYWN0aXZlVGFiSW5kZXggOiB0aGlzLnN0YXRlLmFjdGl2ZVRhYkluZGV4XG5cblx0XHRpZiAoYWN0aXZlVGFiSW5kZXggPj0gdGhpcy5wcm9wcy50YWJzLmxlbmd0aCkge1xuXHRcdFx0YWN0aXZlVGFiSW5kZXggPSB0aGlzLnByb3BzLnRhYnMubGVuZ3RoIC0gMVxuXHRcdH1cblxuXHRcdHJldHVybiBhY3RpdmVUYWJJbmRleFxuXHR9XG5cblx0c2V0QWN0aXZlVGFiKGluZGV4OiBudW1iZXIpIHtcblx0XHRpZiAodGhpcy5wcm9wcy5hdXRvQWN0aXZlVGFiKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0YWN0aXZlVGFiSW5kZXg6IGluZGV4XG5cdFx0XHR9KVxuXHRcdH1cblx0fVxuXG5cdG9uU2V0QWN0aXZlVGFiKGluZGV4OiBudW1iZXIpIHtcblx0XHRpZiAodGhpcy5wcm9wcy5vblNldEFjdGl2ZVRhYikge1xuXHRcdFx0dGhpcy5wcm9wcy5vblNldEFjdGl2ZVRhYihpbmRleClcblx0XHR9XG5cblx0XHR0aGlzLnNldEFjdGl2ZVRhYihpbmRleClcblx0fVxuXG5cdG9uQWRkVGFiQnV0dG9uQ2xpY2soZTogRXZlbnQsIHRhYnM6IFRhYnMpIHtcblx0XHRpZiAodGhpcy5wcm9wcy5vbkFkZFRhYkJ1dHRvbkNsaWNrKSB7XG5cdFx0XHR0aGlzLnByb3BzLm9uQWRkVGFiQnV0dG9uQ2xpY2soZSlcblx0XHR9XG5cblx0XHR0aGlzLnNldEFjdGl2ZVRhYih0YWJzLmxlbmd0aCkgLy8gUHVycG9zZWx5IHNldCB0byBsYXN0IGluZGV4ICsgMVxuXHR9XG5cblx0b25DbG9zZVRhYkJ1dHRvbkNsaWNrKGU6IEV2ZW50LCB0YWJzOiBUYWJzLCBjbG9zZWRUYWJJbmRleDogbnVtYmVyKSB7XG5cdFx0aWYgKHRoaXMucHJvcHMub25DbG9zZVRhYkJ1dHRvbkNsaWNrKSB7XG5cdFx0XHR0aGlzLnByb3BzLm9uQ2xvc2VUYWJCdXR0b25DbGljayhlLCBjbG9zZWRUYWJJbmRleClcblx0XHR9XG5cblx0XHRjb25zdCBhY3RpdmVUYWJJbmRleCA9IHRoaXMuZ2V0QWN0aXZlVGFiSW5kZXgoKVxuXG5cdFx0aWYgKGNsb3NlZFRhYkluZGV4IDw9IGFjdGl2ZVRhYkluZGV4KSB7XG5cdFx0XHR0aGlzLm9uU2V0QWN0aXZlVGFiKChhY3RpdmVUYWJJbmRleCA9PT0gMCkgPyAwIDogYWN0aXZlVGFiSW5kZXggLSAxKVxuXHRcdH1cblx0fVxuXG5cdG9uRHJhZ091dChlOiBFdmVudCwgZGF0YTogT2JqZWN0LCB0YWJzOiBUYWJzLCBpbmRleDogbnVtYmVyKSB7XG5cdFx0aWYgKHRoaXMucHJvcHMub25EcmFnT3V0KSB7XG5cdFx0XHR0aGlzLnByb3BzLm9uRHJhZ091dChlLCBpbmRleClcblx0XHR9XG5cdH1cblxuXHRvbkRyYWdTdG9wKGU6IEV2ZW50LCBkYXRhOiBPYmplY3QsIHRhYnM6IFRhYnMsIGFjdGl2ZVRhYkluZGV4OiBudW1iZXIpIHtcblx0XHRpZiAodGhpcy5wcm9wcy5vbkRyYWdTdG9wKSB7XG5cdFx0XHR0aGlzLnByb3BzLm9uRHJhZ1N0b3AoZSwgYWN0aXZlVGFiSW5kZXgsIHRhYnMpXG5cdFx0fVxuXG5cdFx0dGhpcy5vblNldEFjdGl2ZVRhYihhY3RpdmVUYWJJbmRleClcblx0fVxuXG5cdG9uVGFiQ2xpY2soZTogRXZlbnQsIGluZGV4OiBudW1iZXIpIHtcblx0XHRpZiAodGhpcy5wcm9wcy5vblRhYkNsaWNrKSB7XG5cdFx0XHR0aGlzLnByb3BzLm9uVGFiQ2xpY2soZSwgaW5kZXgpXG5cdFx0fVxuXG5cdFx0dGhpcy5vblNldEFjdGl2ZVRhYihpbmRleClcblx0fVxuXG5cdG9uVGFiTW91c2VFbnRlcihlOiBFdmVudCwgaW5kZXg6IG51bWJlcikge1xuXHRcdGlmICh0aGlzLnByb3BzLm9uVGFiTW91c2VFbnRlcikge1xuXHRcdFx0dGhpcy5wcm9wcy5vblRhYk1vdXNlRW50ZXIoZSwgaW5kZXgpXG5cdFx0fVxuXHR9XG5cblx0b25UYWJNb3VzZUxlYXZlKGU6IEV2ZW50LCBpbmRleDogbnVtYmVyKSB7XG5cdFx0aWYgKHRoaXMucHJvcHMub25UYWJNb3VzZUxlYXZlKSB7XG5cdFx0XHR0aGlzLnByb3BzLm9uVGFiTW91c2VMZWF2ZShlLCBpbmRleClcblx0XHR9XG5cdH1cblxuXHRzaG91bGRSZW5kZXJIZWFkZXIoKSB7XG5cdFx0aWYgKHRoaXMucHJvcHMuc2hvd0hlYWRlciB8fCB0aGlzLnByb3BzLnRhYnMubGVuZ3RoID4gMCkge1xuXHRcdFx0cmV0dXJuIHRydWVcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2Vcblx0fVxuXG5cdGZvcm1hdEhlaWdodChoZWlnaHQ6IG51bWJlciB8IHN0cmluZykge1xuXHRcdGlmICh0eXBlb2YgaGVpZ2h0ID09PSAnbnVtYmVyJykge1xuXHRcdFx0cmV0dXJuIGAkeyBoZWlnaHQgfXB4YFxuXHRcdH1cblxuXHRcdHJldHVybiBoZWlnaHRcblx0fVxuXG5cdHNldFRhYlZpc2liaWxpdHkoKSB7XG5cdFx0aWYgKHRoaXMucHJvcHMudGFicy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiB0aGlzLnByb3BzLmRlZmF1bHRDb250ZW50XG5cdFx0fVxuXG5cdFx0Y29uc3QgdG9SZW5kZXIgPSBbXVxuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BzLnRhYnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IHRhYiA9IHRoaXMucHJvcHMudGFic1tpXVxuXG5cdFx0XHRjb25zdCBzaG91bGREaXNwbGF5ID0ge1xuXHRcdFx0XHRkaXNwbGF5OiBpID09PSB0aGlzLmdldEFjdGl2ZVRhYkluZGV4KClcblx0XHRcdH1cblxuXHRcdFx0dG9SZW5kZXIucHVzaChcblx0XHRcdFx0PFRhYkJvZHlcblx0XHRcdFx0XHR7IC4uLnNob3VsZERpc3BsYXkgfVxuXHRcdFx0XHRcdHsgLi4udGFiLnByb3BzIH1cblx0XHRcdFx0XHRrZXk9eyB0YWIucHJvcHMudGFiSWQgfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0eyB0YWIucHJvcHMuY2hpbGRyZW4gfVxuXHRcdFx0XHQ8L1RhYkJvZHk+XG5cdFx0XHQpXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRvUmVuZGVyXG5cdH1cblxuXHRyZW5kZXJDdXN0b21Cb2R5RWxlbWVudCgpIHtcblx0XHRjb25zdCBjdXN0b21Cb2R5RWxlbWVudElkID0gdGhpcy5wcm9wcy5jdXN0b21Cb2R5RWxlbWVudElkXG5cblx0XHRpZiAoY3VzdG9tQm9keUVsZW1lbnRJZCkge1xuXHRcdFx0cmVuZGVyKFxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzEwMCUnIH19PnsgdGhpcy5zZXRUYWJWaXNpYmlsaXR5KCkgfTwvZGl2Pixcblx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY3VzdG9tQm9keUVsZW1lbnRJZClcblx0XHRcdClcblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHR0aGlzLnJlbmRlckN1c3RvbUJvZHlFbGVtZW50KClcblx0fVxuXG5cdGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcblx0XHR0aGlzLnJlbmRlckN1c3RvbUJvZHlFbGVtZW50KClcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCBoZWFkZXJIZWlnaHQgPSAodGhpcy5zaG91bGRSZW5kZXJIZWFkZXIoKSkgPyB0aGlzLmZvcm1hdEhlaWdodCh0aGlzLnByb3BzLmhlYWRlckhlaWdodCkgOiAwXG5cdFx0Y29uc3QgYWN0aXZlVGFiSW5kZXggPSB0aGlzLmdldEFjdGl2ZVRhYkluZGV4KClcblx0XHRjb25zdCBzaG91bGRSZW5kZXJGdWxsSGVpZ2h0ID0gKCF0aGlzLnByb3BzLmN1c3RvbUJvZHlFbGVtZW50SWQpID8geyBoZWlnaHQ6ICcxMDAlJyB9IDogbnVsbFxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgc3R5bGU9eyBzaG91bGRSZW5kZXJGdWxsSGVpZ2h0IH0+XG5cdFx0XHRcdHsgdGhpcy5zaG91bGRSZW5kZXJIZWFkZXIoKSAmJlxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBoZWFkZXJIZWlnaHQgfX0+XG5cdFx0XHRcdFx0XHQ8VGFiSGVhZGVyXG5cdFx0XHRcdFx0XHRcdG9uU2V0QWN0aXZlVGFiPXsgdGhpcy5vblNldEFjdGl2ZVRhYi5iaW5kKHRoaXMpIH1cblx0XHRcdFx0XHRcdFx0b25BZGRUYWJCdXR0b25DbGljaz17IHRoaXMub25BZGRUYWJCdXR0b25DbGljay5iaW5kKHRoaXMpIH1cblx0XHRcdFx0XHRcdFx0b25DbG9zZVRhYkJ1dHRvbkNsaWNrPXsgdGhpcy5vbkNsb3NlVGFiQnV0dG9uQ2xpY2suYmluZCh0aGlzKSB9XG5cdFx0XHRcdFx0XHRcdG9uRHJhZ091dD17IHRoaXMub25EcmFnT3V0LmJpbmQodGhpcykgfVxuXHRcdFx0XHRcdFx0XHRkcmFnT3V0RGlzdGFuY2U9eyB0aGlzLnByb3BzLmRyYWdPdXREaXN0YW5jZSB9XG5cdFx0XHRcdFx0XHRcdG9uRHJhZ1N0b3A9eyB0aGlzLm9uRHJhZ1N0b3AuYmluZCh0aGlzKSB9XG5cdFx0XHRcdFx0XHRcdG9uVGFiQ2xpY2s9eyB0aGlzLm9uVGFiQ2xpY2suYmluZCh0aGlzKSB9XG5cdFx0XHRcdFx0XHRcdG9uTW91c2VFbnRlcj17IHRoaXMub25UYWJNb3VzZUVudGVyLmJpbmQodGhpcykgfVxuXHRcdFx0XHRcdFx0XHRvbk1vdXNlTGVhdmU9eyB0aGlzLm9uVGFiTW91c2VMZWF2ZS5iaW5kKHRoaXMpIH1cblx0XHRcdFx0XHRcdFx0YWN0aXZlVGFiSW5kZXg9eyBhY3RpdmVUYWJJbmRleCB9XG5cdFx0XHRcdFx0XHRcdGFkZFRhYlBvc2l0aW9uPXsgdGhpcy5wcm9wcy5hZGRUYWJQb3NpdGlvbiB9XG5cdFx0XHRcdFx0XHRcdHNjcm9sbFg9eyB0aGlzLnByb3BzLnNjcm9sbFggfVxuXHRcdFx0XHRcdFx0XHRzY3JvbGxZPXsgdGhpcy5wcm9wcy5zY3JvbGxZIH1cblx0XHRcdFx0XHRcdFx0dGFicz17IHRoaXMucHJvcHMudGFicyB9XG5cdFx0XHRcdFx0XHRcdHN0eWxlcz17IHRoaXMucHJvcHMuc3R5bGVzIH1cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lcz17IHRoaXMucHJvcHMuY2xhc3NOYW1lcyB9XG5cdFx0XHRcdFx0XHRcdGljb25zPXsgdGhpcy5wcm9wcy5pY29ucyB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR9XG5cdFx0XHRcdHsgIXRoaXMucHJvcHMuY3VzdG9tQm9keUVsZW1lbnRJZCAmJlxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBgY2FsYygxMDAlIC0gJHsgaGVhZGVySGVpZ2h0IH0pYCB9fT5cblx0XHRcdFx0XHRcdHsgdGhpcy5zZXRUYWJWaXNpYmlsaXR5KCkgfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWNvc190YWJzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LWRvbVwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIEBmbG93XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IGlzRXF1YWwgZnJvbSAnbG9kYXNoLmlzZXF1YWwnXG5pbXBvcnQgdGhyb3R0bGUgZnJvbSAnbG9kYXNoLnRocm90dGxlJ1xuXG5pbXBvcnQgVGFiIGZyb20gJy4vdGFiJ1xuaW1wb3J0IEFkZFRhYkJ1dHRvbiBmcm9tICcuL2FkZF90YWJfYnV0dG9uJ1xuXG5pbXBvcnQgVmlydHVhbFRhYnMgZnJvbSAnLi92aXJ0dWFsX3RhYnMnXG5cbmltcG9ydCBzdHlsZSBmcm9tICcuLi9zdHlsZXMvdGFiX2hlYWRlci5jc3MnXG5cbnR5cGUgSUQgPSBudW1iZXIgfCBzdHJpbmdcbnR5cGUgVGFicyA9IEFycmF5PE9iamVjdD5cblxudHlwZSBQcm9wcyA9IHtcblx0b25TZXRBY3RpdmVUYWI/OiAoaW5kZXg6IG51bWJlcikgPT4gdm9pZCxcblx0b25BZGRUYWJCdXR0b25DbGljaz86IChlOiBFdmVudCwgdGFiczogVGFicykgPT4gdm9pZCxcblx0b25DbG9zZVRhYkJ1dHRvbkNsaWNrPzogKGU6IEV2ZW50LCB0YWJzOiBUYWJzLCBjbG9zZWRUYWJJbmRleDogbnVtYmVyKSA9PiB2b2lkLFxuXHRvbkRyYWdTdG9wPzogKGU6IEV2ZW50LCBkYXRhOiBPYmplY3QsIHRhYnM6IFRhYnMsIG5leHRBY3RpdmVUYWJJbmRleDogbnVtYmVyKSA9PiB2b2lkLFxuXHRvbkRyYWdPdXQ/OiAoZTogRXZlbnQsIGRhdGE6IE9iamVjdCwgdGFiczogVGFicywgaW5kZXg6IG51bWJlcikgPT4gdm9pZCxcblx0b25UYWJDbGljaz86IChlOiBFdmVudCwgaW5kZXg6IG51bWJlcikgPT4gdm9pZCxcblx0b25Nb3VzZUVudGVyPzogKGU6IEV2ZW50LCBpbmRleDogbnVtYmVyKSA9PiB2b2lkLFxuXHRvbk1vdXNlTGVhdmU/OiAoZTogRXZlbnQsIGluZGV4OiBudW1iZXIpID0+IHZvaWQsXG5cdGFkZFRhYlBvc2l0aW9uPzogJ3N0YXJ0JyB8ICdlbmQnIHwgJ25vbmUnLFxuXHRzY3JvbGxYPzogJ25vcm1hbCcgfCAncmV2ZXJzZWQnIHwgJ2Rpc2FibGVkJyxcblx0c2Nyb2xsWT86ICdub3JtYWwnIHwgJ3JldmVyc2VkJyB8ICdkaXNhYmxlZCcsXG5cdGFjdGl2ZVRhYkluZGV4OiBudW1iZXIsXG5cdGRyYWdPdXREaXN0YW5jZTogbnVtYmVyLFxuXHR0YWJzOiBUYWJzLFxuXHRzdHlsZXM6IHtcblx0XHRhZGRUYWJCdXR0b24/OiBPYmplY3QsXG5cdFx0Y2xvc2VUYWJCdXR0b24/OiBPYmplY3QsXG5cdFx0dGFiPzogT2JqZWN0LFxuXHRcdHRhYkFjdGl2ZT86IE9iamVjdCxcblx0XHRvdXRlclRhYkNvbnRhaW5lcj86IE9iamVjdCxcblx0XHRpbm5lclRhYkNvbnRhaW5lcj86IE9iamVjdFxuXHR9LFxuXHRjbGFzc05hbWVzOiB7XG5cdFx0YWRkVGFiQnV0dG9uPzogc3RyaW5nLFxuXHRcdGNsb3NlVGFiQnV0dG9uPzogc3RyaW5nLFxuXHRcdHRhYj86IHN0cmluZyxcblx0XHR0YWJBY3RpdmU/OiBzdHJpbmcsXG5cdFx0b3V0ZXJUYWJDb250YWluZXI/OiBzdHJpbmcsXG5cdFx0aW5uZXJUYWJDb250YWluZXI/OiBzdHJpbmdcblx0fSxcblx0aWNvbnM6IHtcblx0XHRhZGRUYWJCdXR0b24/OiBPYmplY3QgfCBzdHJpbmcsXG5cdFx0Y2xvc2VUYWJCdXR0b24/OiBPYmplY3QgfCBzdHJpbmdcblx0fVxufVxuXG50eXBlIFN0YXRlID0ge1xuXHR0YWJzOiBUYWJzXG59XG5cbnR5cGUgUmVmID0gbnVsbCB8IEhUTUxFbGVtZW50XG50eXBlIFJlZnMgPSB7IFtrZXk6IElEIHwgc3RyaW5nIF06IEhUTUxFbGVtZW50IH1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFiSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0cHJvcHM6IFByb3BzXG5cdHN0YXRlOiBTdGF0ZVxuXG5cdGlkOiBJRFxuXHR0YWJCYXJSZWY6IFJlZlxuXHR0YWJSZWZzOiBSZWZzXG5cdHZpcnR1YWxUYWJzOiBudWxsIHwgVmlydHVhbFRhYnNcblxuXHRvblNjcm9sbDogKCkgPT4gdm9pZFxuXG5cdHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG5cdFx0c2Nyb2xsWDogJ25vcm1hbCcsXG5cdFx0c2Nyb2xsWTogJ2Rpc2FibGVkJyxcblx0XHRhZGRUYWJQb3NpdGlvbjogJ2VuZCcsXG5cdFx0YWN0aXZlVGFiSW5kZXg6IDAsXG5cdFx0dGFiczogW10sXG5cdFx0ZHJhZ091dERpc3RhbmNlOiA0MCxcblx0XHRzdHlsZXM6IHt9LFxuXHRcdGNsYXNzTmFtZXM6IHt9LFxuXHRcdGljb25zOiB7fVxuXHR9XG5cblx0Y29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cblx0XHR0aGlzLmlkID0gMFxuXHRcdHRoaXMudGFiQmFyUmVmID0gbnVsbFxuXHRcdHRoaXMudGFiUmVmcyA9IHt9XG5cdFx0dGhpcy52aXJ0dWFsVGFicyA9IG51bGxcblxuXHRcdHRoaXMub25TY3JvbGwgPSB0aHJvdHRsZSh0aGlzLm9uU2Nyb2xsLCA0LCB7IGxlYWRpbmc6IHRydWUgfSkuYmluZCh0aGlzKVxuXHR9XG5cblx0Y29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wczogUHJvcHMpIHtcblx0XHRpZiAoIWlzRXF1YWwocHJldlByb3BzLnRhYnMsIHRoaXMucHJvcHMudGFicykpIHtcblx0XHRcdHRoaXMucmVzZXRUYWJQb3NpdGlvbnMoKVxuXHRcdH1cblxuXHRcdGlmIChwcmV2UHJvcHMuYWN0aXZlVGFiSW5kZXggIT09IHRoaXMucHJvcHMuYWN0aXZlVGFiSW5kZXgpIHtcblx0XHRcdGlmICh0aGlzLnByb3BzLnRhYnMubGVuZ3RoICYmIHRoaXMucHJvcHMuYWN0aXZlVGFiSW5kZXggPiAtMSkge1xuXHRcdFx0XHR0aGlzLmZvY3VzVGFiKHRoaXMucHJvcHMuYWN0aXZlVGFiSW5kZXgsIDMwMClcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZW5kZXJUYWIoaW5kZXg6IG51bWJlcikge1xuXHRcdGNvbnN0IGlkID0gdGhpcy5wcm9wcy50YWJzW2luZGV4XS5wcm9wcy50YWJJZFxuXHRcdGNvbnN0IGxhYmVsID0gdGhpcy5wcm9wcy50YWJzW2luZGV4XS5wcm9wcy5sYWJlbFxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxUYWJcblx0XHRcdFx0a2V5PXsgaWQgfVxuXHRcdFx0XHRpZD17IGlkIH1cblx0XHRcdFx0b25DbG9zZVRhYkJ1dHRvbkNsaWNrPXsgdGhpcy5vbkNsb3NlVGFiQnV0dG9uQ2xpY2suYmluZCh0aGlzLCBpZCkgfVxuXHRcdFx0XHRvbkRyYWdTdGFydD17IHRoaXMub25EcmFnU3RhcnQuYmluZCh0aGlzLCBpZCkgfVxuXHRcdFx0XHRvbkRyYWc9eyB0aGlzLm9uRHJhZy5iaW5kKHRoaXMsIGlkKSB9XG5cdFx0XHRcdG9uRHJhZ1N0b3A9eyB0aGlzLm9uRHJhZ1N0b3AuYmluZCh0aGlzKSB9XG5cdFx0XHRcdGdldFJlZj17IHRoaXMub25HZXRSZWYuYmluZCh0aGlzLCBpZCkgfVxuXHRcdFx0XHRsYWJlbD17IGxhYmVsIH1cblx0XHRcdFx0b25Nb3VzZUVudGVyPXsgdGhpcy5vbk1vdXNlRW50ZXIuYmluZCh0aGlzLCBpZCkgfVxuXHRcdFx0XHRvbk1vdXNlTGVhdmU9eyB0aGlzLm9uTW91c2VMZWF2ZS5iaW5kKHRoaXMsIGlkKSB9XG5cdFx0XHRcdG9uQ2xpY2s9eyB0aGlzLm9uVGFiQ2xpY2suYmluZCh0aGlzLCBpZCkgfVxuXHRcdFx0XHRvbk1vdXNlRG93bj17IHRoaXMub25UYWJNb3VzZURvd24uYmluZCh0aGlzLCBpZCkgfVxuXHRcdFx0XHRhY3RpdmU9eyB0aGlzLnByb3BzLmFjdGl2ZVRhYkluZGV4ID09PSBpbmRleH1cblx0XHRcdFx0c3R5bGVzPXsgdGhpcy5wcm9wcy5zdHlsZXMgfVxuXHRcdFx0XHRjbGFzc05hbWVzPXsgdGhpcy5wcm9wcy5jbGFzc05hbWVzIH1cblx0XHRcdFx0aWNvbnM9eyB0aGlzLnByb3BzLmljb25zIH1cblx0XHRcdC8+XG5cdFx0KVxuXHR9XG5cblx0cmVuZGVyVGFicyh0YWJzOiBUYWJzKSB7XG5cdFx0Y29uc3QgcmVuZGVyTGlzdCA9IFtdXG5cblx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGFicy5sZW5ndGg7IGluZGV4KyspIHtcblx0XHRcdHJlbmRlckxpc3QucHVzaCh0aGlzLnJlbmRlclRhYihpbmRleCkpXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlbmRlckxpc3Rcblx0fVxuXG5cdG9uQWRkVGFiQnV0dG9uQ2xpY2soZTogRXZlbnQpIHtcblx0XHRjb25zdCBjdXJyZW50VGFicyA9IHRoaXMucHJvcHMudGFicy5zbGljZSgwKVxuXG5cdFx0aWYgKHRoaXMucHJvcHMub25BZGRUYWJCdXR0b25DbGljaykge1xuXHRcdFx0dGhpcy5wcm9wcy5vbkFkZFRhYkJ1dHRvbkNsaWNrKGUsIGN1cnJlbnRUYWJzKVxuXHRcdH1cblx0fVxuXG5cdGZvY3VzVGFiKGluZGV4OiBudW1iZXIsIG1zOiBudW1iZXIpIHtcblx0XHRjb25zdCBpZCA9IHRoaXMucHJvcHMudGFic1tpbmRleF0ucHJvcHMudGFiSWRcblxuXHRcdGNvbnN0ICR0YWIgPSAkKHRoaXMudGFiUmVmc1tpZF0pXG5cdFx0Y29uc3QgcG9zaXRpb24gPSAkdGFiLnBvc2l0aW9uKCkubGVmdFxuXHRcdGNvbnN0IHdpZHRoID0gJHRhYi53aWR0aCgpXG5cblx0XHRjb25zdCAkaW5uZXJUYWJTY3JvbGxTZWxlY3RvciA9ICQoJy5pbm5lclRhYlNjcm9sbFNlbGVjdG9yJylcblx0XHRjb25zdCBpbm5lclRhYlNjcm9sbFNlbGVjdG9yV2lkdGggPSAkaW5uZXJUYWJTY3JvbGxTZWxlY3Rvci53aWR0aCgpXG5cblx0XHRpZiAocG9zaXRpb24gPCAwKSB7XG5cdFx0XHQkaW5uZXJUYWJTY3JvbGxTZWxlY3Rvci5hbmltYXRlKHtcblx0XHRcdFx0c2Nyb2xsTGVmdDogJGlubmVyVGFiU2Nyb2xsU2VsZWN0b3Iuc2Nyb2xsTGVmdCgpICsgcG9zaXRpb25cblx0XHRcdH0sIG1zKVxuXHRcdH0gZWxzZSBpZiAocG9zaXRpb24gKyB3aWR0aCA+IGlubmVyVGFiU2Nyb2xsU2VsZWN0b3JXaWR0aCkge1xuXHRcdFx0JGlubmVyVGFiU2Nyb2xsU2VsZWN0b3IuYW5pbWF0ZSh7XG5cdFx0XHRcdHNjcm9sbExlZnQ6ICRpbm5lclRhYlNjcm9sbFNlbGVjdG9yLnNjcm9sbExlZnQoKSArIChwb3NpdGlvbiArIHdpZHRoKSAtIGlubmVyVGFiU2Nyb2xsU2VsZWN0b3JXaWR0aCArIDJcblx0XHRcdH0sIG1zKVxuXHRcdH1cblx0fVxuXG5cdHNldEFjdGl2ZVRhYihpbmRleDogbnVtYmVyKSB7XG5cdFx0aWYgKHRoaXMucHJvcHMub25TZXRBY3RpdmVUYWIpIHtcblx0XHRcdHRoaXMucHJvcHMub25TZXRBY3RpdmVUYWIoaW5kZXgpXG5cdFx0fVxuXHR9XG5cblx0b25DbG9zZVRhYkJ1dHRvbkNsaWNrKGlkOiBJRCwgZTogRXZlbnQpIHtcblx0XHRjb25zdCBjbG9zZWRUYWJJbmRleCA9IHRoaXMuZmluZFRhYkluZGV4QnlJZChpZClcblxuXHRcdGlmIChjbG9zZWRUYWJJbmRleCA+IC0xKSB7XG5cdFx0XHRjb25zdCBjdXJyZW50VGFicyA9IHRoaXMucHJvcHMudGFicy5zbGljZSgwKVxuXG5cdFx0XHRpZiAodGhpcy5wcm9wcy5vbkNsb3NlVGFiQnV0dG9uQ2xpY2spIHtcblx0XHRcdFx0dGhpcy5wcm9wcy5vbkNsb3NlVGFiQnV0dG9uQ2xpY2soZSwgY3VycmVudFRhYnMsIGNsb3NlZFRhYkluZGV4KVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdG9uVGFiQ2xpY2soaWQ6IElELCBlOiBFdmVudCkge1xuXHRcdGNvbnN0IGluZGV4ID0gdGhpcy5maW5kVGFiSW5kZXhCeUlkKGlkKVxuXG5cdFx0aWYgKHRoaXMucHJvcHMub25UYWJDbGljaykge1xuXHRcdFx0dGhpcy5wcm9wcy5vblRhYkNsaWNrKGUsIGluZGV4KVxuXHRcdH1cblx0fVxuXG5cdG9uTW91c2VFbnRlcihpZDogSUQsIGU6IEV2ZW50KSB7XG5cdFx0Y29uc3QgaW5kZXggPSB0aGlzLmZpbmRUYWJJbmRleEJ5SWQoaWQpXG5cblx0XHRpZiAodGhpcy5wcm9wcy5vbk1vdXNlRW50ZXIpIHtcblx0XHRcdHRoaXMucHJvcHMub25Nb3VzZUVudGVyKGUsIGluZGV4KVxuXHRcdH1cblx0fVxuXG5cdG9uTW91c2VMZWF2ZShpZDogSUQsIGU6IEV2ZW50KSB7XG5cdFx0Y29uc3QgaW5kZXggPSB0aGlzLmZpbmRUYWJJbmRleEJ5SWQoaWQpXG5cblx0XHRpZiAodGhpcy5wcm9wcy5vbk1vdXNlTGVhdmUpIHtcblx0XHRcdHRoaXMucHJvcHMub25Nb3VzZUxlYXZlKGUsIGluZGV4KVxuXHRcdH1cblx0fVxuXG5cdG9uVGFiTW91c2VEb3duKGlkOiBJRCwgZTogRXZlbnQpIHtcblx0XHRjb25zdCBpbmRleCA9IHRoaXMuZmluZFRhYkluZGV4QnlJZChpZClcblxuXHRcdHRoaXMuc2V0QWN0aXZlVGFiKGluZGV4KVxuXHR9XG5cblx0ZmluZFRhYkluZGV4QnlJZChpZDogSUQpOiBudW1iZXIge1xuXHRcdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnByb3BzLnRhYnMubGVuZ3RoOyBpbmRleCsrKSB7XG5cdFx0XHRpZiAoaWQgPT09IHRoaXMucHJvcHMudGFic1tpbmRleF0ucHJvcHMudGFiSWQpIHtcblx0XHRcdFx0cmV0dXJuIGluZGV4XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIC0xXG5cdH1cblxuXHRmaW5kVGFiSWRCeUluZGV4KGluZGV4OiBudW1iZXIpOiBJRCB7XG5cdFx0aWYgKCF0aGlzLnByb3BzLnRhYnNbaW5kZXhdKSB7XG5cdFx0XHRyZXR1cm4gLTFcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5wcm9wcy50YWJzW2luZGV4XS5wcm9wcy50YWJJZFxuXHR9XG5cblx0b25UYWJCYXJSZWYocmVmOiBSZWYpIHtcblx0XHR0aGlzLnRhYkJhclJlZiA9IHJlZlxuXG5cdFx0JChyZWYpLm9uKCdtb3VzZXdoZWVsJywgdGhpcy5vblNjcm9sbClcblx0fVxuXG5cdG9uU2Nyb2xsKGU6IEV2ZW50KSB7XG5cdFx0Y29uc3QgZGVsdGFYID0gZS5vcmlnaW5hbEV2ZW50LmRlbHRhWFxuXHRcdGNvbnN0IGRlbHRhWSA9IGUub3JpZ2luYWxFdmVudC5kZWx0YVlcblx0XHRjb25zdCAkdGFyZ2V0ID0gJCgnLmlubmVyVGFiU2Nyb2xsU2VsZWN0b3InKVxuXG5cdFx0aWYgKHRoaXMucHJvcHMuc2Nyb2xsWCAhPT0gJ25vcm1hbCcpIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdH1cblxuXHRcdGlmICh0aGlzLnByb3BzLnNjcm9sbFggPT09ICdyZXZlcnNlZCcpIHtcblx0XHRcdCR0YXJnZXQuc2Nyb2xsTGVmdCgkdGFyZ2V0LnNjcm9sbExlZnQoKSAtIGRlbHRhWClcblx0XHR9XG5cblx0XHRpZiAodGhpcy5wcm9wcy5zY3JvbGxZID09PSAnbm9ybWFsJykge1xuXHRcdFx0JHRhcmdldC5zY3JvbGxMZWZ0KCR0YXJnZXQuc2Nyb2xsTGVmdCgpIC0gZGVsdGFZKVxuXHRcdH0gZWxzZSBpZiAodGhpcy5wcm9wcy5zY3JvbGxZID09PSAncmV2ZXJzZWQnKSB7XG5cdFx0XHQkdGFyZ2V0LnNjcm9sbExlZnQoJHRhcmdldC5zY3JvbGxMZWZ0KCkgKyBkZWx0YVkpXG5cdFx0fVxuXHR9XG5cblx0b25HZXRSZWYoaWQ6IElELCByZWY6IFJlZikge1xuXHRcdGlmIChyZWYpIHtcblx0XHRcdHRoaXMudGFiUmVmc1tpZF0gPSByZWZcblx0XHR9IGVsc2UgaWYgKHRoaXMudGFiUmVmc1tpZF0pIHtcblx0XHRcdGRlbGV0ZSB0aGlzLnRhYlJlZnNbaWRdXG5cdFx0fVxuXHR9XG5cblx0b25EcmFnT3V0KGU6IEV2ZW50LCBkYXRhOiBPYmplY3QsIHRhYnM6IFRhYnMsIGluZGV4OiBudW1iZXIpIHtcblx0XHRpZiAodGhpcy5wcm9wcy5vbkRyYWdPdXQpIHtcblx0XHRcdHRoaXMucHJvcHMub25EcmFnT3V0KGUsIGRhdGEsIHRhYnMsIGluZGV4KVxuXHRcdH1cblx0fVxuXG5cdG9uRHJhZ1N0YXJ0KGlkOiBJRCwgZTogRXZlbnQsIGRhdGE6IE9iamVjdCkge1xuXHRcdHRoaXMudmlydHVhbFRhYnMgPSBuZXcgVmlydHVhbFRhYnModGhpcy5wcm9wcy50YWJzLCB0aGlzLnRhYlJlZnMsIGlkKVxuXHR9XG5cblx0b25EcmFnKGlkOiBJRCwgZTogRXZlbnQsIGRhdGE6IE9iamVjdCkge1xuXHRcdGlmIChkYXRhLnkgPiB0aGlzLnByb3BzLmRyYWdPdXREaXN0YW5jZSB8fCBkYXRhLnkgPCAtdGhpcy5wcm9wcy5kcmFnT3V0RGlzdGFuY2UpIHtcblx0XHRcdGNvbnN0IGluZGV4ID0gdGhpcy5maW5kVGFiSW5kZXhCeUlkKGlkKVxuXG5cdFx0XHR0aGlzLm9uRHJhZ091dChlLCBkYXRhLCB0aGlzLnByb3BzLnRhYnMuc2xpY2UoMCksIGluZGV4KVxuXHRcdH1cblxuXHRcdGlmICh0aGlzLnZpcnR1YWxUYWJzKSB7XG5cdFx0XHR0aGlzLnZpcnR1YWxUYWJzLm1vdmUoZGF0YS54KVxuXHRcdH1cblx0fVxuXG5cdG9uRHJhZ1N0b3AoZTogRXZlbnQsIGRhdGE6IE9iamVjdCkge1xuXHRcdGlmICh0aGlzLnZpcnR1YWxUYWJzKSB7XG5cdFx0XHRjb25zdCBpZE9yZGVyID0gdGhpcy52aXJ0dWFsVGFicy5nZXRUYWJJZHMoKVxuXHRcdFx0Y29uc3QgbmV3VGFicyA9IFtdXG5cblx0XHRcdGZvciAoY29uc3QgdGFiSWQgb2YgaWRPcmRlcikge1xuXHRcdFx0XHRjb25zdCB0YWJJbmRleCA9IHRoaXMucHJvcHMudGFicy5maW5kSW5kZXgoKHRhYikgPT4gdGFiSWQgPT09IHRhYi5wcm9wcy50YWJJZClcblxuXHRcdFx0XHRuZXdUYWJzLnB1c2godGhpcy5wcm9wcy50YWJzW3RhYkluZGV4XSlcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgY3VycmVudEFjdGl2ZVRhYklkID0gdGhpcy5maW5kVGFiSWRCeUluZGV4KHRoaXMucHJvcHMuYWN0aXZlVGFiSW5kZXgpXG5cdFx0XHRjb25zdCBuZXh0QWN0aXZlVGFiSW5kZXggPSBuZXdUYWJzLmZpbmRJbmRleCgodGFiKSA9PiB0YWIucHJvcHMudGFiSWQgPT09IGN1cnJlbnRBY3RpdmVUYWJJZClcblxuXHRcdFx0aWYgKHRoaXMucHJvcHMub25EcmFnU3RvcCkge1xuXHRcdFx0XHR0aGlzLnByb3BzLm9uRHJhZ1N0b3AoZSwgZGF0YSwgbmV3VGFicywgbmV4dEFjdGl2ZVRhYkluZGV4KVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnZpcnR1YWxUYWJzID0gbnVsbFxuXHRcdH1cblx0fVxuXG5cdHJlc2V0VGFiUG9zaXRpb25zKCkge1xuXHRcdGZvciAoY29uc3Qga2V5IGluIHRoaXMudGFiUmVmcykge1xuXHRcdFx0Y29uc3QgJHJlZiA9ICQodGhpcy50YWJSZWZzW2tleV0pXG5cblx0XHRcdGlmICgkcmVmLmNzcygndHJhbnNpdGlvbicpICE9PSAndHJhbnNmb3JtIDAuMHMgbGluZWFyJyB8fCAkcmVmLmNzcygndHJhbnNmb3JtJykgIT09ICd0cmFuc2xhdGUoMHB4LCAwcHgpJykge1xuXHRcdFx0XHQkcmVmLmNzcyh7XG5cdFx0XHRcdFx0dHJhbnNpdGlvbjogJ3RyYW5zZm9ybSAwLjBzIGxpbmVhcicsXG5cdFx0XHRcdFx0dHJhbnNmb3JtOiAndHJhbnNsYXRlKDBweCwgMHB4KSdcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgdGFicyA9IHRoaXMucmVuZGVyVGFicyh0aGlzLnByb3BzLnRhYnMpXG5cdFx0Y29uc3Qgb3V0ZXJUYWJDbGFzc05hbWUgPSBjbGFzc25hbWVzKCdvdXRlclRhYkNvbnRhaW5lclNlbGVjdG9yJywgc3R5bGUubWFjT1NUYWJzLCB0aGlzLnByb3BzLmNsYXNzTmFtZXMub3V0ZXJUYWJDb250YWluZXIpXG5cdFx0Y29uc3QgaW5uZXJUYWJDbGFzc05hbWUgPSBjbGFzc25hbWVzKCdpbm5lclRhYlNjcm9sbFNlbGVjdG9yJywgc3R5bGUubWFjT1NUYWJzLCBzdHlsZS5tYWNPU1RhYnNJbm5lciwgdGhpcy5wcm9wcy5jbGFzc05hbWVzLmlubmVyVGFiQ29udGFpbmVyKVxuXHRcdGNvbnN0IGFkZFRhYkJ1dHRvbiA9IChcblx0XHRcdDxBZGRUYWJCdXR0b25cblx0XHRcdFx0b25DbGljaz17IHRoaXMub25BZGRUYWJCdXR0b25DbGljay5iaW5kKHRoaXMpIH1cblx0XHRcdFx0c3R5bGU9eyB0aGlzLnByb3BzLnN0eWxlcy5hZGRUYWJCdXR0b24gfVxuXHRcdFx0XHRjbGFzc05hbWU9eyB0aGlzLnByb3BzLmNsYXNzTmFtZXMuYWRkVGFiQnV0dG9uIH1cblx0XHRcdFx0aWNvbj17IHRoaXMucHJvcHMuaWNvbnMuYWRkVGFiQnV0dG9uIH1cblx0XHRcdC8+XG5cdFx0KVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDx1bCBjbGFzc05hbWU9eyBvdXRlclRhYkNsYXNzTmFtZSB9IHN0eWxlPXsgdGhpcy5wcm9wcy5zdHlsZXMub3V0ZXJUYWJDb250YWluZXIgfT5cblx0XHRcdFx0eyB0aGlzLnByb3BzLmFkZFRhYlBvc2l0aW9uID09PSAnc3RhcnQnICYmIGFkZFRhYkJ1dHRvbiB9XG5cdFx0XHRcdDx1bFxuXHRcdFx0XHRcdGNsYXNzTmFtZT17IGlubmVyVGFiQ2xhc3NOYW1lIH1cblx0XHRcdFx0XHRzdHlsZT17IHRoaXMucHJvcHMuc3R5bGVzLmlubmVyVGFiQ29udGFpbmVyIH1cblx0XHRcdFx0XHRyZWY9eyAoaW5wdXQpID0+IHRoaXMub25UYWJCYXJSZWYoaW5wdXQpIH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdHsgdGFicyB9XG5cdFx0XHRcdDwvdWw+XG5cdFx0XHRcdHsgdGhpcy5wcm9wcy5hZGRUYWJQb3NpdGlvbiA9PT0gJ2VuZCcgJiYgYWRkVGFiQnV0dG9uIH1cblx0XHRcdDwvdWw+XG5cdFx0KVxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdGFiX2hlYWRlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianF1ZXJ5XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwianF1ZXJ5XCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoLmlzZXF1YWxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJsb2Rhc2guaXNlcXVhbFwiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaC50aHJvdHRsZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImxvZGFzaC50aHJvdHRsZVwiXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIEBmbG93XG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJ3JlYWN0LWRyYWdnYWJsZSdcblxuaW1wb3J0IENsb3NlVGFiQnV0dG9uIGZyb20gJy4vY2xvc2VfdGFiX2J1dHRvbidcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvdGFiLmNzcydcblxudHlwZSBJRCA9IG51bWJlclxudHlwZSBDbG9zZVRhYkJ1dHRvblBvc2l0aW9uID0gJ3N0YXJ0JyB8ICdlbmQnIHwgJ25vbmUnXG50eXBlIFJlZiA9IG51bGwgfCBIVE1MRWxlbWVudFxuXG50eXBlIFByb3BzID0ge1xuXHRpZDogSUQsXG5cdGNsb3NlVGFiQnV0dG9uUG9zaXRpb24/OiBDbG9zZVRhYkJ1dHRvblBvc2l0aW9uLFxuXHRvbkNsb3NlVGFiQnV0dG9uQ2xpY2s/OiAoZTogRXZlbnQpID0+IHZvaWQsXG5cdG9uQ2xpY2s/OiAoZTogRXZlbnQpID0+IHZvaWQsXG5cdG9uTW91c2VEb3duPzogKGU6IEV2ZW50KSA9PiB2b2lkLFxuXHRvbkRyYWdTdGFydD86IChlOiBFdmVudCwgZGF0YTogT2JqZWN0KSA9PiB2b2lkIHwgZmFsc2UsXG5cdG9uRHJhZz86IChlOiBFdmVudCwgZGF0YTogT2JqZWN0KSA9PiB2b2lkIHwgZmFsc2UsXG5cdG9uRHJhZ1N0b3A/OiAoZTogRXZlbnQsIGRhdGE6IE9iamVjdCkgPT4gdm9pZCB8IGZhbHNlLFxuXHRvbk1vdXNlRW50ZXI/OiAoZTogRXZlbnQpID0+IHZvaWQsXG5cdG9uTW91c2VMZWF2ZT86IChlOiBFdmVudCkgPT4gdm9pZCxcblx0Z2V0UmVmPzogKHJlZjogUmVmKSA9PiB2b2lkLFxuXHRsYWJlbD86IHN0cmluZyxcblx0YWN0aXZlPzogYm9vbGVhbixcblx0c3R5bGVzOiB7XG5cdFx0Y2xvc2VUYWJCdXR0b24/OiBPYmplY3QsXG5cdFx0dGFiPzogT2JqZWN0LFxuXHRcdHRhYkFjdGl2ZT86IE9iamVjdFxuXHR9LFxuXHRjbGFzc05hbWVzOiB7XG5cdFx0Y2xvc2VUYWJCdXR0b24/OiBzdHJpbmcsXG5cdFx0dGFiPzogc3RyaW5nLFxuXHRcdHRhYkFjdGl2ZT86IHN0cmluZ1xuXHR9LFxuXHRpY29uczoge1xuXHRcdGNsb3NlVGFiQnV0dG9uPzogT2JqZWN0IHwgc3RyaW5nXG5cdH1cbn1cblxuY2xhc3MgVGFiIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0cHJvcHM6IFByb3BzXG5cblx0c3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcblx0XHRjbG9zZVRhYkJ1dHRvblBvc2l0aW9uOiAnc3RhcnQnLFxuXHRcdGxhYmVsOiAnJyxcblx0XHRhY3RpdmU6IGZhbHNlLFxuXHRcdHN0eWxlczoge30sXG5cdFx0Y2xhc3NOYW1lczoge30sXG5cdFx0aWNvbnM6IHt9XG5cdH1cblxuXHRvbkRyYWdTdGFydChlOiBFdmVudCwgZGF0YTogT2JqZWN0KSB7XG5cdFx0aWYgKHRoaXMucHJvcHMub25EcmFnU3RhcnQpIHtcblx0XHRcdHRoaXMucHJvcHMub25EcmFnU3RhcnQoZSwgZGF0YSlcblx0XHR9XG5cdH1cblxuXHRvbkRyYWcoZTogRXZlbnQsIGRhdGE6IE9iamVjdCkge1xuXHRcdC8vIHRoaXMub25DbGljaygpXG5cblx0XHRpZiAodGhpcy5wcm9wcy5vbkRyYWcpIHtcblx0XHRcdHRoaXMucHJvcHMub25EcmFnKGUsIGRhdGEpXG5cdFx0fVxuXHR9XG5cblx0b25EcmFnU3RvcChlOiBFdmVudCwgZGF0YTogT2JqZWN0KSB7XG5cdFx0aWYgKHRoaXMucHJvcHMub25EcmFnU3RvcCkge1xuXHRcdFx0dGhpcy5wcm9wcy5vbkRyYWdTdG9wKGUsIGRhdGEpXG5cdFx0fVxuXHR9XG5cblx0b25Nb3VzZUVudGVyKGU6IEV2ZW50KSB7XG5cdFx0aWYgKHRoaXMucHJvcHMub25Nb3VzZUVudGVyKSB7XG5cdFx0XHR0aGlzLnByb3BzLm9uTW91c2VFbnRlcihlKVxuXHRcdH1cblx0fVxuXG5cdG9uTW91c2VMZWF2ZShlOiBFdmVudCkge1xuXHRcdGlmICh0aGlzLnByb3BzLm9uTW91c2VMZWF2ZSkge1xuXHRcdFx0dGhpcy5wcm9wcy5vbk1vdXNlTGVhdmUoZSlcblx0XHR9XG5cdH1cblxuXHRvbkNsaWNrKGU6IEV2ZW50KSB7XG5cdFx0aWYgKGUpIHtcblx0XHRcdC8vIGUuc3RvcFByb3BhZ2F0aW9uKClcblx0XHRcdC8vIGUucHJldmVudERlZmF1bHQoKVxuXG5cdFx0XHRpZiAodGhpcy5wcm9wcy5vbkNsaWNrKSB7XG5cdFx0XHRcdHRoaXMucHJvcHMub25DbGljayhlKVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdG9uTW91c2VEb3duKGU6IEV2ZW50KSB7XG5cdFx0aWYgKGUpIHtcblx0XHRcdC8vIGUuc3RvcFByb3BhZ2F0aW9uKClcblx0XHRcdC8vIGUucHJldmVudERlZmF1bHQoKVxuXG5cdFx0XHRpZiAodGhpcy5wcm9wcy5vbk1vdXNlRG93bikge1xuXHRcdFx0XHR0aGlzLnByb3BzLm9uTW91c2VEb3duKGUpXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0b25DbG9zZVRhYkJ1dHRvbkNsaWNrKGU6IEV2ZW50KSB7XG5cdFx0aWYgKHRoaXMucHJvcHMub25DbG9zZVRhYkJ1dHRvbkNsaWNrKSB7XG5cdFx0XHR0aGlzLnByb3BzLm9uQ2xvc2VUYWJCdXR0b25DbGljayhlKVxuXHRcdH1cblx0fVxuXG5cdGdldFJlZihyZWY6IFJlZikge1xuXHRcdGlmICh0aGlzLnByb3BzLmdldFJlZikge1xuXHRcdFx0dGhpcy5wcm9wcy5nZXRSZWYocmVmKVxuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCBpZCA9IHRoaXMucHJvcHMuaWRcblx0XHRsZXQgbWFjT1NUYWJDbGFzc05hbWVcblx0XHRsZXQgbWFjT1NUYWJTdHlsZVxuXG5cdFx0aWYgKHRoaXMucHJvcHMuYWN0aXZlKSB7XG5cdFx0XHRtYWNPU1RhYkNsYXNzTmFtZSA9IGNsYXNzbmFtZXMoc3R5bGVzLm1hY09TVGFiTm9ybWFsLCBzdHlsZXMubWFjT1NUYWJBY3RpdmUsIHRoaXMucHJvcHMuY2xhc3NOYW1lcy50YWJBY3RpdmUpXG5cdFx0XHRtYWNPU1RhYlN0eWxlID0gdGhpcy5wcm9wcy5zdHlsZXMudGFiQWN0aXZlXG5cdFx0fSBlbHNlIHtcblx0XHRcdG1hY09TVGFiQ2xhc3NOYW1lID0gY2xhc3NuYW1lcyhzdHlsZXMubWFjT1NUYWJOb3JtYWwsIHRoaXMucHJvcHMuY2xhc3NOYW1lcy50YWIpXG5cdFx0XHRtYWNPU1RhYlN0eWxlID0gdGhpcy5wcm9wcy5zdHlsZXMudGFiXG5cdFx0fVxuXG5cdFx0Y29uc3QgY2xvc2VUYWJCdXR0b24gPSAoXG5cdFx0XHQ8Q2xvc2VUYWJCdXR0b25cblx0XHRcdFx0b25DbGljaz17IHRoaXMub25DbG9zZVRhYkJ1dHRvbkNsaWNrLmJpbmQodGhpcykgfVxuXHRcdFx0XHRjbGFzc05hbWU9eyB0aGlzLnByb3BzLmNsYXNzTmFtZXMuY2xvc2VUYWJCdXR0b24gfVxuXHRcdFx0XHRzdHlsZT17IHRoaXMucHJvcHMuc3R5bGVzLmNsb3NlVGFiQnV0dG9uIH1cblx0XHRcdFx0aWNvbj17IHRoaXMucHJvcHMuaWNvbnMuY2xvc2VUYWJCdXR0b24gfVxuXHRcdFx0Lz5cblx0XHQpXG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PERyYWdnYWJsZVxuXHRcdFx0XHRpZD17IGBkcmFnZ2FibGVfdGFic18keyBpZCB9YCB9XG5cdFx0XHRcdGF4aXM9J3gnXG5cdFx0XHRcdGNhbmNlbD0nLmNsb3NlVGFiQnV0dG9uJ1xuXHRcdFx0XHR6SW5kZXg9eyA1MCB9XG5cdFx0XHRcdGJvdW5kcz17ICQoJy5vdXRlclRhYkNvbnRhaW5lclNlbGVjdG9yJykuZ2V0KClbMF0gfVxuXHRcdFx0XHRvblN0YXJ0PXsgdGhpcy5vbkRyYWdTdGFydC5iaW5kKHRoaXMpIH1cblx0XHRcdFx0b25EcmFnPXsgdGhpcy5vbkRyYWcuYmluZCh0aGlzKSB9XG5cdFx0XHRcdG9uU3RvcD17IHRoaXMub25EcmFnU3RvcC5iaW5kKHRoaXMpIH1cblx0XHRcdFx0cG9zaXRpb249e3sgeDogMCwgeTogMCB9fVxuXHRcdFx0XHRvZmZzZXRQYXJlbnQ9eyAkKCcuaW5uZXJUYWJTY3JvbGxTZWxlY3RvcicpLmdldCgpWzBdIH1cblx0XHRcdFx0b25Nb3VzZURvd249eyB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcykgfVxuXHRcdFx0PlxuXHRcdFx0XHQ8bGlcblx0XHRcdFx0XHRjbGFzc05hbWU9eyBtYWNPU1RhYkNsYXNzTmFtZSB9XG5cdFx0XHRcdFx0c3R5bGU9eyBtYWNPU1RhYlN0eWxlIH1cblx0XHRcdFx0XHRvbkNsaWNrPXsgdGhpcy5vbkNsaWNrLmJpbmQodGhpcykgfVxuXHRcdFx0XHRcdG9uTW91c2VFbnRlcj17IHRoaXMub25Nb3VzZUVudGVyLmJpbmQodGhpcykgfVxuXHRcdFx0XHRcdG9uTW91c2VMZWF2ZT17IHRoaXMub25Nb3VzZUxlYXZlLmJpbmQodGhpcykgfVxuXHRcdFx0XHRcdHJlZj17IHRoaXMuZ2V0UmVmLmJpbmQodGhpcykgfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0eyB0aGlzLnByb3BzLmNsb3NlVGFiQnV0dG9uUG9zaXRpb24gPT09ICdzdGFydCcgJiYgY2xvc2VUYWJCdXR0b24gfVxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLm1hY09TVGFiTGFiZWwgfT5cblx0XHRcdFx0XHRcdHsgdGhpcy5wcm9wcy5sYWJlbCB9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0eyB0aGlzLnByb3BzLmNsb3NlVGFiQnV0dG9uUG9zaXRpb24gPT09ICdlbmQnICYmIGNsb3NlVGFiQnV0dG9uIH1cblx0XHRcdFx0PC9saT5cblx0XHRcdDwvRHJhZ2dhYmxlPlxuXHRcdClcblx0fVxufVxuXG5UYWIucHJvcFR5cGVzID0ge1xuXHRpZDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3RhYi5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRyYWdnYWJsZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LWRyYWdnYWJsZVwiXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBAZmxvd1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvdGFiLmNzcydcblxudHlwZSBQcm9wcyA9IHtcblx0b25DbGljazogKGU6IEV2ZW50KSA9PiB2b2lkLFxuXHRzdHlsZT86IE9iamVjdCxcblx0Y2xhc3NOYW1lPzogc3RyaW5nLFxuXHRpY29uPzogT2JqZWN0IHwgc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsb3NlVGFiQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0cHJvcHM6IFByb3BzXG5cblx0b25DbGljayhlOiBFdmVudCkge1xuXHRcdGlmICh0aGlzLnByb3BzLm9uQ2xpY2spIHtcblx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKClcblxuXHRcdFx0dGhpcy5wcm9wcy5vbkNsaWNrKGUpXG5cdFx0fVxuXHR9XG5cblx0b25Nb3VzZURvd24oZTogRXZlbnQpIHtcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgY2xhc3NOYW1lID0gY2xhc3NuYW1lcygnY2xvc2VUYWJCdXR0b24nLCBzdHlsZXMubWFjT1NDbG9zZVRhYkJ1dHRvbiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpXG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdlxuXHRcdFx0XHRjbGFzc05hbWU9eyBjbGFzc05hbWUgfVxuXHRcdFx0XHRvbkNsaWNrPXsgdGhpcy5vbkNsaWNrLmJpbmQodGhpcykgfVxuXHRcdFx0XHRvbk1vdXNlRG93bj17IHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKSB9XG5cdFx0XHRcdHN0eWxlPXsgdGhpcy5wcm9wcy5zdHlsZSB9XG5cdFx0XHQ+XG5cdFx0XHRcdHsgKHRoaXMucHJvcHMuaWNvbikgPyB0aGlzLnByb3BzLmljb24gOiAnw5cnIH1cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Nsb3NlX3RhYl9idXR0b24uanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9tb2R1bGVzIS4vdGFiLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/bW9kdWxlcyEuL3RhYi5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/bW9kdWxlcyEuL3RhYi5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3R5bGVzL3RhYi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLl8xd0pBcENsSVdNSzl6S05jSEdqQ21wIHtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjOTI5MjkyO1xcblxcdGhlaWdodDogMjRweDtcXG5cXHRjb2xvcjogIzYyNjU2OTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjQkRCQUJEO1xcblxcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG5cXHRmbGV4OiAxIDEgMCU7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdG1pbi13aWR0aDogMTAzcHg7XFxuXFx0Zm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgc2Fucy1zZXJpZjtcXG5cXHRmb250LXNpemU6IDExcHg7XFxuXFx0bWFyZ2luLXJpZ2h0OiAtMXB4O1xcblxcdGxpbmUtaGVpZ2h0OiAyMnB4O1xcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDsgXFxuXFx0Y3Vyc29yOiBkZWZhdWx0O1xcblxcdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHQtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5fMXdKQXBDbElXTUs5ektOY0hHakNtcDpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI0I2QjRCNjtcXG5cXHRib3JkZXItY29sb3I6ICM5NDk0OTQ7XFxufVxcblxcbi5fMzZRcnd5T0hlQ0ZuTkZIVGtYeENLZiB7XFxuXFx0Y29sb3I6ICM0NDQ0NDQ7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI0QyQ0ZEMjtcXG5cXHRib3JkZXItY29sb3I6ICNBRUFFQUU7XFxuXFx0ei1pbmRleDogMTAwMDtcXG59XFxuXFxuLl8zNlFyd3lPSGVDRm5ORkhUa1h4Q0tmOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRDJDRkQyO1xcblxcdGJvcmRlci1jb2xvcjogI0FFQUVBRTtcXG59XFxuXFxuLl8yOXdZQVhhT0RobTJ4d1Y2WkJjWFFxIHtcXG5cXHRoZWlnaHQ6IDE2cHg7XFxuXFx0d2lkdGg6IDE2cHg7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuXFx0ei1pbmRleDogMTAwO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDNweDtcXG5cXHRsZWZ0OiA1cHg7XFxuXFx0Y29sb3I6ICM2NjYzNjY7XFxuXFx0b3BhY2l0eTogMDtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxuXFx0Lypmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBzYW5zLXNlcmlmOyovXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuXFx0bGluZS1oZWlnaHQ6IDE0cHg7XFxuXFx0Zm9udC13ZWlnaHQ6IDIwMDtcXG59XFxuXFxuLl8yOXdZQVhhT0RobTJ4d1Y2WkJjWFFxOmhvdmVyIHtcXG5cXHRib3JkZXItcmFkaXVzOiAycHg7XFxuXFx0YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA4KTtcXG59XFxuXFxuLl8xd0pBcENsSVdNSzl6S05jSEdqQ21wOmhvdmVyIC5fMjl3WUFYYU9EaG0yeHdWNlpCY1hRcSB7XFxuXFx0b3BhY2l0eTogMTtcXG59XFxuXFxuLklrSTdaeXE5UjNJZE4tUTJkR2U1aSB7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG5cXHRwYWRkaW5nLWxlZnQ6IDI1cHg7XFxuXFx0cGFkZGluZy1yaWdodDogMjVweDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwibWFjT1NUYWJOb3JtYWxcIjogXCJfMXdKQXBDbElXTUs5ektOY0hHakNtcFwiLFxuXHRcIm1hY09TVGFiQWN0aXZlXCI6IFwiXzM2UXJ3eU9IZUNGbk5GSFRrWHhDS2ZcIixcblx0XCJtYWNPU0Nsb3NlVGFiQnV0dG9uXCI6IFwiXzI5d1lBWGFPRGhtMnh3VjZaQmNYUXFcIixcblx0XCJtYWNPU1RhYkxhYmVsXCI6IFwiSWtJN1p5cTlSM0lkTi1RMmRHZTVpXCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/bW9kdWxlcyEuL3N0eWxlcy90YWIuY3NzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcclxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcclxuXHRcdHZhciBtZW1vO1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0cmV0dXJuIG1lbW87XHJcblx0XHR9O1xyXG5cdH0sXHJcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XHJcblx0fSksXHJcblx0Z2V0SGVhZEVsZW1lbnQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcclxuXHR9KSxcclxuXHRzaW5nbGV0b25FbGVtZW50ID0gbnVsbCxcclxuXHRzaW5nbGV0b25Db3VudGVyID0gMCxcclxuXHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XHJcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XHJcblx0XHRpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcclxuXHR9XHJcblxyXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxyXG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcclxuXHJcblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIDxoZWFkPi5cclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xyXG5cclxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xyXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xyXG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcclxuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xyXG5cdFx0fVxyXG5cdFx0aWYobmV3TGlzdCkge1xyXG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xyXG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XHJcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcclxuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXHJcblx0XHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXSgpO1xyXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0aWYoZG9tU3R5bGUpIHtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XHJcblx0dmFyIHN0eWxlcyA9IFtdO1xyXG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xyXG5cdFx0dmFyIGlkID0gaXRlbVswXTtcclxuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xyXG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcclxuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xyXG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xyXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pXHJcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcclxuXHR9XHJcblx0cmV0dXJuIHN0eWxlcztcclxufVxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCkge1xyXG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcclxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcclxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xyXG5cdFx0aWYoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgaGVhZC5maXJzdENoaWxkKTtcclxuXHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcclxuXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xyXG5cdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcclxuXHRpZihpZHggPj0gMCkge1xyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XHJcblx0cmV0dXJuIHN0eWxlRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG5cdGxpbmtFbGVtZW50LnJlbCA9IFwic3R5bGVzaGVldFwiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rRWxlbWVudCk7XHJcblx0cmV0dXJuIGxpbmtFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcclxuXHJcblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XHJcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcclxuXHRcdHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xyXG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XHJcblx0fSBlbHNlIGlmKG9iai5zb3VyY2VNYXAgJiZcclxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdFx0aWYoc3R5bGVFbGVtZW50LmhyZWYpXHJcblx0XHRcdFx0VVJMLnJldm9rZU9iamVjdFVSTChzdHlsZUVsZW1lbnQuaHJlZik7XHJcblx0XHR9O1xyXG5cdH0gZWxzZSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHR1cGRhdGUob2JqKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xyXG5cdFx0aWYobmV3T2JqKSB7XHJcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVtb3ZlKCk7XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgdGV4dFN0b3JlID0gW107XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XHJcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XHJcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcclxuXHR9O1xyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xyXG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcclxuXHJcblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcclxuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XHJcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xyXG5cclxuXHRpZihtZWRpYSkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxyXG5cdH1cclxuXHJcblx0aWYoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XHJcblx0fSBlbHNlIHtcclxuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmtFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcblx0aWYoc291cmNlTWFwKSB7XHJcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxyXG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xyXG5cdH1cclxuXHJcblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XHJcblxyXG5cdHZhciBvbGRTcmMgPSBsaW5rRWxlbWVudC5ocmVmO1xyXG5cclxuXHRsaW5rRWxlbWVudC5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuXHJcblx0aWYob2xkU3JjKVxyXG5cdFx0VVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBAZmxvd1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcblxuaW1wb3J0IHN0eWxlXyBmcm9tICcuLi9zdHlsZXMvYWRkX3RhYl9idXR0b24uY3NzJ1xuXG50eXBlIFByb3BzID0ge1xuXHRvbkNsaWNrOiAoZTogRXZlbnQpID0+IHZvaWQsXG5cdHN0eWxlPzogT2JqZWN0LFxuXHRjbGFzc05hbWU/OiBzdHJpbmcsXG5cdGljb24/OiBPYmplY3QgfCBzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRkVGFiQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0cHJvcHM6IFByb3BzXG5cblx0b25DbGljayhlOiBPYmplY3QpIHtcblx0XHRpZiAodGhpcy5wcm9wcy5vbkNsaWNrKSB7XG5cdFx0XHR0aGlzLnByb3BzLm9uQ2xpY2soZSlcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgY2xhc3NOYW1lID0gY2xhc3NuYW1lcyhzdHlsZV8ubWFjT1NBZGRUYWJCdXR0b24sIHRoaXMucHJvcHMuY2xhc3NOYW1lKVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxsaVxuXHRcdFx0XHRjbGFzc05hbWU9eyBjbGFzc05hbWUgfVxuXHRcdFx0XHRzdHlsZT17IHRoaXMucHJvcHMuc3R5bGUgfVxuXHRcdFx0XHRvbkNsaWNrPXsgdGhpcy5vbkNsaWNrLmJpbmQodGhpcykgfVxuXHRcdFx0PlxuXHRcdFx0XHR7ICh0aGlzLnByb3BzLmljb24pID8gdGhpcy5wcm9wcy5pY29uIDogJysnIH1cblx0XHRcdDwvbGk+XG5cdFx0KVxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYWRkX3RhYl9idXR0b24uanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9tb2R1bGVzIS4vYWRkX3RhYl9idXR0b24uY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9tb2R1bGVzIS4vYWRkX3RhYl9idXR0b24uY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP21vZHVsZXMhLi9hZGRfdGFiX2J1dHRvbi5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3R5bGVzL2FkZF90YWJfYnV0dG9uLmNzc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuXzI2Xy1rN0Uxdm5hSjlvbkx2VWlZZ28ge1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogMjhweDtcXG5cXHRjb2xvcjogIzJGMkYyRjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjQzFDMEMxO1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGZsb2F0OiByaWdodDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjOTM5MzkzO1xcblxcdGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIHNhbnMtc2VyaWY7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG5cXHR6LWluZGV4OiAxMDA7XFxuXFx0bGluZS1oZWlnaHQ6IDE4cHg7XFxuXFx0Zm9udC1zaXplOiAyMXB4O1xcblxcdGZvbnQtd2VpZ2h0OiAxMDA7XFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdGN1cnNvcjogZGVmYXVsdDtcXG5cXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcblxcdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0LW1zLXVzZXItc2VsZWN0OiBub25lO1xcblxcdHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJtYWNPU0FkZFRhYkJ1dHRvblwiOiBcIl8yNl8tazdFMXZuYUo5b25MdlVpWWdvXCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/bW9kdWxlcyEuL3N0eWxlcy9hZGRfdGFiX2J1dHRvbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIEBmbG93XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbnR5cGUgSUQgPSBudW1iZXIgfCBzdHJpbmdcbnR5cGUgVGFicyA9IEFycmF5PHtcblx0aWQ6IG51bWJlcixcblx0b2Zmc2V0WDogbnVtYmVyXG59PlxudHlwZSBSZWZzID0geyBba2V5OiBzdHJpbmcgfCBudW1iZXJdOiBIVE1MRWxlbWVudCB9XG50eXBlIERpcmVjdGlvbiA9IG51bGwgfCAnbGVmdCcgfCAncmlnaHQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpcnR1YWxUYWJzIHtcblx0c3dpdGNoTnVtYmVyOiBudW1iZXJcblx0ZGlyZWN0aW9uOiBEaXJlY3Rpb25cblx0c291cmNlSWQ6IElEXG5cdGN1cnJlbnRYOiBudW1iZXJcblx0bGVmdFRyaWdnZXI6IG51bWJlclxuXHRyaWdodFRyaWdnZXI6IG51bWJlclxuXHR0YWJzOiBUYWJzXG5cdHJlZnM6IFJlZnNcblxuXHRjb25zdHJ1Y3Rvcih0YWJzOiBBcnJheTxPYmplY3Q+LCByZWZzOiBSZWZzLCBzb3VyY2VJZDogSUQpIHtcblx0XHR0aGlzLnRhYnMgPSB0YWJzLm1hcCgodGFiKSA9PiB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRpZDogdGFiLnByb3BzLnRhYklkLFxuXHRcdFx0XHRvZmZzZXRYOiAwXG5cdFx0XHR9XG5cdFx0fSlcblxuXHRcdHRoaXMucmVmcyA9IHJlZnNcblx0XHR0aGlzLnNvdXJjZUlkID0gc291cmNlSWRcblx0XHR0aGlzLmRpcmVjdGlvbiA9IG51bGxcblx0XHR0aGlzLmN1cnJlbnRYID0gMFxuXHRcdHRoaXMuc3dpdGNoTnVtYmVyID0gMFxuXG5cdFx0dGhpcy5jYWxjdWxhdGVTd2l0Y2hOdW1iZXJzKClcblx0fVxuXG5cdGdldFRhYklkcygpIHtcblx0XHRyZXR1cm4gdGhpcy50YWJzLm1hcCgodGFiKSA9PiB0YWIuaWQpXG5cdH1cblxuXHRjYWxjdWxhdGVTd2l0Y2hOdW1iZXJzKCkge1xuXHRcdGNvbnN0IHdpZHRoID0gdGhpcy5yZWZzW3RoaXMuc291cmNlSWRdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoXG5cblx0XHR0aGlzLmxlZnRUcmlnZ2VyID0gd2lkdGggKiAoLTAuNSArIHRoaXMuc3dpdGNoTnVtYmVyKVxuXHRcdHRoaXMucmlnaHRUcmlnZ2VyID0gd2lkdGggKiAoMC41ICsgdGhpcy5zd2l0Y2hOdW1iZXIpXG5cdH1cblxuXHRnZXRJbmRleChpZDogSUQpIHtcblx0XHRyZXR1cm4gdGhpcy50YWJzLmZpbmRJbmRleCgoZWxlbWVudCkgPT4gZWxlbWVudC5pZCA9PT0gaWQpXG5cdH1cblxuXHRnZXRJZFRvTGVmdChzb3VyY2VJZDogSUQpIHtcblx0XHRjb25zdCBzb3VyY2VJbmRleCA9IHRoaXMuZ2V0SW5kZXgoc291cmNlSWQpXG5cdFx0Y29uc3QgdGFyZ2V0SW5kZXggPSBzb3VyY2VJbmRleCAtIDFcblxuXHRcdGlmICh0YXJnZXRJbmRleCA+IC0xKSB7XG5cdFx0XHRjb25zdCB0YXJnZXRJZCA9IHRoaXMudGFic1t0YXJnZXRJbmRleF0uaWRcblxuXHRcdFx0cmV0dXJuIHRhcmdldElkXG5cdFx0fVxuXG5cdFx0cmV0dXJuIC0xXG5cdH1cblxuXHRnZXRJZFRvUmlnaHQoc291cmNlSWQ6IElEKSB7XG5cdFx0Y29uc3Qgc291cmNlSW5kZXggPSB0aGlzLmdldEluZGV4KHNvdXJjZUlkKVxuXHRcdGNvbnN0IHRhcmdldEluZGV4ID0gc291cmNlSW5kZXggKyAxXG5cblx0XHRpZiAodGFyZ2V0SW5kZXggPCB0aGlzLnRhYnMubGVuZ3RoKSB7XG5cdFx0XHRjb25zdCB0YXJnZXRJZCA9IHRoaXMudGFic1t0YXJnZXRJbmRleF0uaWRcblxuXHRcdFx0cmV0dXJuIHRhcmdldElkXG5cdFx0fVxuXG5cdFx0cmV0dXJuIC0xXG5cdH1cblxuXHRzd2FwVGFicyhzb3VyY2VJZDogSUQsIHRhcmdldElkOiBJRCwgZGlyZWN0aW9uTnVtOiBudW1iZXIpIHtcblx0XHRjb25zdCBzb3VyY2VJbmRleCA9IHRoaXMuZ2V0SW5kZXgodGhpcy5zb3VyY2VJZClcblx0XHRjb25zdCB0YXJnZXRJbmRleCA9IHRoaXMuZ2V0SW5kZXgodGFyZ2V0SWQpXG5cdFx0Y29uc3QgdGFyZ2V0UmVmID0gdGhpcy5yZWZzW3RhcmdldElkXVxuXG5cdFx0aWYgKHRhcmdldEluZGV4ID4gLTEgJiYgdGFyZ2V0SW5kZXggPCB0aGlzLnRhYnMubGVuZ3RoKSB7XG5cdFx0XHR0aGlzLnRhYnNbdGFyZ2V0SW5kZXhdLm9mZnNldFggLT0gdGFyZ2V0UmVmLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoICogZGlyZWN0aW9uTnVtXG5cblx0XHRcdC8vIE5vdGU6IGpRdWVyeSBhbmltYXRlIGRvZXNuJ3Qgd29yayBoZXJlXG5cblx0XHRcdCQodGFyZ2V0UmVmKS5jc3Moe1xuXHRcdFx0XHR0cmFuc2l0aW9uOiAndHJhbnNmb3JtIDAuMXMgbGluZWFyJyxcblx0XHRcdFx0dHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7IHRoaXMudGFic1t0YXJnZXRJbmRleF0ub2Zmc2V0WCB9cHgsIDBweClgXG5cdFx0XHR9KVxuXG5cdFx0XHR0aGlzLnN3aXRjaE51bWJlciArPSBkaXJlY3Rpb25OdW1cblxuXHRcdFx0dGhpcy5jYWxjdWxhdGVTd2l0Y2hOdW1iZXJzKClcblxuXHRcdFx0Y29uc3QgdGVtcCA9IHRoaXMudGFic1tzb3VyY2VJbmRleF1cblxuXHRcdFx0dGhpcy50YWJzW3NvdXJjZUluZGV4XSA9IHRoaXMudGFic1t0YXJnZXRJbmRleF1cblx0XHRcdHRoaXMudGFic1t0YXJnZXRJbmRleF0gPSB0ZW1wXG5cdFx0fVxuXHR9XG5cblx0bW92ZSh4OiBudW1iZXIpIHtcblx0XHRpZiAoeCA8IHRoaXMuY3VycmVudFgpIHtcblx0XHRcdHRoaXMuZGlyZWN0aW9uID0gJ2xlZnQnXG5cdFx0XHR0aGlzLmN1cnJlbnRYID0geFxuXHRcdH0gZWxzZSBpZiAoeCA+IHRoaXMuY3VycmVudFgpIHtcblx0XHRcdHRoaXMuZGlyZWN0aW9uID0gJ3JpZ2h0J1xuXHRcdFx0dGhpcy5jdXJyZW50WCA9IHhcblx0XHR9XG5cblx0XHRpZiAodGhpcy5kaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xuXHRcdFx0aWYgKHggPCB0aGlzLmxlZnRUcmlnZ2VyKSB7XG5cdFx0XHRcdGNvbnN0IHRhcmdldElkID0gdGhpcy5nZXRJZFRvTGVmdCh0aGlzLnNvdXJjZUlkKVxuXG5cdFx0XHRcdHRoaXMuc3dhcFRhYnModGhpcy5zb3VyY2VJZCwgdGFyZ2V0SWQsIC0xKVxuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAodGhpcy5kaXJlY3Rpb24gPT09ICdyaWdodCcpIHtcblx0XHRcdGlmICh4ID4gdGhpcy5yaWdodFRyaWdnZXIpIHtcblx0XHRcdFx0Y29uc3QgdGFyZ2V0SWQgPSB0aGlzLmdldElkVG9SaWdodCh0aGlzLnNvdXJjZUlkKVxuXG5cdFx0XHRcdHRoaXMuc3dhcFRhYnModGhpcy5zb3VyY2VJZCwgdGFyZ2V0SWQsIDEpXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmlydHVhbF90YWJzLmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/bW9kdWxlcyEuL3RhYl9oZWFkZXIuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9tb2R1bGVzIS4vdGFiX2hlYWRlci5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/bW9kdWxlcyEuL3RhYl9oZWFkZXIuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3N0eWxlcy90YWJfaGVhZGVyLmNzc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuXzFkV19EZG5zQmhyd29kZ2pYNUliRWgge1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uXzF6SzJIVXA1b3A4VU5yWnpheFE4b3Qge1xcblxcdG92ZXJmbG93LXg6IHNjcm9sbDtcXG59XFxuXFxuLl8xeksySFVwNW9wOFVOclp6YXhROG90Ojotd2Via2l0LXNjcm9sbGJhciB7IFxcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcIm1hY09TVGFic1wiOiBcIl8xZFdfRGRuc0JocndvZGdqWDVJYkVoXCIsXG5cdFwibWFjT1NUYWJzSW5uZXJcIjogXCJfMXpLMkhVcDVvcDhVTnJaemF4UThvdFwiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP21vZHVsZXMhLi9zdHlsZXMvdGFiX2hlYWRlci5jc3Ncbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIEBmbG93XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbnR5cGUgUHJvcHMgPSB7XG5cdC8vIExhYmVsIHRoYXQgd2lsbCBiZSBkaXNwbGF5ZWQgb24gdGhlIHRhYiBoZWFkZXJcblx0bGFiZWw6IHN0cmluZyB8IG51bWJlcixcblxuXHQvLyBDaGlsZHJlbiBjb21wb25lbnRzIHRvIHJlbmRlclxuXHRjaGlsZHJlbj86IEhUTUxFbGVtZW50IHwgQ29tcG9uZW50PCosICosICo+LFxuXG5cdC8vIFVuaXF1ZSB0YWJJZFxuXHR0YWJJZDogc3RyaW5nIHwgbnVtYmVyLFxuXG5cdC8vIE9wdGlvbmFsIHN0eWxlc1xuXG5cdC8vIFNldCBhZGRpdGlvbmFsIFRhYkJvZHkgc3R5bGVzXG5cdC8vIE5vdGU6IEluIG1vc3QgY2FzZXMsIHNldHRpbmcgc3R5bGVzIG9uIHRoZSBjaGlsZCBjb21wb25lbnQgaXMgc3VmZmljaWVudFxuXHRzdHlsZT86IE9iamVjdCxcblxuXHQvLyBTZXQgVGFiQm9keSBjbGFzc25hbWVcblx0Y2xhc3NOYW1lPzogc3RyaW5nXG59XG5cbnR5cGUgUHJpdmF0ZVByb3BzID0gUHJvcHMgJiB7XG5cdGRpc3BsYXk/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFiQm9keSBleHRlbmRzIENvbXBvbmVudCB7XG5cdHByb3BzOiBQcml2YXRlUHJvcHNcblxuXHRzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuXHRcdGxhYmVsOiAnJ1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IGRpc3BsYXkgPSAodGhpcy5wcm9wcy5kaXNwbGF5KSA/ICdibG9jaycgOiAnbm9uZSdcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdGlkPXsgYG1hY29zLXRhYi1ib2R5LSR7IHRoaXMucHJvcHMudGFiSWQgfWAgfVxuXHRcdFx0XHRjbGFzc05hbWU9eyB0aGlzLnByb3BzLmNsYXNzTmFtZSB9XG5cdFx0XHRcdHN0eWxlPXt7IGhlaWdodDogJzEwMCUnLCBkaXNwbGF5LCAuLi50aGlzLnByb3BzLnN0eWxlIH19XG5cdFx0XHQ+XG5cdFx0XHRcdHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90YWJfYm9keS5qcyJdLCJzb3VyY2VSb290IjoiIn0=