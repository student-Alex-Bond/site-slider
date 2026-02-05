import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const PulseCircles = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pointRef = useRef<HTMLDivElement>(null);
  const circlesRef = useRef<HTMLDivElement[]>([]);

  // Количество кругов
  const circleCount = 7;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    // Создаём круги и добавляем в DOM
    for (let i = 0; i < circleCount; i++) {
      const circle = document.createElement("div");
      circle.className = "pulse-circle";
      circle.style.position = "absolute";
      circle.style.width = "2rem";
      circle.style.height = "2rem";
      circle.style.borderRadius = "50%";
      circle.style.backgroundColor = "rgba(0, 123, 255, 0.3)";
      circle.style.transform = "scale(0)";
      circle.style.left = "calc(50% - 1rem)";
      circle.style.top = "calc(50% - 1rem)";
      container.appendChild(circle);
      circlesRef.current.push(circle);
    }

    // Анимация кругов
    const animateCircles = () => {
      circlesRef.current.forEach((circle, index) => {
        gsap.to(circle, {
          scale: 20,
          opacity: 0,
          duration: 3,
          delay: index * 0.5, // Задержка между кругами
          ease: "power1.out",
          repeat: -1, // Бесконечно
          repeatDelay: 2, // Пауза перед повторением
        });
      });
    };

    animateCircles();

    return () => {
      // Очистка: удаляем круги при уничтожении компонента
      circlesRef.current.forEach((circle) => {
        if (circle.parentNode) {
          circle.parentNode.removeChild(circle);
        }
      });
      circlesRef.current = [];
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "50rem",
        height: "50rem",
        backgroundColor: "transparent",
        overflow: "hidden",
        justifySelf: "center",
      }}
    >
      {/* Центральная точка */}
      <div
        ref={pointRef}
        style={{
          position: "absolute",
          width: "2rem",
          height: "2rem",
          backgroundColor: "#007BFF",
          borderRadius: "50%",
          left: "calc(50% - 1rem)",
          top: "calc(50% - 1rem)",
        }}
      />
    </div>
  );
};

export default PulseCircles;
