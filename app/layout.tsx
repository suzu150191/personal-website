import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { ToastProvider } from "@/components/ui/toast-context"
import { LanguageProvider } from "@/contexts/language-context"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://trieu.ai.vn"),
  title: "Triều Nguyễn | AI Researcher & Blockchain Developer | trieu.ai.vn",
  description:
    "Triều Nguyễn - Chuyên gia AI, Blockchain và Metaverse. Người sáng lập AI Insight và đồng sáng lập My Meta Farm. Chia sẻ kiến thức và nghiên cứu về công nghệ tiên tiến.",
  keywords: [
    "Triều Nguyễn",
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
  authors: [{ name: "Triều Nguyễn" }],
  creator: "Triều Nguyễn",
  publisher: "AI Insight",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Triều Nguyễn | AI Researcher & Blockchain Developer",
    description: "Chuyên gia AI, Blockchain và Metaverse. Người sáng lập AI Insight và đồng sáng lập My Meta Farm.",
    url: "https://trieu.ai.vn",
    siteName: "Triều Nguyễn",
    images: [
      {
        url: "https://trieu.ai.vn/og-image.png",
        width: 1200,
        height: 630,
        alt: "Triều Nguyễn - AI Researcher & Blockchain Developer",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Triều Nguyễn | AI Researcher & Blockchain Developer",
    description: "Chuyên gia AI, Blockchain và Metaverse. Người sáng lập AI Insight và đồng sáng lập My Meta Farm.",
    creator: "@LupinV_Research",
    images: ["https://trieu.ai.vn/og-image.png"],
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
  manifest: "https://trieu.ai.vn/site.webmanifest",
  alternates: {
    canonical: "https://trieu.ai.vn",
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
        <link rel="canonical" href="https://trieu.ai.vn" />
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
      </body>
    </html>
  )
}
