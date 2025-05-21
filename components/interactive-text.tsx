"use client"

import { useRef, useEffect, useState } from "react"

interface InteractiveTextProps {
  className?: string
  isCollapsing?: boolean
  brainPosition?: { x: number; y: number }
}

export default function InteractiveText({
  className = "",
  isCollapsing = false,
  brainPosition = { x: 0, y: 0 },
}: InteractiveTextProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameIdRef = useRef<number>(0)
  const [isMobile, setIsMobile] = useState(false)
  const mousePosition = useRef({ x: 0, y: 0 })
  const isMouseMoving = useRef(false)
  const textParticles = useRef<
    {
      x: number
      y: number
      baseX: number
      baseY: number
      size: number
      color: string
      scatteredColor: string
      life: number
    }[]
  >([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Create Hiếu Nguyễn text image data
    function createTextImage() {
      if (!ctx || !canvas) return null

      const tempCanvas = document.createElement("canvas")
      const tempCtx = tempCanvas.getContext("2d")
      if (!tempCtx) return null

      // Set temp canvas size - đảm bảo đủ rộng
      tempCanvas.width = canvas.width
      tempCanvas.height = canvas.height

      // Điều chỉnh font size và vị trí
      const fontSize = isMobile ? 60 : 100 // Tăng font size để chữ Hiếu Nguyễn to hơn
      tempCtx.fillStyle = "white"
      tempCtx.font = `bold ${fontSize}px 'Inter', sans-serif`
      tempCtx.textAlign = "center"
      tempCtx.textBaseline = "middle"

      // Đo kích thước thực tế của text
      const textMetrics = tempCtx.measureText("Hiếu Nguyễn")
      const textWidth = textMetrics.width

      // Đảm bảo text vừa với canvas
      const scaleFactor = Math.min(1, (tempCanvas.width * 0.9) / textWidth) // Tăng từ 0.8 lên 0.9
      const adjustedFontSize = fontSize * scaleFactor

      // Áp dụng font size đã điều chỉnh
      tempCtx.font = `bold ${adjustedFontSize}px 'Inter', sans-serif`

      // Add a subtle gradient to the text
      const gradient = tempCtx.createLinearGradient(
        tempCanvas.width / 2 - textWidth / 2,
        tempCanvas.height / 2,
        tempCanvas.width / 2 + textWidth / 2,
        tempCanvas.height / 2,
      )
      gradient.addColorStop(0, "#14b8a6") // Teal
      gradient.addColorStop(0.5, "#10b981") // Emerald
      gradient.addColorStop(1, "#34d399") // Light emerald

      tempCtx.fillStyle = gradient
      tempCtx.fillText("Hiếu Nguyễn", tempCanvas.width / 2, tempCanvas.height / 2)

      return tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height)
    }

    // Set canvas size with device pixel ratio for sharpness
    const updateCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = canvas.clientWidth * dpr
      canvas.height = canvas.clientHeight * dpr
      ctx.scale(dpr, dpr)
      setIsMobile(window.innerWidth < 768)
    }

    updateCanvasSize()

    // Initialize the text image data after canvas size is set
    let textImageData = createTextImage()

    function createTextParticle() {
      if (!ctx || !canvas || !textImageData) return null

      const data = textImageData.data
      const textWidth = textImageData.width
      const textHeight = textImageData.height

      for (let attempt = 0; attempt < 50; attempt++) {
        const x = Math.floor(Math.random() * textWidth)
        const y = Math.floor(Math.random() * textHeight)
        const index = (y * textWidth + x) * 4

        if (data[index + 3] > 128) {
          // Generate a color based on position
          const position = x / textWidth // Normalize position
          let color

          if (position < 0.33) {
            color = "#14b8a6" // Teal
          } else if (position < 0.66) {
            color = "#10b981" // Emerald
          } else {
            color = "#34d399" // Light emerald
          }

          return {
            x: x,
            y: y,
            baseX: x,
            baseY: y,
            size: Math.random() * 1.2 + 0.5,
            color: "rgba(255, 255, 255, 0.6)",
            scatteredColor: color,
            life: Math.random() * 100 + 50,
          }
        }
      }

      return null
    }

    function createInitialTextParticles() {
      // Clear existing particles
      textParticles.current = []

      const particleCount = isMobile ? 1000 : 2000
      for (let i = 0; i < particleCount; i++) {
        const particle = createTextParticle()
        if (particle) textParticles.current.push(particle)
      }
    }

    // Create initial particles after text image data is ready
    if (textImageData) {
      createInitialTextParticles()
    }

    // Handle mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mousePosition.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
      isMouseMoving.current = true

      // Reset the "moving" flag after a delay
      setTimeout(() => {
        isMouseMoving.current = false
      }, 100)
    }

    canvas.addEventListener("mousemove", handleMouseMove)

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw text particles
      const { x: mouseX, y: mouseY } = mousePosition.current
      const maxDistance = 120

      // Chỉ sử dụng vị trí chuột, bỏ qua hiệu ứng hút vào não
      const attractX = mouseX
      const attractY = mouseY
      const attractForce = 0.05
      const attractDistance = maxDistance

      for (const p of textParticles.current) {
        const dx = attractX - p.x
        const dy = attractY - p.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (isCollapsing) {
          // Khi đang collapse, chỉ làm mờ dần các hạt
          p.x += (p.baseX - p.x) * 0.05
          p.y += (p.baseY - p.y) * 0.05
          ctx.fillStyle = p.color
          ctx.globalAlpha = 0.3 // Giảm độ trong suốt để tạo hiệu ứng fade out
        } else if (distance < maxDistance && isMouseMoving.current) {
          // Hiệu ứng thông thường khi di chuyển chuột
          const force = (maxDistance - distance) / maxDistance
          const angle = Math.atan2(dy, dx)
          const moveX = Math.cos(angle) * force * 20
          const moveY = Math.sin(angle) * force * 20
          p.x = p.baseX - moveX
          p.y = p.baseY - moveY

          ctx.fillStyle = p.scatteredColor
          ctx.globalAlpha = 0.8
        } else {
          // Trở về vị trí ban đầu
          p.x += (p.baseX - p.x) * 0.05
          p.y += (p.baseY - p.y) * 0.05
          ctx.fillStyle = p.color
          ctx.globalAlpha = 0.6
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.globalAlpha = 1.0

        p.life--
        if (p.life <= 0) {
          const newParticle = createTextParticle()
          if (newParticle) {
            p.x = newParticle.x
            p.y = newParticle.y
            p.baseX = newParticle.baseX
            p.baseY = newParticle.baseY
            p.life = newParticle.life
          }
        }
      }

      // Add subtle connections between nearby text particles
      ctx.strokeStyle = "rgba(255, 255, 255, 0.03)"
      ctx.lineWidth = 0.3

      // Only check a subset of particles for connections
      const connectionSample = Math.min(textParticles.current.length, 200)
      for (let i = 0; i < connectionSample; i += 3) {
        const p1 = textParticles.current[i]
        for (let j = i + 3; j < connectionSample; j += 3) {
          const p2 = textParticles.current[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 25) {
            ctx.globalAlpha = ((25 - distance) / 25) * 0.15
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      }

      ctx.globalAlpha = 1.0

      animationFrameIdRef.current = requestAnimationFrame(animate)
    }

    const handleResize = () => {
      updateCanvasSize()
      // Recreate text image data with new canvas size
      textImageData = createTextImage()
      if (textImageData) {
        createInitialTextParticles()
      }
    }

    window.addEventListener("resize", handleResize)
    animationFrameIdRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", handleResize)
      canvas.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameIdRef.current)
    }
  }, [isMobile, isCollapsing, brainPosition])

  return <canvas ref={canvasRef} className={`w-full h-full ${className}`} style={{ maxWidth: "100%" }} />
}
