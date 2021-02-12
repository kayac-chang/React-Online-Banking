import clsx from "clsx";
import { useRef, ReactNode, MouseEvent } from "react";

type ModalProps = {
  open?: boolean;
  children?: ReactNode;
  className?: string;
  onClickAway?: () => void;
};
export default function Modal({
  open = true,
  children,
  className,
  onClickAway,
}: ModalProps) {
  const ref = useRef<HTMLDivElement>(null);

  function onClick(event: MouseEvent) {
    const inside = ref?.current?.firstChild?.contains(event.target as Node);

    if (inside) return;

    onClickAway?.();
  }

  if (!open) return <></>;

  return (
    <div
      ref={ref}
      onClickCapture={onClick}
      className={clsx(
        "fixed top-0 w-screen h-screen bg-black bg-opacity-70",
        className
      )}
    >
      {children}
    </div>
  );
}
