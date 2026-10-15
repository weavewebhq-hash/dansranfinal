"use server"

export type CustomRequestState = { status: "idle" | "success" | "error"; message?: string }

function field(formData: FormData, key: string, max: number) {
  const value = formData.get(key)
  return typeof value === "string" ? value.trim().slice(0, max) : ""
}

export async function submitCustomRequest(
  _prev: CustomRequestState,
  formData: FormData,
): Promise<CustomRequestState> {
  // Hidden honeypot field: real visitors never fill it, bots usually do.
  if (field(formData, "website", 200)) return { status: "success" }

  const name = field(formData, "name", 120)
  const company = field(formData, "company", 160)
  const contact = field(formData, "contact", 160)
  const message = field(formData, "message", 3000)

  if (!name || !contact || message.length < 5) {
    return { status: "error", message: "Нэр, холбоо барих мэдээлэл болон хүсэлтээ бөглөнө үү." }
  }

  const apiKey = process.env.RESEND_API_KEY
  const domain = process.env.RESEND_EMAIL_DOMAIN?.trim()
  const from = process.env.RESEND_FROM || (domain && /^[a-z0-9.-]+\.[a-z]{2,}$/i.test(domain) ? `Dansran <requests@${domain}>` : undefined)
  if (!apiKey || !from) {
    return { status: "error", message: "Хүсэлт илгээх үйлчилгээ түр боломжгүй байна. weavewebhq@gmail.com хаягаар хүсэлтээ илгээнэ үү." }
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: ["weavewebhq@gmail.com"],
        subject: "Dansran — шинэ бүтээгдэхүүний хүсэлт",
        text: `Нэр: ${name}\nБайгууллага: ${company || "—"}\nУтас эсвэл и-мэйл: ${contact}\n\nХүсэлт:\n${message}`,
        ...(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact) ? { reply_to: contact } : {}),
      }),
      signal: AbortSignal.timeout(10000),
      cache: "no-store",
    })
    if (!response.ok) {
      console.error("Contact email rejected", { status: response.status })
      return { status: "error", message: "Илгээхэд алдаа гарлаа. Дахин оролдох эсвэл weavewebhq@gmail.com хаягаар хүсэлтээ илгээнэ үү." }
    }
    const result = await response.json() as { id?: string }
    if (!result.id) throw new Error("Email service returned no message ID")
    return { status: "success" }
  } catch {
    console.error("Contact email delivery failed")
    return { status: "error", message: "Илгээхэд алдаа гарлаа. Дахин оролдох эсвэл weavewebhq@gmail.com хаягаар хүсэлтээ илгээнэ үү." }
  }
}
