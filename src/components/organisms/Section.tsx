import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

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
      {title && (
        <header className="flex justify-between items-center bg-gray-500 text-white h-8 px-4">
          <h2>{title}</h2>

          {more && (
            <Link to="friends">
              <span className="text-xs underline">更多</span>
            </Link>
          )}
        </header>
      )}

      {children}
    </section>
  );
}
