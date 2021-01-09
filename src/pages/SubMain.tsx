import { Transaction } from "types";
import { fillRemainHeight } from "utils";
import { map } from "ramda";

import Header from "components/base/organisms/Header";
import Record from "components/submain/Record";
import Account from "components/submain/Account";
import SearchField from "components/submain/SearchField";

import transactions from "mocks/transactions";

const toRecord = (transaction: Transaction) => (
  <Record key={transaction.id} {...transaction} className="mx-4" />
);

export default function SubMain() {
  return (
    <>
      <Header back />

      <main className="space-y-2">
        <div>
          <Account />
        </div>

        <div className="mx-4">
          <SearchField />
        </div>

        <div className="overflow-y-auto divide-y-2" ref={fillRemainHeight}>
          {map(toRecord)(transactions)}
        </div>
      </main>
    </>
  );
}
