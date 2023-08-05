'use client';
import { Canvas, MeshProps, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export const Model = () => {
  return (
    <Canvas
      shadows
      camera={{
        position: [-6, 7, 7],
      }}
    >
      <InsideModel />
    </Canvas>
  );
};

const InsideModel = () => {
  const ref = useRef<MeshProps>(null);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta;
    }
  });

  return (
    <mesh ref={ref} scale={4}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'orange'} />
    </mesh>
  );
};
