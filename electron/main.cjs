const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        width: 240,
        height: 240,
        frame:false,
        resizable: false,
        transparent:true,
        webPreferences: {
            nodeIntegration: false,
        }
    });

    const isDev = !app.isPackaged;

    if (isDev) {
        mainWindow.loadURL('http://localhost:5173');
    } else {
        const indexPath = path.join(__dirname, '..', 'dist', 'index.html');
        console.log('Loading File:', indexPath);
        mainWindow.loadFile(indexPath);
    }

    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') app.quit();
    });
});
