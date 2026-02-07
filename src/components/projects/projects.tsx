import type { FC } from "react";
import "./projects.css";
import { H2 } from "../shared/h2/h2";
import { HoverImageFollow } from "./hover-image-follow/hover-image-follow";
import { Footer } from "../footer/footer";
import { useMediaQuery } from "react-responsive";

export const Projects: FC = () => {
  const isMobile = useMediaQuery({ maxWidth: "475px" });
  return (
    <section className="page projects">
      {isMobile ? <H2>Проекты</H2> : <H2>Мои проекты</H2>}
      <HoverImageFollow />
      {!isMobile && <Footer />}
    </section>
  );
};
