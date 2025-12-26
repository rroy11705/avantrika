export interface Variant {
  name: string
  description: string
  image: string
  price: number
  currency: string
  category: string
}

export interface VariantsProps {
  variants?: Variant[]
  autoplayDelay?: number
  className?: string
}
