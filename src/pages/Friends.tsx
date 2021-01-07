import Avatar from "components/base/atoms/Avatar";
import SearchField from "components/base/molecules/SearchField";
import Header from "components/base/organisms/Header";
import Section from "components/base/organisms/Section";

import Avatar_01 from "assets/avatar/01.png";
import Avatar_02 from "assets/avatar/02.png";
import Avatar_03 from "assets/avatar/03.png";
import Avatar_04 from "assets/avatar/04.png";
import Avatar_05 from "assets/avatar/05.png";
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
