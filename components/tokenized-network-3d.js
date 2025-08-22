"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, Line } from "@react-three/drei"
import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

function NetworkNode({ position, color, scale = 1 }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3

      // Gentle pulsing effect
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1
      meshRef.current.scale.setScalar(scale * pulse)
    }
  })

  return (
    <Sphere ref={meshRef} position={position} args={[0.1 * scale, 16, 16]}>
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} transparent opacity={0.8} />
    </Sphere>
  )
}

function NetworkConnection({ start, end, color }) {
  const points = useMemo(() => [new THREE.Vector3(...start), new THREE.Vector3(...end)], [start, end])

  return <Line points={points} color={color} lineWidth={2} transparent opacity={0.4} />
}

function TokenizedNetwork() {
  const groupRef = useRef()

  // Generate network nodes
  const nodes = useMemo(() => {
    const nodeArray = []
    const colors = ["#00d4ff", "#8b5cf6", "#14b8a6"]

    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2
      const radius = 2 + Math.random() * 1
      const height = (Math.random() - 0.5) * 2

      nodeArray.push({
        position: [Math.cos(angle) * radius, height, Math.sin(angle) * radius],
        color: colors[i % colors.length],
        scale: 0.8 + Math.random() * 0.4,
      })
    }
    return nodeArray
  }, [])

  // Generate connections
  const connections = useMemo(() => {
    const connectionArray = []
    const colors = ["#00d4ff", "#8b5cf6", "#14b8a6"]

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (Math.random() > 0.7) {
          // 30% chance of connection
          connectionArray.push({
            start: nodes[i].position,
            end: nodes[j].position,
            color: colors[Math.floor(Math.random() * colors.length)],
          })
        }
      }
    }
    return connectionArray
  }, [nodes])

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle rotation
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1

      // Time-of-day hue shift
      const time = (state.clock.elapsedTime * 0.1) % (Math.PI * 2)
      const hueShift = Math.sin(time) * 0.2 + 0.5 // 0.3 to 0.7

      // Apply subtle color temperature shift
      groupRef.current.children.forEach((child, index) => {
        if (child.material && child.material.emissive) {
          const baseColor = new THREE.Color(nodes[index % nodes.length]?.color || "#00d4ff")
          baseColor.multiplyScalar(hueShift)
          child.material.emissive = baseColor
        }
      })
    }
  })

  return (
    <group ref={groupRef}>
      {nodes.map((node, index) => (
        <NetworkNode key={index} position={node.position} color={node.color} scale={node.scale} />
      ))}
      {connections.map((connection, index) => (
        <NetworkConnection key={index} start={connection.start} end={connection.end} color={connection.color} />
      ))}
    </group>
  )
}

export default function TokenizedNetwork3D() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#00d4ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />

        <TokenizedNetwork />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  )
}
