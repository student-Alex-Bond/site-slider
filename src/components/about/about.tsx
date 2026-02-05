import { type FC } from "react";
import "./About.css";

import { Footer } from "../footer/footer";
import { TextLine } from "./text-line/text-line";
import { H2 } from "../shared/h2/h2";
import { UnorderedList } from "./unordered-list/unordered-list";
import { H3 } from "../shared/h3/h3";
import { Paragraph } from "../shared/paragraph/paragraph";
import { ResumeButton } from "../shared/resume-button/resume-button";

const skillsList = [
  "HTML/CSS — верстаю блоки, разбираюсь в селекторах и позиционировании;",
  "JavaScript — пишу простые приложения на React, подкрепленные Typescript;",
  "Git — коммитю код и сливаю ветки без паники.",
];

export const About: FC = () => {
  return (
    <section className="page about">
      <section className="about__description">
        <section className="about__container">
          <H2>Обо мне</H2>
          <Paragraph>
            Привет! Я Александр :) Пока я новичок во фронтенде, но уже влюблён в
            процесс превращения статичных макетов в живые сайты.
          </Paragraph>
          <H3>Что в моём арсенале:</H3>
          <UnorderedList dataList={skillsList} />
          <Paragraph>
            Хочу расти в среде, где можно учиться y сильных разработчиков и
            участвовать в интересных проектах. Всегда рад обсудить лучшие
            практики и новые технологии!
          </Paragraph>
          <ResumeButton/>
          <H2>Что использую</H2>
        </section>
        <img src="" alt="photo" />
      </section>
      <TextLine />
      <Footer />
    </section>
  );
};
