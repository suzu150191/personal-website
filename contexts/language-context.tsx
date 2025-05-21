"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "vi" | "en"

type Translations = {
  [key: string]: {
    vi: string
    en: string
  }
}

// Các bản dịch cơ bản
const translations: Translations = {
  // Navbar
  "nav.about": {
    vi: "Về tôi",
    en: "About",
  },
  "nav.expertise": {
    vi: "Chuyên môn",
    en: "Expertise",
  },
  "nav.projects": {
    vi: "Dự án",
    en: "Projects",
  },
  "nav.blog": {
    vi: "Blog",
    en: "Blog",
  },
  "nav.contact": {
    vi: "Liên hệ",
    en: "Contact",
  },
  "nav.contactNow": {
    vi: "Liên hệ ngay",
    en: "Contact Now",
  },

  // Hero section
  "hero.bio": {
    vi: "Tạo dựng giá trị tại giao điểm giữa tài chính, trí tuệ nhân tạo và Web3.",
    en: "Crafting value at the intersection of finance, artificial intelligence, and Web3."
  },
  "hero.contactNow": {
    vi: "Liên hệ ngay",
    en: "Contact Now",
  },
  "hero.viewProjects": {
    vi: "Xem dự án",
    en: "View Projects",
  },

  // About section
  "about.title": {
    vi: "Về Tôi",
    en: "About Me",
  },
  "about.learnMore": {
    vi: "Tìm hiểu thêm",
    en: "Learn More",
  },

  // Expertise section
  "expertise.title": {
    vi: "Chuyên Môn",
    en: "Expertise",
  },
  "expertise.subtitle": {
    vi: "Khám phá các lĩnh vực chuyên môn và đam mê của tôi trong thế giới công nghệ",
    en: "Explore my areas of expertise and passion in the world of technology",
  },

  // Projects section
  "projects.title": {
    vi: "Dự Án Nổi Bật",
    en: "Featured Projects",
  },
  "projects.subtitle": {
    vi: "Khám phá các dự án công nghệ tiên phong mà tôi đã sáng lập và phát triển",
    en: "Explore the pioneering technology projects I have founded and developed",
  },
  "projects.viewAll": {
    vi: "Xem tất cả dự án",
    en: "View All Projects",
  },

  // Featured projects section
  "featuredProjects.title": {
    vi: "Chi Tiết Dự Án",
    en: "Project Details",
  },
  "featuredProjects.subtitle": {
    vi: "Tìm hiểu sâu hơn về các dự án công nghệ tiên phong của tôi",
    en: "Learn more about my pioneering technology projects",
  },

  // Testimonials section
  "testimonials.title": {
    vi: "Phản Hồi Từ Đối Tác",
    en: "Partner Feedback",
  },
  "testimonials.subtitle": {
    vi: "Những chia sẻ từ các đối tác và người cộng tác trong hành trình công nghệ",
    en: "Insights from partners and collaborators in my technology journey",
  },

  // Contact section
  "contact.title": {
    vi: "Liên Hệ",
    en: "Contact",
  },
  "contact.subtitle": {
    vi: "Bạn có dự án hoặc cơ hội hợp tác? Hãy kết nối với tôi ngay hôm nay!",
    en: "Do you have a project or collaboration opportunity? Connect with me today!",
  },
  "contact.info": {
    vi: "Thông tin liên hệ",
    en: "Contact Information",
  },
  "contact.social": {
    vi: "Kết nối mạng xã hội",
    en: "Social Media",
  },
  "contact.message": {
    vi: "Gửi tin nhắn",
    en: "Send a Message",
  },
  "contact.form.name": {
    vi: "Họ và tên",
    en: "Full Name",
  },
  "contact.form.email": {
    vi: "Email",
    en: "Email",
  },
  "contact.form.subject": {
    vi: "Tiêu đề",
    en: "Subject",
  },
  "contact.form.message": {
    vi: "Nội dung tin nhắn",
    en: "Message",
  },
  "contact.form.send": {
    vi: "Gửi tin nhắn",
    en: "Send Message",
  },
  "contact.form.sending": {
    vi: "Đang gửi...",
    en: "Sending...",
  },
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("vi")

  // Lưu ngôn ngữ vào localStorage khi thay đổi
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") as Language
      if (savedLanguage) {
        setLanguage(savedLanguage)
      }
    }
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("language", language)
    }
  }, [language])

  // Hàm dịch
  const t = (key: string): string => {
    if (translations[key]) {
      return translations[key][language]
    }
    return key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
