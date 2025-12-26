'use client'

import React from 'react'
import { motion } from 'framer-motion'

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
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl text-[#7D2E3E] mb-12 md:mb-16 font-(family-name:--font-zagora)"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative aspect-square overflow-hidden rounded-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <motion.img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        {/* Description */}
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[#7D2E3E] text-sm md:text-base leading-relaxed ">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
