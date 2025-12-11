'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

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
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative overflow-hidden rounded-3xl">
              <motion.img
                src={illustration}
                alt="Avantrika craftsmanship"
                className="w-full h-full object-cover"
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </motion.div>

          {/* Right side - Content */}
          <div className="h-full flex flex-col justify-between">
            <div className='space-y-8'>
              <motion.h2
                className="text-5xl md:text-6xl lg:text-5xl font-(family-name:--font-zagora) text-[#98272A] leading-[97%]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                {title}{' '}{subtitle}
              </motion.h2>
              <div className="space-y-6">
                {description.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    className="text-[#98272A] text-sm md:text-base leading-relaxed font-geist"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: 0.3 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </div>


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={ctaLink}
                className="w-full flex items-center justify-center text-[#250405] border border-[#250405] rounded-lg px-8 py-4 text-xl tracking-wider hover:bg-[#250405] hover:text-white transition-colors duration-300"
              >
                {ctaText}
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
