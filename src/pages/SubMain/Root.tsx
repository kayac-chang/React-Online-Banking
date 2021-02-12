import { Avatar, Transaction } from "types";
import { fillRemainHeight } from "utils";
import { Link, useHistory } from "react-router-dom";
import clsx from "clsx";
import { BsSearch } from "react-icons/bs";

import { Modal, Info } from "components/atoms";
import { AvatarGroup, InputFieldWithPlaceholder } from "components/molecules";
import { Header } from "components/organisms";

import transactions from "mocks/transactions";

type Props = {
  onClose?: () => void;
};
function BottomDrawer({ onClose }: Props) {
  return (
    <article className="absolute bottom-0 w-full h-1/3 bg-white flex flex-col">
      <header className="mx-8 h-1/5">
        <h3 className="h-full flex items-center text-lg">自訂區間</h3>
      </header>

      <section className="mx-8 flex-1 space-y-2">
        <InputFieldWithPlaceholder
          type="text"
          label="起始日"
          placeholder="請選擇"
        />

        <InputFieldWithPlaceholder
          type="text"
          label="結束日"
          placeholder="請選擇"
        />
      </section>

      <footer className="flex h-1/5 divide-x divide-white">
        <button className="bg-button flex-1" onClick={onClose}>
          取消
        </button>
        <button className="bg-button flex-1">查詢</button>
      </footer>
    </article>
  );
}

type AccountProps = {
  balance: string;
  name: string;
  id: string;
};
function Account({ balance, name, id }: AccountProps) {
  return (
    <article className="text-gray-500 space-y-2">
      <h2 className="text-4xl">{balance}</h2>

      <section>
        <h3 className="flex items-center space-x-1">
          <span>{name}</span>

          <Info />
        </h3>

        <div className="text-sm">{id}</div>
      </section>
    </article>
  );
}

interface RecordProps extends Avatar, Transaction {
  className?: string;
  date: string;
}
function Record(props: RecordProps) {
  const { name, img, className, date, description, amount, balance } = props;

  return (
    <AvatarGroup name={name} img={img} className={className}>
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
    </AvatarGroup>
  );
}

const filters = [
  {
    to: "?filter=12",
    label: "12月",
  },
  {
    to: "?filter=11",
    label: "11月",
  },
  {
    to: "?filter=10",
    label: "10月",
  },
  {
    to: "#custom",
    label: "自訂區間",
  },
];

export default function SubMain() {
  const { goBack, location } = useHistory();

  return (
    <>
      <Header back />

      <main className="space-y-2 px-4">
        <Account
          balance="$320,000,000"
          name="皇太后的金庫"
          id="母帳戶 909019-09102"
        />

        <InputFieldWithPlaceholder
          type="search"
          placeholder={
            <>
              <nav className="space-x-2">
                {filters.map((props) => (
                  <Link
                    key={props.label}
                    to={props.to}
                    className={clsx(
                      "px-2 py-1",
                      location.search === props.to
                        ? "bg-gray-100 text-black"
                        : "text-white pointer-events-auto"
                    )}
                  >
                    {props.label}
                  </Link>
                ))}
              </nav>

              <span className="ml-auto">
                <BsSearch />
              </span>
            </>
          }
        />

        <div
          className="overflow-y-auto divide-y-2 divide-gray-200 pr-2"
          ref={fillRemainHeight}
        >
          {transactions.map((transaction) => (
            <Link
              key={transaction.id}
              to={`${location.pathname}/${transaction.id}`}
              className="block"
            >
              <Record {...transaction} />
            </Link>
          ))}
        </div>
      </main>

      <Modal open={location.hash === "#custom"} onClickAway={goBack}>
        <BottomDrawer onClose={goBack} />
      </Modal>
    </>
  );
}
