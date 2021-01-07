import { ReactNode } from "react";

type Props = {
  href: string;
  ariaControls: string;
  className?: string;
  label: ReactNode;
};
export default function Tab({ href, ariaControls, className, label }: Props) {
  return (
    <a
      href={href}
      aria-controls={ariaControls}
      className={className}
      role="tab"
    >
      {label}
    </a>
  );
}
