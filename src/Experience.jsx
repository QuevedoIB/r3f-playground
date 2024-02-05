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
  Sky,
  Environment,
  Lightformer,
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
    position: { value: { x: -2, y: 1 }, step: 0.01, joystick: "invertY" },
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

  const { sunPosition } = useControls("Sky", {
    sunPosition: {
      value: [1, 2, 3], // Use Sphere class from ThreeJS to use a proper vector 3 spherical coordinates and not random ones to proper position sun
    },
  });

  const { envMapIntensity, envMapHeight, envMapScale, envMapRadius } =
    useControls("Environment map", {
      envMapIntensity: {
        value: 7,
        min: 0,
        max: 12,
        step: 1,
      },
      envMapHeight: {
        value: 7,
        min: 0,
        max: 100,
        step: 1,
      },
      envMapScale: {
        value: 100,
        min: 10,
        max: 1000,
        step: 1,
      },
      envMapRadius: {
        value: 28,
        min: 10,
        max: 1000,
        step: 1,
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
      <Environment
        // background
        // files={[
        //   "./environmentMaps/2/px.jpg",
        //   "./environmentMaps/2/nx.jpg",
        //   "./environmentMaps/2/py.jpg",
        //   "./environmentMaps/2/ny.jpg",
        //   "./environmentMaps/2/pz.jpg",
        //   "./environmentMaps/2/nz.jpg",
        // ]}
        // files="./environmentMaps/the_sky_is_on_fire_2k.hdr"
        preset="sunset"
        // resolution={32}
        ground={{
          height: envMapHeight,
          radius: envMapRadius,
          scale: envMapScale,
        }}
      >
        {/* <color args={["black"]} attach="background" />
        <Lightformer position-z={-5} scale={10} color="red" intensity={10} /> */}
        {/* <mesh position-z={-5} scale={10}>
          <planeGeometry />
          <meshBasicMaterial color={[2, 0, 0]} />
        </mesh> */}
      </Environment>

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
        position={[0, 0, 0]}
        color={contactShadowControls.color}
        opacity={contactShadowControls.opacity}
        blur={contactShadowControls.blur}
        frames={1} //bake
      />
      {/* <Sky sunPosition={sunPosition} /> */}
      <OrbitControls makeDefault />
      {/* <directionalLight
        ref={directionLightRef}
        castShadow
        position={sunPosition}
        intensity={4.5}
        shadow-mapSize={[1024, 1024]}
      /> */}
      {/* <ambientLight intensity={1.5} /> */}
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
          <meshStandardMaterial
            color={color}
            envMapIntensity={envMapIntensity}
          />
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
          position-y={1}
          position-x={2}
          rotation-y={Math.PI * 0.25}
          scale={1.5}
        >
          <boxGeometry />
          <meshStandardMaterial
            color="mediumpurple"
            envMapIntensity={envMapIntensity}
          />
        </mesh>
        {/* <TransformControls object={cubeRef} /> */}
      </group>
      {/* <mesh position-y={0} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial
          color="greenyellow"
          envMapIntensity={envMapIntensity}
        />
      </mesh> */}
      {/* <Float speed={2} floatIntensity={3}>
        <Text>Sample text</Text>
      </Float> */}
    </>
  );
};

export default Experience;
