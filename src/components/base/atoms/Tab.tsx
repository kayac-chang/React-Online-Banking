import { ReactNode, MouseEvent } from "react";

type Props = {
  href: string;
  ariaControls: string;
  className?: string;
  label: ReactNode;
  onClick?: (event: MouseEvent) => void;
};
export default function Tab({
  href,
  ariaControls,
  className,
  label,
  onClick,
}: Props) {
  return (
    <a
      href={href}
      aria-controls={ariaControls}
      className={className}
      onClick={onClick}
      role="tab"
    >
      {label}
    </a>
  );
}
