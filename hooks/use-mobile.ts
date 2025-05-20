"use client"

import { useState, useEffect } from "react"

export function useMobile() {
  // Mặc định là false để tránh hydration mismatch
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Chỉ chạy trên client side
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Kiểm tra lần đầu
    checkIfMobile()

    // Thêm event listener
    window.addEventListener("resize", checkIfMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  return isMobile
}
