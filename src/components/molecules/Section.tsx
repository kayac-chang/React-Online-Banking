import { PropsWithChildren } from "react";

type Props = {
  title?: string;
  more?: boolean;
  className?: string;
};
export default function Section({
  title = "",
  more = false,
  className,
  children,
}: PropsWithChildren<Props>) {
  return (
    <section className={className}>
      <header className="flex justify-between items-center bg-gray-500 text-white h-8 px-4">
        <h2>{title}</h2>

        {more && <span className="text-xs underline">更多</span>}
      </header>

      {children}
    </section>
  );
}
