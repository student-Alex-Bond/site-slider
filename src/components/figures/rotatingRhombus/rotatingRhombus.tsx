import { useEffect, useRef, type FC } from "react";
import gsap from "gsap";
import * as THREE from 'three';
export const RotatingRhombus: FC = () => {
  const meshRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    if(!meshRef.current) return
    const animation = gsap.to(meshRef.current.rotation, {
      x: Math.PI * 2,
      y: Math.PI * 2,
      duration: 15,
      ease: "linear",
      repeat: -1,
      paused: false,
    });

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <mesh ref={meshRef} position={[2, 1, 0]}>
      <boxGeometry args={[0.5, 0.5, 0.5]} rotateX={45} />

      <meshStandardMaterial color="#40e0d0" metalness={0.3} roughness={0.4} />
    </mesh>
  );
};
