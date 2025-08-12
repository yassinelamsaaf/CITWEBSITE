import React from 'react';
import BackgroundAnimation from './BackgroundAnimation';

const LoadingScreen = ({ progress = 0 }) => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center z-50">
      {/* Same background animation as other pages */}
      <BackgroundAnimation />

      {/* Main loading content */}
      <div className="relative z-10 text-center">
        {/* Logo with hexagonal container similar to home page */}
        <div className="mb-12">
          <div className="w-32 h-32 mx-auto relative">
            {/* Outer glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-none transform rotate-45 blur-lg opacity-30 animate-pulse"></div>
            
            {/* Main hexagonal container */}
            <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 transform rotate-45 border-4 border-green-400 shadow-2xl shadow-green-400/25">
              {/* Actual CIT Logo */}
              <div className="absolute inset-4 flex items-center justify-center">
                <img
                  src="./images/Logo CIT.png"
                  alt="CIT Club Logo"
                  className="w-full h-full object-contain transform -rotate-45 hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Animated corner triangles aligned with hexagon edges */}
              <div className="absolute top-1 left-1 w-0 h-0 border-r-[10px] border-r-transparent border-t-[10px] border-t-green-400 animate-pulse"></div>
              <div className="absolute top-1 right-1 w-0 h-0 border-l-[10px] border-l-transparent border-t-[10px] border-t-blue-400 animate-pulse delay-200"></div>
              <div className="absolute bottom-1 left-1 w-0 h-0 border-r-[10px] border-r-transparent border-b-[10px] border-b-purple-400 animate-pulse delay-400"></div>
              <div className="absolute bottom-1 right-1 w-0 h-0 border-l-[10px] border-l-transparent border-b-[10px] border-b-cyan-400 animate-pulse delay-600"></div>
            </div>
          </div>
        </div>

        {/* Loading text */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-4 font-mono">
            <span className="text-green-400">Initializing CIT Club</span>
            <span className="animate-pulse text-blue-400">...</span>
          </h2>
          <p className="text-gray-400 font-mono text-lg">
            Loading assets and resources
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-80 mx-auto mb-6">
          <div className="flex justify-between text-sm text-gray-400 font-mono mb-2">
            <span>Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full"></div>
            
            {/* Progress fill */}
            <div 
              className="h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              {/* Animated shine effect */}
              <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Terminal-style status */}
        <div className="font-mono text-sm text-gray-500">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-green-400">$</span>
            <span>Loading CIT experience...</span>
            <span className="animate-pulse">|</span>
          </div>
        </div>
      </div>

      {/* Corner decorations matching the site theme */}
      <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-green-400/30"></div>
      <div className="absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-blue-400/30"></div>
      <div className="absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-purple-400/30"></div>
      <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-cyan-400/30"></div>
    </div>
  );
};

export default LoadingScreen;
