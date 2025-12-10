import Link from 'next/link'
import React from 'react'

interface MissionProps {
  title?: string
  subtitle?: string
  paragraphs?: string[]
  illustration?: string
  className?: string
}

export function Mission({
  title = 'mission & vision',
  subtitle = '',
  paragraphs = [
    'Every creation at Avantrika is bespoke, tailored with meticulous detail, and designed to reflect individual identity. We take pride in collaborating with independent, skilled artisans across the country, empowering them with fair opportunities, dignified livelihoods, and the recognition they rightfully deserve.',
    'Our mission is to redefine luxury by honoring authenticity, craftsmanship, and human value — because a home should feel like a soulful extension of one\'s journey, not just a space filled with objects. Our vision is to build a global legacy rooted in Indian heritage, where every piece we create becomes a symbol of heritage, purpose, and timeless beauty. Avantrika — crafting legacy, one masterpiece at a time.',
  ],
  illustration = '/images/mission-illustration.jpg',
  className = '',
}: MissionProps) {
  return (
    <section className={`relative aspect-1380/700 w-full flex items-end justify-center bg-[#6A1F21] ${className}`}>
      <div className="container mx-auto py-16 md:py-24 lg:py-32 pb-0!">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div className="col-span-5 text-[#FFEAD2] space-y-8 pb-16 md:pb-24 lg:pb-32">
            <div>
              <h2 className="text-5xl md:text-6xl lg:text-5xl font-(family-name:--font-zagora) leading-[97%]">
                {title}
                <br />
                {subtitle}
              </h2>
            </div>

            <div className="space-y-6">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[#FFEAD2] text-sm md:text-base leading-relaxed font-geist"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className='mt-20'>
              <Link
                href="/variants"
                className="w-full flex items-center justify-center gap-2 bg-[#FFEAD2] text-[#250405] border border-[#250405] rounded-lg px-8 py-4 text-xl tracking-wider transition-colors duration-300"
              >
                Get To Know More
              </Link>
          </div>
          </div>

          {/* Right side - Illustration with dome mask */}
          <div className="col-span-7 relative flex justify-center items-center">
            <div
              className="relative w-full"
            >
              <img
                src={illustration}
                alt="Avantrika Mission"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
