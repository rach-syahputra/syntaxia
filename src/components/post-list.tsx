'use client'

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import PostItem from '@/components/post-item'
import { IPost } from '@/lib/data/blog-posts'

interface PostListProps {
  title: string
  posts: IPost[]
  itemsPerPage?: number
}

export default function PostList({
  title,
  posts,
  itemsPerPage = 4
}: PostListProps) {
  // split the title for styling purpose
  const [titleFirstWord, ...remainingTitleWords] = title.split(' ')

  const [visiblePostsCount, setVisiblePostsCount] =
    useState<number>(itemsPerPage)

  const showMorePosts = () => {
    setVisiblePostsCount((prevCount) => prevCount + itemsPerPage)
  }

  return (
    <section className='flex w-full flex-col gap-4'>
      <h2 className='text-3xl font-bold md:text-4xl'>
        <span className='text-gray'>{titleFirstWord}</span>{' '}
        {remainingTitleWords.join(' ')}
      </h2>

      <div className='flex flex-col'>
        {posts &&
          posts.length > 0 &&
          posts
            .slice(0, visiblePostsCount)
            .map((post, index) => <PostItem key={index} {...post} />)}
      </div>

      {visiblePostsCount < posts.length && (
        <button
          onClick={showMorePosts}
          className='mx-auto flex items-center gap-2 text-sm'
        >
          Show more <FontAwesomeIcon icon={faChevronDown} className='text-xs' />
        </button>
      )}
    </section>
  )
}
