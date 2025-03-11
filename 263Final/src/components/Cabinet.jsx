/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/cabinet.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

const Cabinet = (props) => {
  const { nodes, materials } = useGLTF('./models/cabinet.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={nodes.Cube.material} position={[-0.173, 1.782, 0.004]} scale={[1, 0.176, 1]} />
    </group>
  )
}

export default Cabinet

useGLTF.preload('./models/cabinet.glb')
