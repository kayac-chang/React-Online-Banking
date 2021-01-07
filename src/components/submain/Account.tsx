import { Info } from "components/base/atoms/Button";

export default function Account() {
  return (
    <article className="text-gray-500 space-y-2 mx-4">
      <h2 className="text-4xl">{"$320,000,000"}</h2>

      <section className="">
        <h3>
          <span>{"皇太后的金庫"}</span>
          <span>
            <Info />
          </span>
        </h3>

        <div className="text-sm">
          <span>{"母帳戶"}</span>
          <span>{"909019-09102"}</span>
        </div>
      </section>
    </article>
  );
}
