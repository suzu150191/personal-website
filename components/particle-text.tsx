"use client"

import { useRef, useEffect, useState } from "react"

interface ParticleTextProps {
  className?: string
  text?: string
  color?: string
}

export default function ParticleText({
  className = "",
  text = "Hiếu Nguyễn",
  color = "#14b8a6", // Teal color by default
}: ParticleTextProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameIdRef = useRef<number>(0)
  const [isMobile, setIsMobile] = useState(false)
  const mousePosition = useRef({ x: 0, y: 0 })
  const isMouseMoving = useRef(false)
  const particles = useRef<
    {
      x: number
      y: number
      baseX: number
      baseY: number
      size: number
      density: number
    }[]
  >([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size with device pixel ratio for sharpness
    const updateCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
      setIsMobile(window.innerWidth < 768)
    }

    updateCanvasSize()

    // Create text particles
    function initParticles() {
      particles.current = []

      // Set text properties
      const fontSize = isMobile ? 30 : 50
      ctx.font = `bold ${fontSize}px 'Inter', sans-serif`
      ctx.fillStyle = color
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"

      // Position text in center
      const textX = canvas.width / 2
      const textY = canvas.height / 2

      // Draw text to analyze pixels
      ctx.fillText(text, textX, textY)

      // Get image data
      const textData = ctx.getImageData(0, 0, canvas.width, canvas.height)

      // Clear canvas after getting image data
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create particles from text pixels
      const particleGap = isMobile ? 4 : 3
      for (let y = 0; y < textData.height; y += particleGap) {
        for (let x = 0; x < textData.width; x += particleGap) {
          const index = (y * textData.width + x) * 4
          const alpha = textData.data[index + 3]

          if (alpha > 128) {
            const size = Math.random() * 1.5 + 0.5
            const density = Math.random() * 30 + 1

            particles.current.push({
              x: x,
              y: y,
              baseX: x,
              baseY: y,
              size,
              density,
            })
          }
        }
      }
    }

    // Handle mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mousePosition.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
      isMouseMoving.current = true
    }

    // Handle mouse leave
    const handleMouseLeave = () => {
      isMouseMoving.current = false
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const p of particles.current) {
        // Draw particle
        ctx.fillStyle = color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fill()

        // Particle movement
        if (isMouseMoving.current) {
          // Calculate distance between mouse and particle
          const dx = mousePosition.current.x - p.x
          const dy = mousePosition.current.y - p.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const forceDirectionX = dx / distance
          const forceDirectionY = dy / distance

          // Max distance, past that the force will be 0
          const maxDistance = 100
          let force = (maxDistance - distance) / maxDistance

          if (force < 0) force = 0

          // Movement based on mouse position
          const directionX = forceDirectionX * force * p.density
          const directionY = forceDirectionY * force * p.density

          if (distance < maxDistance) {
            p.x -= directionX
            p.y -= directionY
          } else {
            if (p.x !== p.baseX) {
              const dx = p.x - p.baseX
              p.x -= dx / 10
            }
            if (p.y !== p.baseY) {
              const dy = p.y - p.baseY
              p.y -= dy / 10
            }
          }
        } else {
          // Return to original position
          if (p.x !== p.baseX) {
            const dx = p.x - p.baseX
            p.x -= dx / 10
          }
          if (p.y !== p.baseY) {
            const dy = p.y - p.baseY
            p.y -= dy / 10
          }
        }
      }

      // Draw connections between particles
      ctx.strokeStyle = color
      ctx.lineWidth = 0.2

      for (let i = 0; i < particles.current.length; i++) {
        for (let j = i; j < particles.current.length; j++) {
          const dx = particles.current[i].x - particles.current[j].x
          const dy = particles.current[i].y - particles.current[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 20) {
            ctx.globalAlpha = 1 - distance / 20
            ctx.beginPath()
            ctx.moveTo(particles.current[i].x, particles.current[i].y)
            ctx.lineTo(particles.current[j].x, particles.current[j].y)
            ctx.stroke()
          }
        }
      }

      ctx.globalAlpha = 1

      animationFrameIdRef.current = requestAnimationFrame(animate)
    }

    // Initialize
    initParticles()

    // Add event listeners
    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseleave", handleMouseLeave)
    window.addEventListener("resize", () => {
      updateCanvasSize()
      initParticles()
    })

    // Start animation
    animationFrameIdRef.current = requestAnimationFrame(animate)

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameIdRef.current)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("resize", updateCanvasSize)
    }
  }, [text, color, isMobile])

  return <canvas ref={canvasRef} className={`w-full h-full ${className}`} />
}
