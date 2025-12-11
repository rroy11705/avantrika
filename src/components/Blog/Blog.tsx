'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  image: string
  link: string
}

interface BlogProps {
  title?: string
  subtitle?: string
  posts?: BlogPost[]
  className?: string
}

export function Blog({
  title = "what's happenin' out there?",
  subtitle = "Check out our latest blogs and updates about the market.\nDon't miss out. Let's your question flow like the Ganges.",
  posts = [
    {
      id: 1,
      title: 'How terracotta clay is made ready before moulding?',
      excerpt: 'While most of us have very little or no social interaction, at times it can get really frustrating.',
      image: '/images/blog/1.jpg',
      link: '/coming-soon',
    },
    {
      id: 2,
      title: 'The perfect burning/heating of the clay.',
      excerpt: 'While most of us have very little or no social interaction, at times it can get really frustrating.',
      image: '/images/blog/2.jpg',
      link: '/coming-soon',
    },
  ],
  className = '',
}: BlogProps) {
  return (
    <section className={`relative w-full bg-[#F5EDE4] py-16 md:py-24 lg:py-32 ${className}`}>
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 md:mb-16 gap-6">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#A42F12] font-(family-name:--font-zagora) leading-tight mb-4">
              {title}
            </h2>
            <p className="text-[#A42F12] text-sm md:text-base leading-relaxed font-geist whitespace-pre-line max-w-2xl">
              {subtitle}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="/coming-soon"
              className="px-8 py-4 border-2 border-[#A42F12] text-[#A42F12] rounded-lg text-base font-medium hover:bg-[#A42F12] hover:text-white transition-colors duration-300"
            >
              View All Blogs
            </Link>
          </motion.div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              className="bg-[#2A0A0D] rounded-3xl overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6">
                {/* Image */}
                <div className="w-full md:w-1/3 shrink-0">
                  <div className="relative aspect-square rounded-2xl overflow-hidden">
                    <motion.img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h3 className="text-xl md:text-2xl text-white leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-white/70 text-sm md:text-base leading-relaxed font-geist">
                      {post.excerpt}
                    </p>
                  </div>

                  <Link
                    href={post.link}
                    className="mt-6 inline-block px-6 py-3 bg-[#C84A31] text-white rounded-lg text-sm font-medium hover:bg-[#A42F12] transition-colors duration-300 w-fit"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
