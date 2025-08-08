// app/layout.tsx

import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FOURAETHIOPIA',
  description: 'A full educational platform for Ethiopian university students.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="description"
          content="A full educational platform for Ethiopian university students. Access quizzes, notes, and materials after verification."
        />
      </head>
      <body>{children}</body>
    </html>
  )
}