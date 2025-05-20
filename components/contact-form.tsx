"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, CheckCircle } from "lucide-react"
import { useToast } from "@/components/ui/toast-context"
import { motion, AnimatePresence } from "framer-motion"

export function ContactForm() {
  const { toast } = useToast()
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Có lỗi xảy ra khi gửi tin nhắn")
      }

      // Show success animation
      setShowSuccess(true)

      // Reset form
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Show toast notification
      toast({
        title: "Gửi tin nhắn thành công!",
        description: "Cảm ơn bạn đã liên hệ. Tôi sẽ phản hồi trong thời gian sớm nhất.",
        variant: "default",
      })

      // Hide success animation after 3 seconds
      setTimeout(() => {
        setShowSuccess(false)
      }, 3000)
    } catch (error) {
      console.error("Error submitting form:", error)
      toast({
        title: "Gửi tin nhắn thất bại",
        description: error instanceof Error ? error.message : "Có lỗi xảy ra khi gửi tin nhắn",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowSuccess(false)}
          >
            <motion.div
              className="bg-gradient-to-br from-gray-900 to-black border border-teal-500/30 rounded-2xl p-8 shadow-xl shadow-teal-500/20 max-w-md w-full mx-4"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", damping: 15 }}
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-20 h-20 rounded-full bg-teal-500/20 flex items-center justify-center mb-4"
                >
                  <CheckCircle className="h-10 w-10 text-teal-400" />
                </motion.div>
                <motion.h3
                  className="text-2xl font-bold text-white mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Gửi tin nhắn thành công!
                </motion.h3>
                <motion.p
                  className="text-gray-300 mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Cảm ơn bạn đã liên hệ. Tôi sẽ phản hồi trong thời gian sớm nhất.
                </motion.p>
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white rounded-full px-6 py-2 font-medium"
                  onClick={() => setShowSuccess(false)}
                >
                  Đóng
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="text"
            name="name"
            placeholder="Họ và tên"
            value={formState.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-900/70 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white"
            aria-label="Họ và tên"
          />
        </div>

        <div>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formState.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-900/70 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white"
            aria-label="Email"
          />
        </div>

        <div>
          <Input
            type="text"
            name="subject"
            placeholder="Tiêu đề"
            value={formState.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-900/70 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white"
            aria-label="Tiêu đề"
          />
        </div>

        <div>
          <Textarea
            name="message"
            placeholder="Nội dung tin nhắn"
            value={formState.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-3 bg-gray-900/70 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white resize-none"
            aria-label="Nội dung tin nhắn"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white rounded-lg py-6 h-auto group transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20"
          aria-label="Gửi tin nhắn"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Đang gửi...
            </span>
          ) : (
            <span className="flex items-center justify-center">
              <span className="mr-2">Gửi tin nhắn</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </span>
          )}
        </Button>
      </form>
    </>
  )
}
