"use client"

import { useEffect, useState, useRef } from "react"
import ParticleText from "./particle-text"
import { motion } from "framer-motion"

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="relative w-full h-screen bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Network background */}
      <div className="absolute inset-0 z-0">
        <NetworkBackground />
      </div>

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 mb-16"
      >
        <div className="w-24 h-24 rounded-full bg-black border-2 border-teal-500/30 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-teal-500/20 flex items-center justify-center">
            <span className="font-bold text-teal-400 text-2xl">TN</span>
          </div>
        </div>
      </motion.div>

      {/* Particle Text */}
      <div className="relative z-10 h-20 w-full">{mounted && <ParticleText color="#14b8a6" />}</div>

      {/* Tagline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="relative z-10 mt-16 text-center"
      >
        <p className="text-gray-400 uppercase tracking-widest text-sm md:text-base">
          <span className="text-white">INTERSECTION OF</span> <span className="text-teal-400">AI</span>{" "}
          <span className="text-white">&</span> <span className="text-teal-400">BLOCKCHAIN</span>
        </p>
      </motion.div>
    </div>
  )
}

// Network background component
function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    updateCanvasSize()

    // Create nodes
    const nodeCount = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 15000), 100)
    const nodes: { x: number; y: number; vx: number; vy: number; radius: number }[] = []

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 1.5 + 1,
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw nodes
      for (const node of nodes) {
        // Update position
        node.x += node.vx
        node.y += node.vy

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        // Draw node
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = "#14b8a6"
        ctx.fill()
      }

      // Draw connections
      ctx.strokeStyle = "#14b8a630"
      ctx.lineWidth = 0.5

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.globalAlpha = 1 - distance / 150
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      ctx.globalAlpha = 1

      requestAnimationFrame(animate)
    }

    // Start animation
    animate()

    // Handle resize
    window.addEventListener("resize", updateCanvasSize)

    return () => {
      window.removeEventListener("resize", updateCanvasSize)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full" />
}
