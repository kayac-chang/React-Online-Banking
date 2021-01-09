import { Info } from "components/base/atoms/Button";

type AccountProps = {
  balance: string;
  name: string;
  id: string;
};
export default function Account({ balance, name, id }: AccountProps) {
  return (
    <article className="text-gray-500 space-y-2 mx-4">
      <h2 className="text-4xl">{balance}</h2>

      <section>
        <h3 className="flex items-center space-x-1">
          <span>{name}</span>

          <Info />
        </h3>

        <div className="text-sm">{id}</div>
      </section>
    </article>
  );
}
