'use client'

import { useState, useEffect, FormEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface NavItem {
  label: string
  href: string
  hasSearch?: boolean
}

interface NavbarProps {
  logoSrc?: string
  navItems?: NavItem[]
  onSearch?: (query: string) => void
  className?: string
}

const DEFAULT_NAV_ITEMS: NavItem[] = [
  { label: 'SEARCH', href: '#', hasSearch: true },
  { label: 'CATEGORY', href: '/coming-soon' },
  { label: 'BLOGS', href: '/coming-soon' },
  { label: 'CONTACT', href: '/coming-soon' },
]

export function Navbar({
  logoSrc = '/images/logo.png',
  navItems = DEFAULT_NAV_ITEMS,
  onSearch,
  className = '',
}: NavbarProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchActive, setIsSearchActive] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (onSearch && searchQuery.trim()) {
      onSearch(searchQuery.trim())
    }
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#2504054D]' : 'bg-transparent'
      } ${className}`}
    >
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-16 py-6">
        {/* Logo Section */}
        <div className="shrink-0">
          <Link href="/" className="block">
            <Image
              src={logoSrc}
              alt="Avantrika Logo"
              width={150}
              height={50}
              className="h-10 md:h-12 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Navigation Items */}
        <ul className="flex items-center gap-6 md:gap-8 text-white">
          {navItems.map((item) => (
            <li key={item.label} className="flex items-center">
              {item.hasSearch ? (
                <div className="w-60 flex flex-col items-start gap-1">
                  <form onSubmit={handleSearchSubmit} className="relative">
                    <input
                      type="search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onFocus={() => setIsSearchActive(true)}
                      onBlur={() => setIsSearchActive(false)}
                      placeholder={item.label}
                      className="w-60 text-sm md:text-base tracking-wide bg-transparent border-none text-white placeholder-white focus:outline-none"
                      aria-label="Search"
                    />
                    <span
                      className={`block h-0.5 w-full transition-all duration-300 ${
                        isSearchActive || searchQuery ? 'bg-white' : 'bg-white/50'
                      }`}
                      aria-hidden="true"
                    />
                  </form>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="text-sm md:text-base font-medium tracking-wide hover:opacity-80 transition-opacity"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
