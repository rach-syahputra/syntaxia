'use client'

import Image from 'next/image'
import { IPost as PostItemProps } from '@/lib/data/blog-posts'
import { formatDate } from '@/lib/utils'
import { useRouter } from 'next/navigation'

export default function CategoryPostItem({
  id,
  title,
  description,
  imageUrl,
  createdAt
}: PostItemProps) {
  const router = useRouter()

  return (
    <div
      onClick={() => router.push(`blogs/${id}`)}
      className='flex cursor-pointer gap-4 border-b border-light p-4 py-6 md:gap-8'
    >
      <div className='flex flex-col gap-2'>
        <Image
          src={imageUrl}
          alt='Post image'
          width={200}
          height={200}
          style={{ objectFit: 'cover' }}
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
