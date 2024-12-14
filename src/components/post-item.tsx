'use client'

import Image from 'next/image'
import { formatDate } from '@/lib/utils'
import { useRouter } from 'next/navigation'

interface PostItemProps {
  slug: string
  title: string
  description: string
  image: string
  createdAt: Date
}

export default function PostItem({
  slug,
  title,
  description,
  image,
  createdAt
}: PostItemProps) {
  const router = useRouter()

  return (
    <div
      onClick={() => router.push(`blogs/${slug}`)}
      className='flex cursor-pointer justify-between gap-4 border-b border-light py-6 md:gap-8'
    >
      <div className='flex flex-col gap-2'>
        <h3 className='text-xl font-bold leading-snug md:text-2xl'>{title}</h3>
        <div className='h-full'>
          <p className='line-clamp-2 text-dark-gray md:text-lg'>
            {description}
          </p>
        </div>
        <span className='text-xs text-gray md:text-[13px]'>
          {formatDate(createdAt)}
        </span>
      </div>
      <Image
        src={image}
        alt='Post image'
        width={144}
        height={144}
        style={{ objectFit: 'cover' }}
        className='h-[80px] w-[80px] md:h-[144px] md:w-[144px]'
      />
    </div>
  )
}
