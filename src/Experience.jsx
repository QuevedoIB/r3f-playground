import React, { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";

const Experience = () => {
  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />
      <directionalLight
        ref={directionLightRef}
        castShadow
        position={sunPosition}
        intensity={4.5}
        shadow-mapSize={[1024, 1024]}
      />

      <mesh castShadow receiveShadow position-x={-2}>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>

      <mesh castShadow position-x={2} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial
          color="greenyellow"
          envMapIntensity={envMapIntensity}
        />
      </mesh>
    </>
  );
};

export default Experience;
