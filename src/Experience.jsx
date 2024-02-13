import React, { Suspense, useEffect, useRef, useState } from "react";
import {
  OrbitControls,
  Text3D,
  useMatcapTexture,
  Center,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

import Model from "./Model";
import Hamburger from "./Hamburger";
import Fox from "./Fox";

const torusGeometry = new THREE.TorusGeometry();
const material = new THREE.MeshMatcapMaterial();

const Experience = () => {
  const donutsRef = useRef([]);
  // const donutsGroupRef = useRef();
  const [matcapTexture] = useMatcapTexture("7B5254_E9DCC7_B19986_C8AC91", 256); //MATCAP name + size, smaller = better perf
  const donutsArr = Array(100).fill("");
  const getRandomPosition = () => (Math.random() - 0.5) * 20;
  // const [torusRef, setTorusRef] = useState();
  useEffect(() => {
    // Set encoding / color space to matcap since material is in native three js
    matcapTexture.colorSpace = THREE.SRGBColorSpace;
    matcapTexture.needsUpdate = true;

    // set matcap to material after hook loaded and we have access to it
    material.matcap = matcapTexture;
    material.needsUpdate = true;
  }, []);

  useFrame((state, delta) => {
    // for (const donut of donutsGroupRef.current.children) {
    //   donut.rotation.y += delta * 0.5;
    // }
  });

  return (
    <>
      {/* <torusGeometry ref={setTorusRef} /> */}

      <Perf position="top-left" />
      <OrbitControls makeDefault />
      {/* 
      <mesh scale={1.5}>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh> */}
      <Center>
        <Text3D
          font="./fonts/helvetiker_regular.typeface.json"
          material={material}
        >
          {/* TEST R3F <meshMatcapMaterial matcap={matcapTexture} /> */}
          TEXT
        </Text3D>
      </Center>
      {/* <group ref={donutsGroupRef}> */}
      {donutsArr.map((_, i) => (
        <mesh
          ref={(el) => (donutsRef.current[i] = el)}
          key={i}
          position={[
            getRandomPosition(),
            getRandomPosition(),
            getRandomPosition(),
          ]}
          scale={0.2 + Math.random() * 0.2}
          rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
          // geometry={torusRef}
          material={material}
          geometry={torusGeometry}
        >
          {/* <meshMatcapMaterial matcap={matcapTexture} /> */}
        </mesh>
      ))}
      {/* </group> */}
    </>
  );
};

export default Experience;
