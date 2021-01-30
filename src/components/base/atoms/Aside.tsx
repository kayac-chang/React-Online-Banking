import clsx from "clsx";
import { ReactNode } from "react";

type AsideProps = {
  className?: string;
  children?: ReactNode;
};
export default function Aside({ children, className }: AsideProps) {
  return (
    <aside
      className={clsx(
        "fixed top-0 w-screen h-screen bg-black bg-opacity-70",
        className
      )}
    >
      {children}
    </aside>
  );
}
