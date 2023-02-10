import Link from "next/link";
import Image from "next/image";
import LogoBlack from "@/public/logo_black.svg";
import LogoWhite from "@/public/logo_white.svg";
import HeaderNavList from "./headerNavList";
import HeaderThemeToggler from "./headerThemeToggler";
import HeaderMenuBtn from "./headerMenuBtn";
import { useState } from "react";

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
    <header className="fixed inset-0  h-[120px] w-screen">
      <nav className="flex items-center justify-between py-4 px-8">
        <div className="relative z-20">
          <Link href="/" onClick={handleHideMobileNav}>
            <Image
              src={theme === "dark" ? LogoWhite : LogoBlack}
              alt="website logo"
              width={75}
              height={75}
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
    </header>
  );
}
