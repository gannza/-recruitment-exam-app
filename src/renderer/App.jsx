// App.js (React Component)
import React, { useEffect, useState } from 'react';

const App = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    handlePing();
  }, []);

  // Renderer process (React or any frontend code)
  const handlePing = async () => {
    try {
      const response = await window.electron.ping(); // Call the ping method from main process
      setMessage(response);
      console.log(response); // Should log 'pong' from the main process
    } catch (error) {
      console.error('Error while calling ping:', error);
    }
  };

  return <h1>Electron + React: {message}</h1>;
};

export default App;
