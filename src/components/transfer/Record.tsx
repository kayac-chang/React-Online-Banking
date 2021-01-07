import { Plus } from "components/base/atoms/Button";
import AvatarGroup from "components/base/molecules/AvatarGroup";

type RecordProps = {
  className?: string;
  img: string;
  name: string;
  date: string;
};
export default function Record({ img, name, date, className }: RecordProps) {
  return (
    <AvatarGroup name={name} img={img} className={className}>
      <div className="flex-1 flex flex-col justify-center">
        <h3>{name}</h3>

        <span className="text-xs">{date}</span>
      </div>

      <div className="flex justify-center items-center">
        <Plus className="p-2 text-2xl" />
      </div>
    </AvatarGroup>
  );
}
