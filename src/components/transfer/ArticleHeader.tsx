import { Link } from "react-router-dom";

type HeaderProps = {
  title?: string;
  more?: boolean;
};
export default function ArticleHeader({ title, more }: HeaderProps) {
  return (
    <header className="flex justify-between items-center bg-gray-500 text-white h-8 px-4">
      <h2>{title}</h2>

      {more && (
        <Link to="friends">
          <span className="text-xs underline">更多</span>
        </Link>
      )}
    </header>
  );
}
