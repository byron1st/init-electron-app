'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = JSON.parse(_fs2.default.readFileSync(_path2.default.join(__dirname, 'app.mode.json')).toString()).mode === 'test';
//# sourceMappingURL=../../maps/main/app.mode.js.map
