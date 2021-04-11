
const { app, BrowserWindow } = require('electron')
const path = require("path")
function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // screen record polyfill
  win.webContents.session.setPreloads([path.join(__dirname, 'preload-get-display-media-polyfill.js')])
  win.webContents.session.setPermissionCheckHandler(async (webContents, permission, details) => {
    return true
  })
  win.webContents.session.setPermissionRequestHandler(async (webContents, permission, callback, details) => {
    callback(true)
  })


  win.loadFile('index.html')
  win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
}) 
