import React from 'react'

interface GalleryProps {
  title?: string
  description?: string
  images?: string[]
  className?: string
}

export function Gallery({
  title = 'showcase',
  description = 'Terracotta has this effortless way of making spaces feel alive— grounded, yet elevated. It&aposs warm, it&aposs honest, and it tells a story. Every piece made by our artisans is a labor of love, a piece of home or art in the garden, luminous products bring a sun-baked charm that pairs beautifully with modern minimalism, rustic warmth, and dark sensory calm.',
  images = Array.from({ length: 12 }, (_, i) => `/images/gallery/${i + 1}.jpg`),
  className = '',
}: GalleryProps) {
  return (
    <section className={`relative w-full bg-[#F5EDE4] py-16 md:py-24 lg:py-32 ${className}`}>
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#7D2E3E] mb-12 md:mb-16 font-(family-name:--font-zagora)">
          {title}
        </h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-2xl"
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="max-w-3xl">
          <p className="text-[#7D2E3E] text-sm md:text-base leading-relaxed font-geist">
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}
