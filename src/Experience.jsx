import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";

import Model from "./Model";
import Hamburger from "./Hamburger";
import Fox from "./Fox";

const Experience = () => {
  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />
      <directionalLight castShadow position={[1, 2, 3]} intensity={4.5} />

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>

      <Suspense>
        <Hamburger scale={0.35} />
        <Fox />
      </Suspense>
    </>
  );
};

export default Experience;
