import { cond, type, equals, pipe, applyTo, identity } from "ramda";
import { ReactNode, isValidElement } from "react";

import useFocus from "hooks/useFocus";

const isFunction = pipe(type, equals("Function"));

type Props = {
  children?: ((focus: boolean) => ReactNode) | ReactNode;
};
export default function InputField({ children }: Props) {
  const { focus, ...props } = useFocus();

  return (
    <label>
      <div className="relative bg-gray-300 h-10">
        <input
          {...props}
          className="bg-transparent w-full h-full px-4 py-2"
          type="search"
        />

        <div className="absolute top-0 left-0 w-full h-full">
          {cond([
            [isValidElement, identity],
            [isFunction, applyTo(focus)],
          ])(children)}
        </div>
      </div>
    </label>
  );
}
