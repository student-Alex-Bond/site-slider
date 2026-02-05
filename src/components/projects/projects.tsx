import type { FC } from "react";
import "./projects.css";
import { H2 } from "../shared/h2/h2";
import { HoverImageFollow } from "./hover-image-follow/hover-image-follow";
import { Footer } from "../footer/footer";

export const Projects: FC = () => {
  return (
    <section className="page projects">
      <H2>Мои проекты</H2>
      <HoverImageFollow />
      <Footer />
    </section>
  );
};
