"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface CardHoverEffectProps {
  items: {
    title: string
    description: string
    icon: React.ReactNode
    color: string
    iconBg: string
  }[]
  className?: string
}

export function CardHoverEffect({ items, className }: CardHoverEffectProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", className)}>
      {items.map((item, idx) => (
        <div
          key={item.title}
          className="relative group"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <motion.div
            className={cn(
              "absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 blur transition duration-500",
              item.color,
            )}
            animate={{
              opacity: hoveredIndex === idx ? 0.3 : 0,
            }}
          />
          <motion.div
            className="relative h-full bg-black border border-gray-800 rounded-2xl p-6 overflow-hidden group-hover:border-gray-700 transition-colors duration-500"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-colors duration-500",
                item.iconBg,
              )}
            >
              {item.icon}
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
            <p className="text-gray-400">{item.description}</p>

            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 -mx-px rounded-b-2xl overflow-hidden">
              <div
                className={cn("h-full w-full bg-gradient-to-r", item.color)}
                style={{
                  transform: hoveredIndex === idx ? "translateX(0%)" : "translateX(-100%)",
                  transition: "transform 0.5s ease",
                }}
              />
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  )
}
