import clsx from "clsx";
import { BsSearch } from "react-icons/bs";
import InputField from "components/base/molecules/InputField";

export default function SearchField() {
  return (
    <InputField>
      {(focus) => (
        <div className="absolute top-0 left-0 w-full h-full">
          <div
            className={clsx(
              "h-full text-gray-500 transition-opacity ease-out-circ",
              focus && "opacity-0"
            )}
          >
            <span className="absolute top-1/2 text-xl transform -translate-y-1/2 p-3">
              <BsSearch />
            </span>

            <div className="h-full flex items-center ml-12">
              <span>姓名, 電話</span>
            </div>
          </div>
        </div>
      )}
    </InputField>
  );
}
