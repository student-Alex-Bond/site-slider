import { useState, type FC } from "react";
import "./burger-menu.css";

export const BurgerMenu: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="burger-menu">
      {/* Кнопка-бургер */}
      <span className="fio">Александр Бондаренко</span>
      <button
        className="hamburger-button"
        aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
        aria-expanded={isOpen}
        onClick={toggleMenu}
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* Оверлей с меню */}
      <div
        className={`menu-overlay ${isOpen ? "active" : ""}`}
        onClick={isOpen ? toggleMenu : undefined}
      >
        <ul className="menu-items">
          <li className="menu-item">
            <a href="#">Обо мне</a>
          </li>
          <li className="menu-item">
            <a href="#">Проекты</a>
          </li>
          <li className="menu-item">
            <a href="#">Контакты</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
