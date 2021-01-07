import { FocusEvent, useState } from "react";
import clsx from "clsx";

import { BsSearch } from "react-icons/bs";

export default function SearchField() {
    const [focus, setFocus] = useState(false);
  
    function onFocus({ type }: FocusEvent) {
      setFocus(type === "focus");
    }
  
    return (
      <label htmlFor="search">
        <div className="relative bg-gray-300 h-10">
          <input
            onFocus={onFocus}
            onBlur={onFocus}
            className="bg-transparent w-full h-full px-4 py-2"
            type="search"
            id="search"
          />
  
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
        </div>
      </label>
    );
  }