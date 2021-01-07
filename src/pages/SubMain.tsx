import { Info } from "components/base/atoms/Button";
import SearchField from "components/base/molecules/SearchField";
import Record from "components/transfer/Record";
import Header from "components/base/organisms/Header";
import { fillRemainHeight } from "utils";

import Avatar_06 from "assets/avatar/06.png";
import Avatar_07 from "assets/avatar/07.png";
import Avatar_08 from "assets/avatar/08.png";
import Avatar_09 from "assets/avatar/09.png";
import Avatar_10 from "assets/avatar/10.png";
import Avatar_11 from "assets/avatar/11.png";
import dayjs from "dayjs";

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

const records = [
  {
    id: "38000009393",
    name: "Robert Fox",
    img: Avatar_06,
    date: dayjs().format("YYYY/MM/DD"),
  },
  {
    id: "38000009393",
    name: "Robert Fox",
    img: Avatar_07,
    date: dayjs().format("YYYY/MM/DD"),
  },
  {
    id: "38000009393",
    name: "Robert Fox",
    img: Avatar_08,
    date: dayjs().format("YYYY/MM/DD"),
  },
  {
    id: "38000009393",
    name: "Robert Fox",
    img: Avatar_09,
    date: dayjs().format("YYYY/MM/DD"),
  },
  {
    id: "38000009393",
    name: "Robert Fox",
    img: Avatar_10,
    date: dayjs().format("YYYY/MM/DD"),
  },
  {
    id: "38000009393",
    name: "Robert Fox",
    img: Avatar_11,
    date: dayjs().format("YYYY/MM/DD"),
  },
  {
    id: "38000009393",
    name: "Robert Fox",
    img: Avatar_09,
    date: dayjs().format("YYYY/MM/DD"),
  },
  {
    id: "38000009393",
    name: "Robert Fox",
    img: Avatar_09,
    date: dayjs().format("YYYY/MM/DD"),
  },
  {
    id: "38000009393",
    name: "Robert Fox",
    img: Avatar_09,
    date: dayjs().format("YYYY/MM/DD"),
  },
  {
    id: "38000009393",
    name: "Robert Fox",
    img: Avatar_09,
    date: dayjs().format("YYYY/MM/DD"),
  },
  {
    id: "38000009393",
    name: "Robert Fox",
    img: Avatar_09,
    date: dayjs().format("YYYY/MM/DD"),
  },
  {
    id: "38000009393",
    name: "Robert Fox",
    img: Avatar_09,
    date: dayjs().format("YYYY/MM/DD"),
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
          <SearchField />
        </div>

        <div className="overflow-y-auto divide-y-2" ref={fillRemainHeight}>
          {records.map(({ id, name, img, date }, index) => (
            <div className="mx-4">
              <Record key={index} id={id} name={name} img={img} date={date} />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
