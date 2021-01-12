import { Avatar as IAvatar } from "types";

import Avatar from "components/base/atoms/Avatar";

interface Props extends Omit<IAvatar, "id"> {
  amount: string;
  balance: string;
}
export default function Overview({ amount, balance, img, name }: Props) {
  return (
    <article className="text-gray-500 flex justify-between mx-4">
      <hgroup className="space-y-2">
        <h2 className="text-4xl">{amount}</h2>

        <h3>{balance}</h3>
      </hgroup>

      <figure className="flex justify-end items-center space-x-2">
        <figcaption>{name}</figcaption>

        <Avatar img={img} name={name} className="h-16" />
      </figure>
    </article>
  );
}
