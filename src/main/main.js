'use strict'

import {app, BrowserWindow} from 'electron'
import path from 'path'

import testMode from './app.mode'

let mainWindow = null

app.on('ready', initialize)

function initialize () {
  createMainWindow()
}

function createMainWindow () {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 800,
    minWidth: 800,
    minHeight: 700
  })
  mainWindow.loadURL(path.join('file://', __dirname, '/../mainwindow/index.html'))
  mainWindow.on('closed', () => {
    mainWindow = null
  })

  if (testMode) {
    // A path to React Developer Tools(Chrome plugin)
    // URL: https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi
    BrowserWindow.addDevToolsExtension('path/to/react-developer-tools')
    mainWindow.webContents.openDevTools()
  }
}
