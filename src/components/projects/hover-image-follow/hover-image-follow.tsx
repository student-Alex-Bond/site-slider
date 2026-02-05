import { useState, useRef, useEffect, type MouseEventHandler } from "react";
import "./hover-image-follow.css";
import myImage from "../../../assets/images/lib-film.jpg";
import { PiArrowSquareUpRight } from "react-icons/pi";
export const HoverImageFollow = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [targetPos, setTargetPos] = useState({ x: 0, y: 0 });
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (!isHovered || !imgRef.current) return;
    let animationId: number;

    function animate() {
      const img = imgRef.current;

      if (img) {
        const rect = img.getBoundingClientRect();
        console.log(rect.left, rect.right);

        const currentX = rect.left + rect.width / 2;
        const currentY = rect.top + rect.height / 2;

        const diffX = targetPos.x - currentX;
        const diffY = targetPos.y - currentY;

        if (Math.abs(diffX) > 0.1 || Math.abs(diffY) > 0.1) {
          img.style.left = `${img.offsetLeft + diffX * 0.6}px`;
          img.style.top = `${img.offsetTop + diffY * 0.6}px`;
          animationId = requestAnimationFrame(animate);
        }
      }

      animationId = requestAnimationFrame(animate);

      return () => {
        if (animationId) cancelAnimationFrame(animationId);
      };
    }
  }, [isHovered, targetPos]);

  const handleMouseEnter: MouseEventHandler<HTMLDivElement> = (e) => {
    setIsHovered(true);
    setTargetPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    setTargetPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div
        className="hover-area"
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <span className="hover-area_span">
          Приложение для поиска фильма на вечер
        </span>
        <a
          className="hover-area_link"
          href="https://student-alex-bond.github.io/lib-film/"
          target="_blank"
        >
          Посмотреть проект
          <PiArrowSquareUpRight className="hover-area_link-arrow" />
        </a>
      </div>
      <img
        className="follow-image"
        ref={imgRef}
        src={myImage}
        alt="following"
        style={{
          opacity: isHovered ? 1 : 0,
          left: targetPos.x - 110,
          top: targetPos.y - 320,
        }}
      />
    </>
  );
};
