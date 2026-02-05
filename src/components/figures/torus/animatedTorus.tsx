import { Torus } from "@react-three/drei";
import { useEffect, useRef, type FC } from "react";
import gsap from "gsap";
export const AnimatedTorus: FC = () => {
  const torusRef = useRef(null);

  useEffect(() => {
    const animation = gsap.to(torusRef.current.position, {
      y: -1,
      duration: 1,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      repeatDelay: 0.2,
    });

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <Torus ref={torusRef} args={[0.3, 0.12, 8, 100]} position={[-1, -0.5, 2]}>
      <meshStandardMaterial color="#ff66cc" metalness={0.8} roughness={0.2} />
    </Torus>
  );
};
