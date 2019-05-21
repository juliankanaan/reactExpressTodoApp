webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Todo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Todo */ "./components/Todo.jsx");
/* harmony import */ var _components_NewTaskController__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/NewTaskController */ "./components/NewTaskController.jsx");
/* harmony import */ var _components_AddNewTaskInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/AddNewTaskInput */ "./components/AddNewTaskInput.jsx");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../style.css */ "./style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_11__);






var _jsxFileName = "/Users/juliankanaan/Documents/GitHub/reactExpressTodoApp/components/Todos.jsx";







var Todos =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Todos, _React$Component);

  function Todos(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Todos);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Todos).call(this, props));
    _this.state = {
      todos: [],
      value: ''
    }; // lifted state from AddNewTaskInput

    _this.handleValueChange = _this.handleValueChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
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
    key: "handleValueChange",
    value: function handleValueChange(event) {
      this.setState({
        value: event
      }); //console.log(event);
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      alert("Submitted: " + this.state.value);
      event.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      var newTodo = this.state.value; // returns all todos

      console.log(newTodo);
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "card-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, this.state.todos.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Todo__WEBPACK_IMPORTED_MODULE_8__["default"], {
          text: item.text,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        });
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        onSubmit: handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_AddNewTaskInput__WEBPACK_IMPORTED_MODULE_10__["default"], {
        onValueChange: this.handleValueChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      })));
    }
  }]);

  return Todos;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Todos);

/***/ })

})
//# sourceMappingURL=index.js.11e522706ff1e765f7d5.hot-update.js.map