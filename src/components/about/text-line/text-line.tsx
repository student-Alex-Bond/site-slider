import { useEffect, useRef, type FC } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import "./text-line.css";

export const TextLine: FC = () => {
  const textLinesRef = useRef(null);

  useEffect(() => {
    const textLines = gsap.utils.toArray(".text-line");
    gsap.registerPlugin(ScrollTrigger);
    textLines.forEach((line) => {
      gsap.to(line, {
        opacity: 1,
        y: 0,
        x: () => (line.classList.contains("left") ? -150 : 150),
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: line,
          start: "top 100%",
          end: "bottom 0%",
          scrub: 0.5,
          markers: false,
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <section className="text-container" ref={textLinesRef}>
      <div className="text-line left">
        <span className="text-line__word"> • React • </span>
        <span className="text-line__word"> React • </span>
        <span className="text-line__word blue"> React</span>
        <span className="text-line__word"> • React • </span>
        <span className="text-line__word"> React • </span>
      </div>
      <div className="text-line right">
        <span className="text-line__word"> • Typescript • </span>
        <span className="text-line__word white"> Typescript</span>
        <span className="text-line__word "> • Typescript • </span>
      </div>
      <div className="text-line left">
        <span className="text-line__word"> • GSAP • </span>
        <span className="text-line__word">GSAP • </span>
        <span className="text-line__word orange">GSAP</span>
        <span className="text-line__word"> • GSAP • </span>
        <span className="text-line__word">GSAP • </span>
        <span className="text-line__word">GSAP • </span>
      </div>
      <div className="text-line right">
        <span className="text-line__word"> • VITE • </span>
        <span className="text-line__word">VITE • </span>
        <span className="text-line__word green">VITE • </span>
        <span className="text-line__word">VITE • </span>
        <span className="text-line__word">VITE • </span>
        <span className="text-line__word">VITE • </span>
      </div>
    </section>
  );
};
