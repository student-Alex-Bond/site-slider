import { createContext } from 'react';

interface SliderContextType {
  slide: number;
  changeSlide: (newSlide: number) => void;
  gotoSlide: (slideNumber: number) => void;
}

export const SlideNumberContext = createContext<SliderContextType>({
  slide: 0,
  changeSlide: () => {},
  gotoSlide: () => {}
});

