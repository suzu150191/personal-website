"use client"

import { useEffect } from "react"
import Script from "next/script"
import { usePathname } from "next/navigation"

export const GA_MEASUREMENT_ID = "G-TX2FPWMBZP" // Thay thế bằng ID Google Analytics của bạn

export default function Analytics() {
  const pathname = usePathname()

  useEffect(() => {
    if (pathname && window.gtag) {
      // Gửi pageview khi route thay đổi
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: pathname,
      })
    }
  }, [pathname])

  return (
    <>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}
