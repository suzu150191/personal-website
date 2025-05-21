"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronUp } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [showScrollTop, setShowScrollTop] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      // Xác định khi nào navbar nên thay đổi style
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Hiển thị nút scroll to top
      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }

      // Cập nhật section đang active
      const sections = document.querySelectorAll("section[id]")
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100
        const sectionHeight = (section as HTMLElement).offsetHeight
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Scroll to section function
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/80 backdrop-blur-md py-3 shadow-md" : "bg-transparent py-5"
        }`}
      >
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <Image src="/favicon.ico" alt="Hiếu Nguyễn" width={32} height={32} />
              </div>
              <span className="font-bold text-white">Hiếu Nguyễn</span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection("about")}
                className={`text-gray-300 hover:text-teal-400 transition-colors ${activeSection === "about" ? "text-teal-400" : ""}`}
              >
                {t("nav.about")}
              </button>
              <button
                onClick={() => scrollToSection("expertise")}
                className={`text-gray-300 hover:text-teal-400 transition-colors ${activeSection === "expertise" ? "text-teal-400" : ""}`}
              >
                {t("nav.expertise")}
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className={`text-gray-300 hover:text-teal-400 transition-colors ${activeSection === "projects" ? "text-teal-400" : ""}`}
              >
                {t("nav.projects")}
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className={`text-gray-300 hover:text-teal-400 transition-colors ${activeSection === "testimonials" ? "text-teal-400" : ""}`}
              >
                {t("nav.blog")}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`text-gray-300 hover:text-teal-400 transition-colors ${activeSection === "contact" ? "text-teal-400" : ""}`}
              >
                {t("nav.contact")}
              </button>
              <LanguageSwitcher />
            </nav>

            <div className="hidden md:block">
              <Button
                className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white text-sm px-4 py-2 h-auto rounded-md"
                onClick={() => scrollToSection("contact")}
              >
                {t("nav.contactNow")}
              </Button>
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <LanguageSwitcher />
              <button className="text-white" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md">
            <div className="container px-4 py-4">
              <nav className="flex flex-col gap-4">
                <button
                  className={`text-left text-gray-300 hover:text-teal-400 transition-colors py-2 border-b border-gray-800 ${
                    activeSection === "about" ? "text-teal-400" : ""
                  }`}
                  onClick={() => scrollToSection("about")}
                >
                  {t("nav.about")}
                </button>
                <button
                  className={`text-left text-gray-300 hover:text-teal-400 transition-colors py-2 border-b border-gray-800 ${
                    activeSection === "expertise" ? "text-teal-400" : ""
                  }`}
                  onClick={() => scrollToSection("expertise")}
                >
                  {t("nav.expertise")}
                </button>
                <button
                  className={`text-left text-gray-300 hover:text-teal-400 transition-colors py-2 border-b border-gray-800 ${
                    activeSection === "projects" ? "text-teal-400" : ""
                  }`}
                  onClick={() => scrollToSection("projects")}
                >
                  {t("nav.projects")}
                </button>
                <button
                  className={`text-left text-gray-300 hover:text-teal-400 transition-colors py-2 border-b border-gray-800 ${
                    activeSection === "testimonials" ? "text-teal-400" : ""
                  }`}
                  onClick={() => scrollToSection("testimonials")}
                >
                  {t("nav.blog")}
                </button>
                <button
                  className={`text-left text-gray-300 hover:text-teal-400 transition-colors py-2 border-b border-gray-800 ${
                    activeSection === "contact" ? "text-teal-400" : ""
                  }`}
                  onClick={() => scrollToSection("contact")}
                >
                  {t("nav.contact")}
                </button>
                <Button
                  className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white text-sm px-4 py-2 h-auto rounded-md mt-2"
                  onClick={() => scrollToSection("contact")}
                >
                  {t("nav.contactNow")}
                </Button>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 flex items-center justify-center text-white shadow-lg shadow-teal-500/20"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}
    </>
  )
}
