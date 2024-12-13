import Image from 'next/image'
import { IPost as PostItemProps } from '@/lib/data/blog-posts'

export default function PostItem({
  title,
  description,
  imageUrl,
  createdAt
}: PostItemProps) {
  return (
    <div className='border-light flex gap-4 border-b py-6 md:gap-8'>
      <div className='flex flex-col gap-2'>
        <h3 className='text-xl font-bold leading-snug md:text-2xl'>{title}</h3>
        <p className='text-dark-gray line-clamp-2 md:text-lg'>{description}</p>
        <span className='text-gray text-xs md:text-sm'>{createdAt}</span>
      </div>
      <Image
        src={imageUrl}
        alt='Post image'
        width={144}
        height={144}
        style={{ objectFit: 'cover' }}
        className='h-[80px] w-[80px] md:h-[144px] md:w-[144px]'
      />
    </div>
  )
}