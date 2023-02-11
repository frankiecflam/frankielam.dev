import { HTMLAttributes, ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export default function Section({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLElement> & SectionProps) {
  return (
    <section
      className={`container mx-auto px-8 pt-32 pb-16 md:px-0 ${
        className ? className : ""
      }`}
      {...props}
    >
      {children}
    </section>
  );
}
