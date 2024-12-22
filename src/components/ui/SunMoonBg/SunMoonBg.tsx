"use client";

import { ThemeContext } from "@/components/hooks/themeContext/ThemeContext";
import { useContext } from "react";
import "./SunMoonBg.css"

const SunMoonBg = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) return null; // To handle potential undefined context

  const { theme } = themeContext;
  
  return (
    <div className="absolute h-screen w-full bg-transparent overflow-hidden">
      {/* Sun with Lava-like Gradient Animation */}
      <div className="dark:hidden absolute top-10 left-10 w-28 h-28 rounded-full shadow-2xl animate-rotate-sun sun-lava z-10">
        <div className="absolute inset-0 rounded-full sun-rays"></div>
      </div>

      {theme != 'light' && (<div className="dark:block absolute top-10 left-10 w-28 h-28 rounded-full shadow-2xl moon-glow z-10">
        {/* <div className="absolute inset-0 rounded-full moon-lava"></div> */}
      </div>)}
      {/* Cloud 1 */}
      <div className="absolute top-20 left-0 w-48 h-24 bg-white rounded-full opacity-80 animate-move-clouds shadow-md"></div>

      {/* Cloud 2 */}
      <div className="absolute top-32 left-0 w-64 h-32 bg-white rounded-full opacity-70 animate-move-clouds shadow-md z-20"></div>

      {/* Cloud 3 */}
      <div className="absolute top-56 left-0 w-56 h-28 bg-white rounded-full opacity-60 animate-move-clouds shadow-md z-20"></div>
    </div>
  );
};

export default SunMoonBg;
