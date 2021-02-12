import clsx from "clsx";
import { useRef, ReactNode, MouseEvent } from "react";

type ModalProps = {
  open?: boolean;
  children?: ReactNode;
  className?: string;
  onClickAway?: () => void;
};
export function Modal({
  open = true,
  children,
  className,
  onClickAway,
}: ModalProps) {
  const ref = useRef<HTMLDivElement>(null);

  if (!open) return <></>;

  return (
    <div
      ref={ref}
      onClickCapture={(event: MouseEvent) => {
        const inside = ref?.current?.firstChild?.contains(event.target as Node);

        if (inside || !onClickAway) return;

        onClickAway();
      }}
      className={clsx(
        "fixed top-0 w-screen h-screen bg-black bg-opacity-70",
        className
      )}
    >
      {children}
    </div>
  );
}
