import type { FC } from "react";
import { SiteTitle } from "../shared/site-title";
import { Navigation } from "../navigation";
import { Slider } from "../slider";

export const DesktopApp: FC = () => {
  return (
    <>
      <SiteTitle />
      <Navigation />
      <Slider />
    </>
  );
};
