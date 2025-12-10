'use client'

import React from 'react'
import { Navbar } from '@/components/Navbar/Navbar'
import { Hero } from '@/components/Hero/Hero'
import { About } from '@/components/About/About'
import { Mission } from '@/components/Mission/Mission'
import { Legacy } from '@/components/Legacy/Legacy'
import { Variants } from '@/components/Variants/Variants'
import { Gallery } from '@/components/Gallery/Gallery'
import { WhyTerracotta } from '@/components/WhyTerracotta/WhyTerracotta'
import { Blog } from '@/components/Blog/Blog'
import { Footer } from '@/components/Footer/Footer'

export default function HomePage() {
  const handleSearch = (query: string) => {
    console.log('Search query:', query)
    // TODO: Integrate with search API
  }

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <Hero />
      <About />
      <Mission />
      <Legacy />
      <Variants />
      <Gallery />
      <WhyTerracotta />
      <Blog />
      <Footer />
    </>
  )
}
