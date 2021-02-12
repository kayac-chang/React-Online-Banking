import { ReactNode, MouseEvent } from "react";
import { Link } from "react-router-dom";

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
    <Link
      to={href}
      aria-controls={ariaControls}
      className={className}
      onClick={onClick}
      role="tab"
    >
      {label}
    </Link>
  );
}
