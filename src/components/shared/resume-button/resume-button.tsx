import type { FC } from "react";
import "./resume-button.css";
import { PiArrowSquareUpRight } from "react-icons/pi";

export const ResumeButton: FC = () => {
  return (
    <button className="resume-button">
      <a
        className="resume-button_link"
        target="_blank"
        href="https://omsk.hh.ru/resume/ec62e9c1ff0cfe65630039ed1f696a5159336a"
      >
        резюме
      </a>
      <PiArrowSquareUpRight size={18} />
    </button>
  );
};