import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Clock, Search } from "lucide-react"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container px-4 md:px-6 py-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-teal-400">Blog</h1>
          <p className="text-gray-300 text-lg">
            Khám phá những bài viết mới nhất về AI, blockchain, metaverse và kỹ năng số
          </p>

          <div className="relative mt-8 max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Tìm kiếm bài viết..."
              className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2 mt-6">
            <Badge
              variant="outline"
              className="bg-black/50 backdrop-blur-sm text-teal-400 border-teal-400/30 cursor-pointer hover:bg-teal-500/10"
            >
              Tất cả
            </Badge>
            <Badge
              variant="outline"
              className="bg-black/50 backdrop-blur-sm text-gray-300 border-gray-700 cursor-pointer hover:bg-gray-800"
            >
              AI
            </Badge>
            <Badge
              variant="outline"
              className="bg-black/50 backdrop-blur-sm text-gray-300 border-gray-700 cursor-pointer hover:bg-gray-800"
            >
              Blockchain
            </Badge>
            <Badge
              variant="outline"
              className="bg-black/50 backdrop-blur-sm text-gray-300 border-gray-700 cursor-pointer hover:bg-gray-800"
            >
              Metaverse
            </Badge>
            <Badge
              variant="outline"
              className="bg-black/50 backdrop-blur-sm text-gray-300 border-gray-700 cursor-pointer hover:bg-gray-800"
            >
              Kỹ năng số
            </Badge>
            <Badge
              variant="outline"
              className="bg-black/50 backdrop-blur-sm text-gray-300 border-gray-700 cursor-pointer hover:bg-gray-800"
            >
              Khởi nghiệp
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Featured Post */}
          <Card className="col-span-full bg-gradient-to-br from-black to-gray-900 border-teal-500/20 hover:border-teal-500/50 transition-all overflow-hidden">
            <div className="relative h-80">
              <Image src="/ai-futuristic-visualization.png" alt="Featured post" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute top-4 left-4">
                <Badge className="bg-teal-500">Featured</Badge>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>May 10, 2024</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>5 min read</span>
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-2 text-white">Tương lai của AI trong doanh nghiệp Việt Nam</h2>
              <p className="text-gray-300 mb-4">
                Khám phá cách trí tuệ nhân tạo đang định hình lại cách doanh nghiệp Việt Nam vận hành và những cơ hội mà
                nó mang lại cho các doanh nhân trẻ.
              </p>
            </CardContent>
            <CardFooter className="px-6 pb-6 pt-0">
              <Button className="bg-teal-500 hover:bg-teal-600 text-white">
                Đọc tiếp
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          {/* Regular Posts */}
          <Card className="bg-black/50 border-gray-800 hover:border-teal-500/50 transition-all overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=400&width=600&query=blockchain technology visualization"
                alt="Blockchain post"
                fill
                className="object-cover"
              />
              <div className="absolute top-2 left-2">
                <Badge className="bg-emerald-500">Blockchain</Badge>
              </div>
            </div>
            <CardContent className="p-4">
              <div className="flex items-center gap-4 text-xs text-gray-400 mb-2">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>Apr 28, 2024</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>3 min read</span>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">NFTs và tương lai của tài sản số</h3>
              <p className="text-gray-300 text-sm line-clamp-3">
                Tìm hiểu về cách NFTs đang thay đổi cách chúng ta sở hữu và giao dịch tài sản số trong thế giới
                metaverse.
              </p>
            </CardContent>
            <CardFooter className="px-4 pb-4 pt-0">
              <Link href="#" className="text-teal-400 text-sm font-medium hover:text-teal-300 flex items-center">
                Đọc tiếp
                <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </CardFooter>
          </Card>

          <Card className="bg-black/50 border-gray-800 hover:border-teal-500/50 transition-all overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=400&width=600&query=AI chatbot conversation interface"
                alt="AI post"
                fill
                className="object-cover"
              />
              <div className="absolute top-2 left-2">
                <Badge className="bg-blue-500">AI</Badge>
              </div>
            </div>
            <CardContent className="p-4">
              <div className="flex items-center gap-4 text-xs text-gray-400 mb-2">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>Apr 15, 2024</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>4 min read</span>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">5 cách sử dụng ChatGPT hiệu quả trong công việc</h3>
              <p className="text-gray-300 text-sm line-clamp-3">
                Khám phá những cách sáng tạo để tận dụng ChatGPT và các công cụ AI khác để tăng năng suất làm việc hàng
                ngày.
              </p>
            </CardContent>
            <CardFooter className="px-4 pb-4 pt-0">
              <Link href="#" className="text-teal-400 text-sm font-medium hover:text-teal-300 flex items-center">
                Đọc tiếp
                <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </CardFooter>
          </Card>

          <Card className="bg-black/50 border-gray-800 hover:border-teal-500/50 transition-all overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=400&width=600&query=digital skills education workshop"
                alt="Digital Skills post"
                fill
                className="object-cover"
              />
              <div className="absolute top-2 left-2">
                <Badge className="bg-purple-500">Kỹ năng số</Badge>
              </div>
            </div>
            <CardContent className="p-4">
              <div className="flex items-center gap-4 text-xs text-gray-400 mb-2">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>Mar 30, 2024</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>6 min read</span>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Xây dựng thương hiệu cá nhân trong kỷ nguyên số</h3>
              <p className="text-gray-300 text-sm line-clamp-3">
                Những bí quyết để xây dựng và phát triển thương hiệu cá nhân mạnh mẽ trên các nền tảng số.
              </p>
            </CardContent>
            <CardFooter className="px-4 pb-4 pt-0">
              <Link href="#" className="text-teal-400 text-sm font-medium hover:text-teal-300 flex items-center">
                Đọc tiếp
                <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </CardFooter>
          </Card>

          <Card className="bg-black/50 border-gray-800 hover:border-teal-500/50 transition-all overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=400&width=600&query=virtual reality metaverse experience"
                alt="Metaverse post"
                fill
                className="object-cover"
              />
              <div className="absolute top-2 left-2">
                <Badge className="bg-cyan-500">Metaverse</Badge>
              </div>
            </div>
            <CardContent className="p-4">
              <div className="flex items-center gap-4 text-xs text-gray-400 mb-2">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>Mar 18, 2024</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>5 min read</span>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Metaverse: Tương lai của tương tác xã hội</h3>
              <p className="text-gray-300 text-sm line-clamp-3">
                Khám phá cách metaverse đang định hình lại cách chúng ta kết nối, làm việc và giải trí trong không gian
                ảo.
              </p>
            </CardContent>
            <CardFooter className="px-4 pb-4 pt-0">
              <Link href="#" className="text-teal-400 text-sm font-medium hover:text-teal-300 flex items-center">
                Đọc tiếp
                <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </CardFooter>
          </Card>

          <Card className="bg-black/50 border-gray-800 hover:border-teal-500/50 transition-all overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=400&width=600&query=startup team brainstorming session"
                alt="Startup post"
                fill
                className="object-cover"
              />
              <div className="absolute top-2 left-2">
                <Badge className="bg-orange-500">Khởi nghiệp</Badge>
              </div>
            </div>
            <CardContent className="p-4">
              <div className="flex items-center gap-4 text-xs text-gray-400 mb-2">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>Mar 5, 2024</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>7 min read</span>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Bài học từ hành trình khởi nghiệp công nghệ</h3>
              <p className="text-gray-300 text-sm line-clamp-3">
                Những bài học quý giá từ hành trình khởi nghiệp và xây dựng các dự án công nghệ từ con số 0.
              </p>
            </CardContent>
            <CardFooter className="px-4 pb-4 pt-0">
              <Link href="#" className="text-teal-400 text-sm font-medium hover:text-teal-300 flex items-center">
                Đọc tiếp
                <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </CardFooter>
          </Card>
        </div>

        <div className="flex justify-center mt-12">
          <Button variant="outline" className="border-teal-500/50 text-teal-400 hover:bg-teal-500/10">
            Xem thêm bài viết
          </Button>
        </div>
      </div>
    </div>
  )
}
