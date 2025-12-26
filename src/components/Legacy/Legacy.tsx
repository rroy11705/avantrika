'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface LegacySection {
  title: string
  description: string
}

interface LegacyProps {
  mainTitle?: string
  sections?: LegacySection[]
  className?: string
}

export function Legacy({
  mainTitle = 'Avantrika & Our Legacy',
  sections = [
    {
      title: 'Background',
      description:
        'The foundation of this initiative traces back to 1982 led by a visionary individual with a deep passion for art and cultural preservation. His lifelong commitment to artistic expression laid the groundwork for a meaningful and enduring movement.',
    },
    {
      title: 'Commitment to Bengal Craftsmanship',
      description:
        "From its inception, the initiative has been dedicated to supporting and promoting Bengal's rich craftsmanship. Through consistent efforts, it has aimed to preserve traditional skills while providing artisans with sustained opportunities for recognition and growth.",
    },
    {
      title: 'Community Building Efforts',
      description:
        'A core objective has been to bring people from across Bengal together, fostering a sense of shared identity and cultural pride. Over the years, these efforts have gradually evolved into a cohesive and collaborative community.',
    },
    {
      title: 'Legacy and Continuity',
      description:
        'A core objective has been to bring people from across Bengal together, fostering a sense of shared identity and cultural pride. Over the years, these efforts have gradually evolved into a cohesive and collaborative community.',
    },
    {
      title: 'New Leadership and Expansion',
      description:
        'In 2018, leadership transitioned to his son, Abhishek Bhowmick, who has since taken an active and strategic role. Under his guidance, the community has expanded significantly through focused initiatives and an accelerated approach to growth and engagement.',
    },
  ],
  className = '',
}: LegacyProps) {
  // State for accordion - only one section open at a time
  const [openSectionIndex, setOpenSectionIndex] = useState<number | null>(0)

  // Toggle function for accordion
  const toggleSection = (index: number) => {
    setOpenSectionIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  // Animation variants for accordion content
  const contentVariants = {
    collapsed: {
      height: 0,
      opacity: 0,
      transition: {
        height: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
        opacity: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
      },
    },
    expanded: {
      height: 'auto',
      opacity: 1,
      transition: {
        height: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
        opacity: { duration: 0.3, delay: 0.1, ease: [0.22, 1, 0.36, 1] },
      },
    },
  }

  // Animation variants for chevron rotation
  const chevronVariants = {
    collapsed: { rotate: 0, transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] } },
    expanded: { rotate: 180, transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] } },
  }

  return (
    <section className={`relative aspect-1380/850 w-full flex items-center justify-center bg-[#F5EDE4] ${className}`}>
      <div className="container mx-auto px-8 md:px-16 lg:px-24 py-16 md:py-24 lg:py-32">
        {/* Main Title */}
        <motion.h2
          className="text-4xl md:text-5xl lg:text-7xl font-(family-name:--font-zagora) text-[#7D2E3E] mb-12 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {mainTitle}
        </motion.h2>

        {/* Desktop View - Grid Layout */}
        <div className="hidden md:block space-y-10 md:space-y-12 lg:space-y-16">
          {sections.map((section, index) => (
            <motion.div
              key={`desktop-${index}`}
              className="grid grid-cols-12 gap-6 md:gap-8 lg:gap-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="col-span-4">
                <h3 className="text-2xl text-[#7D2E3E] font-medium leading-tight">{section.title}</h3>
              </div>
              <div className="col-span-8">
                <p className="text-[#7D2E3E] text-base leading-relaxed">{section.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View - Accordion Layout */}
        <div className="md:hidden divide-y divide-[#7D2E3E]/20">
          {sections.map((section, index) => {
            const isOpen = openSectionIndex === index
            return (
              <div key={`mobile-${index}`}>
                {/* Accordion Header */}
                <button
                  onClick={() => toggleSection(index)}
                  aria-expanded={isOpen}
                  aria-controls={`legacy-content-${index}`}
                  className="flex items-center justify-between w-full py-4 text-left"
                >
                  <h3 id={`legacy-title-${index}`} className="text-xl text-[#7D2E3E] font-medium leading-tight pr-4">
                    {section.title}
                  </h3>
                  <motion.div variants={chevronVariants} animate={isOpen ? 'expanded' : 'collapsed'}>
                    <ChevronDown className="h-6 w-6 text-[#7D2E3E] shrink-0" aria-hidden="true" />
                  </motion.div>
                </button>

                {/* Accordion Content */}
                <motion.div
                  id={`legacy-content-${index}`}
                  role="region"
                  aria-labelledby={`legacy-title-${index}`}
                  variants={contentVariants}
                  initial={index === 0 ? 'expanded' : 'collapsed'}
                  animate={isOpen ? 'expanded' : 'collapsed'}
                  className="overflow-hidden"
                >
                  <div className="pb-4">
                    <p className="text-[#7D2E3E] text-sm leading-relaxed">{section.description}</p>
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
