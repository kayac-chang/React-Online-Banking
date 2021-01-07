import { Avator, Transaction } from "types";
import AvatarGroup from "components/base/molecules/AvatarGroup";

interface Props extends Avator, Transaction {
  className?: string;
  date: string;
}

export default function Record({
  description,
  amount,
  balance,
  img,
  name,
  date,
  className,
}: Props) {
  return (
    <AvatarGroup name={name} img={img} className={className}>
      <div className="flex-1 flex text-sm">
        <header className="w-2/6 flex flex-col justify-center">
          <h3>{name}</h3>

          <span className="text-xs">{date}</span>
        </header>

        <section className="flex-1 flex items-center">
          <p>{description}</p>
        </section>

        <section className="flex flex-col justify-center text-right">
          <h2 className="text-2xl">{amount}</h2>

          <span className="text-xs">{balance}</span>
        </section>
      </div>
    </AvatarGroup>
  );
}
