webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/NewTaskController.jsx":
/*!******************************************!*\
  !*** ./components/NewTaskController.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_AddNewTaskInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/AddNewTaskInput */ "./components/AddNewTaskInput.jsx");
/* harmony import */ var _components_AddNewTaskButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/AddNewTaskButton */ "./components/AddNewTaskButton.jsx");






var _jsxFileName = "/Users/juliankanaan/Documents/GitHub/reactExpressTodoApp/components/NewTaskController.jsx";
// imports input field, button, submit button
// actually submits form





var NewTaskControl =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(NewTaskControl, _React$Component);

  function NewTaskControl(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NewTaskControl);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(NewTaskControl).call(this, props));
    _this.state = {
      wantsToAddTask: false
    }; // bind shit so we can use "this"

    _this.handleAddTaskClick = _this.handleAddTaskClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleCancelAddTaskClick = _this.handleCancelAddTaskClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NewTaskControl, [{
    key: "handleAddTaskClick",
    value: function handleAddTaskClick() {
      // alert("Clicked and want to add task");
      this.setState({
        wantsToAddTask: true
      });
    }
  }, {
    key: "handleCancelAddTaskClick",
    value: function handleCancelAddTaskClick() {
      // alert("Cancel");
      this.setState({
        wantsToAddTask: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var wantsToAddTask = this.state.wantsToAddTask;
      var element;

      if (wantsToAddTask) {
        element = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_AddNewTaskButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
          text: "Cancel",
          onClick: this.handleCancelAddTaskClick,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_AddNewTaskInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }));
      } else {
        element = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_AddNewTaskButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
          text: "Add new task",
          onClick: this.handleAddTaskClick,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, element);
    }
  }]);

  return NewTaskControl;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (NewTaskControl);

/***/ }),

/***/ "./components/Todos.jsx":
/*!******************************!*\
  !*** ./components/Todos.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Todo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Todo */ "./components/Todo.jsx");
/* harmony import */ var _components_NewTaskController__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/NewTaskController */ "./components/NewTaskController.jsx");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../style.css */ "./style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_9__);





var _jsxFileName = "/Users/juliankanaan/Documents/GitHub/reactExpressTodoApp/components/Todos.jsx";






var Todos =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Todos, _React$Component);

  function Todos(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Todos);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Todos).call(this, props));
    _this.state = {
      todos: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Todos, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var items = [{
        text: "Take out trash"
      }, {
        text: "Ask out that girl"
      }, {
        text: "Sleep"
      }];
      this.setState({
        todos: items
      }); // update state w/ array
    }
  }, {
    key: "render",
    value: function render() {
      var currentTodos = this.state.todos; // returns all todos

      console.log(currentTodos);
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "card-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, this.state.todos.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Todo__WEBPACK_IMPORTED_MODULE_7__["default"], {
          text: item.text,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        });
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_NewTaskController__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }));
    }
  }]);

  return Todos;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Todos);

/***/ })

})
//# sourceMappingURL=index.js.4ab33d69eb8b0f8a8806.hot-update.js.map