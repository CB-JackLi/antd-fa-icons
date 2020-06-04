"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _freeSolidSvgIcons = require("@fortawesome/free- solid-svg-icons");

var _AntdIcon = _interopRequireDefault(require("./components/AntdIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Icon = function Icon(props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_AntdIcon["default"], _extends({}, props, {
    ref: ref,
    icon: _freeSolidSvgIcons.faMinusCircle
  }));
};

var _default = /*#__PURE__*/_react["default"].forwardRef(Icon);

exports["default"] = _default;
module.exports = exports.default;