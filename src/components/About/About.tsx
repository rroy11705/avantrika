import React from 'react'
import Link from 'next/link'

interface AboutProps {
  title?: string
  subtitle?: string
  description?: string[]
  ctaText?: string
  ctaLink?: string
  illustration?: string
  className?: string
}

export function About({
  title = 'about',
  subtitle = 'avantrika',
  description = [
    'Avantrika was built on a simple but powerful belief — true luxury is not mass-produced; it is crafted with intention, heritage, and heart.',
    'Born from a vision to create timeless decor that tells a story, Avantrika stands as a bridge between classic craftsmanship and contemporary elegance. We are not just a decor brand — we are custodians of culture, preserving the legacy of fine Indian artisanship while shaping the future of luxury living.',
  ],
  ctaText = 'CONTACT US',
  ctaLink = '/coming-soon',
  illustration = '/images/about-illustration.jpg',
  className = '',
}: AboutProps) {
  return (
    <section className={`relative aspect-1380/850 w-full flex items-center justify-center ${className}`}>
      <div className="container mx-auto my-auto px-8 md:px-16 lg:px-24 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Illustration */}
          <div className="relative">
            <div className="relative  overflow-hidden rounded-3xl">
              <img
                src={illustration}
                alt="Avantrika craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="h-full flex flex-col justify-between">
            <div className='space-y-8'>
              <h2 className="text-5xl md:text-6xl lg:text-5xl font-(family-name:--font-zagora) text-[#98272A] leading-[97%]">
                {title}{' '}{subtitle}
              </h2>
              <div className="space-y-6">
                {description.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-[#98272A] text-sm md:text-base leading-relaxed font-geist"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>


            <div>
              <Link
                href={ctaLink}
                className="w-full flex items-center justify-center text-[#250405] border border-[#250405] rounded-lg px-8 py-4 text-xl tracking-wider hover:bg-[#250405] hover:text-white transition-colors duration-300"
              >
                {ctaText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
