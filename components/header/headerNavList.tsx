import HeaderNavItem from "./headerNavItem";

export default function HeaderNavList({
  showMobileNav,
  onClick,
}: {
  showMobileNav: boolean;
  onClick: () => void;
}) {
  return (
    <ul
      className={`fixed inset-0 z-10  flex h-screen w-screen flex-grow origin-top flex-col items-center justify-center gap-y-8 gap-x-8  transition-all duration-300 ease-out lg:relative lg:h-auto lg:w-auto lg:scale-y-100 lg:flex-row lg:bg-transparent lg:dark:bg-transparent ${
        showMobileNav
          ? "scale-y-100 bg-white-200 dark:bg-black-200"
          : "scale-y-0"
      }`}
      onClick={onClick}
    >
      <HeaderNavItem href="#home">home</HeaderNavItem>
      <HeaderNavItem href="#projects">projects</HeaderNavItem>
      <HeaderNavItem href="#about">about</HeaderNavItem>
      <HeaderNavItem href="#contact">contact</HeaderNavItem>
    </ul>
  );
}
