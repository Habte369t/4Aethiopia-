'use client'

import { useState } from 'react'

export default function RegisterPage() {
  const [form, setForm] = useState({
    fullName: '',
    university: '',
    stream: '',
    phone: '',
    email: '',
  })

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    alert('Form submitted (functionality coming soon)')
  }

  return (
    <main className="max-w-xl mx-auto mt-10 p-4 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Register to FouraEthiopia</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="fullName" placeholder="Full Name" value={form.fullName} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="text" name="university" placeholder="University Name" value={form.university} onChange={handleChange} className="w-full p-2 border rounded" required />
        <select name="stream" value={form.stream} onChange={handleChange} className="w-full p-2 border rounded" required>
          <option value="">Select Stream</option>
          <option value="Natural">Natural</option>
          <option value="Social">Social</option>
        </select>
        <input type="text" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full p-2 border rounded" required />
        <button type="submit" className="w-full bg-black text-white py-2 rounded">Register</button>
      </form>
    </main>
  )
    }
