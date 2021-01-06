import React, { useRef, useEffect } from 'react'
import { Canvas, useFrame, useThree } from 'react-three-fiber'
import * as THREE from 'three'

let sizeX = 80.0
let sizeY = 80.0
let sizeZ = 80.0
let fa = 3
let fb = 12
let fc = 2.0
let phaseX = 0.0
let phaseY = 0.0
let phaseZ = 0.0
let step = 0.02

const Line = (props) => {
  // This reference will give us direct access to the mesh so we can animate it
  const line = useRef()

  // Rotate mesh every frame, this is outside of React without overhead
  // useFrame(() => ())

  const points = []
  const length = 360

  let angle = step
  for (let i = 0; i < length; i++) {
    let x = sizeX * Math.sin(fa * angle + phaseX)
    let y = sizeY * Math.sin(fb * angle + phaseY)
    let z = sizeZ * Math.sin(fc * angle + phaseZ)

    points.push(new THREE.Vector3(x, y, z))

    angle += step
  }

  return (
    <line {...props} ref={line}>
      <geometry attach='geometry' vertices={[...points]} />
      <lineBasicMaterial
        attach='material'
        color={'grey'}
        linewidth={30}
        linecap={'round'}
        linejoin={'round'}
      />
    </line>
  )
}

function Camera(props) {
  const ref = useRef()
  const { setDefaultCamera } = useThree()
  useEffect(() => void setDefaultCamera(ref.current), [setDefaultCamera])
  useFrame(() => ref.current.updateMatrixWorld())
  return <perspectiveCamera ref={ref} {...props} />
}

const Lissajous = () => {
  return (
    <Canvas>
      <Camera
        position={[0, 0, 50]}
        fov={75}
        aspect={window.innerWidth / window.innerHeight}
        near={0.1}
        far={1000}
      />
      <Line />
    </Canvas>
  )
}

export default Lissajous
