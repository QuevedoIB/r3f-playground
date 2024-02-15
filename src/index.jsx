import "./style.css";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { Leva } from "leva";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

const root = ReactDOM.createRoot(document.querySelector("#root"));
// flat removes tone mapping that r3f adds by default and messes up model tone mapping made on blender
const App = () => {
  return (
    <StrictMode>
      <Leva collapsed />
      <Canvas flat>
        <Experience />
      </Canvas>
    </StrictMode>
  );
};

root.render(<App />);
