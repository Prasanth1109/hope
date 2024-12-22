// "use client"
import ThemeToggle from "@/components/hooks/themeContext/ThemeToggle";
import GradientSky from "@/components/ui/GradientSky";
import RotatingButton from "@/components/ui/RotatingButton";
import SunMoonBg from "@/components/ui/SunMoonBg/SunMoonBg";
import Image from "next/image";

export default function Home() {

  return (
    <main className="flex items-center justify-center h-dvh">
      <RotatingButton />
      <GradientSky >
        <Image
          className="lg:w-72 lg:h-72 hidden sm:flex"
          src="/images/boy-stand.png"
          alt="Next.js logo"
          width={300}
          height={300}
          priority
        />
        <Image
          className="lg:w-72 lg:h-72 sm:hidden"
          src="/images/character-beach.png"
          alt="Next.js logo"
          width={300}
          height={300}
          priority
        />
      </GradientSky>
      <ThemeToggle />
      <SunMoonBg />
    </main>
  );
}
