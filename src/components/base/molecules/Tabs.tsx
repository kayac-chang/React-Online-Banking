import { useState, Dispatch, SetStateAction } from "react";
import RenderProps from "components/base/atoms/RenderProps";
import type { RenderPropsChildren } from "components/base/atoms/RenderProps";

type TabsProps<T> = {
  active?: T;
  children?: RenderPropsChildren<{
    active: T;
    setActive: Dispatch<SetStateAction<T>>;
  }>;
};
export default function Tabs({
  children,
  active: initActive = 0,
}: TabsProps<number>) {
  const [active, setActive] = useState(initActive);

  return (
    <RenderProps active={active} setActive={setActive}>
      {children}
    </RenderProps>
  );
}
