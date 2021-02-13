import clsx from "clsx";
import { ReactNode, useState } from "react";

import { RenderProps } from "../atoms";
import type { RenderPropsChildren } from "../atoms/RenderProps";

function useFocus(initial: boolean = false) {
  const [focus, setFocus] = useState(initial);

  function onFocus() {
    setFocus(true);
  }

  function onBlur() {
    setFocus(false);
  }

  return { focus, onFocus, onBlur };
}

type InputFieldProps = {
  type: string;
  label?: string;
  children?: RenderPropsChildren<{ focus: boolean }>;
};
export function InputField({ type, label = "", children }: InputFieldProps) {
  const { focus, onBlur, onFocus } = useFocus(false);

  return (
    <label className="block">
      {label && <span className="text-sm">{label}</span>}

      <div className="relative bg-field h-10">
        <input
          type={type}
          className="bg-transparent w-full h-full px-3 py-2"
          onBlur={onBlur}
          onFocus={onFocus}
        />

        {children && (
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <RenderProps focus={focus}>{children}</RenderProps>
          </div>
        )}
      </div>
    </label>
  );
}

export function InputFieldWithPlaceholder({
  placeholder,
  ...props
}: InputFieldProps & { placeholder: ReactNode }) {
  return (
    <InputField {...props}>
      {({ focus }) => (
        <div
          className={clsx(
            "h-full text-gray-500 flex items-center p-2",
            "transition-opacity ease-out-circ",
            focus && "opacity-0"
          )}
        >
          {placeholder}
        </div>
      )}
    </InputField>
  );
}

export default InputField;
