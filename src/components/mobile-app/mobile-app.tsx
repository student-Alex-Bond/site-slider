import type { FC } from "react";
import { SiteTitle } from "../shared/site-title";
import { Navigation } from "../navigation";
import { MobileHome } from "../home/mobile-home";
import { MobileAbout } from "../about/mobile-about";
import { MobileProjects } from "../projects/mobile-projects";
import { MobileContacts } from "../contacts/mobile-contacts";

export const MobileApp: FC = () => {
  return (
    <>
      <SiteTitle />
      <Navigation />
      <MobileHome />
      <MobileAbout />
      <MobileProjects />
      <MobileContacts />
    </>
  );
};
