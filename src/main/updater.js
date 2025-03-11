// updater.js (Auto Update System)
const { dialog } = require('electron');
const { autoUpdater } = require('electron-updater'); // Ensure you're using the correct autoUpdater import

autoUpdater.on('update-available', () => {
    dialog.showMessageBox({ message: 'Update available. Downloading...' });
});

autoUpdater.on('update-downloaded', () => {
    dialog.showMessageBox({ message: 'Update downloaded. Restarting...' });
    autoUpdater.quitAndInstall();
});
