import clsx from "clsx";
import type { Avatar as IAvatar } from "types";

type AvatarProps = Omit<IAvatar, "id"> & {
  className?: string;
  showName?: boolean;
};
export function Avatar({ img, name, className, showName }: AvatarProps) {
  return (
    <figure
      className={clsx("inline-flex flex-col items-center space-y-1", className)}
    >
      <img
        className="rounded-full max-h-full"
        src={img}
        alt={`${name}'s avatar`}
      />

      {showName && <figcaption className="text-xs">{name}</figcaption>}
    </figure>
  );
}
