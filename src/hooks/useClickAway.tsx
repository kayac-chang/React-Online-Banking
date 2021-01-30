import { useEffect, useState } from "react";

export default function useClickAway<T extends HTMLElement>(ref: T | null) {
  const [isClickAway, setClickAway] = useState(false);

  function handle(evt: MouseEvent) {
    const isInside = ref?.contains(evt.target as Node);

    setClickAway(!isInside);
  }

  useEffect(() => {
    document.addEventListener("click", handle);

    return () => document.removeEventListener("click", handle);
  });

  return isClickAway;
}
