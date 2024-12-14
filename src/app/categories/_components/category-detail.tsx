'use client'

import { usePost } from '@/context/post-context'

export default function CategoryDetail() {
  const { category } = usePost()
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      {category ? (
        <>
          <h2 className='text-2xl font-bold md:text-3xl lg:text-4xl'>
            {category}
          </h2>
          <p className='text-base text-gray lg:text-lg'>
            Dive into the world of React, a powerful JavaScript library for
            creating user-friendly interfaces.
          </p>
        </>
      ) : (
        <>
          <h2 className='text-2xl font-bold md:text-3xl lg:text-4xl'>
            explore category
          </h2>
          <p className='text-base text-gray lg:text-lg'>
            Select one of the categories above.
          </p>
        </>
      )}
    </div>
  )
}
