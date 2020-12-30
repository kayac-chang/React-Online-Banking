import { PropsWithChildren } from "react";
import { Close } from "components/atoms/Button";

function Title({ children }: PropsWithChildren<{}>) {
  return (
    <h1 className="h-full flex justify-center items-center text-xl">
      {children}
    </h1>
  );
}

function Control() {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex justify-end items-center px-2">
      <Close className="text-3xl" />
    </div>
  );
}

type Props = {
  title?: string;
};
export default function Header({ title = "" }: Props) {
  return (
    <header className="h-14 bg-gray-500 text-white relative">
      <Title>{title}</Title>

      <Control />
    </header>
  );
}