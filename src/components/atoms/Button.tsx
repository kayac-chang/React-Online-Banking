import { MdClose } from "react-icons/md";
import { BsPlus } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { ReactNode } from "react";

type ButtonProps = {
  className?: string;
};
export function Close(props: ButtonProps) {
  return (
    <button {...props}>
      <MdClose />
    </button>
  );
}

export function Back(props: ButtonProps) {
  return (
    <button {...props}>
      <IoIosArrowBack />
    </button>
  );
}

export function Plus(props: ButtonProps) {
  return (
    <button {...props}>
      <BsPlus />
    </button>
  );
}

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
