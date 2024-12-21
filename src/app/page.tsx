import ThemeToggle from "@/components/hooks/themeContext/ThemeToggle";
import RotatingButton from "@/components/ui/RotatingButton/RotatingButton";
import SunMoonBg from "@/components/ui/SunMoonBg/SunMoonBg";
import Image from "next/image";

export default function Home() {

  return (
    <main className="flex items-center justify-center h-dvh">
      <ThemeToggle />
      <SunMoonBg />
      <RotatingButton/>
      <Image
        className="lg:w-72 lg:h-72"
        src="/images/boy-stand.png"
        alt="Next.js logo"
        width={180}
        height={180}
        priority
      />
    </main>

  );
}
