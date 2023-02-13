import { ReactNode } from "react";
import NextLink from "../ui/nextLink";

export default function JourneyItemLink({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  return (
    <NextLink
      href={href}
      className="font-medium text-white-500 after:scale-100 hover:text-black-100 dark:text-white-300 hover:dark:text-white-100"
      target="_blank"
    >
      {children}
    </NextLink>
  );
}
