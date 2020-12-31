import clsx from "clsx";
import Avatar from "components/atoms/Avatar";
import { Plus } from "components/atoms/Button";

type Props = {
  className?: string;
  img: string;
  id: string;
  name: string;
  date: string;
};
export default function Record({ img, name, id, date, className }: Props) {
  return (
    <article className={clsx("flex px-2", className)}>
      <div className="w-2/12 flex items-center p-2">
        <Avatar name={name} img={img} />
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <h3>
          {name} {`(帳號: ${id})`}
        </h3>

        <span className="text-xs">{date}</span>
      </div>

      <div className="flex justify-center items-center">
        <Plus className="p-2 text-2xl" />
      </div>
    </article>
  );
}
