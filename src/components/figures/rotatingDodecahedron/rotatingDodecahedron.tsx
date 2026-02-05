import { useEffect, useRef, type FC } from "react";
import gsap from "gsap";
export const RotatingDodecahedron: FC = () => {
  const meshRef = useRef(null);

  useEffect(() => {
    const animation = gsap.to(meshRef.current.rotation, {
      x: Math.PI * 2,
      y: Math.PI * 3,
      duration: 25,
      ease: "linear",
      repeat: -1,
      paused: false,
    });

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <mesh ref={meshRef} position={[1, -0.9, 2]}>
      <dodecahedronGeometry args={[0.5, 0]} />
      <meshStandardMaterial
        color="#007FFF"
        metalness={0.2}
        roughness={0.3}
        emissive="#004080"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};
