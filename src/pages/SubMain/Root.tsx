import { Transaction, Error } from "types";
import { fillRemainHeight } from "utils";
import { Link, useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import clsx from "clsx";

import { Modal, Avatar } from "components/atoms";
import {
  InputFieldWithPlaceholder,
  BottomDrawer,
  List,
} from "components/molecules";
import { Header } from "components/organisms";

import { BsSearch } from "react-icons/bs";
import { FiInfo } from "react-icons/fi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import dayjs from "dayjs";

type AccountProps = {
  balance: string;
  name: string;
  id: string;
};
function Account({ balance, name, id }: AccountProps) {
  return (
    <article className="text-gray-500 space-y-2">
      <h2 className="text-4xl">{balance}</h2>

      <div className="flex">
        <div className="flex-1">
          <h3 className="flex items-center space-x-1">
            <span>{name}</span>

            <Link to="#info">
              <FiInfo />
            </Link>
          </h3>

          <div className="text-sm">{id}</div>
        </div>

        <div>
          <Link to="#menu">
            <HiOutlineDotsHorizontal className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </article>
  );
}

function Record(props: Transaction) {
  const { name, img, date, description, amount, balance } = props;

  return (
    <div className="flex items-center py-1">
      <div className="w-20 flex items-center">
        <Avatar name={name} img={img} />
      </div>

      <div className="w-40">
        <span className="text-xs">
          {date} - {name}
        </span>

        <p className="truncate">{description}</p>
      </div>

      <div className="flex-1 text-right">
        <h2 className="text-2xl">{amount}</h2>

        <span className="text-xs">{balance}</span>
      </div>
    </div>
  );
}

const filters = [
  ...[
    dayjs(),
    dayjs().subtract(1, "month"),
    dayjs().subtract(2, "month"),
    //
  ].map((date) => ({
    to: `?filter=${date.format("YYYY-MM")}`,
    label: `${date.format("MM")}月`,
  })),
  {
    to: "#custom",
    label: "自訂區間",
  },
];

const fetchTransactions = (filter = "") =>
  fetch(`/api/transactions${filter}`)
    .then((res) => res.json())
    .then(({ transactions }) => transactions);

export default function SubMain() {
  const { goBack, location, push } = useHistory();

  const { status, data: transactions, error } = useQuery<Transaction[], Error>(
    ["transactions", location.search],
    () => fetchTransactions(location.search)
  );

  if (!location.search) {
    push(filters[0].to);
  }
  console.log({ status, transactions, error });

  return (
    <>
      <Header back />

      <main className="space-y-2 mx-4">
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

              <BsSearch className="ml-auto" />
            </>
          }
        />

        <div ref={fillRemainHeight}>
          {transactions && (
            <List data={transactions}>
              {(index) => (
                <Link
                  key={transactions[index].id}
                  to={`${location.pathname}/${transactions[index].id}`}
                >
                  <Record {...transactions[index]} />
                </Link>
              )}
            </List>
          )}
        </div>
      </main>

      <Modal open={location.hash === "#custom"} onClickAway={goBack}>
        <BottomDrawer
          header={
            <h3 className="h-full flex items-center text-lg pt-4">自訂區間</h3>
          }
          body={
            <div className="pb-8 pt-2 space-y-2">
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
            </div>
          }
          footer={
            <footer className="h-12 flex divide-x divide-white">
              <button className="bg-button flex-1 h-full" onClick={goBack}>
                取消
              </button>
              <button className="bg-button flex-1 h-full">查詢</button>
            </footer>
          }
        />
      </Modal>

      <Modal open={location.hash === "#menu"} onClickAway={goBack}>
        <BottomDrawer
          body={
            <div className="flex flex-col py-4">
              <button className="p-2 text-left">轉帳</button>
              <button className="p-2 text-left">無卡提款</button>
            </div>
          }
        />
      </Modal>

      <Modal
        open={location.hash === "#info"}
        onClickAway={goBack}
        className="flex flex-col justify-center"
      >
        <div className="bg-white mx-12">
          <section className="px-12 py-6 text-center">
            <div className="py-2 flex justify-center">
              <span className="flex-1">2.5%利率</span>
              <span className="flex-1 bg-field rounded-full">＄50,000</span>
            </div>

            <div className="py-2 flex justify-center">
              <span className="flex-1">利息試算</span>
              <span className="flex-1 bg-field rounded-full">88%</span>
            </div>
          </section>

          <footer className="h-12 border-t flex">
            <button className="flex-1">確認</button>
          </footer>
        </div>
      </Modal>
    </>
  );
}
