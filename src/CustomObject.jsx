import React, { useRef, useEffect } from "react";
import { DoubleSide } from "three";

const verticesCount = 10 * 3; // Triangle 3 vertices, 10 triangles
const positions = new Float32Array(verticesCount * 3); // x y z

for (let i = 0; i < verticesCount * 3; i++) {
  positions[i] = (Math.random() - 0.5) * 3;
}

const CustomObject = () => {
  const trianglesGeometry = useRef(null);

  useEffect(() => {
    trianglesGeometry.current?.computeVertexNormals();
  }, []);

  return (
    <mesh>
      <bufferGeometry ref={trianglesGeometry}>
        <bufferAttribute
          attach="attributes-position"
          count={verticesCount}
          itemSize={3}
          array={positions}
        />
      </bufferGeometry>
      <meshStandardMaterial side={DoubleSide} color="red" />
    </mesh>
  );
};

export default CustomObject;
