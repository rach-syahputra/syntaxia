'use client'

import Image from 'next/image'
import { usePost } from '@/context/post-context'
import { formatDate } from '@/lib/utils'

export default function PostDetail({ id }: { id: number }) {
  const { posts } = usePost()

  const post = posts?.find((post) => post.id === id)

  return (
    <article className='flex w-full flex-col gap-16'>
      {post ? (
        <>
          <div className='flex flex-col gap-2'>
            <h1 className='text-2xl font-bold md:text-3xl lg:text-4xl'>
              {post.title}
            </h1>
            <span className='text-xs text-gray md:text-sm'>
              {formatDate(post.createdAt)}
            </span>
            <div className='w-fit rounded-full bg-light px-4 py-2 text-sm'>
              {post.category}
            </div>
            <Image
              src='/post-image.svg'
              alt='Post image'
              width={768}
              height={768}
              style={{ objectFit: 'cover' }}
              className='h-auto w-full'
            />
            <p className='text-base lg:text-lg'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur ut quo sint veniam accusamus illum odio nostrum!
              Alias adipisci, veritatis quibusdam mollitia sequi exercitationem
              architecto? Quia, consequuntur minus nemo architecto magnam
              perspiciatis quis? Dicta libero, perferendis doloremque id quam
              accusamus fuga eum, alias, temporibus sunt cumque obcaecati labore
              aperiam quis!
            </p>
          </div>
          <div className='flex flex-col gap-2'>
            <h2 className='text-lg font-bold md:text-xl lg:text-2xl'>
              1. Advanced Concurrent Rendering: Making UIs More Responsive
            </h2>
            <p className='text-base lg:text-lg'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur ut quo sint veniam accusamus illum odio nostrum!
              Alias adipisci, veritatis quibusdam mollitia sequi exercitationem
              architecto? Quia, consequuntur minus nemo architecto magnam
              perspiciatis quis? Dicta libero, perferendis doloremque id quam
              accusamus fuga eum, alias, temporibus sunt cumque obcaecati labore
              aperiam quis!
            </p>
          </div>
          <div className='flex flex-col gap-2'>
            <h2 className='text-lg font-bold md:text-xl lg:text-2xl'>
              2. Streaming Suspense for Real-Time Data Fetching
            </h2>
            <p className='text-base lg:text-lg'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur ut quo sint veniam accusamus illum odio nostrum!
              Alias adipisci, veritatis quibusdam mollitia sequi exercitationem
              architecto? Quia, consequuntur minus nemo architecto magnam
              perspiciatis quis? Dicta libero, perferendis doloremque id quam
              accusamus fuga eum, alias, temporibus sunt cumque obcaecati labore
              aperiam quis!
            </p>
          </div>
        </>
      ) : (
        <p className='text-gray'>Loading...</p>
      )}
    </article>
  )
}
