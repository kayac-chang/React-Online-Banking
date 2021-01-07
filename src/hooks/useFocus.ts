import { useState } from "react";

export default function useFocus() {
  const [focus, setFocus] = useState(false);

  function onFocus() {
    setFocus(true);
  }

  function onBlur() {
    setFocus(false);
  }

  return { focus, onFocus, onBlur };
}
