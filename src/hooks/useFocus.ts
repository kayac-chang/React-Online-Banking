import { useState } from "react";

export default function useFocus(initial: boolean = false) {
  const [focus, setFocus] = useState(initial);

  function onFocus() {
    setFocus(true);
  }

  function onBlur() {
    setFocus(false);
  }

  return { focus, onFocus, onBlur };
}
