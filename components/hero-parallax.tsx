"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useMobile } from "@/hooks/use-mobile"

export function HeroParallax() {
  const ref = useRef<HTMLDivElement>(null)
  const isMobile = useMobile()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "35%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/80 to-black z-20"></div>

      <motion.div style={{ y: y1, opacity }} className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full">
          <Image
            src="/hero-bg-tech-grid.png"
            alt="Tech background"
            fill
            className="object-cover opacity-30"
            priority
            sizes={isMobile ? "100vw" : "100vw"}
            quality={isMobile ? 75 : 90}
          />
        </div>
      </motion.div>

      <motion.div
        style={{ y: y2, opacity }}
        className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-teal-500/20 blur-3xl"
      ></motion.div>

      <motion.div
        style={{ y: y3, opacity }}
        className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl"
      ></motion.div>
    </div>
  )
}
