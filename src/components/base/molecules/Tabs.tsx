import { useState, ReactNode, isValidElement } from "react";
import { cond, type, equals, pipe, applyTo, identity } from "ramda";

const isFunction = pipe(type, equals("Function"));

type TabsProps = {
  children?: ((active: number) => ReactNode) | ReactNode;
};
export default function Tabs({ children }: TabsProps) {
  const [active, setActive] = useState(0);

  return (
    <>
      {cond([
        [isValidElement, identity],
        [isFunction, applyTo(active)],
      ])(children)}
    </>
  );
}
