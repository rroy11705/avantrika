'use client'

import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

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
    'Every creation at Avantrika is bespoke, tailored with meticulous detail, and designed to reflect individual identity. We take pride in collaborating with exceptionally skilled artisans across the country, empowering them with fair opportunities, dignified livelihoods, and the recognition they rightfully deserve.',
    'Our mission is to redefine luxury by honoring authenticity, craftsmanship, and human value — because a home should feel like a soulful extension of one’s journey, not just a space filled with objects. Our vision is to build a global legacy rooted in Indian excellence, where every masterpiece from Avantrika becomes a symbol of heritage, purpose, and timeless beauty. Avantrika — crafting legacy, one masterpiece at a time.',
  ],
  illustration = '/images/mission-illustration.png',
  className = '',
}: MissionProps) {
  return (
    <section className={`relative aspect-375/1175 md:aspect-1380/700 w-full flex items-end justify-center bg-[#6A1F21] overflow-hidden ${className}`}>
      <div className="container mx-auto px-12.5 md:px-0 py-12.5 md:py-24 lg:py-32 md:pb-0!">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div className="md:col-span-5 text-[#FFEAD2] space-y-8 md:pb-24 lg:pb-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-3xl md:text-6xl lg:text-5xl font-(family-name:--font-zagora) leading-[97%]">
                {title}
                <br />
                {subtitle}
              </h2>
            </motion.div>

            <div className="space-y-6">
              {paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="text-[#FFEAD2] text-sm md:text-base leading-relaxed "
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.2 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <motion.div
              className='mt-12.5 md:mt-20'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href="/variants"
                className="w-full flex items-center justify-center gap-2 bg-[#FFEAD2] text-[#250405] border border-[#250405] rounded-lg px-8 py-4 text-xl tracking-wider transition-colors duration-300"
              >
                Get To Know More
              </Link>
            </motion.div>
          </div>

          {/* Right side - Illustration with dome mask */}
          <motion.div
            className="md:col-span-7 relative flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-full">
              <motion.img
                src={illustration}
                alt="Avantrika Mission"
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
