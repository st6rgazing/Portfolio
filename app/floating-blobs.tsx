"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Sphere } from "@react-three/drei"
import type * as THREE from "three"

export default function FloatingBlobs() {
  const blobsRef = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (blobsRef.current) {
      blobsRef.current.rotation.y = clock.getElapsedTime() * 0.1
    }
  })

  const blobColors = [
    "#f9a8d4", // pink-300
    "#f472b6", // pink-400
    "#c084fc", // purple-400
    "#a78bfa", // violet-400
    "#fda4af", // rose-300
  ]

  return (
    <group ref={blobsRef}>
      {[...Array(8)].map((_, i) => {
        const radius = Math.random() * 0.5 + 0.3
        const distance = Math.random() * 4 + 3
        const angle = (i / 8) * Math.PI * 2
        const x = Math.sin(angle) * distance
        const y = (Math.random() - 0.5) * 3
        const z = Math.cos(angle) * distance
        const color = blobColors[Math.floor(Math.random() * blobColors.length)]

        return (
          <Sphere key={i} args={[radius, 16, 16]} position={[x, y, z]}>
            <meshStandardMaterial color={color} roughness={0.2} metalness={0.1} transparent opacity={0.8} />
          </Sphere>
        )
      })}
    </group>
  )
}
