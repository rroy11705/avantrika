'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-[#F5EDE4] flex flex-col items-center justify-center px-8">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Logo */}
        <Link href="/" className="inline-block mb-8">
          <Image
            src="/images/logo.png"
            alt="Avantrika Logo"
            width={200}
            height={66}
            className="h-16 md:h-20 w-auto mx-auto"
          />
        </Link>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl text-[#7D2E3E] font-(family-name:--font-zagora) leading-tight">
          Coming Soon
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-[#7D2E3E] ">
          We're crafting something special for you.
        </p>

        {/* Description */}
        <p className="text-base md:text-lg text-[#7D2E3E]/80  max-w-xl mx-auto">
          This page is currently under construction. Our artisans are working diligently to bring
          you an experience that celebrates heritage, craftsmanship, and timeless beauty.
        </p>

        {/* Back to Home Button */}
        <div className="pt-8">
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-[#7D2E3E] text-white rounded-lg text-base font-medium hover:bg-[#6A2634] transition-colors duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
