import { FocusEvent, useState } from "react";
import { BsSearch } from "react-icons/bs";

import Avatar from "components/atoms/Avatar";
import Header from "components/organisms/Header";
import Section from "components/organisms/Section";

import Avatar_01 from "assets/avatar/01.png";
import Avatar_02 from "assets/avatar/02.png";
import Avatar_03 from "assets/avatar/03.png";
import Avatar_04 from "assets/avatar/04.png";
import Avatar_05 from "assets/avatar/05.png";
import clsx from "clsx";
import { fillRemainHeight } from "utils";

const friends = [
  { img: Avatar_01, name: "Jermey123" },
  { img: Avatar_02, name: "Cindy 888" },
  { img: Avatar_03, name: "Elli.H" },
  { img: Avatar_04, name: "Bruce J" },
  { img: Avatar_05, name: "KM" },
  { img: Avatar_05, name: "KM" },
  { img: Avatar_05, name: "KM" },
  { img: Avatar_05, name: "KM" },
  { img: Avatar_05, name: "KM" },
  { img: Avatar_05, name: "KM" },
  { img: Avatar_05, name: "KM" },
  { img: Avatar_05, name: "KM" },
  { img: Avatar_05, name: "KM" },
  { img: Avatar_05, name: "KM" },
  { img: Avatar_05, name: "KM" },
  { img: Avatar_05, name: "KM" },
];

function SearchField() {
  const [focus, setFocus] = useState(false);

  function onFocus({ type }: FocusEvent) {
    setFocus(type === "focus");
  }

  return (
    <label htmlFor="search">
      <div className="relative bg-gray-300 h-10">
        <input
          onFocus={onFocus}
          onBlur={onFocus}
          className="bg-transparent w-full h-full px-4 py-2"
          type="search"
          id="search"
        />

        <div className="absolute top-0 left-0 w-full h-full">
          <div
            className={clsx(
              "h-full text-gray-500 transition-opacity ease-out-circ",
              focus && "opacity-0"
            )}
          >
            <span className="absolute top-1/2 text-xl transform -translate-y-1/2 p-3">
              <BsSearch />
            </span>

            <div className="h-full flex items-center ml-12">
              <span>姓名, 電話</span>
            </div>
          </div>
        </div>
      </div>
    </label>
  );
}

export default function Friends() {
  return (
    <>
      <Header title="好友轉帳" subTitle="點選好友快速轉帳" align="start" />

      <main className="px-4">
        <SearchField />

        <Section>
          <div
            className="grid grid-cols-3 gap-x-2 gap-y-8 p-4 overflow-y-auto"
            ref={fillRemainHeight}
          >
            {friends.map(({ img, name }, index) => (
              <Avatar key={index} img={img} name={name} showName />
            ))}
          </div>
        </Section>
      </main>
    </>
  );
}
