import dayjs from "dayjs";
import { BsPlusCircle, BsCheckCircle, BsBootstrap } from "react-icons/bs";

import Header from "components/organisms/Header";
import Section from "components/molecules/Section";
import Record from "components/molecules/Record";
import Avatar from "components/atoms/Avatar";
import { NavBtn } from "components/atoms/Button";

import Avatar_01 from "assets/avatar/01.png";
import Avatar_02 from "assets/avatar/02.png";
import Avatar_03 from "assets/avatar/03.png";
import Avatar_04 from "assets/avatar/04.png";
import Avatar_05 from "assets/avatar/05.png";
import Avatar_06 from "assets/avatar/06.png";
import Avatar_07 from "assets/avatar/07.png";
import Avatar_08 from "assets/avatar/08.png";
import Avatar_09 from "assets/avatar/09.png";
import Avatar_10 from "assets/avatar/10.png";
import Avatar_11 from "assets/avatar/11.png";
import { getViewPort } from "utils";

export default function Transfer() {
  const friends = [
    { img: Avatar_01, name: "Jermey123" },
    { img: Avatar_02, name: "Cindy 888" },
    { img: Avatar_03, name: "Elli.H" },
    { img: Avatar_04, name: "Bruce J" },
    { img: Avatar_05, name: "KM" },
  ];

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
  ];

  function fitContent(el: HTMLDivElement) {
    if (!el) return;

    const viewport = getViewPort();
    const { top } = el.getBoundingClientRect();

    el.style.height = viewport.height - top + "px";
  }

  return (
    <div className="h-screen flex flex-col">
      <Header title="轉入對象" />

      <nav className="flex divide-x border h-16">
        <NavBtn label="輸入帳戶" icon={<BsPlusCircle />} />
        <NavBtn label="約定帳戶" icon={<BsCheckCircle />} />
        <NavBtn label="轉好遠" icon={<BsBootstrap />} />
      </nav>

      <Section title="好友" more>
        <div className="flex items-center p-4 space-x-2">
          {friends.map(({ img, name }) => (
            <Avatar
              key={name}
              className="flex-1"
              img={img}
              name={name}
              showName
            />
          ))}
        </div>
      </Section>

      <Section className="flex-1" title="最近紀錄">
        <div className="divide-y overflow-y-auto" ref={fitContent}>
          {records.map(({ id, name, img, date }, index) => (
            <Record key={index} id={id} name={name} img={img} date={date} />
          ))}
        </div>
      </Section>
    </div>
  );
}
