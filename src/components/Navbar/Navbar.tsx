'use client'

import { useState, useEffect, FormEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

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

        {/* Desktop Navigation Items - Hidden on Mobile */}
        <ul className="hidden md:flex items-center gap-6 md:gap-8 text-white">
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 hover:opacity-80 transition-opacity"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu - Slides in from right */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#250405] shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden z-1000 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
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
            <button
              className="text-white p-2 hover:opacity-80 transition-opacity"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Navigation Items */}
          <ul className="flex flex-col gap-2 px-6 py-8 text-white">
            {navItems.map((item) => (
              <li key={item.label} className="flex items-center">
                {item.hasSearch ? (
                  <div className="w-full flex flex-col items-start gap-2 py-4">
                    <form onSubmit={handleSearchSubmit} className="relative w-full">
                      <input
                        type="search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setIsSearchActive(true)}
                        onBlur={() => setIsSearchActive(false)}
                        placeholder={item.label}
                        className="w-full text-sm tracking-wide bg-transparent border-none text-white placeholder-white/70 focus:outline-none pb-2"
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
                    className="text-base font-medium tracking-wide hover:opacity-80 transition-opacity py-4 block w-full"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </nav>
  )
}
