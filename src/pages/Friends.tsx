import type { Avatar as IAvatar } from "types";
import { fillRemainHeight } from "utils";
import { map } from "ramda";

import { Avatar } from "components/atoms";
import { InputFieldWithPlaceholder } from "components/molecules";
import { Header } from "components/organisms";

import { BsSearch } from "react-icons/bs";

import friends from "mocks/friends";

const toAvatar = ({ id, img, name }: IAvatar) => (
  <Avatar key={id} img={img} name={name} showName />
);

export default function Friends() {
  return (
    <>
      <Header title="好友轉帳" subTitle="點選好友快速轉帳" align="start" />

      <div className="mx-4">
        <InputFieldWithPlaceholder
          type="search"
          placeholder={
            <>
              <BsSearch />

              <span className="ml-2">姓名, 電話</span>
            </>
          }
        />
      </div>

      <article className="py-4 overflow-y-auto" ref={fillRemainHeight}>
        <div className="grid grid-cols-3 gap-x-6 gap-y-8 mx-8">
          {map(toAvatar)(friends)}
        </div>
      </article>
    </>
  );
}
