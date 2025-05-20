import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink } from "lucide-react"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container px-4 md:px-6 py-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-teal-400">Dự Án</h1>
          <p className="text-gray-300 text-lg">
            Khám phá các dự án công nghệ tiên phong mà tôi đã sáng lập và phát triển
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-20">
          <div className="relative rounded-xl overflow-hidden mb-8">
            <Image
              src="/placeholder.svg?height=720&width=1280&query=metaverse virtual farm 3D world with avatars"
              alt="My Meta Farm"
              width={1280}
              height={720}
              className="object-cover w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute top-4 left-4">
              <Badge className="bg-teal-500">Featured Project</Badge>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-white">My Meta Farm</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="border-emerald-500/30 text-emerald-400">
                  Metaverse
                </Badge>
                <Badge variant="outline" className="border-emerald-500/30 text-emerald-400">
                  Blockchain
                </Badge>
                <Badge variant="outline" className="border-emerald-500/30 text-emerald-400">
                  Web3
                </Badge>
                <Badge variant="outline" className="border-emerald-500/30 text-emerald-400">
                  Gaming
                </Badge>
              </div>
              <p className="text-gray-300 mb-6">
                My Meta Farm là một dự án metaverse kết hợp game Web3 mà tôi đồng sáng lập và giữ vai trò Giám đốc Sản
                phẩm. Nền tảng này xây dựng một "nông trại" ảo trong thế giới metaverse – nơi người dùng có thể tương
                tác, giải trí và thỏa sức sáng tạo trong môi trường 3D sống động.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white">
                  Khám phá dự án
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-teal-500/50 text-teal-400 hover:bg-teal-500/10">
                  Xem demo
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-white">Thành tựu nổi bật</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400 text-xl leading-none">•</span>
                    <span>Đề cử cho Giải thưởng Game Blockchain Tokyo năm 2022</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400 text-xl leading-none">•</span>
                    <span>
                      Được Google Singapore, Meta và IMDA Singapore lựa chọn tham gia chương trình tăng tốc khởi nghiệp
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400 text-xl leading-none">•</span>
                    <span>Được báo Diễn đàn Doanh nghiệp đánh giá là dự án metaverse nổi bật của Việt Nam</span>
                  </li>
                </ul>
              </div>
              <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-white">Công nghệ sử dụng</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-gray-800 text-gray-300">Unity</Badge>
                  <Badge className="bg-gray-800 text-gray-300">Solidity</Badge>
                  <Badge className="bg-gray-800 text-gray-300">WebGL</Badge>
                  <Badge className="bg-gray-800 text-gray-300">NFT</Badge>
                  <Badge className="bg-gray-800 text-gray-300">React</Badge>
                  <Badge className="bg-gray-800 text-gray-300">Node.js</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects */}
        <h2 className="text-2xl font-bold mb-8 text-white">Các dự án khác</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-black/50 border-teal-500/20 backdrop-blur-sm hover:border-teal-500/50 transition-all group">
            <CardContent className="p-0">
              <div className="relative h-48">
                <Image src="/placeholder-5b3ae.png" alt="AI Insight" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute top-2 left-2">
                  <Badge className="bg-teal-500">Cộng đồng</Badge>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">AI Insight</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Nền tảng cộng đồng và kênh nội dung về "AI thực chiến" tập trung phổ cập kiến thức trí tuệ nhân tạo
                  một cách thực tiễn.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-teal-500/30 text-teal-400">
                    AI
                  </Badge>
                  <Badge variant="outline" className="border-teal-500/30 text-teal-400">
                    Education
                  </Badge>
                  <Badge variant="outline" className="border-teal-500/30 text-teal-400">
                    Content
                  </Badge>
                </div>
                <Link href="#" className="text-teal-400 font-medium hover:text-teal-300 flex items-center">
                  Xem chi tiết
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border-teal-500/20 backdrop-blur-sm hover:border-teal-500/50 transition-all group">
            <CardContent className="p-0">
              <div className="relative h-48">
                <Image src="/digital-skills-workshop.png" alt="AIID" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute top-2 left-2">
                  <Badge className="bg-cyan-500">Giáo dục</Badge>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Liên minh AIID</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Sáng kiến liên minh nhằm nâng cao kỹ năng số cho giới trẻ Việt, quy tụ 17 đơn vị gồm các trường đại
                  học và doanh nghiệp công nghệ.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-cyan-500/30 text-cyan-400">
                    Digital Skills
                  </Badge>
                  <Badge variant="outline" className="border-cyan-500/30 text-cyan-400">
                    Education
                  </Badge>
                  <Badge variant="outline" className="border-cyan-500/30 text-cyan-400">
                    Partnership
                  </Badge>
                </div>
                <Link href="#" className="text-teal-400 font-medium hover:text-teal-300 flex items-center">
                  Xem chi tiết
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border-teal-500/20 backdrop-blur-sm hover:border-teal-500/50 transition-all group">
            <CardContent className="p-0">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600&query=covid-19 dashboard data visualization"
                  alt="COVID-19 Dashboard"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute top-2 left-2">
                  <Badge className="bg-blue-500">Healthcare</Badge>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">COVID-19 Dashboard</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Bảng điều khiển theo dõi dịch bệnh COVID-19 cho Trung tâm Kiểm soát Bệnh tật TP.HCM (HCDC), hỗ trợ
                  hiệu quả cho công tác kiểm soát dịch.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-blue-500/30 text-blue-400">
                    Data Visualization
                  </Badge>
                  <Badge variant="outline" className="border-blue-500/30 text-blue-400">
                    Healthcare
                  </Badge>
                  <Badge variant="outline" className="border-blue-500/30 text-blue-400">
                    Public Service
                  </Badge>
                </div>
                <Link href="#" className="text-teal-400 font-medium hover:text-teal-300 flex items-center">
                  Xem chi tiết
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center mt-12">
          <Button variant="outline" className="border-teal-500/50 text-teal-400 hover:bg-teal-500/10">
            Xem tất cả dự án
          </Button>
        </div>
      </div>
    </div>
  )
}
