import type { FC } from "react";
import "./mobile-projects.css";
import { H2 } from "../../shared/h2/h2";
import { PiArrowSquareUpRight } from "react-icons/pi";
import "../hover-image-follow/hover-image-follow.css";
export const MobileProjects: FC = () => {
  return (
    <section id="projects">
      <H2>Проекты</H2>
      <div className="hover-area">
        <span className="hover-area_span">
          Приложение для поиска фильма на вечер
        </span>
        <a
          className="hover-area_link"
          href="https://student-alex-bond.github.io/lib-film/#"
          target="_blank"
        >
          Посмотреть проект
          <PiArrowSquareUpRight className="hover-area_link-arrow" />
        </a>
      </div>
    </section>
  );
};
