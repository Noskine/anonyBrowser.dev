const { app, BrowserWindow, Menu} = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
      width : 1200,
      height : 700,
      minWidth: 550,
      minHeight: 300,
      useContentSize : true,
      webPreferences : {
        nodeIntegration : true,
      },
      autoHideMenuBar : true,
      icon : './src/image/netrunBrowser.png',
    });
    

    win.maximize()
    win.loadFile('index.html');
}

app.on('ready', createWindow);