"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink } from "lucide-react"
import { CardSpotlight } from "@/components/card-spotlight"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

interface FeaturedProjectProps {
  project: {
    id: string
    title: string
    subtitle: string
    description: string
    image: string
    color: string
    stats: { label: string; value: string }[]
    features: string[]
    link: string
    linkText: string
    tags: string[]
  }
}

export function FeaturedProject({ project }: FeaturedProjectProps) {
  const isMobile = useMobile()

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="grid md:grid-cols-2 gap-12 items-center"
    >
      <div>
        <Badge
          className={cn(
            "mb-4 text-white border-0",
            project.id === "ai-insight" && "bg-teal-500/20 text-teal-400 border-teal-500/30",
            project.id === "my-meta-farm" && "bg-purple-500/20 text-purple-400 border-purple-500/30",
            project.id === "aiid" && "bg-blue-500/20 text-blue-400 border-blue-500/30",
          )}
        >
          {project.subtitle}
        </Badge>
        <h2 className="text-3xl font-bold mb-4 text-white">{project.title}</h2>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className={cn(
                "border-gray-700/50 text-gray-300",
                project.id === "ai-insight" && "border-teal-500/30 text-teal-400",
                project.id === "my-meta-farm" && "border-purple-500/30 text-purple-400",
                project.id === "aiid" && "border-blue-500/30 text-blue-400",
              )}
            >
              {tag}
            </Badge>
          ))}
        </div>
        <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

        <div
          className={cn(
            "bg-black/50 border rounded-xl p-6 mb-6",
            project.id === "ai-insight" && "border-teal-500/20",
            project.id === "my-meta-farm" && "border-purple-500/20",
            project.id === "aiid" && "border-blue-500/20",
          )}
        >
          <h3
            className={cn(
              "text-lg font-semibold mb-3",
              project.id === "ai-insight" && "text-teal-400",
              project.id === "my-meta-farm" && "text-purple-400",
              project.id === "aiid" && "text-blue-400",
            )}
          >
            Thông tin nổi bật
          </h3>
          <ul className="space-y-2 text-gray-300">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span
                  className={cn(
                    "text-xl leading-none",
                    project.id === "ai-insight" && "text-teal-400",
                    project.id === "my-meta-farm" && "text-purple-400",
                    project.id === "aiid" && "text-blue-400",
                  )}
                >
                  •
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button
            className={cn(
              "bg-gradient-to-r text-white rounded-full px-4 py-2 h-auto text-sm group transition-all duration-300 hover:shadow-lg",
              project.id === "ai-insight" &&
                "from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 hover:shadow-teal-500/20",
              project.id === "my-meta-farm" &&
                "from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 hover:shadow-purple-500/20",
              project.id === "aiid" &&
                "from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 hover:shadow-blue-500/20",
            )}
            asChild
          >
            <Link href={project.link} target="_blank" rel="noopener noreferrer">
              <span className="mr-2">{project.linkText}</span>
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button
            variant="outline"
            className={cn(
              "rounded-full px-4 py-2 h-auto text-sm group transition-all duration-300",
              project.id === "ai-insight" && "border-teal-500/50 text-teal-400 hover:bg-teal-500/10",
              project.id === "my-meta-farm" && "border-purple-500/50 text-purple-400 hover:bg-purple-500/10",
              project.id === "aiid" && "border-blue-500/50 text-blue-400 hover:bg-blue-500/10",
            )}
          >
            <span className="mr-2">Xem demo</span>
            <ExternalLink className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      <div>
        <CardSpotlight className="w-full">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={`${project.title} - ${project.subtitle}`}
              width={1280}
              height={720}
              className="object-cover"
              sizes={isMobile ? "100vw" : "50vw"}
              quality={isMobile ? 75 : 90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          </div>
        </CardSpotlight>

        <div className="grid grid-cols-3 gap-4 mt-4">
          {project.stats.map((stat, index) => (
            <div
              key={index}
              className={cn(
                "bg-gradient-to-br rounded-xl border p-4",
                project.id === "ai-insight" && "from-teal-900/50 to-emerald-900/30 border-teal-500/20",
                project.id === "my-meta-farm" && "from-purple-900/50 to-indigo-900/30 border-purple-500/20",
                project.id === "aiid" && "from-blue-900/50 to-cyan-900/30 border-blue-500/20",
              )}
            >
              <p
                className={cn(
                  "text-xl font-bold",
                  project.id === "ai-insight" && "text-teal-400",
                  project.id === "my-meta-farm" && "text-purple-400",
                  project.id === "aiid" && "text-blue-400",
                )}
              >
                {stat.value}
              </p>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
