export interface ElectronAPI {
    myFunction: () => void; // Example function
    ping: () => Promise<string>; // Add the ping method
  }
  
  declare global {
    interface Window {
      electron: ElectronAPI;
    }
  }
  
  export {};
  