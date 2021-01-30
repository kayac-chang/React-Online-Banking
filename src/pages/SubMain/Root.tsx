import { Transaction } from "types";
import { fillRemainHeight } from "utils";
import { map } from "ramda";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { BsSearch } from "react-icons/bs";

import Header from "components/base/organisms/Header";
import Record from "components/submain/Record";
import Account from "components/submain/Account";
import BottomDrawer from "components/base/organisms/BottomDrawer";
import Tab from "components/base/atoms/Tab";
import Tabs from "components/base/molecules/Tabs";
import { InputFieldWithPlaceholder } from "components/base/molecules/InputField";

import transactions from "mocks/transactions";

const toRecord = (transaction: Transaction) => (
  <Link
    key={transaction.id}
    to={(location) =>
      "/" + [location.pathname.replaceAll("/", ""), transaction.id].join("/")
    }
    className="block"
  >
    <Record {...transaction} />
  </Link>
);

function FilterTabs() {
  const filters = [
    {
      href: "#dec",
      ariaControls: "december",
      label: "12月",
    },
    {
      href: "#nov",
      ariaControls: "november",
      label: "11月",
    },
    {
      href: "#oct",
      ariaControls: "october",
      label: "10月",
    },
    {
      href: "#custom",
      ariaControls: "custom",
      label: "自訂區間",
    },
  ];

  return (
    <nav className="space-x-2">
      <Tabs>
        {({ active, setActive }) =>
          filters.map((props, index) => (
            <Tab
              key={props.href}
              className={clsx(
                "px-2 py-1 pointer-events-auto",
                active === index ? "bg-gray-100 text-black" : "text-white"
              )}
              onClick={() => setActive(index)}
              {...props}
            />
          ))
        }
      </Tabs>
    </nav>
  );
}

export default function SubMain() {
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
          {map(toRecord)(transactions)}
        </div>
      </main>

      <BottomDrawer />
    </>
  );
}
