import Avatar from "components/base/atoms/Avatar";
import SearchField from "components/base/molecules/SearchField";
import Header from "components/base/organisms/Header";
import { fillRemainHeight } from "utils";

import friends from "mocks/friends";

export default function Friends() {
  return (
    <>
      <Header title="好友轉帳" subTitle="點選好友快速轉帳" align="start" />

      <main className="px-4">
        <SearchField />

        <article>
          <div
            className="grid grid-cols-3 gap-x-2 gap-y-8 p-4 overflow-y-auto"
            ref={fillRemainHeight}
          >
            {friends.map(({ img, name }, index) => (
              <Avatar key={index} img={img} name={name} showName />
            ))}
          </div>
        </article>
      </main>
    </>
  );
}
