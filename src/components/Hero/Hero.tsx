'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface HeroProps {
  className?: string
  children?: React.ReactNode
}

export function Hero({
  className = '',
  children,
}: HeroProps) {
  return (
    <section className={`relative aspect-1380/1056 min-h-screen w-full overflow-hidden ${className}`}>
      {/* Background Image Layer */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center hidden md:block"
        style={{ backgroundImage: "url('/images/hero-background.jpg')" }}
        aria-hidden="true"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{ backgroundImage: "url('/images/hero-background-mobile.jpg')" }}
        aria-hidden="true"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col justify-end md:justify-center gap-12.5 md:gap-16 aspect-376/700 md:aspect-1380/1056 min-h-screen px-12.5 md:px-16 lg:px-24 py-16 md:py-24">
        {/* Title */}
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-6xl md:text-[150px] lg:text-[150px] text-[#FFEAD2] md:text-[#FFA72680] font-(family-name:--font-zagora) lowercase leading-tight">
            the legacy that lasts
          </h1>
        </motion.div>

        {/* Description Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm md:text-base font-light leading-relaxed">
              Avantrika is a premium lifestyle brand that blends heritage with contemporary design.
              Each piece is meticulously crafted, showcasing India's finest art forms. The brand
              offers collections like sculptural home décor, terracotta blocks, and statement art
              pieces that become cherished heirlooms. For connoisseurs who invest in a story,
              history, and craftsmanship.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            className='hidden md:block'
          >
            <p className="text-sm md:text-base font-light leading-relaxed -mt-25">
              Avantrika provides bespoke, custom-made solutions for each space. Through meticulous
              research and planning, they ensure each creation complements its surroundings,
              enhancing both aesthetics and function. Every piece reflects India's artistic heritage
              while fitting the modern lifestyle.
            </p>
          </motion.div>
        </div>
        {children}
      </div>
    </section>
  )
}
