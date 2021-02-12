import Header from "components/base/organisms/Header";
import { Avatar as IAvatar } from "types";
import Avatar from "components/base/atoms/Avatar";
import IMG from "assets/avatar/01.png";

type ItemProps = {
  label: string;
  value: string;
};
function Row({ label, value }: ItemProps) {
  return (
    <div className="flex py-2">
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}

interface OverviewProps extends Omit<IAvatar, "id"> {
  amount: string;
  balance: string;
}
function Overview({ amount, balance, img, name }: OverviewProps) {
  return (
    <article className="text-gray-500 flex mx-4">
      <figure className="flex justify-end items-center space-x-2">
        <Avatar img={img} name={name} className="h-16" />
        <figcaption>{name}</figcaption>
      </figure>

      <hgroup className="space-y-2 flex-1 flex flex-col items-end">
        <h2 className="text-4xl">{amount}</h2>

        <h3>{balance}</h3>
      </hgroup>
    </article>
  );
}

export default function Transaction() {
  // const { transactionID } = useParams<{ transactionID: string }>();

  return (
    <>
      <Header back />

      <main>
        <Overview
          amount="-$1,200"
          balance="$123,456,789"
          img={IMG}
          name="Robert Fox"
        />

        <article className="w-9/12 mt-10 mx-auto">
          <Row label="交易時間：" value="2020/ 12/ 31 14:50" />
          <Row label="帳務日期：" value="2020/ 12/ 31" />
          <Row label="帳號：" value="04300299001232" />
          <Row label="金資序號：" value="991412" />
          <Row label="備註：" value="孝親費" />
        </article>
      </main>
    </>
  );
}
