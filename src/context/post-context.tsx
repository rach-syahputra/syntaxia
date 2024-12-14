/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState
} from 'react'
import { posts as blogPosts } from '@/lib/data/blog-posts'

interface IPost {
  title: string
  description: string
  category: string
  imageUrl: string
  createdAt: Date
}

type filterType = 'Newest' | 'Oldest'

interface IPostContext {
  posts: IPost[] | null
  filter: filterType
  setFilter: Dispatch<SetStateAction<filterType>>
  category: string
  setCategory: Dispatch<SetStateAction<string>>
  isLoading: boolean
}

const PostContext = createContext<IPostContext | undefined>(undefined)

const PostProvider = ({ children }: { children: React.ReactNode }) => {
  const [posts, setPosts] = useState<IPost[] | null>(null)
  const [filter, setFilter] = useState<filterType>('Newest')
  const [category, setCategory] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    updatePosts()
  }, [filter, category])

  useEffect(() => {
    console.log('posts updated')
  }, [posts])

  const updatePosts = () => {
    setIsLoading(true)

    if (category) {
      setPosts(blogPosts.filter((post) => post.category === category))
    } else {
      setPosts(blogPosts)
    }

    setIsLoading(false)
  }

  return (
    <PostContext.Provider
      value={{ posts, filter, setFilter, category, setCategory, isLoading }}
    >
      {children}
    </PostContext.Provider>
  )
}

const usePost = (): IPostContext => {
  const context = useContext(PostContext)
  if (context === undefined) {
    throw new Error('usePost must be used within a PostProvider')
  }
  return context
}

export { type IPost, type filterType, PostContext, PostProvider, usePost }
