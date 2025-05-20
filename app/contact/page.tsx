"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Calendar,
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  TwitterIcon as TikTok,
} from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container px-4 md:px-6 py-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-teal-400">Liên Hệ</h1>
          <p className="text-gray-300 text-lg">Bạn có dự án hoặc cơ hội hợp tác? Hãy kết nối với tôi ngay hôm nay!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <Card className="bg-black/50 border-teal-500/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6 text-white">Thông tin liên hệ</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-teal-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1 text-white">Email</h3>
                      <p className="text-teal-400">npht.06@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-teal-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1 text-white">Điện thoại</h3>
                      <p className="text-teal-400">+84 (93) 276-3090</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-teal-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1 text-white">Địa điểm</h3>
                      <p className="text-teal-400">Hồ Chí Minh City, Việt Nam</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center shrink-0">
                      <Calendar className="h-5 w-5 text-teal-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1 text-white">Lịch hẹn</h3>
                      <p className="text-gray-300">Đặt lịch hẹn trực tuyến với tôi</p>
                      <Button variant="link" className="p-0 h-auto text-teal-400 hover:text-teal-300">
                        Đặt lịch ngay
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4 text-white">Kết nối mạng xã hội</h3>
                  <div className="flex gap-4">
                    <Link
                      href="https://tiktok.com/@ai_insight_"
                      className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400 hover:bg-teal-500/20 transition-colors"
                    >
                      <TikTok className="h-5 w-5" />
                      <span className="sr-only">TikTok</span>
                    </Link>
                    <Link
                      href="#"
                      className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400 hover:bg-teal-500/20 transition-colors"
                    >
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">Facebook</span>
                    </Link>
                    <Link
                      href="#"
                      className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400 hover:bg-teal-500/20 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link
                      href="#"
                      className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400 hover:bg-teal-500/20 transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                    <Link
                      href="#"
                      className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400 hover:bg-teal-500/20 transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                      <span className="sr-only">Instagram</span>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="bg-black/50 border-teal-500/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6 text-white">Gửi tin nhắn</h2>

                {isSuccess ? (
                  <div className="bg-teal-500/20 border border-teal-500/30 rounded-lg p-4 text-center">
                    <h3 className="text-lg font-semibold text-teal-400 mb-2">Tin nhắn đã được gửi!</h3>
                    <p className="text-gray-300">Cảm ơn bạn đã liên hệ. Tôi sẽ phản hồi trong thời gian sớm nhất.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name" className="text-white">
                        Họ và tên
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Nhập họ và tên của bạn"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="bg-gray-900 border-gray-700 text-white"
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="email" className="text-white">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Nhập địa chỉ email của bạn"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="bg-gray-900 border-gray-700 text-white"
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="subject" className="text-white">
                        Tiêu đề
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Nhập tiêu đề tin nhắn"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="bg-gray-900 border-gray-700 text-white"
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="message" className="text-white">
                        Nội dung
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Nhập nội dung tin nhắn của bạn"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        className="min-h-[150px] bg-gray-900 border-gray-700 text-white"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg
                            className="animate-spin h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Đang gửi...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="h-4 w-4" />
                          Gửi tin nhắn
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
