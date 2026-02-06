import type { FC } from "react";
import "./mobile-home.css";
import { CanvasContainer } from "../../canvas-container/canvas-container";
import { PersonInfo } from "../../person-info/person-info";

export const MobileHome: FC = () => {
  return (
    <section id="home">
      <CanvasContainer />
      <PersonInfo />
    </section>
  );
};
