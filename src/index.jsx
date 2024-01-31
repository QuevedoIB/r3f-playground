import "./style.css";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { Leva } from "leva";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

const root = ReactDOM.createRoot(document.querySelector("#root"));

const App = () => {
  return (
    <StrictMode>
      <Leva collapsed />
      <Canvas>
        <Experience />
      </Canvas>
    </StrictMode>
  );
};

root.render(<App />);
