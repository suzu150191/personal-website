"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Twitter,
  Linkedin,
  Facebook,
  Tiktok,
  ChevronRight,
  ArrowRight,
  Brain,
  Blocks,
  Share2,
  PenTool,
  ExternalLink,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"
import { ParticlesContainer } from "@/components/particles-container"
import { HeroParallax } from "@/components/hero-parallax"
import { TextReveal } from "@/components/text-reveal"
import { CardHoverEffect } from "@/components/card-hover-effect"
import { CardSpotlight } from "@/components/card-spotlight"
import { GlowingStars } from "@/components/glowing-stars"
import { ProjectCard } from "@/components/project-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useMobile } from "@/hooks/use-mobile"
import { FeaturedProject } from "@/components/featured-project"
import { ContactForm } from "@/components/contact-form"
import { useLanguage } from "@/contexts/language-context"
import { Navbar } from "@/components/navbar"

export default function Home() {
  const isMobile = useMobile()
  const heroRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const [activeSection, setActiveSection] = useState("hero")
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)
  const { t } = useLanguage()

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  // Expertise cards data
  const expertiseCards = [
    {
      title: "AI Research & Development",
      description:
        "Khám phá và đổi mới với trí tuệ nhân tạo để đẩy ranh giới công nghệ và chia sẻ kiến thức thực chiến.",
      icon: <Brain className="h-6 w-6" />,
      color: "from-teal-500 to-emerald-500",
      iconBg: "bg-teal-500/20",
    },
    {
      title: "Blockchain & Metaverse",
      description:
        "Đào sâu vào blockchain và metaverse để phát triển những trải nghiệm kỹ thuật số an toàn, minh bạch và biến đổi.",
      icon: <Blocks className="h-6 w-6" />,
      color: "from-purple-500 to-indigo-500",
      iconBg: "bg-purple-500/20",
    },
    {
      title: "Digital Education",
      description:
        "Chia sẻ kỹ năng kỹ thuật số và xây dựng thương hiệu cá nhân để trang bị cho thế hệ tiếp theo để thành công.",
      icon: <Share2 className="h-6 w-6" />,
      color: "from-blue-500 to-cyan-500",
      iconBg: "bg-blue-500/20",
    },
    {
      title: "Content Creation",
      description: "Tạo và phổ biến nội dung sâu sắc về các công nghệ tiên tiến và marketing.",
      icon: <PenTool className="h-6 w-6" />,
      color: "from-pink-500 to-rose-500",
      iconBg: "bg-pink-500/20",
    },
  ]

  // Projects data
  const projects = [
    {
      title: "AI Insight",
      description:
        "Nền tảng cộng đồng và kênh nội dung về 'AI thực chiến' với mong muốn chia sẻ kiến thức trí tuệ nhân tạo một cách dễ hiểu và thực tiễn. Rất biết ơn vì đã nhận được sự ủng hộ từ nhiều người quan tâm đến AI tại Việt Nam.",
      image: "/ai-insight-platform.png",
      link: "https://aiinsight.vn/",
      category: "Community",
      stats: [
        { label: "Followers", value: "162K+" },
        { label: "Likes", value: "1.3M+" },
      ],
      tags: ["AI", "Education", "Content"],
      color: "from-teal-500 to-emerald-500",
    },
    {
      title: "My Meta Farm",
      description:
        "Dự án metaverse kết hợp game Web3 hướng đến việc tạo ra một không gian 'nông trại' ảo trong thế giới metaverse. Dự án may mắn được giới thiệu tại Sự kiện Game Blockchain Tokyo năm 2022.",
      image: "/my-meta-farm-3d.png",
      link: "https://www.youtube.com/watch?v=4_t0ahEJR6A",
      category: "Metaverse",
      stats: [
        { label: "Awards", value: "Tokyo 2022" },
        { label: "Partners", value: "Meta, Google" },
      ],
      tags: ["Blockchain", "Web3", "Gaming"],
      color: "from-purple-500 to-indigo-500",
    },
    {
      title: "AIID Alliance",
      description:
        "Sáng kiến liên minh với mong muốn hỗ trợ phát triển kỹ năng số cho giới trẻ Việt, kết nối 17 đơn vị gồm các trường đại học và doanh nghiệp công nghệ. AIID cố gắng đóng góp vào việc đào tạo AI và kỹ năng số.",
      image: "/aiid-detailed.png",
      link: "https://www.aiid.com.vn/",
      category: "Education",
      stats: [
        { label: "Partners", value: "17" },
        { label: "Universities", value: "8+" },
      ],
      tags: ["Digital Skills", "Education", "Partnership"],
      color: "from-blue-500 to-cyan-500",
    },
  ]

  // Featured projects data
  const featuredProjects = [
    {
      id: "ai-insight",
      title: "AI Insight",
      subtitle: "Cộng Đồng AI Thực Chiến",
      description:
        "AI Insight là nền tảng cộng đồng và kênh nội dung về 'AI thực chiến' mà Triều may mắn được tham gia phát triển. Với mong muốn chia sẻ kiến thức trí tuệ nhân tạo một cách dễ hiểu và thực tiễn, AI Insight cố gắng kết nối những người yêu thích công nghệ và cùng nhau tìm hiểu cách ứng dụng AI vào đời sống hàng ngày.",
      image: "/ai-insight-platform.png",
      color: "from-teal-500 to-emerald-500",
      stats: [
        { label: "Followers", value: "162K+" },
        { label: "Likes", value: "1.3M+" },
        { label: "Videos", value: "300+" },
      ],
      features: [
        "Cố gắng chia sẻ kiến thức AI qua các video ngắn",
        "Giới thiệu cách sử dụng một số công cụ AI phổ biến",
        "Tạo không gian để cùng nhau trao đổi và học hỏi về AI",
        "Tổ chức các buổi gặp gỡ trực tuyến để cùng tìm hiểu về AI",
      ],
      link: "https://aiinsight.vn/",
      linkText: "Khám phá AI Insight",
      tags: ["AI", "Education", "Content", "Community"],
    },
    {
      id: "my-meta-farm",
      title: "My Meta Farm",
      subtitle: "Metaverse Kết Hợp Game Web3",
      description:
        "My Meta Farm là dự án metaverse kết hợp game Web3 mà Triều có cơ hội được tham gia phát triển cùng đội ngũ tài năng. Dự án hướng đến việc tạo ra một không gian 'nông trại' ảo trong thế giới metaverse, nơi người dùng có thể tương tác và thể hiện sự sáng tạo trong môi trường 3D.",
      image: "/my-meta-farm-detailed.png",
      color: "from-purple-500 to-indigo-500",
      stats: [
        { label: "Awards", value: "Tokyo 2022" },
        { label: "Partners", value: "Meta, Google" },
        { label: "Users", value: "10K+" },
      ],
      features: [
        "May mắn được giới thiệu tại Sự kiện Game Blockchain Tokyo năm 2022",
        "Có cơ hội tham gia chương trình hỗ trợ khởi nghiệp của Google Singapore và các đối tác",
        "Được một số báo đài nhắc đến như một trong những dự án metaverse của Việt Nam",
        "Tìm hiểu và ứng dụng công nghệ blockchain và NFT vào trải nghiệm game",
      ],
      link: "https://www.youtube.com/watch?v=4_t0ahEJR6A",
      linkText: "Khám phá My Meta Farm",
      tags: ["Metaverse", "Blockchain", "Web3", "Gaming"],
    },
    {
      id: "aiid",
      title: "AIID Alliance",
      subtitle: "Liên Minh Phát Triển Kỹ Năng Số",
      description:
        "AIID là sáng kiến liên minh mà Triều may mắn được tham gia cùng nhiều đối tác nhằm hỗ trợ phát triển kỹ năng số cho giới trẻ Việt. AIID là nơi kết nối 17 đơn vị bao gồm các trường đại học và doanh nghiệp công nghệ trong lĩnh vực AI tại Việt Nam.",
      image: "/aiid-detailed.png",
      color: "from-blue-500 to-cyan-500",
      stats: [
        { label: "Partners", value: "17" },
        { label: "Universities", value: "8+" },
        { label: "Students", value: "1000+" },
      ],
      features: [
        "Có cơ hội làm việc cùng 8+ trường đại học tại Việt Nam",
        "Tham gia hỗ trợ phát triển kỹ năng số và AI cho nhiều bạn sinh viên",
        "Tổ chức một số buổi workshop và hackathon về AI",
        "Cố gắng tạo cầu nối giữa sinh viên và doanh nghiệp công nghệ",
      ],
      link: "https://www.aiid.com.vn/",
      linkText: "Khám phá AIID",
      tags: ["Digital Skills", "Education", "Partnership", "AI"],
    },
  ]

  // Testimonials data
  const testimonials = [
    {
      content:
        "Là Giám đốc Công nghệ của JAMstack Vietnam, tôi đã thấy những đóng góp của Triều Nguyễn trong lĩnh vực Trí tuệ nhân tạo vô cùng quý giá. Khả năng truyền đạt các khái niệm phức tạp một cách rõ ràng và thực tế của anh ấy đã mang lại cho cộng đồng cái nhìn có giá trị trực tiếp đối với công việc của họ. Cùng với sự tận tâm chân thành trong việc cung cấp lời khuyên hữu ích, những phẩm chất này đã tạo nên danh tiếng tin cậy cho anh ấy trong cộng đồng Trí tuệ nhân tạo.",
      author: "Kha Phan",
      role: "CTO tại JAMstack Vietnam",
      avatar: "/avatar-1.png",
      linkedin: "https://www.linkedin.com/in/nhatkha1407/",
    },
    {
      content:
        "Hợp tác với Triều trong dự án đào tạo về GenAI, tôi bị ấn tượng bởi tác phong làm việc chuyên nghiệp và thân thiện của anh. Triều không chỉ sở hữu nhiều kiến thức về GenAI mà còn thể hiện sự tham vọng trong việc ứng dụng công nghệ này để phục vụ cộng đồng. Anh luôn tìm kiếm cách thức mới để GenAI giải quyết các vấn đề thực tế, mang lại lợi ích thiết thực cho mọi người.",
      author: "Anh Thi Pham",
      role: "Giám đốc tại Công ty GenAI",
      avatar: "/avatar-2.png",
      linkedin: "https://www.linkedin.com/in/pham-anh-thi/",
    },
    {
      content:
        "Tìm kiếm một chuyên gia AI vừa am hiểu, vừa có tư duy vận dụng AI hiệu quả, vừa truyền cảm hứng là điều không dễ dàng. Đó cũng là lý do Triều Nguyễn là một trong những Giảng viên AI hàng đầu tại Edtronaut, nền tảng giáo dục công nghệ với AI, với một số chương trình hàng đầu như AI in Action - Marketing series, Content, Tuyển dụng ở nhiều lĩnh vực khác nhau (Bán lẻ, eCom, Bảo hiểm,...). Là Founder CEO của Edtronaut, tôi luôn tìm kiếm những giảng viên tài năng và tâm huyết cho từng lãnh vực và Triều chính là mảnh ghép hoàn hảo cho lĩnh vực đào tạo AI vốn mới phát triển gần đây và liên tục có sự thay đổi.",
      author: "Tram Le",
      role: "Founder & CEO tại Edtronaut",
      avatar: "/avatar-3.png",
      linkedin: "https://www.linkedin.com/in/tramle185/",
    },
  ]

  // Scroll to section function
  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY

      // Hide scroll indicator after scrolling
      if (scrollPosition > 100) {
        setShowScrollIndicator(false)
      } else {
        setShowScrollIndicator(true)
      }

      // Update active section based on scroll position
      const sections = document.querySelectorAll("section[id]")
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100
        const sectionHeight = (section as HTMLElement).offsetHeight
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Navbar - Giữ lại chỉ một thanh điều hướng */}
      <Navbar />

      {/* Hero Section with Parallax */}
      <section id="hero" ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroParallax />

        <div className="absolute inset-0 z-10">
          <ParticlesContainer />
        </div>

        <div className="container relative z-20 px-4 md:px-6 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mb-8 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-teal-500/50 shadow-lg shadow-teal-500/20"
          >
            <Image
              src="/my-avatar.png"
              alt="Triều Nguyễn - AI Researcher & Blockchain Developer"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 128px, 160px"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-transparent mix-blend-overlay"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <TextReveal
              text="Triều Nguyễn"
              className="text-5xl md:text-7xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-300 to-emerald-500"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-2 mb-6"
          >
            <Badge
              variant="outline"
              className="bg-black/50 backdrop-blur-sm text-teal-400 border-teal-400/30 px-3 py-1 text-sm"
            >
              AI Researcher
            </Badge>
            <Badge
              variant="outline"
              className="bg-black/50 backdrop-blur-sm text-purple-400 border-purple-400/30 px-3 py-1 text-sm"
            >
              Blockchain Developer
            </Badge>
            <Badge
              variant="outline"
              className="bg-black/50 backdrop-blur-sm text-cyan-400 border-cyan-400/30 px-3 py-1 text-sm"
            >
              Metaverse Pioneer
            </Badge>
            <Badge
              variant="outline"
              className="bg-black/50 backdrop-blur-sm text-blue-400 border-blue-400/30 px-3 py-1 text-sm"
            >
              Digital Educator
            </Badge>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed"
          >
            {t("hero.bio")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button
              className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white rounded-md px-4 py-2 h-auto text-sm group transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20"
              onClick={() => scrollToSection(contactRef)}
              aria-label={t("hero.contactNow")}
            >
              <span className="mr-2">{t("hero.contactNow")}</span>
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              className="border-teal-500/50 text-teal-400 hover:bg-teal-500/10 rounded-md px-4 py-2 h-auto text-sm group transition-all duration-300"
              onClick={() => scrollToSection(projectsRef)}
              aria-label={t("hero.viewProjects")}
            >
              <span className="mr-2">{t("hero.viewProjects")}</span>
              <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex gap-5 mt-10"
          >
            <Link
              href="https://tiktok.com/@ai_insight_"
              className="text-gray-400 hover:text-teal-400 transition-colors duration-300 transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok của Triều Nguyễn"
            >
              <Tiktok className="h-6 w-6" />
              <span className="sr-only">TikTok</span>
            </Link>
            <Link
              href="https://www.facebook.com/npht.96"
              className="text-gray-400 hover:text-teal-400 transition-colors duration-300 transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook của Triều Nguyễn"
            >
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/trieu-nguyen-1478ab155/"
              className="text-gray-400 hover:text-teal-400 transition-colors duration-300 transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn của Triều Nguyễn"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://x.com/LupinV_Research"
              className="text-gray-400 hover:text-teal-400 transition-colors duration-300 transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter của Triều Nguyễn"
            >
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <AnimatePresence>
            {showScrollIndicator && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce"
              >
                <Link
                  href="#about"
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                  aria-label="Cuộn xuống để xem thêm"
                >
                  <ChevronDown className="h-8 w-8" />
                  <span className="sr-only">Scroll Down</span>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* About Section with 3D Card Effect */}
      <section id="about" ref={aboutRef} className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>
        <GlowingStars />

        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <TextReveal
                text={t("about.title")}
                className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-500"
              />
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  Triều Nguyễn, sinh năm 1996, là người đam mê công nghệ đến từ Thành phố Hồ Chí Minh. May mắn được tham
                  gia vào các dự án như AI Insight, My Meta Farm và AIID, Triều luôn cố gắng học hỏi và chia sẻ kiến
                  thức với cộng đồng về các lĩnh vực AI và blockchain.
                </p>
                <p className="leading-relaxed">
                  Với niềm yêu thích công nghệ mới và sáng tạo nội dung, Triều đã cùng cộng đồng xây dựng AI Insight
                  thành nơi chia sẻ kiến thức công nghệ, may mắn nhận được sự ủng hộ từ nhiều người theo dõi trên
                  TikTok. Triều luôn cố gắng chia sẻ những gì đã học được về công nghệ và cách ứng dụng vào cuộc sống
                  hàng ngày.
                </p>
                <p className="leading-relaxed">
                  Cùng với đội ngũ, Triều đã tham gia phát triển My Meta Farm và có cơ hội được giới thiệu tại một số sự
                  kiện. Qua AIID, Triều và các cộng sự mong muốn góp phần nhỏ vào việc hỗ trợ các bạn trẻ phát triển kỹ
                  năng số, với hy vọng chuẩn bị tốt hơn cho tương lai công nghệ.
                </p>
              </div>
              <div className="mt-8">
                <Button className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white rounded-md px-4 py-2 h-auto text-sm group transition-all duration-300">
                  <span className="mr-2">{t("about.learnMore")}</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <CardSpotlight className="w-full">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                  <Image
                    src="/tech-entrepreneur-presentation.png"
                    alt="Triều Nguyễn diễn thuyết tại sự kiện công nghệ"
                    width={1280}
                    height={720}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <div>
                      <Badge className="mb-2 bg-teal-500">Sự kiện</Badge>
                      <h3 className="text-xl font-bold">Diễn giả tại Vietnam Web Summit</h3>
                    </div>
                  </div>
                </div>
              </CardSpotlight>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <CardSpotlight className="w-full">
                  <div className="p-4 bg-gradient-to-br from-teal-900/50 to-emerald-900/30 rounded-xl border border-teal-500/20">
                    <h3 className="text-lg font-semibold mb-2 text-teal-400">Học vấn</h3>
                    <p className="text-gray-300 text-sm">MBA - Đại học Ngoại thương</p>
                    <p className="text-gray-300 text-sm">Y khoa - ĐH Y khoa Phạm Ngọc Thạch</p>
                  </div>
                </CardSpotlight>

                <CardSpotlight className="w-full">
                  <div className="p-4 bg-gradient-to-br from-purple-900/50 to-indigo-900/30 rounded-xl border border-purple-500/20">
                    <h3 className="text-lg font-semibold mb-2 text-purple-400">Thành tựu</h3>
                    <p className="text-gray-300 text-sm">162K+ Followers trên TikTok</p>
                    <p className="text-gray-300 text-sm">Giải thưởng Game Blockchain Tokyo</p>
                  </div>
                </CardSpotlight>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section with Hover Cards */}
      <section id="expertise" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <TextReveal
                text={t("expertise.title")}
                className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-500"
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-300 max-w-2xl mx-auto"
            >
              {t("expertise.subtitle")}
            </motion.p>
          </div>

          <CardHoverEffect items={expertiseCards} />
        </div>
      </section>

      {/* Projects Section with 3D Cards */}
      <section id="projects" ref={projectsRef} className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>
        <GlowingStars />

        <div className="container relative z-10 px-4 md:px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <TextReveal
                text={t("projects.title")}
                className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-500"
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-300 max-w-2xl mx-auto"
            >
              {t("projects.subtitle")}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12"
          >
            <Button
              variant="outline"
              className="border-teal-500/50 text-teal-400 hover:bg-teal-500/10 rounded-md px-4 py-2 h-auto text-sm group transition-all duration-300"
            >
              <span className="mr-2">{t("projects.viewAll")}</span>
              <ExternalLink className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="featured-projects" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <TextReveal
                text={t("featuredProjects.title")}
                className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-500"
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-300 max-w-2xl mx-auto"
            >
              {t("featuredProjects.subtitle")}
            </motion.p>
          </div>

          <Tabs defaultValue="ai-insight" className="w-full">
            <TabsList className="w-full max-w-2xl mx-auto grid grid-cols-3 mb-12 bg-black/50 border border-gray-800 rounded-full p-1">
              <TabsTrigger
                value="ai-insight"
                className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-teal-500 data-[state=active]:to-emerald-500 data-[state=active]:text-white"
              >
                AI Insight
              </TabsTrigger>
              <TabsTrigger
                value="my-meta-farm"
                className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-indigo-500 data-[state=active]:text-white"
              >
                My Meta Farm
              </TabsTrigger>
              <TabsTrigger
                value="aiid"
                className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white"
              >
                AIID
              </TabsTrigger>
            </TabsList>

            {featuredProjects.map((project) => (
              <TabsContent key={project.id} value={project.id} className="mt-0">
                <FeaturedProject project={project} />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>
        <GlowingStars />

        <div className="container relative z-10 px-4 md:px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <TextReveal
                text={t("testimonials.title")}
                className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-500"
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-300 max-w-2xl mx-auto"
            >
              {t("testimonials.subtitle")}
            </motion.p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="testimonial-0" className="w-full">
              <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 mb-12 bg-black/50 border border-gray-800 rounded-full p-1">
                {testimonials.map((_, index) => (
                  <TabsTrigger
                    key={`testimonial-tab-${index}`}
                    value={`testimonial-${index}`}
                    className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-teal-500 data-[state=active]:to-emerald-500 data-[state=active]:text-white"
                  >
                    {index + 1}
                  </TabsTrigger>
                ))}
              </TabsList>

              {testimonials.map((testimonial, index) => (
                <TabsContent key={`testimonial-content-${index}`} value={`testimonial-${index}`} className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="p-6 rounded-lg bg-black/50 border border-gray-800">
                      <p className="text-lg text-gray-300 leading-relaxed mb-4">{testimonial.content}</p>
                      <div className="flex items-center gap-4">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden">
                          <Image
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.author}
                            fill
                            className="object-cover"
                            sizes="48px"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">{testimonial.author}</h4>
                          <p className="text-sm text-gray-400">{testimonial.role}</p>
                          <Link
                            href={testimonial.linkedin}
                            className="text-sm text-teal-400 hover:text-teal-300 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`LinkedIn của ${testimonial.author}`}
                          >
                            Xem trên LinkedIn
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>
        <GlowingStars />

        <div className="container relative z-10 px-4 md:px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <TextReveal
                text={t("contact.title")}
                className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-500"
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-300 max-w-2xl mx-auto"
            >
              {t("contact.subtitle")}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <ContactForm />
              </motion.div>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-teal-500" />
                    <div className="space-y-1">
                      <h4 className="text-lg font-semibold text-white">Email</h4>
                      <p className="text-gray-400">
                        <Link href="mailto:npht.96@gmail.com" className="hover:text-teal-300 transition-colors">
                          npht.96@gmail.com
                        </Link>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-purple-500" />
                    <div className="space-y-1">
                      <h4 className="text-lg font-semibold text-white">Điện thoại</h4>
                      <p className="text-gray-400">
                        <Link href="tel:+84932763090" className="hover:text-purple-300 transition-colors">
                          +84 932 763 090
                        </Link>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <MapPin className="h-6 w-6 text-cyan-500" />
                    <div className="space-y-1">
                      <h4 className="text-lg font-semibold text-white">Địa chỉ</h4>
                      <p className="text-gray-400">Thành phố Hồ Chí Minh, Việt Nam</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 border-t border-gray-800">
        © 2024 Triều Nguyễn. All rights reserved.
      </footer>
    </div>
  )
}
