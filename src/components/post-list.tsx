/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import PostItemSkeleton from './post-item-skeleton'
import PostItem from '@/components/post-item'
import { usePost } from '@/context/post-context'

interface PostListProps {
  itemsPerPage?: number
}

export default function PostList({ itemsPerPage = 4 }: PostListProps) {
  const { isLoading, posts } = usePost()
  const [visiblePostsCount, setVisiblePostsCount] =
    useState<number>(itemsPerPage)

  const showMorePosts = () => {
    setVisiblePostsCount((prevCount) => prevCount + itemsPerPage)
  }

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col'>
        {isLoading ? (
          <div className='flex flex-col'>
            <PostItemSkeleton />
            <PostItemSkeleton />
            <PostItemSkeleton />
            <PostItemSkeleton />
          </div>
        ) : (
          posts &&
          posts.length > 0 &&
          posts
            .slice(0, visiblePostsCount)
            .map((post, index) => <PostItem key={index} {...post} />)
        )}
      </div>

      {posts && visiblePostsCount < posts.length && (
        <button
          onClick={showMorePosts}
          className='mx-auto flex items-center gap-2 text-sm'
        >
          Show more <FontAwesomeIcon icon={faChevronDown} className='h-3 w-3' />
        </button>
      )}
    </div>
  )
}
