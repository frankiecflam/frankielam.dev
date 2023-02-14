import { ReactNode } from "react";
import { Link } from "react-scroll";
import { ScrollIntoViewDuration } from "@/utils/constant";

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
      <Link
        to={href}
        smooth
        spy
        duration={ScrollIntoViewDuration}
        className="nav-link"
        activeClass="nav-link-active"
        onClick={onClick}
      >
        {children}
      </Link>
    </li>
  );
}
