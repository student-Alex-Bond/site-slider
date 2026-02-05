import { useContext, useEffect, useRef, type FC, type MouseEvent } from "react";
import { SlideNumberContext } from "../../../context/slide-number-context";
import { PiArrowSquareUpRight } from "react-icons/pi";
import './desktop-menu.css'

export const DesktopMenu: FC = () => {
  const { slide, gotoSlide } = useContext(SlideNumberContext);
  const ulref = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (ulref.current) {
      ulref.current
        .querySelectorAll("li")
        .forEach((item: HTMLLIElement) =>
          item.classList.remove("nav-item__active"),
        );
    }
    document
      .querySelector(`li[data-id="${slide}"]`)
      ?.classList.add("nav-item__active");
  }, [slide]);

  const handleGoTo = (event: MouseEvent) => {
    const pageID = event.currentTarget.getAttribute("data-id");
    if (!pageID) return;
    gotoSlide(+pageID);
  };
  return (
    <nav className="menu">
      <ul ref={ulref} className="nav-list">
        <li onClick={handleGoTo} className="fio" data-id="0">
          Александр Бондаренко
        </li>
        <li
          onClick={handleGoTo}
          className="nav-item about__me nav-item__active"
          data-id="1"
        >
          Обо мне
        </li>
        <span className="divider">/</span>
        <li onClick={handleGoTo} className="nav-item project" data-id="2">
          Проекты
        </li>
        <span className="divider">/</span>
        <li onClick={handleGoTo} className="nav-item contact" data-id="3">
          <button className="menu-button">
            контакты <PiArrowSquareUpRight className="arrowDegree45" />
          </button>
        </li>
      </ul>
    </nav>
  );
};
