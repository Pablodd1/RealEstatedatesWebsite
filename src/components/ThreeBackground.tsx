"use client"
import { useRef, useEffect, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Float, Text, MeshTransmissionMaterial } from '@react-three/drei'
import * as THREE from 'three'

const houses = [
  { position: [-4, 1, -2], scale: 0.8, rotation: [0, 0.5, 0] },
  { position: [3, -0.5, -3], scale: 0.6, rotation: [0, -0.3, 0] },
  { position: [-2, 2, -4], scale: 1, rotation: [0, 1, 0] },
  { position: [4, 1.5, -5], scale: 0.7, rotation: [0, 0.8, 0] },
  { position: [-3, -1, -3], scale: 0.5, rotation: [0, -0.5, 0] },
  { position: [1, 2.5, -6], scale: 0.9, rotation: [0, 0.2, 0] },
  { position: [-5, 0, -4], scale: 0.65, rotation: [0, -0.7, 0] },
  { position: [2, -1.5, -2], scale: 0.55, rotation: [0, 0.4, 0] },
  { position: [-1, 1, -5], scale: 0.75, rotation: [0, -0.2, 0] },
  { position: [5, 0.5, -4], scale: 0.85, rotation: [0, 0.6, 0] },
]

function HouseModel({ position, scale, rotation }: { position: [number, number, number], scale: number, rotation: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.2
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh
        ref={meshRef}
        position={position}
        rotation={rotation}
        scale={scale * (hovered ? 1.1 : 1)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[1, 0.8, 0.8]} />
        <meshStandardMaterial
          color={hovered ? '#D4AF37' : '#2a2a2a'}
          transparent
          opacity={0.7}
          roughness={0.3}
          metalness={0.8}
        />
        <mesh position={[0, 0.5, 0]}>
          <coneGeometry args={[0.5, 0.6, 4]} />
          <meshStandardMaterial color="#1a1a1a" transparent opacity={0.8} />
        </mesh>
      </mesh>
    </Float>
  )
}

function FloatingHeart({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.5
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8 + position[0]) * 0.3
    }
  })

  return (
    <Float speed={3} rotationIntensity={0.5} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position} scale={0.15}>
        <sphereGeometry args={[1, 8, 8]} />
        <meshStandardMaterial color="#D4AF37" transparent opacity={0.6} emissive="#D4AF37" emissiveIntensity={0.3} />
      </mesh>
    </Float>
  )
}

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null)
  const count = 200

  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 20
    positions[i + 1] = (Math.random() - 0.5) * 10
    positions[i + 2] = -Math.random() * 10 - 5
  }

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array
      for (let i = 1; i < positions.length; i += 3) {
        positions[i] += Math.sin(state.clock.elapsedTime + i) * 0.001
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#D4AF37" transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#D4AF37" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#10b981" />
      <ParticleField />
      {houses.map((house, i) => (
        <HouseModel key={i} position={house.position as [number, number, number]} scale={house.scale} rotation={house.rotation as [number, number, number]} />
      ))}
      {[[-3, 3, -2], [2, 2, -3], [0, 3.5, -4], [-4, 2.5, -3], [4, 3, -5]].map((pos, i) => (
        <FloatingHeart key={i} position={pos as [number, number, number]} />
      ))}
    </>
  )
}

export default function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10">
      <div className="canvas-container" style={{ width: '100%', height: '100%' }}>
        <Scene />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/40 to-dark" />
    </div>
  )
}