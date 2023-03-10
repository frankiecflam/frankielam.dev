import { Link } from "react-scroll";
import Image from "next/image";
import LogoBlack from "@/public/logo_black.svg";
import LogoWhite from "@/public/logo_white.svg";
import HeaderNavList from "./headerNavList";
import HeaderThemeToggler from "./headerThemeToggler";
import HeaderMenuBtn from "./headerMenuBtn";
import { useState } from "react";
import { ScrollIntoViewDuration } from "@/utils/constant";
import { motion } from "framer-motion";

export default function Header({
  theme,
  onThemeToggle,
}: {
  theme: "dark" | "light";
  onThemeToggle: () => void;
}) {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleHideMobileNav = () => {
    if (!showMobileNav) return;

    setShowMobileNav(false);
  };

  return (
    <motion.header
      className="fixed inset-0 z-10 h-[80px] w-screen bg-white dark:bg-black lg:h-[100px]"
      initial={{ opacity: 0, y: "20px" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: 2,
      }}
    >
      <nav className="flex items-center justify-between px-8 py-2 lg:py-4">
        <div className="relative z-20">
          <Link
            to="home"
            smooth
            spy
            duration={ScrollIntoViewDuration}
            onClick={handleHideMobileNav}
            className="cursor-pointer"
          >
            <Image
              src={theme === "dark" ? LogoWhite : LogoBlack}
              alt="website logo"
              width={60}
              height={60}
            />
          </Link>
        </div>
        <HeaderNavList
          showMobileNav={showMobileNav}
          onClick={handleHideMobileNav}
        />
        <div className="flex items-center gap-x-4">
          <HeaderThemeToggler
            theme={theme}
            onClick={onThemeToggle}
            title={theme === "dark" ? "use light mode" : "use dark mode"}
          />
          <HeaderMenuBtn
            onClick={() => setShowMobileNav((prevState) => !prevState)}
            showMobileNav={showMobileNav}
            title={
              showMobileNav ? "close navigation menu" : "open navigation menu"
            }
          />
        </div>
      </nav>
    </motion.header>
  );
}
