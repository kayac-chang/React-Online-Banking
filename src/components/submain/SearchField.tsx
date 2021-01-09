import clsx from "clsx";
import { BsSearch } from "react-icons/bs";

import Tab from "components/base/atoms/Tab";
import Tabs from "components/base/molecules/Tabs";
import InputField from "components/base/molecules/InputField";

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

function FilterTabs() {
  return (
    <nav className="space-x-2">
      <Tabs>
        {({ active, setActive }) =>
          filters.map((props, index) => (
            <Tab
              key={props.href}
              className={clsx(
                "px-2 py-1",
                active === index && "bg-gray-100",
                active === index ? "text-black" : "text-white"
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

export default function SearchField() {
  return (
    <InputField type="search">
      {({ focus }) => (
        <div className="h-full flex items-center p-2">
          {!focus && <FilterTabs />}

          <span className="ml-auto">
            <BsSearch />
          </span>
        </div>
      )}
    </InputField>
  );
}
