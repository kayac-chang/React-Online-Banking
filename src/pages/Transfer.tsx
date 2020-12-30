import { PropsWithChildren, ReactNode } from "react";
import clsx from "clsx";
import dayjs from "dayjs";
import {
  BsPlusCircle,
  BsCheckCircle,
  BsBootstrap,
  BsPlus,
} from "react-icons/bs";

import Header from "components/organisms/Header";

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

type NavButtonProps = {
  label: string;
  icon: ReactNode;
};
function NavButton({ label, icon }: NavButtonProps) {
  return (
    <div className="inline-flex justify-around items-center w-full px-2 space-x-2">
      <span className="text-3xl">{icon}</span>

      <span>{label}</span>
    </div>
  );
}

function Nav({ children }: PropsWithChildren<{}>) {
  return <nav className="flex divide-x border h-16">{children}</nav>;
}

type SectionProps = {
  title?: string;
  more?: boolean;
};
function Section({
  title = "",
  more = false,
  children,
}: PropsWithChildren<SectionProps>) {
  return (
    <section>
      <header className="flex justify-between items-center bg-gray-500 text-white h-8 px-4">
        <h2>{title}</h2>

        {more && <span className="text-xs underline">更多</span>}
      </header>

      {children}
    </section>
  );
}

type AvatarProps = {
  className?: string;
  img: string;
  name: string;
  showName?: boolean;
};
function Avatar({ img, name, className, showName }: AvatarProps) {
  return (
    <figure className={clsx("inline-flex flex-col items-center", className)}>
      <img className="rounded-full" src={img} alt={`${name}'s avatar`} />

      {showName && <figcaption className="text-xs">{name}</figcaption>}
    </figure>
  );
}

type RecordProps = {
  img: string;
  id: string;
  name: string;
  date: string;
};
function Record({ img, name, id, date }: RecordProps) {
  return (
    <article className="flex h-16 px-2">
      <div className="w-2/12 flex items-center p-2">
        <Avatar name={name} img={img} />
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <h3>
          {name} {`(帳號: ${id})`}
        </h3>

        <span className="text-xs">{date}</span>
      </div>

      <div className="flex justify-center items-center">
        <button className="p-2 text-2xl">
          <BsPlus />
        </button>
      </div>
    </article>
  );
}

export default function Transfer() {
  return (
    <>
      <Header title="轉入對象" />

      <Nav>
        <NavButton label="輸入帳戶" icon={<BsPlusCircle />} />
        <NavButton label="約定帳戶" icon={<BsCheckCircle />} />
        <NavButton label="轉好遠" icon={<BsBootstrap />} />
      </Nav>

      <Section title="好友" more>
        <div className="flex items-center p-4 space-x-2">
          <Avatar
            className="flex-1"
            img={Avatar_01}
            name="Jermey123"
            showName
          />
          <Avatar
            className="flex-1"
            img={Avatar_02}
            name="Cindy 888"
            showName
          />
          <Avatar className="flex-1" img={Avatar_03} name="Elli.H" showName />
          <Avatar className="flex-1" img={Avatar_04} name="Bruce J" showName />
          <Avatar className="flex-1" img={Avatar_05} name="KM" showName />
        </div>
      </Section>

      <Section title="最近紀錄">
        <div className="flex flex-col divide-y">
          <Record
            id="38000009393"
            name="Robert Fox"
            img={Avatar_06}
            date={dayjs().format("YYYY/MM/DD")}
          />
          <Record
            id="38000009393"
            name="Robert Fox"
            img={Avatar_07}
            date={dayjs().format("YYYY/MM/DD")}
          />
          <Record
            id="38000009393"
            name="Robert Fox"
            img={Avatar_08}
            date={dayjs().format("YYYY/MM/DD")}
          />
          <Record
            id="38000009393"
            name="Robert Fox"
            img={Avatar_09}
            date={dayjs().format("YYYY/MM/DD")}
          />
          <Record
            id="38000009393"
            name="Robert Fox"
            img={Avatar_10}
            date={dayjs().format("YYYY/MM/DD")}
          />
          <Record
            id="38000009393"
            name="Robert Fox"
            img={Avatar_11}
            date={dayjs().format("YYYY/MM/DD")}
          />
        </div>
      </Section>
    </>
  );
}
