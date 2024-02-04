import "./style.css";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { Leva } from "leva";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

const root = ReactDOM.createRoot(document.querySelector("#root"));
// const onCanvasCreate = ({ gl, scene }) => {
//   // gl.setClearColor("red", 1) color + alpha
//   // scene.background = new THREE.Color("#ff0000")
// };

// onCreated={onCanvasCreate}

const App = () => {
  return (
    <StrictMode>
      <Leva collapsed />
      <Canvas
      // shadows
      >
        <color args={["ivory"]} attach="background" />
        <Experience />
      </Canvas>
    </StrictMode>
  );
};

root.render(<App />);
