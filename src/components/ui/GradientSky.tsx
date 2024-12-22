import React, { ReactNode } from 'react';

interface GradientSkyProps {
  children: ReactNode;
}

const GradientSky: React.FC<GradientSkyProps> = ({ children }) => {
  return (
    <div className="h-screen w-screen transition-all duration-300 bg-gradient-to-b from-sky-300 via-blue-500 to-indigo-900 dark:bg-gradient-to-b dark:from-sky-400 dark:via-blue-800 dark:to-indigo-900">
<<<<<<< HEAD
      <div className="absolute inset-0 flex sm:justify-center justify-start items-center">
        {children}
=======
      <div className="absolute inset-0 flex sm:justify-center justify-start items-center z-30">
        {props.children}
>>>>>>> development
      </div>
    </div>
  );
};

export default GradientSky;
