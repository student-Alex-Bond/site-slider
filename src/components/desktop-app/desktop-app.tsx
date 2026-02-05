import type { FC } from "react";
import { SiteTitle } from "../shared/site-title/site-title";
import { Navigation } from "../navigation/navigation";
import { Slider } from "../slider/slider";

export const DesktopApp: FC = () => {
  return (
    <>
      <SiteTitle />
      <Navigation />
      <Slider />
    </>
  );
};
