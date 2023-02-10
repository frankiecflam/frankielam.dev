import NextLink from "../ui/nextLink";
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
      <NextLink
        href={href}
        className="text-2xl capitalize text-black-200 dark:text-white-200 lg:text-lg"
      >
        {children}
      </NextLink>
    </li>
  );
}
