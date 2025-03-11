// ipcHandlers.js (IPC event handlers for Main Process)
const { ipcMain } = require('electron');

// Handle the 'ping' event from the renderer process
ipcMain.handle('ping', async () => {
  // You can return data to the renderer process
  return 'pong';  // This value will be sent back to the renderer process
});
