import { Capsule } from "@react-three/drei";
import { useEffect, useRef, type FC } from "react";
import gsap from 'gsap';
export const MovingCapsule: FC = () => {
  const capsuleRef = useRef(null);

  useEffect(() => {
   
    const animation = gsap.to(capsuleRef.current.position, {
      x: -1, 
      duration: 10, 
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true, 
      repeatDelay: 0.3,
    });

    // Очистка при размонтировании
    return () => {
      animation.kill();
    };
  }, []);

  return (
    <Capsule
      ref={capsuleRef}
      args={[0.4, 1.5, 8]}
      position={[-2, 2, -2]}
    >
      <meshStandardMaterial
        color="#FFD1DC" 
        metalness={0.2}
        roughness={0.3}
        emissive="#FFB6C1" 
        emissiveIntensity={0.1}
      />
    </Capsule>
  );
};