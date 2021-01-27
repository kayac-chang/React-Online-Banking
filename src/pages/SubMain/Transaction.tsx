// import { useParams } from "react-router-dom";

import Header from "components/base/organisms/Header";
import Overview from "components/submain/transaction/Overview";

import IMG from "assets/avatar/01.png";

function Detail() {
  return <article></article>;
}

export default function Transaction() {
  // const { transactionID } = useParams<{ transactionID: string }>();

  return (
    <>
      <Header back />

      <main>
        <Overview
          amount="-$1,200"
          balance="$123,456,789"
          img={IMG}
          name="Robert Fox"
        />

        <Detail />
      </main>
    </>
  );
}
