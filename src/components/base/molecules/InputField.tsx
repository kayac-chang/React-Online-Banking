import { cond, type, equals, pipe, applyTo, identity } from "ramda";
import { ReactNode, useState, isValidElement } from "react";

const isFunction = pipe(type, equals("Function"));

function useFocus() {
  const [focus, setFocus] = useState(false);

  function onFocus() {
    setFocus(true);
  }

  function onBlur() {
    setFocus(false);
  }

  return { focus, onFocus, onBlur };
}

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
