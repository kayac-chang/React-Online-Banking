import { Info } from "components/base/atoms/Button";
import SearchField from "components/base/molecules/SearchField";
import Record from "components/transfer/Record";
import Header from "components/base/organisms/Header";
import { fillRemainHeight } from "utils";

import history from "mocks/transferHistory";

function Account() {
  return (
    <article className="text-gray-500 space-y-2 mx-4">
      <h2 className="text-4xl">{"$320,000,000"}</h2>

      <section className="">
        <h3>
          <span>{"皇太后的金庫"}</span>
          <span>
            <Info />
          </span>
        </h3>

        <div className="text-sm">
          <span>{"母帳戶"}</span>
          <span>{"909019-09102"}</span>
        </div>
      </section>
    </article>
  );
}

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
