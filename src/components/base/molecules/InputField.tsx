import RenderProps from "components/base/atoms/RenderProps";
import type { RenderPropsChildren } from "components/base/atoms/RenderProps";

import useFocus from "hooks/useFocus";

type InputFieldProps = {
  type: string;
  children?: RenderPropsChildren<{ focus: boolean }>;
};
export default function InputField({ type, children }: InputFieldProps) {
  const { focus, ...props } = useFocus();

  return (
    <label>
      <div className="relative bg-gray-300 h-10">
        <input
          type={type}
          className="bg-transparent w-full h-full px-4 py-2"
          {...props}
        />

        <div className="absolute top-0 left-0 w-full h-full">
          <RenderProps focus={focus}>{children}</RenderProps>
        </div>
      </div>
    </label>
  );
}
