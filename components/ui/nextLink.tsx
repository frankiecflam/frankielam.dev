import { AnchorHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

interface NextLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
}

export default function NextLink({
  children,
  className,
  href,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & NextLinkProps) {
  return (
    <Link
      href={href}
      className={`relative after:absolute after:left-0 after:-bottom-[3px] after:h-[3px] after:w-full after:origin-left after:scale-0 after:bg-current after:transition-all after:duration-300 after:content-[''] after:hover:scale-100 ${
        className ? className : ""
      }`}
      {...props}
    >
      {children}
    </Link>
  );
}
