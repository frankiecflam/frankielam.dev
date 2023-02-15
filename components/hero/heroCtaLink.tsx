"use client";

import { ReactNode } from "react";
import ScrollLink from "../ui/scrollLink";

interface HeroCtaLinkProps {
  children: ReactNode;
  href: string;
  className: string;
}

export default function HeroCtaLink({
  children,
  href,
  className,
}: HeroCtaLinkProps) {
  return (
    <ScrollLink
      to={href}
      className={`rounded-md py-2 px-4 ${className} cursor-pointer tracking-wide drop-shadow-xl transition-all duration-300 hover:-translate-y-1 hover:drop-shadow-2xl active:translate-y-0 active:drop-shadow-xl`}
    >
      {children}
    </ScrollLink>
  );
}
