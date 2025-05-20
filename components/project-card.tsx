"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

interface ProjectCardProps {
  project: {
    title: string
    description: string
    image: string
    link: string
    category: string
    stats: { label: string; value: string }[]
    tags: string[]
    color: string
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const isMobile = useMobile()

  return (
    <motion.div
      className="group relative h-full overflow-hidden rounded-2xl bg-black border border-gray-800 transition-all duration-300 hover:border-gray-700"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 z-0">
        <div
          className={cn("absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent z-10")}
        ></div>
        <div
          className={cn(
            "absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-br",
            project.color,
          )}
        ></div>
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className={cn("transition-transform duration-500", isHovered ? "scale-110" : "scale-100", "object-cover")}
            sizes={isMobile ? "100vw" : "33vw"}
            quality={isMobile ? 75 : 90}
          />
        </div>
      </div>

      <div className="absolute top-3 left-3 z-20">
        <Badge
          className={cn(
            "bg-black/50 backdrop-blur-sm border-0 text-white px-3 py-1 text-sm",
            project.category === "Community" && "bg-teal-500/20 text-teal-400",
            project.category === "Metaverse" && "bg-purple-500/20 text-purple-400",
            project.category === "Education" && "bg-blue-500/20 text-blue-400",
          )}
        >
          {project.category}
        </Badge>
      </div>

      <div className="relative z-10 flex h-full flex-col p-6 pt-48">
        <h3 className="mb-2 text-2xl font-bold text-white">{project.title}</h3>
        <p className="mb-4 text-sm text-gray-300 line-clamp-3">{project.description}</p>

        <div className="mt-auto">
          <div className="mb-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className={cn(
                  "border-gray-700 text-gray-300 bg-black/50",
                  project.category === "Community" && "border-teal-500/30 text-teal-400",
                  project.category === "Metaverse" && "border-purple-500/30 text-purple-400",
                  project.category === "Education" && "border-blue-500/30 text-blue-400",
                )}
              >
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              {project.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p
                    className={cn(
                      "text-sm font-bold",
                      project.category === "Community" && "text-teal-400",
                      project.category === "Metaverse" && "text-purple-400",
                      project.category === "Education" && "text-blue-400",
                    )}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>

            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center text-sm font-medium transition-colors",
                project.category === "Community" && "text-teal-400 hover:text-teal-300",
                project.category === "Metaverse" && "text-purple-400 hover:text-purple-300",
                project.category === "Education" && "text-blue-400 hover:text-blue-300",
              )}
            >
              <span className="mr-1">Chi tiết</span>
              <ArrowRight
                className={cn(
                  "h-3 w-3 transition-transform duration-300",
                  isHovered ? "translate-x-1" : "translate-x-0",
                )}
              />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
