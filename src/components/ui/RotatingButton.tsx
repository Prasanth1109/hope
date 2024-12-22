"use client"

import { useState, useEffect } from "react";
import {
  IconUser,
  IconBlocks,
  IconTimelineEvent,
  IconDeviceMobileMessage,
  IconFileCv,
  IconChartGridDots,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";

const navData = [
  {
    title: "Profile",
    icon: <IconUser stroke={2} />,
    nav: "/profile",
  },
  {
    title: "Projects",
    icon: <IconBlocks stroke={2} />,
    nav: "/projects",
  },
  {
    title: "Time Line",
    icon: <IconTimelineEvent stroke={2} />,
    nav: "/timeline",
  },
  {
    title: "Contact",
    icon: <IconDeviceMobileMessage stroke={2} />,
    nav: "/contact",
  },
  {
    title: "Resume",
    icon: <IconFileCv stroke={2} />,
    nav: "/resume",
  },
  {
    title: "Logics",
    icon: <IconChartGridDots stroke={2} />,
    nav: "/logics",
  },
];

const RotatingButton = () => {
  const router = useRouter();
  const [angle, setAngle] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false); // State to track if the component is mounted

  useEffect(() => {
    setMounted(true); // Set to true after the first render (client-side only)

    if (isHovered) return;

    const interval = setInterval(() => {
      setAngle((prev) => (prev + 1) % 360);
    }, 30); // Smooth 60FPS animation

    return () => clearInterval(interval);
  }, [isHovered]);

  if (!mounted) return null; // Prevent rendering on the server side

  const radius = 200; // Radius of the circle

  return (
    <>
      <div
        className="absolute w-64 h-64 bg-transparent rounded-full sm:flex items-center justify-center hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {navData.map((item, index) => {
          const buttonAngle = (angle + index * (360 / navData.length)) % 360;
          const x = radius * Math.cos((buttonAngle * Math.PI) / 180);
          const y = radius * Math.sin((buttonAngle * Math.PI) / 180);

          return (
            <div
              key={item.title}
              className="absolute z-50"
              style={{
                transform: `translate(${x}px, ${y}px)`, // Only calculated on the client side
              }}
            >
              <button
                type="button"
                onClick={() => router.push(item.nav)}
                className="
                bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400 shadow-lg shadow-gray-500/50 
                text-white 
                cursor-pointer font-semibold text-center 
                shadow-xs transition-all 
                duration-500 
                hover:bg-gradient-to-l  
                px-4 py-4 rounded-full 
                flex items-center space-x-2"
              >
                {item.icon}
                <span>{item.title}</span>
              </button>
            </div>
          );
        })}
      </div>
      <div className="sm:hidden absolute right-4">
        {navData.map((item) => (
          <button
            key={item.title}
            type="button"
            onClick={() => router.push(item.nav)}
            className="
            bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400 shadow-lg shadow-gray-500/50 
            text-white 
            cursor-pointer font-semibold text-center 
            shadow-xs transition-all 
            duration-500 
            hover:bg-gradient-to-l  
            px-4 py-4 rounded-full 
            flex items-center space-x-2 my-4"
          >
            {item.icon}
            <span>{item.title}</span>
          </button>
        ))}
      </div>
    </>
  );
};

export default RotatingButton;

