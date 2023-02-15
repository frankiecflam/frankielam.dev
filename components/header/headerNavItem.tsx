import { ReactNode } from "react";
import ScrollLink from "../ui/scrollLink";

export default function HeaderNavItem({
  children,
  href,
  onClick,
}: {
  children: ReactNode;
  href: string;
  onClick: () => void;
}) {
  return (
    <li>
      <ScrollLink
        to={href}
        className="nav-link"
        activeClass="nav-link-active"
        onClick={onClick}
      >
        {children}
      </ScrollLink>
    </li>
  );
}
