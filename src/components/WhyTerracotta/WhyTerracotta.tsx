'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface WhyTerracottaProps {
  className?: string
}

export function WhyTerracotta({ className = '' }: WhyTerracottaProps) {
  return (
    <section className={`relative w-full bg-[#F5EDE4] py-16 md:py-24 lg:py-32 ${className}`}>
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left side - Logo (Sticky) */}
          <motion.div
            className="lg:sticky lg:top-32 lg:self-start flex items-center justify-center h-fit"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden">
              <img
                src="/images/avantrika.jpg"
                alt="Avantrika Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

          {/* Right side - Content (Scrollable) */}
          <div className="space-y-12.5 md:space-y-75">
            {/* Section 1 */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-4xl md:text-4xl text-[#A42F12] font-(family-name:--font-zagora) leading-tight">
                Why terracotta works everywhere ?
              </h2>
              <p className="text-[#A42F12] text-sm md:text-base leading-relaxed ">
                Terracotta's earthy tone instantly softens a space. It adds warmth without
                overpowering, and its natural texture brings depth that glossy, factory-perfect
                materials just can't match. The result: interiors that feel welcoming and
                landscapes that feel curated, not constructed.
              </p>
            </motion.div>

            {/* Section 2 */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="text-4xl md:text-4xl text-[#A42F12] font-(family-name:--font-zagora) leading-tight">
                The vibe: effortlessly premium, always earthy
              </h3>
              <p className="text-[#A42F12] text-sm md:text-base leading-relaxed ">
                The vibe: effortlessly premium, always earthy Terracotta doesn't chase trends—it
                outlasts them. It's the kind of material that makes a space feel curated, calm, and
                connected to the earth—whether you're styling a modern living room or designing a
                lush outdoor nook.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
