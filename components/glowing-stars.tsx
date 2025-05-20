"use client"

import { useRef, useEffect } from "react"

export function GlowingStars() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Star properties
    const stars: {
      x: number
      y: number
      radius: number
      color: string
      velocity: number
      alpha: number
      increasing: boolean
    }[] = []

    // Create stars
    const createStars = () => {
      const starCount = Math.floor((canvas.width * canvas.height) / 15000)

      for (let i = 0; i < starCount; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const radius = Math.random() * 1.5
        const colors = ["#14b8a6", "#0ea5e9", "#8b5cf6", "#f472b6"]
        const color = colors[Math.floor(Math.random() * colors.length)]
        const velocity = Math.random() * 0.05
        const alpha = Math.random()
        const increasing = Math.random() > 0.5

        stars.push({
          x,
          y,
          radius,
          color,
          velocity,
          alpha,
          increasing,
        })
      }
    }

    createStars()

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      stars.forEach((star) => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = star.color
        ctx.globalAlpha = star.alpha
        ctx.fill()

        // Twinkle effect
        if (star.increasing) {
          star.alpha += star.velocity
          if (star.alpha >= 1) {
            star.increasing = false
          }
        } else {
          star.alpha -= star.velocity
          if (star.alpha <= 0.3) {
            star.increasing = true
          }
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />
}
