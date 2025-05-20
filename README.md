# Triều Nguyễn - AI Researcher & Blockchain Developer Portfolio

![GitHub last commit](https://img.shields.io/github/last-commit/trieu-nguyen/portfolio-website)
![Website](https://img.shields.io/website?url=https%3A%2F%2Ftrieu.ai.vn)
![GitHub license](https://img.shields.io/github/license/trieu-nguyen/portfolio-website)

<p align="center">
  <img src="public/og-image.png" alt="Triều Nguyễn Portfolio" width="600">
</p>

## 📋 Tổng Quan | Overview

**[Tiếng Việt]**

Website portfolio chuyên nghiệp của Triều Nguyễn - Chuyên gia AI, Blockchain và Metaverse. Trang web được xây dựng với Next.js, Tailwind CSS và Framer Motion, mang đến trải nghiệm người dùng mượt mà với các hiệu ứng tương tác và thiết kế responsive. Website giới thiệu các dự án nổi bật như AI Insight, My Meta Farm và AIID, cùng với chuyên môn và thông tin liên hệ.

**[English]**

Professional portfolio website for Triều Nguyễn - AI Researcher, Blockchain Developer, and Metaverse Pioneer. Built with Next.js, Tailwind CSS, and Framer Motion, the website delivers a smooth user experience with interactive effects and responsive design. It showcases featured projects like AI Insight, My Meta Farm, and AIID, along with expertise and contact information.

## ✨ Tính Năng Chính | Key Features

- 🌐 **Hỗ trợ đa ngôn ngữ** - Chuyển đổi liền mạch giữa tiếng Việt và tiếng Anh
- 🎨 **Thiết kế hiện đại** - Giao diện tối với hiệu ứng gradient và particle
- 📱 **Responsive** - Tương thích hoàn hảo trên mọi thiết bị
- ⚡ **Hiệu ứng tương tác** - Animation mượt mà với Framer Motion
- 🔍 **Tối ưu SEO** - Meta tags và cấu trúc dữ liệu đầy đủ
- 📬 **Form liên hệ** - Tích hợp với Supabase để lưu trữ thông tin liên hệ
- 🖼️ **Hiển thị dự án** - Trình bày các dự án nổi bật với giao diện hấp dẫn
- 🌟 **Hiệu ứng particle** - Hiệu ứng chữ và nền tương tác

## 🛠️ Công Nghệ Sử Dụng | Technologies

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Shadcn UI
- **Animations**: Framer Motion, React Particles
- **Database**: Supabase
- **Deployment**: Vercel
- **SEO**: Next.js Metadata API
- **Internationalization**: Custom language context

## 🚀 Cài Đặt và Chạy | Installation and Setup

\`\`\`bash
# Clone repository
git clone https://github.com/trieu-nguyen/portfolio-website.git

# Di chuyển vào thư mục dự án
cd portfolio-website

# Cài đặt dependencies
npm install

# Tạo file .env.local và thêm các biến môi trường
# NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
# NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
# SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_key

# Chạy development server
npm run dev
\`\`\`

Mở [http://localhost:3000](http://localhost:3000) để xem trang web.

## 📁 Cấu Trúc Dự Án | Project Structure

\`\`\`
portfolio-website/
├── app/                    # Next.js App Router
│   ├── api/                # API Routes
│   ├── blog/               # Blog pages
│   ├── contact/            # Contact page
│   ├── demo/               # Demo pages
│   ├── projects/           # Projects pages
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # React components
│   ├── ui/                 # UI components (shadcn)
│   ├── card-hover-effect.tsx
│   ├── card-spotlight.tsx
│   ├── contact-form.tsx
│   ├── featured-project.tsx
│   ├── glowing-stars.tsx
│   ├── hero-parallax.tsx
│   ├── hero-section.tsx
│   ├── interactive-text.tsx
│   ├── language-switcher.tsx
│   ├── navbar.tsx
│   ├── particle-text.tsx
│   ├── particles-container.tsx
│   ├── project-card.tsx
│   └── text-reveal.tsx
├── contexts/               # React contexts
│   └── language-context.tsx
├── hooks/                  # Custom hooks
│   └── use-mobile.ts
├── lib/                    # Utility functions
│   └── utils.ts
├── public/                 # Static assets
├── .env.local              # Environment variables
├── next.config.mjs         # Next.js configuration
├── package.json            # Project dependencies
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
\`\`\`

## 📝 Tính Năng Đang Phát Triển | Upcoming Features

- [ ] Blog động với Supabase
- [ ] Tích hợp chatbot AI
- [ ] Dark/light mode
- [ ] Portfolio 3D với Three.js
- [ ] Tối ưu hiệu suất animation
- [ ] Trang portfolio chi tiết

## 👨‍💻 Tác Giả | Author

**Triều Nguyễn**

- Website: [trieu.ai.vn](https://trieu.ai.vn)
- TikTok: [@ai_insight_](https://tiktok.com/@ai_insight_)
- LinkedIn: [Triều Nguyễn](https://www.linkedin.com/in/trieu-nguyen-1478ab155/)
- Email: npht.96@gmail.com

## 📄 Giấy Phép | License

Dự án này được cấp phép theo giấy phép MIT - xem file [LICENSE](LICENSE) để biết thêm chi tiết.

---

<p align="center">
  Được phát triển với ❤️ bởi Triều Nguyễn
</p>
\`\`\`

```plaintext file="LICENSE"
MIT License

Copyright (c) 2024 Triều Nguyễn

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
