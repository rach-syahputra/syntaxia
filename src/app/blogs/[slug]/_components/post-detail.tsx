'use client'

import Image from 'next/image'
import { usePost } from '@/context/post-context'
import { formatDate } from '@/lib/utils'
import RichText from '@/components/rich-text'

export default function PostDetail({ slug }: { slug: string }) {
  const { posts } = usePost()

  const post = posts?.find((post) => post.slug === slug)

  return (
    <article className='flex w-full flex-col gap-16'>
      {post ? (
        <div className='flex flex-col gap-4'>
          <h1 className='text-2xl font-bold md:text-3xl lg:text-4xl'>
            {post.title}
          </h1>
          <span className='text-xs text-dark-gray md:text-sm'>
            {formatDate(post.createdAt)}
          </span>
          <div className='w-fit rounded-full bg-light px-4 py-2 text-sm'>
            {post.category}
          </div>
          <Image
            src={post.image}
            alt='Post image'
            width={600}
            height={600}
            loading='eager'
            style={{ objectFit: 'cover' }}
            className='h-auto w-full'
          />
          <div className='text-base lg:text-lg'>
            <RichText document={post.body} />
          </div>
        </div>
      ) : (
        <p className='text-gray'>Loading...</p>
      )}
    </article>
  )
}
