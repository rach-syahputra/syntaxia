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
  const { isLoading, posts, filter } = usePost()
  const [visiblePostsCount, setVisiblePostsCount] =
    useState<number>(itemsPerPage)

  const showMorePosts = () => {
    setVisiblePostsCount((prevCount) => prevCount + itemsPerPage)
  }

  const sortedPosts = posts?.sort((a, b) => {
    const dateA = new Date(a.createdAt).getTime()
    const dateB = new Date(b.createdAt).getTime()
    return filter === 'Newest' ? dateB - dateA : dateA - dateB
  })

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
          sortedPosts &&
          sortedPosts.length > 0 &&
          sortedPosts
            .slice(0, visiblePostsCount)
            .map((post, index) => <PostItem key={index} {...post} />)
        )}
      </div>

      {sortedPosts && visiblePostsCount < sortedPosts.length && (
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
