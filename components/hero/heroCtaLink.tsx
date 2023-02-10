import Link from "next/link";
import { ReactNode } from "react";

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
    <Link
      href={href}
      className={`rounded-md py-2 px-4 ${className} tracking-wide drop-shadow-xl transition-all duration-300 hover:-translate-y-1 hover:drop-shadow-2xl active:translate-y-0 active:drop-shadow-xl`}
    >
      {children}
    </Link>
  );
}
