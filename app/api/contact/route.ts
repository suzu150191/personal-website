import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import { headers } from "next/headers"

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ""

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

    return NextResponse.json({ success: true, message: "Thông tin liên hệ đã được lưu thành công" }, { status: 200 })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Lỗi máy chủ nội bộ" }, { status: 500 })
  }
}
