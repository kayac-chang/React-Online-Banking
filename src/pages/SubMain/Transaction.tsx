import Header from "components/base/organisms/Header";
import { useParams } from "react-router-dom";

export default function Transaction() {
  const { transactionID } = useParams<{ transactionID: string }>();

  return (
    <>
      <Header back />

      <main>
        <pre>{transactionID}</pre>
      </main>
    </>
  );
}
