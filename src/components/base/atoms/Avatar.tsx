import clsx from "clsx";

type AvatarProps = {
  className?: string;
  img: string;
  name: string;
  showName?: boolean;
};
export default function Avatar({
  img,
  name,
  className,
  showName,
}: AvatarProps) {
  return (
    <figure
      className={clsx("inline-flex flex-col items-center space-y-1", className)}
    >
      <img className="rounded-full" src={img} alt={`${name}'s avatar`} />

      {showName && <figcaption className="text-xs">{name}</figcaption>}
    </figure>
  );
}