'use client'

import Image from 'next/image'
import { formatDate } from '@/lib/utils'
import { useRouter } from 'next/navigation'

interface CategoryPostItemProps {
  slug: string
  title: string
  description: string
  image: string
  createdAt: Date
}

export default function CategoryPostItem({
  slug,
  title,
  description,
  image,
  createdAt
}: CategoryPostItemProps) {
  const router = useRouter()

  return (
    <div
      onClick={() => router.push(`blogs/${slug}`)}
      className='flex cursor-pointer border-b border-light py-6 md:gap-8 lg:p-4'
    >
      <div className='flex flex-col gap-2'>
        <Image
          src={image}
          alt='Post image'
          width={200}
          height={200}
          style={{ objectFit: 'cover' }}
          loading='eager'
          className='h-auto w-full'
        />
        <h3 className='text-xl font-bold leading-snug md:text-2xl'>{title}</h3>
        <p className='line-clamp-2 text-dark-gray md:text-lg'>{description}</p>
        <span className='text-xs text-gray md:text-[13px]'>
          {formatDate(createdAt)}
        </span>
      </div>
    </div>
  )
}
