import { useRef } from "react";

export const useScrollTo = <T extends HTMLElement>(offset: number = 0) => {
  const ref = useRef<T>(null);

  const scroll = () => {
    if (ref.current) {
      const elementTop = ref.current.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementTop - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return { ref, scroll };
};
