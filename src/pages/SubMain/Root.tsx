import { fillRemainHeight } from "utils";
import { Link, useHistory, useLocation } from "react-router-dom";
import clsx from "clsx";
import { BsSearch } from "react-icons/bs";

import Header from "components/base/organisms/Header";
import Record from "components/submain/Record";
import Account from "components/submain/Account";
import BottomDrawer from "components/base/organisms/BottomDrawer";
import Modal from "components/base/atoms/Modal";
import { InputFieldWithPlaceholder } from "components/base/molecules/InputField";

import transactions from "mocks/transactions";

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

function FilterTabs() {
  const location = useLocation();

  return (
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
  );
}

export default function SubMain() {
  const { goBack, location } = useHistory();

  return (
    <>
      <Header back />

      <main className="space-y-2">
        <Account
          balance="$320,000,000"
          name="皇太后的金庫"
          id="母帳戶 909019-09102"
        />

        <div className="mx-4">
          <InputFieldWithPlaceholder
            type="search"
            placeholder={
              <>
                <FilterTabs />

                <span className="ml-auto">
                  <BsSearch />
                </span>
              </>
            }
          />
        </div>

        <div
          className="overflow-y-auto divide-y-2 divide-gray-200 px-4"
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
