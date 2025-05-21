import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import { headers } from "next/headers"
import nodemailer from "nodemailer"

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ""

// Cấu hình nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER || "smtp.gmail.com",
  port: Number.parseInt(process.env.EMAIL_PORT || "587"),
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER || "",
    pass: process.env.EMAIL_PASSWORD || "",
  },
})

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Họ tên, email, và nội dung tin nhắn là bắt buộc" }, { status: 400 })
    }

    // Get IP address and user agent
    const headersList = headers()
    const ip_address = headersList.get("x-forwarded-for") || "unknown"
    const user_agent = headersList.get("user-agent") || "unknown"

    // Initialize Supabase client
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // Insert data into Supabase
    const { data, error } = await supabase.from("contacts").insert([
      {
        name,
        email,
        subject,
        message,
        ip_address,
        user_agent,
        status: "new",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
    ])

    if (error) {
      console.error("Error saving contact:", error)
      return NextResponse.json({ error: "Không thể lưu thông tin liên hệ" }, { status: 500 })
    }

    // Gửi email thông báo
    try {
      console.log("Attempting to send email with config:", {
        host: process.env.EMAIL_SERVER,
        port: process.env.EMAIL_PORT,
        secure: process.env.EMAIL_SECURE === "true",
        user: process.env.EMAIL_USER,
        // Không log mật khẩu
      })

      await transporter.sendMail({
        from: process.env.EMAIL_FROM || "website@trieu.ai.vn",
        to: "npht.96@gmail.com",
        subject: `[Website] Liên hệ mới từ ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #14b8a6;">Thông tin liên hệ mới từ website</h2>
            <p><strong>Họ tên:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Tiêu đề:</strong> ${subject || "Không có tiêu đề"}</p>
            <p><strong>Nội dung:</strong></p>
            <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 10px;">
              ${message.replace(/\n/g, "<br>")}
            </div>
            <p style="margin-top: 20px; font-size: 12px; color: #666;">
              Thông tin bổ sung:<br>
              IP: ${ip_address}<br>
              User Agent: ${user_agent}<br>
              Thời gian: ${new Date().toLocaleString("vi-VN")}
            </p>
          </div>
        `,
      })
      console.log("Email sent successfully")
    } catch (emailError) {
      console.error("Error sending email notification:", emailError)
      // Ghi log chi tiết hơn về lỗi
      if (emailError instanceof Error) {
        console.error("Error details:", emailError.message)
        console.error("Error stack:", emailError.stack)
      }
      // Vẫn trả về thành công vì dữ liệu đã được lưu vào Supabase
    }

    return NextResponse.json({ success: true, message: "Thông tin liên hệ đã được lưu thành công" }, { status: 200 })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Lỗi máy chủ nội bộ" }, { status: 500 })
  }
}
