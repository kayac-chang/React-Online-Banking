import { Transaction } from "types";
import { fillRemainHeight } from "utils";
import { map } from "ramda";
import { Link } from "react-router-dom";

import Header from "components/base/organisms/Header";
import Record from "components/submain/Record";
import Account from "components/submain/Account";
import SearchField from "components/submain/SearchField";

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

export default function SubMain() {
  return (
    <>
      <Header back />

      <main className="space-y-2">
        <div>
          <Account
            balance="$320,000,000"
            name="皇太后的金庫"
            id="母帳戶 909019-09102"
          />
        </div>

        <div className="mx-4">
          <SearchField />
        </div>

        <div
          className="overflow-y-auto divide-y-2 divide-gray-200 px-4"
          ref={fillRemainHeight}
        >
          {map(toRecord)(transactions)}
        </div>
      </main>
    </>
  );
}
