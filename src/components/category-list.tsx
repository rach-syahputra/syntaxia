/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { usePost } from '@/context/post-context'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

interface CategoryListProps {
  title: string
  categories: string[]
  active?: string
}

export default function CategoryList({
  title,
  categories,
  active = ''
}: CategoryListProps) {
  const { updatePosts } = usePost()
  const [activeCategory, setActiveCategory] = useState<string>(active)

  useEffect(() => {
    updatePosts(activeCategory)
  }, [activeCategory])

  const handleCategory = (category?: string) => {
    if (activeCategory === category) {
      setActiveCategory('')
    } else {
      setActiveCategory(category || '')
    }
  }

  return (
    <div className='flex flex-col gap-2'>
      <h4 className='text-lg font-bold'>{title}</h4>
      <ul className='flex flex-wrap gap-2'>
        {categories.length > 0 ? (
          categories.map((category, index) => (
            <li
              key={index}
              onClick={() => handleCategory(category.toLocaleLowerCase())}
              className={cn(
                'cursor-pointer select-none rounded-full bg-light px-4 py-2 text-sm transition-all duration-300 ease-in-out hover:bg-light-gray',
                {
                  'bg-dark text-white hover:bg-dark':
                    activeCategory === category.toLowerCase()
                }
              )}
            >
              {category}
            </li>
          ))
        ) : (
          <p className='text-sm text-gray'>No categories.</p>
        )}
      </ul>
    </div>
  )
}
