"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-clientside-effect";
exports.ids = ["vendor-chunks/react-clientside-effect"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-clientside-effect/lib/index.es.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-clientside-effect/lib/index.es.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ \"(ssr)/./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"(ssr)/./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction withSideEffect(reducePropsToState, handleStateChangeOnClient) {\n  if (true) {\n    if (typeof reducePropsToState !== 'function') {\n      throw new Error('Expected reducePropsToState to be a function.');\n    }\n\n    if (typeof handleStateChangeOnClient !== 'function') {\n      throw new Error('Expected handleStateChangeOnClient to be a function.');\n    }\n  }\n\n  function getDisplayName(WrappedComponent) {\n    return WrappedComponent.displayName || WrappedComponent.name || 'Component';\n  }\n\n  return function wrap(WrappedComponent) {\n    if (true) {\n      if (typeof WrappedComponent !== 'function') {\n        throw new Error('Expected WrappedComponent to be a React component.');\n      }\n    }\n\n    var mountedInstances = [];\n    var state;\n\n    function emitChange() {\n      state = reducePropsToState(mountedInstances.map(function (instance) {\n        return instance.props;\n      }));\n      handleStateChangeOnClient(state);\n    }\n\n    var SideEffect = /*#__PURE__*/function (_PureComponent) {\n      (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(SideEffect, _PureComponent);\n\n      function SideEffect() {\n        return _PureComponent.apply(this, arguments) || this;\n      }\n\n      // Try to use displayName of wrapped component\n      SideEffect.peek = function peek() {\n        return state;\n      };\n\n      var _proto = SideEffect.prototype;\n\n      _proto.componentDidMount = function componentDidMount() {\n        mountedInstances.push(this);\n        emitChange();\n      };\n\n      _proto.componentDidUpdate = function componentDidUpdate() {\n        emitChange();\n      };\n\n      _proto.componentWillUnmount = function componentWillUnmount() {\n        var index = mountedInstances.indexOf(this);\n        mountedInstances.splice(index, 1);\n        emitChange();\n      };\n\n      _proto.render = function render() {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(WrappedComponent, this.props);\n      };\n\n      return SideEffect;\n    }(react__WEBPACK_IMPORTED_MODULE_2__.PureComponent);\n\n    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(SideEffect, \"displayName\", \"SideEffect(\" + getDisplayName(WrappedComponent) + \")\");\n\n    return SideEffect;\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withSideEffect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtY2xpZW50c2lkZS1lZmZlY3QvbGliL2luZGV4LmVzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXNFO0FBQ0U7QUFDM0I7O0FBRTdDO0FBQ0EsTUFBTSxJQUFxQztBQUMzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsTUFBTSxvRkFBYzs7QUFFcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLDBEQUFtQjtBQUMvQzs7QUFFQTtBQUNBLEtBQUssQ0FBQyxnREFBYTs7QUFFbkIsSUFBSSxxRkFBZTs7QUFFbkI7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGNBQWMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dhdmludGVzdC8uL25vZGVfbW9kdWxlcy9yZWFjdC1jbGllbnRzaWRlLWVmZmVjdC9saWIvaW5kZXguZXMuanM/ZDU4NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZSc7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5JztcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiB3aXRoU2lkZUVmZmVjdChyZWR1Y2VQcm9wc1RvU3RhdGUsIGhhbmRsZVN0YXRlQ2hhbmdlT25DbGllbnQpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGlmICh0eXBlb2YgcmVkdWNlUHJvcHNUb1N0YXRlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHJlZHVjZVByb3BzVG9TdGF0ZSB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgaGFuZGxlU3RhdGVDaGFuZ2VPbkNsaWVudCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBoYW5kbGVTdGF0ZUNoYW5nZU9uQ2xpZW50IHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoV3JhcHBlZENvbXBvbmVudCkge1xuICAgIHJldHVybiBXcmFwcGVkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IFdyYXBwZWRDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50JztcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKFdyYXBwZWRDb21wb25lbnQpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICBpZiAodHlwZW9mIFdyYXBwZWRDb21wb25lbnQgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBXcmFwcGVkQ29tcG9uZW50IHRvIGJlIGEgUmVhY3QgY29tcG9uZW50LicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBtb3VudGVkSW5zdGFuY2VzID0gW107XG4gICAgdmFyIHN0YXRlO1xuXG4gICAgZnVuY3Rpb24gZW1pdENoYW5nZSgpIHtcbiAgICAgIHN0YXRlID0gcmVkdWNlUHJvcHNUb1N0YXRlKG1vdW50ZWRJbnN0YW5jZXMubWFwKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4gaW5zdGFuY2UucHJvcHM7XG4gICAgICB9KSk7XG4gICAgICBoYW5kbGVTdGF0ZUNoYW5nZU9uQ2xpZW50KHN0YXRlKTtcbiAgICB9XG5cbiAgICB2YXIgU2lkZUVmZmVjdCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1B1cmVDb21wb25lbnQpIHtcbiAgICAgIF9pbmhlcml0c0xvb3NlKFNpZGVFZmZlY3QsIF9QdXJlQ29tcG9uZW50KTtcblxuICAgICAgZnVuY3Rpb24gU2lkZUVmZmVjdCgpIHtcbiAgICAgICAgcmV0dXJuIF9QdXJlQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgIH1cblxuICAgICAgLy8gVHJ5IHRvIHVzZSBkaXNwbGF5TmFtZSBvZiB3cmFwcGVkIGNvbXBvbmVudFxuICAgICAgU2lkZUVmZmVjdC5wZWVrID0gZnVuY3Rpb24gcGVlaygpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfTtcblxuICAgICAgdmFyIF9wcm90byA9IFNpZGVFZmZlY3QucHJvdG90eXBlO1xuXG4gICAgICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbW91bnRlZEluc3RhbmNlcy5wdXNoKHRoaXMpO1xuICAgICAgICBlbWl0Q2hhbmdlKCk7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICBlbWl0Q2hhbmdlKCk7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gbW91bnRlZEluc3RhbmNlcy5pbmRleE9mKHRoaXMpO1xuICAgICAgICBtb3VudGVkSW5zdGFuY2VzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGVtaXRDaGFuZ2UoKTtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChXcmFwcGVkQ29tcG9uZW50LCB0aGlzLnByb3BzKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBTaWRlRWZmZWN0O1xuICAgIH0oUHVyZUNvbXBvbmVudCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoU2lkZUVmZmVjdCwgXCJkaXNwbGF5TmFtZVwiLCBcIlNpZGVFZmZlY3QoXCIgKyBnZXREaXNwbGF5TmFtZShXcmFwcGVkQ29tcG9uZW50KSArIFwiKVwiKTtcblxuICAgIHJldHVybiBTaWRlRWZmZWN0O1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU2lkZUVmZmVjdDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-clientside-effect/lib/index.es.js\n");

/***/ })

};
;