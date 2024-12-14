/* eslint-disable @typescript-eslint/no-explicit-any */
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
import contentfulClient from '@/contentful/contentful-client'
import { Document as RichTextDocument } from '@contentful/rich-text-types'
import {
  IContentfulAsset,
  TypeBlogPostSkeleton
} from '@/contentful/types/blog-post-types'

interface IPost {
  title: string
  slug: string
  description: string
  image: string
  createdAt: Date
  category: string
  body: RichTextDocument
}

type filterType = 'Newest' | 'Oldest'

interface IPostContext {
  posts: any[] | undefined
  filter: filterType
  setFilter: Dispatch<SetStateAction<filterType>>
  category: string
  setCategory: Dispatch<SetStateAction<string>>
  isLoading: boolean
}

const PostContext = createContext<IPostContext | undefined>(undefined)

const PostProvider = ({ children }: { children: React.ReactNode }) => {
  const [posts, setPosts] = useState<any[] | undefined>()
  const [filter, setFilter] = useState<filterType>('Newest')
  const [category, setCategory] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    fetchPosts()
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [filter, category])

  const fetchPosts = async () => {
    setIsLoading(true)

    try {
      const data = await contentfulClient.getEntries<TypeBlogPostSkeleton>({
        content_type: 'blogPost',
        order: [`${filter === 'Newest' ? '-sys.createdAt' : 'sys.createdAt'}`]
      })

      if (category) {
        setPosts(
          data.items
            .map((item) => ({
              ...item.fields,
              image: `https:${(item.fields.image as IContentfulAsset)?.fields.file.url}`,
              createdAt: item.sys.createdAt
            }))
            .filter((item) => item.category === category)
        )
      } else {
        setPosts(
          data.items.map((item) => ({
            ...item.fields,
            image: `https:${(item.fields.image as IContentfulAsset)?.fields.file.url}`,
            createdAt: item.sys.createdAt
          }))
        )
      }
    } catch (error) {
      console.log(error)
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
