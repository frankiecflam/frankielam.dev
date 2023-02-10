import { AnchorHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

interface NextLinkProps {
  href: string;
  children: ReactNode;
}

export default function NextLink({
  children,
  href,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & NextLinkProps) {
  return (
    <Link
      href={href}
      {...props}
      className={`relative after:absolute after:left-0 after:-bottom-[3px] after:h-[3px] after:w-full after:origin-left after:scale-0 after:bg-current after:transition-all after:duration-300 after:content-[''] after:hover:scale-100 ${
        props.className ? `${props.className}` : ""
      }`}
    >
      {children}
    </Link>
  );
}
