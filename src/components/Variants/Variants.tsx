'use client'

import React, { useEffect, useRef, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import variantsData from '@/../../variants.json'
import type { Variant, VariantsProps } from '@/types/variants'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function Variants({
  title = 'variants categorisation',
  variants = variantsData as Variant[],
  autoplayDelay = 5000,
  className = '',
}: VariantsProps) {
  // IntersectionObserver state
  const [isInView, setIsInView] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  // Embla carousel setup
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      skipSnaps: false,
      dragFree: false,
    },
    [
      Autoplay({
        delay: autoplayDelay,
        stopOnInteraction: false,
        playOnInit: false,
      }),
    ]
  )

  // IntersectionObserver effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.3 }
    )
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    return () => observer.disconnect()
  }, [])

  // Autoplay control effect
  useEffect(() => {
    if (!emblaApi) return

    const autoplay = emblaApi.plugins().autoplay
    if (!autoplay) return

    if (isInView) {
      autoplay.play()
    } else {
      autoplay.stop()
    }
  }, [emblaApi, isInView])

  // Empty state
  if (!variants || variants.length === 0) {
    return null
  }

  return (
    <section
      ref={sectionRef}
      className={`relative w-full bg-[#250405] py-16 md:py-24 lg:py-32 overflow-hidden ${className}`}
    >
      <div className="relative">
        {/* Carousel */}
        <div className="pt-25" ref={emblaRef}>
          <div className="flex ml-[250px]">
            {variants.map((variant, index) => (
              <VariantCard key={index} variant={variant} />
            ))}
          </div>
        </div>

        {/* Title - Positioned absolutely to overlap carousel */}
        <motion.div
          className="absolute top-0 left-0 right-0 pointer-events-none"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="container mx-auto">
            <h2
              className="text-5xl md:text-6xl lg:text-[145px] text-[#9B1F00] font-(family-name:--font-zagora) leading-[97%]"
              style={{ mixBlendMode: 'plus-lighter' }}
            >
              {title}
            </h2>
          </div>
        </motion.div>
      </div>

      <motion.div
        className='container mx-auto space-y-6 pl-44 mt-25'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <h3 className="text-3xl text-[#FFEAD2] leading-tight">
          Other Categories
        </h3>
        <div className='flex flex-row items-center justify-start gap-6'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="/coming-soon"
              className="w-fit flex items-center justify-center gap-2 text-[#FFEAD280] border border-[#FFEAD280] rounded-lg px-6 py-4 text-base tracking-wider transition-colors duration-300"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 12H18" stroke="#FFEAD280" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 18V6" stroke="#FFEAD280" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

              Terracotta Pebbles
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="/coming-soon"
              className="w-fit flex items-center justify-center gap-2 text-[#FFEAD280] border border-[#FFEAD280] rounded-lg px-6 py-4 text-base tracking-wider transition-colors duration-300"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 12H18" stroke="#FFEAD280" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 18V6" stroke="#FFEAD280" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

              Lamps
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="/coming-soon"
              className="w-fit flex items-center justify-center gap-2 text-[#FFEAD280] border border-[#FFEAD280] rounded-lg px-6 py-4 text-base tracking-wider transition-colors duration-300"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 12H18" stroke="#FFEAD280" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 18V6" stroke="#FFEAD280" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

              Wall Arts
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="/coming-soon"
              className="w-fit flex items-center justify-center gap-2 text-[#FFEAD280] border border-[#FFEAD280] rounded-lg px-6 py-4 text-base tracking-wider transition-colors duration-300"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 12H18" stroke="#FFEAD280" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 18V6" stroke="#FFEAD280" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

              Ornamentations & Motif Tiles
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

// VariantCard component
function VariantCard({ variant }: { variant: Variant }) {
  return (
    <div className="flex-[0_0_80%] md:flex-[0_0_80%] lg:flex-[0_0_80%] min-w-0 pl-4 md:pl-6">
      <div className="overflow-hidden">
        {/* Image Container */}
        <div className="relative aspect-880/420 rounded-3xl overflow-hidden">
          <img
            src={variant.image}
            alt={variant.name}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-row items-center justify-baseline p-6 space-y-4">
          <div className='flex-1 space-y-2'>
            <h3 className="text-4xl text-[#FFEAD2] leading-tight font-(family-name:--font-zagora)">{variant.name}</h3>
            <p className="text-[#FFEAD2] text-base leading-relaxed font-geist">
              {variant.description}
            </p>
          </div>
          <div className='flex-1'>
            <Link
              href="/coming-soon"
              className="ml-auto w-fit flex items-center justify-center gap-2 bg-[#FFEAD2] text-[#250405] border border-[#250405] rounded-lg px-8 py-4 text-xl tracking-wider transition-colors duration-300"
            >
              Explore
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.03 12.53L13.03 15.53C12.88 15.68 12.69 15.75 12.5 15.75C12.31 15.75 12.12 15.68 11.97 15.53C11.68 15.24 11.68 14.76 11.97 14.47L13.69 12.75H8.5C8.09 12.75 7.75 12.41 7.75 12C7.75 11.59 8.09 11.25 8.5 11.25H13.69L11.97 9.53C11.68 9.24 11.68 8.76 11.97 8.47C12.26 8.18 12.74 8.18 13.03 8.47L16.03 11.47C16.32 11.76 16.32 12.24 16.03 12.53Z" fill="#250405"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
