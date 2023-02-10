import Link from "next/link";
import { ReactNode } from "react";

export default function HeaderNavItem({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  return (
    <li>
      <Link
        href={href}
        className="relative text-2xl capitalize text-black-200 after:absolute after:left-0 after:-bottom-[3px] after:h-[3px] after:w-full after:origin-left after:scale-0 after:bg-current after:transition-all after:duration-300 after:content-[''] after:hover:scale-100 dark:text-white-200 lg:text-lg"
      >
        {children}
      </Link>
    </li>
  );
}
