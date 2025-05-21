"use client"

import { GA_MEASUREMENT_ID } from "@/components/analytics"

export function useAnalytics() {
  const trackEvent = (action: string, category: string, label: string, value?: number) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value,
      })
    }
  }

  const trackPageView = (url: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: url,
      })
    }
  }

  return { trackEvent, trackPageView }
}
