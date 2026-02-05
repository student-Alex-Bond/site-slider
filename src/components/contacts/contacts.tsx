import { useEffect, useRef, type FC } from "react";
import "./contacts.css";
import { H2 } from "../shared/h2/h2";
import { Footer } from "../footer/footer";
import { FaArrowRight } from "react-icons/fa";
import PulseCircles from "../shared/pulse-circle/pulse-circle";
import { gsap } from "gsap";

export const Contacts: FC = () => {
  const portfolioRef = useRef<SVGSVGElement | null>(null);
  const contactsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Начальная настройка
    gsap.set(contactsRef.current, { opacity: 0, scale: 0.8, y: 20 });
    gsap.set(portfolioRef.current, { scale: 1, opacity: 1 });

    // Анимация
    const timeline = gsap.timeline();

    timeline
      // 1. SVG‑портфель уменьшается и исчезает
      .to(portfolioRef.current, {
        duration: 0.7,
        scale: 0.6,
        opacity: 0,
        ease: "power2.out",
        delay: "1.2",
      })
      // 2. Форма появляется из точки исчезновения портфеля
      .to(
        contactsRef.current,
        {
          duration: 0.9,
          opacity: 1,
          scale: 1,
          y: 0,
          ease: "back.out(1.5)",
        },
        "-=0.4",
      ); // Перекрытие на 0.4 сек

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <section className="page contacts">
      <H2>Контакты</H2>
      <svg
        className="portfolio-svg"
        ref={portfolioRef}
        width="250"
        height="120"
        viewBox="0 0 120 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Корпус портфеля */}
        <path
          d="M10 0H110C115.523 0 120 4.477 120 10V70C120 75.523 115.523 80 110 80H10C4.477 80 0 75.523 0 70V10C0 4.477 4.477 0 10 0Z"
          fill="#2c3e50"
        />
        {/* Верхняя планка */}
        <rect x="0" y="0" width="120" height="12" fill="#1a252f" />
        {/* Ручка */}
        <path
          d="M60 12C60 8.686 62.686 6 66 6H90C93.314 6 96 8.686 96 12V20C96 23.314 93.314 26 90 26H66C62.686 26 60 23.314 60 20V12Z"
          stroke="#1a252f"
          strokeWidth="2"
          fill="#34495e"
        />
      </svg>
      <div ref={contactsRef} className="contacts_links">
        <button className="contacts_btn">
          <a
            className="contacts_link"
            target="_blank"
            href="https://t.me/Bond_Alexandr"
          >
            Связаться со мной в Telegram
          </a>
          <FaArrowRight size={30} color="rgb(30, 41, 59)" />
        </button>
        <button className="contacts_btn">
          <a
            className="contacts_link"
            href="mailto:bondarenko.alex.work@gmail.com?body=привет"
          >
            Написать мне на почту
          </a>
          <FaArrowRight size={30} color="rgb(30, 41, 59)" />
        </button>
      </div>
      <PulseCircles />
      <Footer />
    </section>
  );
};
