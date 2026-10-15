"use client"

import { useActionState, useState } from "react"
import { submitCustomRequest, type CustomRequestState } from "@/app/actions/custom-request"

const initialState: CustomRequestState = { status: "idle" }

const inputClass =
  "w-full border-b border-[#0E6287]/25 bg-transparent py-2 text-base text-[#0E6287] placeholder:text-[#0E6287]/40 focus:border-[#0E6287] focus:outline-none"

export default function CustomRequestForm() {
  const [state, formAction, pending] = useActionState(submitCustomRequest, initialState)
  const [fields, setFields] = useState({ name: "", company: "", contact: "", message: "" })

  if (state.status === "success") {
    return (
      <div role="status" className="border-t border-[#0E6287]/20 py-10">
        <p className="text-2xl tracking-[-0.04em]">Баярлалаа! Таны хүсэлтийг хүлээн авлаа.</p>
        <p className="mt-3 text-sm text-[#0E6287]/65">Бид тантай удахгүй холбогдох болно.</p>
      </div>
    )
  }

  return (
    <form action={formAction} className="grid gap-4 border-t border-[#0E6287]/20 pt-4 md:grid-cols-2 md:gap-x-6">
      <label className="block">
        <span className="text-xs uppercase tracking-[0.18em] text-[#0E6287]/60">Нэр *</span>
        <input name="name" value={fields.name} onChange={(event) => setFields({ ...fields, name: event.target.value })} required maxLength={120} autoComplete="name" className={inputClass} />
      </label>
      <label className="block">
        <span className="text-xs uppercase tracking-[0.18em] text-[#0E6287]/60">Байгууллага</span>
        <input name="company" value={fields.company} onChange={(event) => setFields({ ...fields, company: event.target.value })} maxLength={160} autoComplete="organization" className={inputClass} />
      </label>
      <label className="block md:col-span-2">
        <span className="text-xs uppercase tracking-[0.18em] text-[#0E6287]/60">Утас эсвэл и-мэйл *</span>
        <input name="contact" value={fields.contact} onChange={(event) => setFields({ ...fields, contact: event.target.value })} required maxLength={160} autoComplete="email" className={inputClass} />
      </label>
      <label className="block md:col-span-2">
        <span className="text-xs uppercase tracking-[0.18em] text-[#0E6287]/60">Таны хүсэлт *</span>
        <textarea
          name="message"
          value={fields.message}
          onChange={(event) => setFields({ ...fields, message: event.target.value })}
          required
          minLength={5}
          maxLength={3000}
          rows={3}
          placeholder="Ямар бүтээгдэхүүн, хэдэн ширхэг, хэзээ хэрэгтэй вэ?"
          className={`${inputClass} resize-none`}
        />
      </label>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <div className="flex flex-col gap-3 md:col-span-2 md:flex-row md:items-center md:justify-between">
        <div aria-live="polite" className="text-sm text-red-700">
          {state.status === "error" && (
            <>
              <p>{state.message}</p>
              <a href="mailto:weavewebhq@gmail.com?subject=Dansran%20request" className="mt-2 inline-block underline">И-мэйлээр илгээх</a>
            </>
          )}
        </div>
        <button
          type="submit"
          disabled={pending}
          className="rounded-full bg-[#0E6287] px-8 py-3 text-sm uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-85 disabled:opacity-50"
        >
          {pending ? "Илгээж байна..." : "Илгээх"}
        </button>
      </div>
    </form>
  )
}
