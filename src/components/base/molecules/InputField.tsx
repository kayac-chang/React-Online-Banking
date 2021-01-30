import clsx from "clsx";
import { ReactNode } from "react";

import RenderProps from "components/base/atoms/RenderProps";
import type { RenderPropsChildren } from "components/base/atoms/RenderProps";

import useFocus from "hooks/useFocus";

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
