import { fillRemainHeight } from "utils";
import { Avator } from "types";
import { map } from "ramda";

import Avatar from "components/base/atoms/Avatar";
import Header from "components/base/organisms/Header";
import SearchField from "components/friends/SearchField";

import friends from "mocks/friends";

const toAvatar = ({ img, name }: Avator) => (
  <Avatar key={name} img={img} name={name} showName />
);

export default function Friends() {
  return (
    <>
      <Header title="好友轉帳" subTitle="點選好友快速轉帳" align="start" />

      <div className="mx-4">
        <SearchField label="姓名, 電話" />
      </div>

      <article className="py-4 overflow-y-auto" ref={fillRemainHeight}>
        <div className="grid grid-cols-3 gap-x-6 gap-y-8 mx-8">
          {map(toAvatar)(friends)}
        </div>
      </article>
    </>
  );
}
