import React, { useRef } from "react";
import { useFrame, extend, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import CustomObject from "./CustomObject";

extend({ OrbitControls });

const Experience = () => {
  // const { camera, gl } = useThree();
  const cubeRef = useRef(null);
  const cubeSphereRef = useRef(null);
  useFrame((state, delta) => {
    const cameraAngle = state.clock.elapsedTime;
    state.camera.position.x = Math.sin(cameraAngle) * 10;
    state.camera.position.z = Math.cos(cameraAngle) * 10;
    state.camera.lookAt(0, 0, 0);
    cubeRef.current.rotation.y += delta;
    // cubeSphereRef.current.rotation.y += delta;
  });
  return (
    <>
      {/* <orbitControls args={[camera, gl.domElement]} /> */}
      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />
      <CustomObject />
      <group ref={cubeSphereRef}>
        <mesh position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
        <mesh
          ref={cubeRef}
          position-x={2}
          rotation-y={Math.PI * 0.25}
          scale={1.5}
        >
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
      </group>
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  );
};

export default Experience;
