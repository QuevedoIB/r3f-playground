import React, { useRef } from "react";
// import CustomObject from "./CustomObject";
import {
  OrbitControls,
  useHelper,
  BakeShadows,
  SoftShadows,
  AccumulativeShadows,
  RandomizedLight,
  ContactShadows,
  // TransformControls,
  // PivotControls,
  // Html,
  // Text,
  // Float,
} from "@react-three/drei";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
import { useFrame } from "@react-three/fiber";
import { DirectionalLightHelper } from "three";

const Experience = () => {
  const directionLightRef = useRef(null);
  const cubeRef = useRef(null);
  const { visibility } = useControls("Perfomance", { visibility: true });
  const cubeSphereRef = useRef(null);
  const sphereRef = useRef(null);
  const { position, color } = useControls("Sphere", {
    position: { value: { x: -2, y: 0 }, step: 0.01, joystick: "invertY" },
    color: "#ff0000",
  });

  const contactShadowControls = useControls("Contact Shadows", {
    color: "#316d39",
    opacity: {
      value: 0.3,
      min: 0,
      max: 1,
      step: 0.01,
    },
    blur: {
      value: 3,
      min: 0,
      max: 10,
      step: 0.01,
    },
  });

  useHelper(directionLightRef, DirectionalLightHelper, 1);

  useFrame((state, delta) => {
    // const time = state.clock.elapsedTime;
    // cubeRef.current.position.x = 2 + Math.sin(time);
    cubeRef.current.rotation.y += delta * 0.5;
  });

  return (
    <>
      {visibility && <Perf position="top-left" />}
      {/* <BakeShadows /> */}
      {/* <SoftShadows size={5} samples={10} focus={0} /> */}
      {/* <AccumulativeShadows
        position={[0, -0.99, 0]}
        color="#316d39"
        opacity={0.8}
        frames={100}
        temporal
      >
        <RandomizedLight
          amount={8}
          radius={1}
          ambient={0.5}
          intensity={3}
          position={[1, 2, 3]}
          bias={0.001}
        />
      </AccumulativeShadows> */}
      <ContactShadows
        position={[0, -0.99, 0]}
        color={contactShadowControls.color}
        opacity={contactShadowControls.opacity}
        blur={contactShadowControls.blur}
        frames={1} //bake
      />
      <OrbitControls makeDefault />
      <directionalLight
        ref={directionLightRef}
        castShadow
        position={[1, 2, 3]}
        intensity={4.5}
        shadow-mapSize={[1024, 1024]}
      />
      <ambientLight intensity={1.5} />
      {/* <CustomObject /> */}
      <group ref={cubeSphereRef}>
        {/* <PivotControls anchor={[0, 0, 0]} depthTest={false}> */}
        <mesh
          ref={sphereRef}
          castShadow
          receiveShadow
          position={[position.x, position.y, 0]}
        >
          <sphereGeometry />
          <meshStandardMaterial color={color} />
          {/* <Html
            position={[1, 1, 0]}
            center
            wrapperClass="label"
            distanceFactor={4}
            occlude={[sphereRef, cubeRef]}
          >
            <p>Sphere</p>
          </Html> */}
        </mesh>
        {/* </PivotControls> */}
        <mesh
          ref={cubeRef}
          castShadow
          receiveShadow
          position-x={2}
          rotation-y={Math.PI * 0.25}
          scale={1.5}
        >
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
        {/* <TransformControls object={cubeRef} /> */}
      </group>
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
      {/* <Float speed={2} floatIntensity={3}>
        <Text>Sample text</Text>
      </Float> */}
    </>
  );
};

export default Experience;
