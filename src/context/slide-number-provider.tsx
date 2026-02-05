import { useState, useCallback, type FC, type ReactNode } from "react";
import { SlideNumberContext } from "./slide-number-context";

export const SlideNumberProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [slide, setSlide] = useState(0);
  const countPages = 4;
  const changeSlide = useCallback(
    (direction = 1) => {
      let slideNumber = 0;

      if (slide + direction < 0) {
        slideNumber = countPages - 1;
      } else {
        slideNumber = (slide + direction) % countPages;
      }
      setSlide(slideNumber);
    },
    [slide]
  );

  const gotoSlide = useCallback((slideNumber: number) => {
    setSlide(slideNumber % countPages);
  }, []);

  return (
    <SlideNumberContext.Provider value={{ slide, changeSlide, gotoSlide }}>
      {children}
    </SlideNumberContext.Provider>
  );
};
