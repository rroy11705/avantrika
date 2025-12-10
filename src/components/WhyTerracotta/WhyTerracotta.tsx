import React from 'react'

interface WhyTerracottaProps {
  className?: string
}

export function WhyTerracotta({ className = '' }: WhyTerracottaProps) {
  return (
    <section className={`relative w-full bg-[#F5EDE4] py-16 md:py-24 lg:py-32 ${className}`}>
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left side - Logo (Sticky) */}
          <div className="lg:sticky lg:top-32 lg:self-start flex items-center justify-center h-fit">
            <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden">
              <img
                src="/images/avantrika.jpg"
                alt="Avantrika Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right side - Content (Scrollable) */}
          <div className="space-y-75">
            {/* Section 1 */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-4xl text-[#A42F12] font-(family-name:--font-zagora) leading-tight">
                Why terracotta works everywhere ?
              </h2>
              <p className="text-[#A42F12] text-sm md:text-base leading-relaxed font-geist">
                Terracotta's earthy tone instantly softens a space. It adds warmth without
                overpowering, and its natural texture brings depth that glossy, factory-perfect
                materials just can't match. The result: interiors that feel welcoming and
                landscapes that feel curated, not constructed.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-6">
              <h3 className="text-4xl md:text-4xl text-[#A42F12] font-(family-name:--font-zagora) leading-tight">
                The vibe: effortlessly premium, always earthy
              </h3>
              <p className="text-[#A42F12] text-sm md:text-base leading-relaxed font-geist">
                The vibe: effortlessly premium, always earthy Terracotta doesn't chase trends—it
                outlasts them. It's the kind of material that makes a space feel curated, calm, and
                connected to the earth—whether you're styling a modern living room or designing a
                lush outdoor nook.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
