import { type FC } from "react";
import "./Home.css";

import { Footer } from "../footer";
import { PersonInfo } from "../person-info";
import { CanvasContainer } from "../canvas-container";

export const Home: FC = () => {
  return (
    <section className="page home">
      <PersonInfo />
      <CanvasContainer />
      <Footer />
    </section>
  );
};
