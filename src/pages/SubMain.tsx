import SearchField from "components/base/molecules/SearchField";
import Header from "components/base/organisms/Header";
import Record from "components/transfer/Record";
import Account from "components/submain/Account";

import { fillRemainHeight } from "utils";

import history from "mocks/transferHistory";

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
          {history.map(({ name, img, date }, index) => (
            <div className="mx-4" key={index}>
              <Record name={name} img={img} date={date} />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
