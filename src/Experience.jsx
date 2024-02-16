import React, { useRef } from "react";
import {
  OrbitControls,
  useGLTF,
  useTexture,
  Center,
  Sparkles,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { extend, useFrame } from "@react-three/fiber";

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

const Experience = () => {
  const cubeRef = useRef();

  useFrame((_, delta) => {
    cubeRef.current.rotation.y += delta;
  });

  const handleCubeClick = () => {
    cubeRef.current.material.color.setRGB(
      getRandomArbitrary(0, 1),
      getRandomArbitrary(0, 1),
      getRandomArbitrary(0, 1)
    );
  };

  return (
    <>
      <Perf position="top-left" />
      <OrbitControls makeDefault />
      <axesHelper />
      <directionalLight position={[1, 2, 3]} intensity={3.5} />
      <ambientLight intensity={0.5} />
      <Center>
        <mesh
          ref={cubeRef}
          position-x={2}
          scale={1.5}
          onClick={handleCubeClick}
        >
          <boxGeometry />
          <meshBasicMaterial color="purple" />
        </mesh>
        <mesh position-x={-2}>
          <sphereGeometry />
          <meshBasicMaterial color="orange" />
        </mesh>
        <mesh rotation-x={-Math.PI * 0.5} scale={10} position-y={-1}>
          <planeGeometry />
          <meshBasicMaterial color="green" />
        </mesh>
      </Center>
    </>
  );
};

export default Experience;
