import React from 'react';

const GradientSky = (props: any) => {
  return (
    <div className="h-screen w-screen transition-all duration-300 bg-gradient-to-b from-sky-300 via-blue-500 to-indigo-900 dark:bg-gradient-to-b dark:from-sky-400 dark:via-blue-800 dark:to-indigo-900">
      <div className="absolute inset-0 flex sm:justify-center justify-start items-center">
        {props.children}
      </div>
    </div>
  );
};

export default GradientSky;
