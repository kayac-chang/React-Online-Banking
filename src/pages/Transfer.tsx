import { BsPlusCircle, BsCheckCircle, BsBootstrap } from "react-icons/bs";
import { fillRemainHeight } from "utils";
import { slice, pipe, map } from "ramda";
import { Avator, Transaction } from "types";

import Avatar from "components/base/atoms/Avatar";
import { NavBtn } from "components/base/atoms/Button";
import Header from "components/base/organisms/Header";
import ArticleHeader from "components/transfer/ArticleHeader";
import Record from "components/transfer/Record";

import friends from "mocks/friends";
import history from "mocks/transactions";

const toAvatar = ({ img, name }: Avator) => (
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
