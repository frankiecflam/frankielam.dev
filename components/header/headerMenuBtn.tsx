export default function HeaderMenuBtn({
  onClick,
  showMobileNav,
  title,
}: {
  onClick: () => void;
  showMobileNav: boolean;
  title?: string;
}) {
  return (
    <button
      className={`relative z-20 block h-10 w-6 before:absolute before:block before:h-[2.5px] before:w-full before:bg-black before:transition-all before:duration-300  before:content-[''] after:absolute after:block after:h-[2.5px] after:w-full after:bg-black after:transition-all  after:duration-300 after:content-[''] before:dark:bg-white after:dark:bg-white lg:hidden ${
        showMobileNav
          ? "before:-rotate-[135deg] after:origin-center after:rotate-[135deg] after:scale-x-100"
          : "before:-translate-y-1 after:origin-right after:translate-y-1 after:scale-x-75"
      }`}
      onClick={onClick}
      title={title}
    />
  );
}
