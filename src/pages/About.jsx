'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere } from '@react-three/drei'
import { TextureLoader } from 'three'
import { Suspense, useEffect, useState } from 'react'

function Earth() {
  const [texture, setTexture] = useState(null)

  useEffect(() => {
    new TextureLoader().load('/assets/3d/texture_earth.jpg', setTexture)
  }, [])

  if (!texture) return null

  return (
    <Sphere args={[1, 64, 64]}>
      <meshStandardMaterial map={texture} />
    </Sphere>
  )
}

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">About GENSHAKTI</h1>
      
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Empowering Sustainable Energy Solutions</h2>
          <p className="mb-4">
            GENSHAKTI is at the forefront of revolutionizing renewable energy planning through the power of artificial intelligence. Our mission is to accelerate the global transition to sustainable energy by providing cutting-edge tools and insights for optimal renewable energy deployment.
          </p>
          <p className="mb-4">
            Our AI-driven platform offers:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Smart site selection for renewable energy projects</li>
            <li>Advanced carbon modeling and emission reduction strategies</li>
            <li>Real-time data integration for informed decision-making</li>
            <li>Customized solutions for governments, businesses, and communities</li>
          </ul>
          <p>
            By harnessing the latest advancements in machine learning and data analytics, GENSHAKTI empowers stakeholders to make data-driven decisions that maximize the impact of renewable energy initiatives while minimizing environmental impact and costs.
          </p>
        </div>
        <div className="lg:w-1/2 h-[400px]">
          <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
              <Earth />
            </Suspense>
            <OrbitControls autoRotate enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </div>
  )
}
