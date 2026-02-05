import { useGSAP } from "@gsap/react";
import { useRef, type FC } from "react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import './person-info.css'

export const PersonInfo: FC = () => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(SplitText);
  const container = useRef(null);

  
  useGSAP(
    () => {
      document.fonts.ready.then(() => {
      const splitName = SplitText.create(".name", { type: "chars" });
      const splitFamily = SplitText.create(".family", { type: "chars" });

      gsap
        .timeline({ paused: false })
        .from(splitName.chars, {
          opacity: 0,
          y: 200,
          ease: "back",
          duration: 1,
          stagger: 0.1,
          delay: "-=0.5",
        })
        .to(splitName.chars, {
          opacity: 1,
          y: 0,
          ease: "back",
          duration: 1,
          stagger: 0.1,
          delay: "-=0.5",
          position: "-=0.5",
        })
        .from(
          splitFamily.chars,
          {
            opacity: 0,
            y: 500,
            ease: "back",
            stagger: 0.1,
            delay: "-2",
          },
          "+=0"
        )
        .to(
          splitFamily.chars,
          {
            opacity: 1,
            y: 0,
            ease: "back",
            duration: 1,
            stagger: 0.1,
            delay: "-=0.5",
          },
          "+=0"
        );
    }
  )},
    { scope: container }

  );
  return (
    <div ref={container} className="person_container">
      <span className="name">Александр</span>
      <span className="family">Бондаренко</span>
      <p className="profession">web junior developer</p>
    </div>
  );
};