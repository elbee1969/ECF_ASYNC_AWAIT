const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  win.maximize();
  win.setMenuBarVisibility(false)
win.show();
  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
  
  app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
      app.quit()
    }
})



})
