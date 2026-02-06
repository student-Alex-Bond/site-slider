import { useEffect, useState, type FC } from "react";
import "./burger-menu.css";

export const BurgerMenu: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsOpen(false);
    setActiveSection(id);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contacts"];
      let currentSection = "";

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            currentSection = sectionId;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="burger-menu">
      <button onClick={() => scrollToSection("home")} className="fio-mobile">
        Александр Бондаренко
      </button>
      <button
        className={`hamburger-button ${isOpen ? "active" : ""}`}
        aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
        aria-expanded={isOpen}
        onClick={toggleMenu}
      >
        <span className="hamburger-line top"></span>
        <span className="hamburger-line middle"></span>
        <span className="hamburger-line bottom"></span>
      </button>

      <div
        className={`menu-overlay ${isOpen ? "active" : ""}`}
        onClick={isOpen ? toggleMenu : undefined}
      >
        <ul className="menu-items">
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className={`menu-item ${activeSection === "about" ? "active-tab" : ""}`}
            >
              <a href="#">Обо мне</a>
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("projects")}
              className={`menu-item ${activeSection === "projects" ? "active-tab" : ""}`}
            >
              <a href="#">Проекты</a>
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contacts")}
              className={`menu-item ${activeSection === "contacts" ? "active-tab" : ""}`}
            >
              <a href="#">Контакты</a>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
