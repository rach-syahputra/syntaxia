type CategoriesType = {
  label: string
  description: string
}

export const filter: string[] = ['Newest', 'Oldest']

export const popularCategories: string[] = ['react', 'typescript']

export const allCategories: string[] = [
  'react',
  'javascript',
  'typescript',
  'nextjs'
]

export const categories: CategoriesType[] = [
  {
    label: 'react',
    description:
      'Dive into the world of React, a powerful JavaScript library for creating user-friendly interfaces.'
  },
  {
    label: 'javascript',
    description:
      'Master the language of the web with tips and tricks to write cleaner, smarter, and more efficient code.'
  },
  {
    label: 'typescript',
    description:
      'Enhance your JavaScript with type safety and modern tools for more robust and reliable development.'
  },
  {
    label: 'nextjs',
    description:
      'Build fast, scalable, and SEO-friendly React apps effortlessly with Next.js essentials.'
  }
]
