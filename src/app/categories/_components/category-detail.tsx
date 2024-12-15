'use client'

import { usePost } from '@/context/post-context'
import { categories } from '@/lib/data/categories'

export default function CategoryDetail() {
  const { category: selectedCategory } = usePost()

  const category = categories.find((c) => c.label === selectedCategory)

  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      {category ? (
        <>
          <h2 className='text-2xl font-bold md:text-3xl lg:text-4xl'>
            {category.label}
          </h2>
          <p className='text-base text-dark-gray lg:text-lg'>
            {category.description}
          </p>
        </>
      ) : (
        <>
          <h2 className='text-2xl font-bold md:text-3xl lg:text-4xl'>
            explore category
          </h2>
          <p className='text-base text-dark-gray lg:text-lg'>
            Select one of the categories above.
          </p>
        </>
      )}
    </div>
  )
}
