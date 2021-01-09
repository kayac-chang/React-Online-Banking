import { Transaction } from "types";
import { fillRemainHeight } from "utils";
import { map } from "ramda";
import { BsSearch } from "react-icons/bs";

import Tab from "components/base/atoms/Tab";
import InputField from "components/base/molecules/InputField";
import Header from "components/base/organisms/Header";
import Record from "components/submain/Record";
import Account from "components/submain/Account";

import transactions from "mocks/transactions";

const toRecord = (transaction: Transaction) => (
  <Record key={transaction.id} {...transaction} className="mx-4" />
);

type TabProps = {
  href: string;
  ariaControls: string;
  label: string;
};

const toTab = (props: TabProps) => (
  <Tab key={props.href} {...props} className="px-2 bg-gray-100" />
);

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

export default function SubMain() {
  return (
    <>
      <Header back />

      <main className="space-y-2">
        <div>
          <Account />
        </div>

        <div className="mx-4">
          <InputField>
            <div className="flex justify-between items-center p-2">
              <nav className="space-x-2">{map(toTab)(filters)}</nav>

              <BsSearch />
            </div>
          </InputField>
        </div>

        <div className="overflow-y-auto divide-y-2" ref={fillRemainHeight}>
          {map(toRecord)(transactions)}
        </div>
      </main>
    </>
  );
}
