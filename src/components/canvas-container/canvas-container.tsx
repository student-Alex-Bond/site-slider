import { Canvas } from "@react-three/fiber";
import "./canvas-container.css";
import { type FC } from "react";
import {
  AnimatedTorus,
  MovingCapsule,
  RotatingDodecahedron,
  RotatingIcosahedron,
  RotatingRhombus,
} from "../figures";

export const CanvasContainer: FC = () => {
  return (
    <div className="figures-container">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[4, 5, 3]} intensity={1.2} castShadow />
        <pointLight position={[-3, -2, 2]} intensity={0.6} />
        <AnimatedTorus />
        <RotatingRhombus />
        <RotatingDodecahedron />
        <RotatingIcosahedron />
        <MovingCapsule />
      </Canvas>
    </div>
  );
};
