'use client'

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import PostItem from '@/components/post-item'
import { IPost } from '@/lib/data/blog-posts'

interface PostListProps {
  posts: IPost[]
  itemsPerPage?: number
}

export default function PostList({ posts, itemsPerPage = 4 }: PostListProps) {
  const [visiblePostsCount, setVisiblePostsCount] =
    useState<number>(itemsPerPage)

  const showMorePosts = () => {
    setVisiblePostsCount((prevCount) => prevCount + itemsPerPage)
  }

  return (
    <div className='flex flex-col gap-4'>
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
    </div>
  )
}
