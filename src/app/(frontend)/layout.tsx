import React from 'react'
import { Geist, DM_Serif_Text } from 'next/font/google'
import localFont from 'next/font/local'
import './styles.css'

const geist = Geist({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-geist',
  display: 'swap',
})

const dmSerifText = DM_Serif_Text({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dm-serif-text',
  display: 'swap',
})

const zagora = localFont({
  src: '../../../public/fonts/zagora/Zagora.ttf',
  variable: '--font-zagora',
  display: 'swap',
})

export const metadata = {
  description: 'Avantrika - Discover timeless handcrafted treasures',
  title: 'Avantrika | Handcrafted Indian Art & Decor',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body className={`${geist.variable} ${dmSerifText.variable} ${zagora.variable}`}>
        <main>{children}</main>
      </body>
    </html>
  )
}
