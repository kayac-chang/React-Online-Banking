import type { Avatar as IAvatar, Transaction } from "types";
import { BsPlusCircle, BsCheckCircle, BsBootstrap } from "react-icons/bs";
import { fillRemainHeight } from "utils";
import { Link } from "react-router-dom";
import { slice, pipe, map } from "ramda";

import { Avatar, NavBtn, Plus } from "components/atoms";
import { AvatarGroup } from "components/molecules";
import { Header } from "components/organisms";

import friends from "mocks/friends";
import history from "mocks/transactions";

type RecordProps = {
  className?: string;
  img: string;
  name: string;
  date: string;
};
function Record({ img, name, date, className }: RecordProps) {
  return (
    <AvatarGroup name={name} img={img} className={className}>
      <div className="flex-1 flex flex-col justify-center">
        <h3>{name}</h3>

        <span className="text-xs">{date}</span>
      </div>

      <div className="flex justify-center items-center">
        <Plus className="p-2 text-2xl" />
      </div>
    </AvatarGroup>
  );
}

type HeaderProps = {
  title?: string;
  more?: boolean;
};
function ArticleHeader({ title, more }: HeaderProps) {
  return (
    <header className="flex justify-between items-center bg-gray-500 text-white h-8 px-4">
      <h2>{title}</h2>

      {more && (
        <Link to="friends">
          <span className="text-xs underline">更多</span>
        </Link>
      )}
    </header>
  );
}

const toAvatar = ({ img, name }: IAvatar) => (
  <Avatar key={name} img={img} name={name} showName className="flex-1" />
);

const toRecord = ({ id, name, img, date }: Transaction) => (
  <Record key={id} name={name} img={img} date={date} />
);

export default function Transfer() {
  return (
    <>
      <Header title="轉入對象" close />

      <nav className="flex divide-x border h-16">
        <NavBtn label="輸入帳戶" icon={<BsPlusCircle />} />
        <NavBtn label="約定帳戶" icon={<BsCheckCircle />} />
        <NavBtn label="轉好遠" icon={<BsBootstrap />} />
      </nav>

      <article>
        <ArticleHeader title="好友" more />

        <div className="flex items-center p-4 space-x-2">
          {pipe(slice(0, 5), map(toAvatar))(friends)}
        </div>
      </article>

      <article className="flex-1">
        <ArticleHeader title="最近紀錄" />

        <div className="divide-y overflow-y-auto" ref={fillRemainHeight}>
          {map(toRecord)(history)}
        </div>
      </article>
    </>
  );
}
