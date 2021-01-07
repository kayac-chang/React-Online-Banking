import Avatar from "components/base/atoms/Avatar";
import clsx from "clsx";
import { PropsWithChildren } from "react";

type Props = {
  className?: string;
  name: string;
  img: string;
};
export default function AvatarGroup({
  name,
  img,
  className,
  children,
}: PropsWithChildren<Props>) {
  return (
    <article className={clsx("flex", className)}>
      <div className="w-2/12 flex items-center p-2">
        <Avatar name={name} img={img} />
      </div>

      {children}
    </article>
  );
}
