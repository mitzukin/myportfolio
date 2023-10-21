import React from 'react';
import './LoadingScreen.css'; // Import your CSS file

function LoadingScreen() {
  return (
    <div className="loading-screen bg-primary">
      <div className="absolute w-8 h-8 border-4 border-t-4 border-green-500 rounded-md animate-spin"></div>
      <h1 className='mt-32 text-sm font-semibold text-custom-blue typewriter'>
        Please Wait...
      </h1>
    </div>
  );
}

export default LoadingScreen;
