/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useEffect } from 'react'
import { filterType, usePost } from '@/context/post-context'
import { cn } from '@/lib/utils'

export default function FilterList() {
  const { filter: activeFilter, setFilter } = usePost()
  const filters: filterType[] = ['Newest', 'Oldest']

  useEffect(() => {
    setFilter('Newest')
  }, [])

  return (
    <div className='flex flex-col gap-2'>
      <h4 className='text-lg font-bold'>Filter</h4>
      <ul className='flex flex-wrap gap-2'>
        {filters.length > 0 ? (
          filters.map((filter, index) => (
            <li
              key={index}
              onClick={() => setFilter(filter)}
              className={cn(
                'cursor-pointer select-none rounded-full bg-light px-4 py-2 text-sm transition-all duration-300 ease-in-out hover:bg-light-gray',
                {
                  'bg-dark text-white hover:bg-dark': activeFilter === filter
                }
              )}
            >
              {filter}
            </li>
          ))
        ) : (
          <p className='text-sm text-gray'>No categories.</p>
        )}
      </ul>
    </div>
  )
}
