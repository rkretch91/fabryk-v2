import React, { useState } from 'react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const FORM_ENDPOINT = '/success'

  const handleSubmit = (event) => {
    event.preventDefault()
    setTimeout(() => {
      setSubmitted(true)
    }, 100)
  }

  if (submitted) {
    return (
      <>
        <div className="text-md">
          <h4 className="text-sm">(Thank you! We promise we won't be spammy bitches.)</h4>
        </div>
      </>
    )
  }
  return (
    <div className="mb-3 pt-0">
      <form
        netlify-honeypot="bot-field"
        data-netlify="true"
        name="contact"
        className="mb-4 flex w-full gap-4 rounded pt-6"
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <div className="mb-3 pt-0">
          <input
            type="email"
            placeholder="Just need an email, sexy."
            name="email"
            className="border-0 bg-white bg-white px-3 py-3 text-sm text-indigo placeholder-gray-400 outline-none focus:outline-none"
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <button
            className="mr-1 mb-1 rounded bg-emerald-300 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-blue-600"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
      <h4 className="text-sm">(Don't worry, this is for our newsletter!)</h4>
    </div>
  )
}
