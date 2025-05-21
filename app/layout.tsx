import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { ToastProvider } from "@/components/ui/toast-context"
import { LanguageProvider } from "@/contexts/language-context"
import Analytics from "@/components/analytics"
import type { Metadata } from "next"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://hieu.ai.vn"),
  title: "Hiếu Nguyễn | AI Researcher & Blockchain Developer | hieu.ai.vn",
  description:
    "Hiếu Nguyễn - Nhà đầu tư chuyên nghiệp và doanh nhân AI. Xây dựng nền tảng giao dịch AI và giao thức DeFi thế hệ mới.",
  keywords: [
    "Hiếu Nguyễn",
    "AI Researcher",
    "Blockchain Developer",
    "AI Insight",
    "My Meta Farm",
    "AIID",
    "Metaverse",
    "AI Vietnam",
    "Blockchain Vietnam",
    "GenAI",
    "AI Education",
    "Web3",
    "NFT",
    "Digital Skills",
  ],
  authors: [{ name: "Hiếu Nguyễn" }],
  creator: "Hiếu Nguyễn",
  publisher: "AI Insight",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Hiếu Nguyễn | AI Researcher & Blockchain Developer",
    description: "Nhà đầu tư chuyên nghiệp và doanh nhân AI. Xây dựng nền tảng giao dịch AI và giao thức DeFi.",
    url: "https://hieu.ai.vn",
    siteName: "Hiếu Nguyễn",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/my-avatar-Ovei4qlNIl2JZWvhyQEPATy2y63enO.png", // Cập nhật URL hình ảnh OG
        width: 1200,
        height: 630,
        alt: "Hiếu Nguyễn - Professional Investor & AI Entrepreneur",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hiếu Nguyễn | AI Researcher & Blockchain Developer",
    description: "Nhà đầu tư chuyên nghiệp và doanh nhân AI. Xây dựng nền tảng giao dịch AI và giao thức DeFi.",
    creator: "@LupinV_Research",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/my-avatar-Ovei4qlNIl2JZWvhyQEPATy2y63enO.png"], // Cập nhật URL hình ảnh Twitter
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "https://hieu.ai.vn/site.webmanifest",
  alternates: {
    canonical: "https://hieu.ai.vn",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="canonical" href="https://hieu.ai.vn" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <ToastProvider>
              {children}
              <Toaster />
            </ToastProvider>
          </LanguageProvider>
        </ThemeProvider>
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
