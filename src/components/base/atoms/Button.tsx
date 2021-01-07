import { ReactNode } from "react";

import { MdClose } from "react-icons/md";
import { BsPlus } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { FiInfo } from "react-icons/fi";

type ButtonProps = {
  className?: string;
};
const IconButton = (icon: ReactNode) => (props: ButtonProps) => (
  <button {...props}>{icon}</button>
);

export const Close = IconButton(<MdClose />);
export const Back = IconButton(<IoIosArrowBack />);
export const Plus = IconButton(<BsPlus />);
export const Info = IconButton(<FiInfo />);

type NavBtnProps = {
  label: string;
  icon: ReactNode;
};
export function NavBtn({ label, icon }: NavBtnProps) {
  return (
    <div className="inline-flex justify-around items-center w-full px-2 space-x-2">
      <span className="text-3xl">{icon}</span>

      <span>{label}</span>
    </div>
  );
}