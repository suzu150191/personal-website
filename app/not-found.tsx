import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white p-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-teal-400 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Trang không tìm thấy</h2>
        <p className="text-gray-400 mb-8">Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.</p>
        <Button
          asChild
          className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600"
        >
          <Link href="/">Quay lại trang chủ</Link>
        </Button>
      </div>
    </div>
  )
}
