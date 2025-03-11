const { app, BrowserWindow, autoUpdater, Notification } = require('electron');
const path = require('path');

let mainWindow;
const updateURL = 'http://172.27.8.69/e-recruitment-exam-app/releases';

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });
  mainWindow.loadURL('http://localhost:3000'); // Change for production
};

app.whenReady().then(() => {
  createWindow();
  checkForUpdates();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// Function to check for updates
const checkForUpdates = () => {
  autoUpdater.setFeedURL(updateURL); // Set the update URL here
  autoUpdater.checkForUpdates(); // Check for updates manually

  autoUpdater.on('update-available', () => {
    console.log('Update available');
    showNotification(
      'Update Available',
      'A new update is available! Click to install.'
    );
  });

  autoUpdater.on('update-not-available', () => {
    console.log('No updates available');
    showNotification('Notification', 'No updates available');
  });

  autoUpdater.on('error', (err) => {
    console.error('Error while checking for updates', err);
    showNotification('Check for errors', 'Error while checking for updates');
  });

  autoUpdater.on('update-downloaded', (info) => {
    console.log('Update downloaded:', info);
    showNotification(
      'Update Ready',
      'Update has been downloaded. Click to install.'
    );
  });
};

// Show a desktop notification
const showNotification = (title, body) => {
  const notification = new Notification({
    title,
    body,
  });

  notification.show();

  // Optional: You can add a click event to the notification to perform actions
  notification.addListener('click', () => {
    autoUpdater.quitAndInstall(); // Install the update when the user clicks the notification
  });
};
