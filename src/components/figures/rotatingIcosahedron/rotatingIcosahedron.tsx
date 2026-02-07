import { useEffect, useRef, type FC } from "react";
import gsap from "gsap";
import * as THREE from "three";

export const RotatingIcosahedron: FC = () => {
  const meshRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    if (!meshRef.current) return;
    const animation = gsap.to(meshRef.current.rotation, {
      x: Math.PI * 4,
      y: Math.PI * 6,
      z: Math.PI * 2,
      duration: 35,
      ease: "linear",
      repeat: -1,
      paused: false,
    });

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <icosahedronGeometry args={[1.8, 0]} />
      <meshStandardMaterial
        color="#87CEFA"
        metalness={0.3}
        roughness={0.4}
        emissive="#6495ED"
        emissiveIntensity={0.15}
      />
    </mesh>
  );
};
