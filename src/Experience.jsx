import React, { useRef } from "react";
// import CustomObject from "./CustomObject";
import {
  OrbitControls,
  TransformControls,
  PivotControls,
  Html,
  Text,
  Float,
} from "@react-three/drei";

const Experience = () => {
  const cubeRef = useRef(null);
  const cubeSphereRef = useRef(null);
  const sphereRef = useRef(null);

  return (
    <>
      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />
      {/* <CustomObject /> */}
      <group ref={cubeSphereRef}>
        <PivotControls anchor={[0, 0, 0]} depthTest={false}>
          <mesh ref={sphereRef} position-x={-2}>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
            <Html
              position={[1, 1, 0]}
              center
              wrapperClass="label"
              distanceFactor={4}
              occlude={[sphereRef, cubeRef]}
            >
              <p>Sphere</p>
            </Html>
          </mesh>
        </PivotControls>
        <mesh
          ref={cubeRef}
          position-x={2}
          rotation-y={Math.PI * 0.25}
          scale={1.5}
        >
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
        <TransformControls object={cubeRef} />
      </group>
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
      <Float speed={2} floatIntensity={3}>
        <Text>Sample text</Text>
      </Float>
    </>
  );
};

export default Experience;
