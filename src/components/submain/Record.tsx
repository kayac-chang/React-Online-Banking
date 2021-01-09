import { Avator, Transaction } from "types";
import AvatarGroup from "components/base/molecules/AvatarGroup";

interface Props extends Avator, Transaction {
  className?: string;
  date: string;
}

function Type2({ description, amount, balance, date, name }: Props) {
  return (
    <div className="flex-1 flex text-sm">
      <section className="flex-1 flex flex-col justify-center">
        <span className="text-xs">
          {date} - {name}
        </span>

        <p>{description}</p>
      </section>

      <section className="flex flex-col justify-center text-right">
        <h2 className="text-2xl">{amount}</h2>

        <span className="text-xs">{balance}</span>
      </section>
    </div>
  );
}

export default function Record(props: Props) {
  const { name, img, className } = props;

  return (
    <AvatarGroup name={name} img={img} className={className}>
      <Type2 {...props} />
    </AvatarGroup>
  );
}
