import { useContext, useRef, type FC } from "react";
import { SlideNumberContext } from "../../context/slide-number-context";
import { Home } from "../home/home";
import { About } from "../about/about";
import { Projects } from "../projects/projects";
import { Contacts } from "../contacts/contacts";
import { gsap } from "gsap";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
import "./slider.css";

export const Slider: FC = () => {
  const { slide, changeSlide } = useContext(SlideNumberContext);
  const currentElRef = useRef(null);
  const nextSlide = 1;
  const prevSlide = -1;
  const pages = [
    { page: <Home /> },
    { page: <About /> },
    { page: <Projects /> },
    { page: <Contacts /> },
  ];

  const scrollBack = () => {
    const currentEl = currentElRef.current;
    gsap
      .timeline()
      .to(currentEl, {
        scale: 0.9,
        opacity: 0.4,
        duration: 0.6,
        ease: "power2.out",
        clearProps: "opacity,scale",
      })
      .to(currentEl, {
        x: "100%",
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => {
          changeSlide(prevSlide);
        },
      })
      .to(currentEl, {
        x: "0%",
        duration: 0.6,
        ease: "power2.out",
      });
  };

  const scrollForward = () => {
    const currentEl = currentElRef.current;
    gsap
      .timeline()
      .to(currentEl, {
        scale: 0.8,
        opacity: 0.4,
        duration: 0.6,
        ease: "power2.out",
        clearProps: "opacity,scale",
      })
      .to(currentEl, {
        x: "-100%",
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => {
          changeSlide(nextSlide);
        },
      })
      .to(currentEl, {
        x: "0%",
        duration: 0.6,
        ease: "power2.out",
      });
  };
  return (
    <>
      <section className="all-pages">
        <div ref={currentElRef}>{pages[slide].page}</div>
      </section>
      <section className="controls">
        <button onClick={scrollBack} className="btn_controls next">
          <BsArrowLeftSquareFill size={70} />
        </button>
        <button onClick={scrollForward} className="btn_controls back">
          <BsArrowRightSquareFill size={70} />
        </button>
      </section>
    </>
  );
};
