import clsx from "clsx";
import { Back as BackBtn, Close } from "components/base/atoms/Button";
import { useHistory } from "react-router-dom";

type Props = {
  className?: string;
};
function Back({ className }: Props) {
  const history = useHistory();

  return (
    <BackBtn
      type="button"
      className={className}
      onClick={() => history.goBack()}
    />
  );
}

type HeaderProps = {
  title?: string;
  subTitle?: string;
  align?: "start" | "end" | "center";
  close?: boolean;
  back?: boolean;
};
export default function Header({
  title = "",
  subTitle = "",
  align = "center",
  close = false,
  back = false,
}: HeaderProps) {
  return (
    <header className="h-14 relative">
      {title && (
        <hgroup
          className={clsx(
            "h-full flex items-end p-4 space-x-4",
            `justify-${align}`
          )}
        >
          <h1 className="text-xl">{title}</h1>

          {subTitle && <h2 className="text-xs py-px">{subTitle}</h2>}
        </hgroup>
      )}

      <div className="absolute top-0 left-0 w-full h-full px-2">
        <div className="relative w-full h-full flex items-center">
          {back && <Back className="absolute left-0 text-2xl" />}

          {close && <Close className="absolute right-0 text-3xl" />}
        </div>
      </div>
    </header>
  );
}
