"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center space-x-1">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage("vi")}
        className={`px-2 py-1 h-auto text-xs rounded-md ${
          language === "vi" ? "bg-teal-500/20 text-teal-400" : "text-gray-400 hover:text-teal-400 hover:bg-teal-500/10"
        }`}
      >
        VI
      </Button>
      <span className="text-gray-500">|</span>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage("en")}
        className={`px-2 py-1 h-auto text-xs rounded-md ${
          language === "en" ? "bg-teal-500/20 text-teal-400" : "text-gray-400 hover:text-teal-400 hover:bg-teal-500/10"
        }`}
      >
        EN
      </Button>
    </div>
  )
}
