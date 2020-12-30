import { PropsWithChildren } from "react";
import { MdClose } from "react-icons/md";

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
      <button className="text-3xl">
        <MdClose />
      </button>
    </div>
  );
}

export default function Header() {
  return (
    <header className="h-14 bg-gray-500 text-white relative">
      <Title>轉入對象</Title>

      <Control />
    </header>
  );
}
