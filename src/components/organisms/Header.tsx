import clsx from "clsx";
import { Close } from "components/atoms/Button";

type Props = {
  title?: string;
  subTitle?: string;
  align?: "start" | "end" | "center";
  close?: boolean;
};
export default function Header({
  title = "",
  subTitle = "",
  align = "center",
  close = false,
}: Props) {
  return (
    <header className="h-14 relative">
      <hgroup
        className={clsx(
          "h-full flex items-end p-4 space-x-4",
          `justify-${align}`
        )}
      >
        <h1 className="text-xl">{title}</h1>

        {subTitle && <h2 className="text-xs py-px">{subTitle}</h2>}
      </hgroup>

      <div className="absolute top-0 left-0 w-full h-full flex justify-end items-center px-2">
        {close && <Close className="text-3xl" />}
      </div>
    </header>
  );
}
