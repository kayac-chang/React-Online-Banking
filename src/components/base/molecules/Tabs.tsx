import { useState, Dispatch, SetStateAction } from "react";
import RenderProps from "components/base/atoms/RenderProps";
import type { RenderPropsChildren } from "components/base/atoms/RenderProps";

type TabsProps = {
  active?: number;
  children?: RenderPropsChildren<{
    active: number;
    setActive: Dispatch<SetStateAction<number>>;
  }>;
};
export default function Tabs({ children, active: initActive = 0 }: TabsProps) {
  const [active, setActive] = useState(initActive);

  return (
    <RenderProps active={active} setActive={setActive}>
      {children}
    </RenderProps>
  );
}
