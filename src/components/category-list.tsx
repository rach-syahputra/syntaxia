/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useEffect } from 'react'
import { usePost } from '@/context/post-context'
import { cn } from '@/lib/utils'

interface CategoryListProps {
  children: React.ReactNode
  className?: string
}

interface CategoryListTitleProps {
  children: React.ReactNode
}

interface CategoryListBodyProps {
  categories: string[]
}

export default function CategoryList({
  children,
  className
}: CategoryListProps) {
  return <div className={cn('flex flex-col gap-2', className)}>{children}</div>
}

export function CategoryTitle({ children }: CategoryListTitleProps) {
  return <h4 className='text-lg font-bold'>{children}</h4>
}

export function CategoryBody({ categories }: CategoryListBodyProps) {
  const { isLoading, category: activeCategory, setCategory } = usePost()

  useEffect(() => {
    setCategory('')
  }, [])

  const handleCategory = (category: string) => {
    if (activeCategory === category) {
      setCategory('')
    } else {
      setCategory(category)
    }
  }

  return (
    <ul className='flex flex-wrap gap-2'>
      {isLoading ? (
        <div className='flex gap-2'>
          <div className='h-8 w-20 animate-pulse rounded-full bg-light'></div>
          <div className='h-8 w-20 animate-pulse rounded-full bg-light'></div>
          <div className='h-8 w-20 animate-pulse rounded-full bg-light'></div>
        </div>
      ) : categories.length > 0 ? (
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
  )
}
