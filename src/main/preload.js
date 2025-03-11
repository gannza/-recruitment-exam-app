// preload.js
const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  ping: () => 'pong', // Expose any function to the renderer process
});
