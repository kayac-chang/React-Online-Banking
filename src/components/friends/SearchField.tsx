import clsx from "clsx";
import { BsSearch } from "react-icons/bs";
import InputField from "components/base/molecules/InputField";

type SearchFieldProps = {
  label: string;
};
export default function SearchField({ label }: SearchFieldProps) {
  return (
    <InputField type="search">
      {(focus) => (
        <div
          className={clsx(
            "h-full text-gray-500 transition-opacity ease-out-circ flex items-center mx-4 space-x-2",
            focus && "opacity-0"
          )}
        >
          <BsSearch />

          <span>{label}</span>
        </div>
      )}
    </InputField>
  );
}
