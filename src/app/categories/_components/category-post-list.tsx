'use client'

import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import CategoryPostItem from './category-post-item'
import CategoryPostItemSkeleton from './category-post-item-skeleton'
import { usePost } from '@/context/post-context'

export default function CategoryPostList() {
  const itemsPerPage = 3
  const { isLoading, posts, setFilter } = usePost()
  const [visiblePostsCount, setVisiblePostsCount] =
    useState<number>(itemsPerPage)

  const showMorePosts = () => {
    setVisiblePostsCount((prevCount) => prevCount + itemsPerPage)
  }

  useEffect(() => {
    setFilter('Newest')
  }, [])

  return (
    <div className='flex w-full flex-col gap-4'>
      <div className='grid w-full grid-cols-2 gap-4 lg:grid-cols-3'>
        {isLoading ? (
          <>
            <CategoryPostItemSkeleton />
            <CategoryPostItemSkeleton />
            <CategoryPostItemSkeleton />
          </>
        ) : (
          posts &&
          posts.length > 0 &&
          posts
            .slice(0, visiblePostsCount)
            .map((post, index) => <CategoryPostItem key={index} {...post} />)
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
