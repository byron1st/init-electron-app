'use strict';

var _electron = require('electron');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _app = require('./app.mode');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mainWindow = null;

_electron.app.on('ready', initialize);

function initialize() {
  createMainWindow();
}

function createMainWindow() {
  mainWindow = new _electron.BrowserWindow({
    width: 1024,
    height: 800,
    minWidth: 800,
    minHeight: 700
  });
  mainWindow.loadURL(_path2.default.join('file://', __dirname, '/../mainwindow/index.html'));
  mainWindow.on('closed', function () {
    mainWindow = null;
  });

  if (_app2.default) {
    _electron.BrowserWindow.addDevToolsExtension('/Users/byron1st/Library/Application Support/Google/Chrome/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/2.0.12_0');
    mainWindow.webContents.openDevTools();
  }
}
//# sourceMappingURL=../../maps/main/main.js.map
