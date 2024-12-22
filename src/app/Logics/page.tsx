import React from 'react';

const Logics = () => {
  return (
    <div className="relative text-center bg-gradient-to-r from-indigo-600 via-blue-500 to-teal-400 text-white">
      {/* Inner Header */}
      <div className="h-[65vh] flex flex-col justify-center items-center">
        {/* Logo */}
        <svg
          className="w-12 h-12 mb-4"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          aria-label="Website Logo"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
        </svg>
        {/* Title */}
        <h1 className="text-4xl sm:text-3xl font-light tracking-wider">
          Simple CSS Waves
        </h1>
      </div>

      {/* Waves */}
      <div className="relative w-full h-[15vh] max-h-[150px] overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use
              href="#gentle-wave"
              x="48"
              y="0"
              className="fill-white/70 animate-move"
            />
            <use
              href="#gentle-wave"
              x="48"
              y="3"
              className="fill-white/50 animate-move2"
            />
            <use
              href="#gentle-wave"
              x="48"
              y="5"
              className="fill-white/30 animate-move3"
            />
            <use
              href="#gentle-wave"
              x="48"
              y="7"
              className="fill-white animate-move4"
            />
          </g>
        </svg>
      </div>
    </div>
  )
};

export default Logics;