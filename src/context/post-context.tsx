'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { posts as blogPosts } from '@/lib/data/blog-posts'

interface IPost {
  title: string
  description: string
  category: string
  imageUrl: string
  createdAt: string
}

interface IPostContext {
  posts: IPost[] | null
  updatePosts: (category?: string) => void
  isLoading: boolean
}

const PostContext = createContext<IPostContext | undefined>(undefined)

const PostProvider = ({ children }: { children: React.ReactNode }) => {
  const [posts, setPosts] = useState<IPost[] | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    setPosts(blogPosts)
    setIsLoading(false)
  }, [])

  const updatePosts = (category?: string) => {
    setIsLoading(true)

    if (category) {
      setPosts(blogPosts.filter((post) => post.category === category))
    } else {
      setPosts(blogPosts)
    }

    setIsLoading(false)
  }

  return (
    <PostContext.Provider value={{ posts, updatePosts, isLoading }}>
      {children}
    </PostContext.Provider>
  )
}

const usePost = (): IPostContext => {
  const context = useContext(PostContext)
  if (context === undefined) {
    throw new Error('useTask must be used within a PostProvider')
  }
  return context
}

export { type IPost, PostContext, PostProvider, usePost }
