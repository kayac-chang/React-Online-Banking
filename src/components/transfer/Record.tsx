import { Plus } from "components/base/atoms/Button";
import AvatarGroup from "components/base/molecules/AvatarGroup";

type Props = {
  className?: string;
  img: string;
  id: string;
  name: string;
  date: string;
};
export default function Record({ img, name, id, date, className }: Props) {
  return (
    <AvatarGroup name={name} img={img} className={className}>
      <div className="flex-1 flex flex-col justify-center">
        <h3>
          {name} {`(帳號: ${id})`}
        </h3>

        <span className="text-xs">{date}</span>
      </div>

      <div className="flex justify-center items-center">
        <Plus className="p-2 text-2xl" />
      </div>
    </AvatarGroup>
  );
}
