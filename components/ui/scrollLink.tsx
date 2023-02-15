import { Link, LinkProps } from "react-scroll";
import { ScrollIntoViewDuration } from "@/utils/constant";

export default function ScrollLink({
  children,
  to,
  ...props
}: Omit<LinkProps, "ref">) {
  return (
    <Link to={to} smooth spy duration={ScrollIntoViewDuration} {...props}>
      {children}
    </Link>
  );
}
