import { cloneElement } from "react";
import clsx from "clsx";

type FadeProps = {
  children: JSX.Element;
  type: "in" | "out";
};
export function Fade({ children }: FadeProps) {
  return cloneElement(children, {
    className: clsx(
      children.props.className,
      "transition-opacity duration-500"
    ),
  });
}
