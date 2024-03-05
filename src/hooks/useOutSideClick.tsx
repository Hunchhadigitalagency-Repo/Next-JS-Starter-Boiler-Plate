import { useState, useEffect, useCallback, useRef, RefObject } from "react";


const useOutsideClick = (): [
  RefObject<HTMLDivElement>,
  boolean,
  () => void
] => {
  const ref = useRef<HTMLDivElement>(null);
  const [toggle, setToggle] = useState(false);

  const onOutsideClick = useCallback((e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setToggle(false);
    }
  }, []);

  useEffect(() => {
    if (toggle) {
      window.addEventListener("click", onOutsideClick);
    } else {
      window.removeEventListener("click", onOutsideClick);
    }

    return () => {
      window.removeEventListener("click", onOutsideClick);
    };
  }, [toggle, onOutsideClick]);

  const handleToggle = () => setToggle((prev) => !prev);

  return [ref, toggle, handleToggle];
};

export default useOutsideClick;
