import React, { useRef, useEffect, useMemo } from 'react'
import { Canvas, useFrame, useThree } from 'react-three-fiber'
import * as THREE from 'three'
import { ResizeObserver } from '@juggle/resize-observer'

import ThemeContext from '../style/Theme'
import useWindowHeight from '../hooks/useWindowHeight'
import useWindowWidth from '../hooks/useWindowWidth'

let sizeX = 80.0
let sizeY = 80.0
let sizeZ = 80.0
let fa = 3
let fb = 12
let fc = 2
let phaseX = 0.0
let phaseY = 0.0
let phaseZ = 0.0
let step = 0.02

const Line = ({ theme }) => {
  const line = useRef()

  const [points] = useMemo(() => {
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
    return [points]
  }, [])

  useFrame(() => {
    phaseX += 0.001
    phaseY += 0.001
    phaseZ += 0.001

    let angle = step
    for (let i = 0; i < line.current.geometry.vertices.length; i++) {
      let x = sizeX * Math.sin(fa * angle + phaseX)
      let y = sizeY * Math.sin(fb * angle + phaseY)
      let z = sizeZ * Math.sin(fc * angle + phaseZ)

      line.current.geometry.vertices[i].set(x, y, z)
      angle += step
    }

    line.current.geometry.verticesNeedUpdate = true
  })

  let color = theme.name === 'light' ? '#e6e6e6' : '#666'

  return (
    <line ref={line}>
      <geometry attach='geometry' vertices={[...points]} />
      <lineBasicMaterial
        attach='material'
        color={color}
        linewidth={1}
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

function Dolly() {
  useFrame(({ clock, camera }) => {
    camera.position.z = Math.sin(0.2 * clock.getElapsedTime()) * 100 + 60
    camera.rotation.z = Math.sin(0.2 * clock.getElapsedTime()) * 0.25
  })
  return null
}

const Lissajous = () => {
  let width = useWindowWidth
  let height = useWindowHeight
  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <Canvas
          resize={{
            polyfill: ResizeObserver,
          }}
        >
          >
          <Camera
            position={[0, 0, 50]}
            fov={75}
            aspect={width / height}
            near={0.1}
            far={1000}
          />
          <Line theme={theme} />
          <Dolly />
        </Canvas>
      )}
    </ThemeContext.Consumer>
  )
}

export default Lissajous
