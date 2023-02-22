import React, { useState } from 'react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [state, setState] = useState()

  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  const handleSubmit = (event) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...state }),
    })
      .then(() => console.log('Success'))
      .catch((error) => console.log(error))

    event.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (e) => {
    setState({
      ...state,
      [e.currentTarget.id]: e.currentTarget.value,
    })
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
        onSubmit={handleSubmit}
        method="POST"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <div className="mb-3 pt-0">
          <input
            type="email"
            id="email"
            placeholder="Just need an email, sexy."
            name="email"
            onChange={handleChange}
            className="border-0 bg-white bg-white px-3 py-3 text-sm text-indigo placeholder-gray-400 outline-none focus:outline-none"
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <button
            className="mr-1 mb-1 rounded bg-emerald-300 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-blue-600"
            type="submit"
          >
            Subscribe
          </button>
        </div>
      </form>
      <h4 className="text-sm">(Don't worry, this is for our newsletter!)</h4>
    </div>
  )
}
