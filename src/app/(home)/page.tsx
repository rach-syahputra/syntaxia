import { Suspense } from 'react'
import Hero from './_components/hero'
import FeaturedPosts from './_components/featured-posts'
import Sidebar from '@/components/sidebar'
import CategoryList from '@/components/category-list'
import PostItemSkeleton from '@/components/post-item-skeleton'
import { popularCategories } from '@/lib/data/categories'

export default function Home() {
  return (
    <>
      <Hero />
      <main className='mx-auto w-full max-w-screen-xl'>
        <div className='relative grid lg:grid-cols-8'>
          <div className='flex flex-col border-r border-light px-4 py-8 md:px-8 lg:col-span-5'>
            <Suspense
              fallback={
                <div className='flex flex-col'>
                  <PostItemSkeleton />
                  <PostItemSkeleton />
                  <PostItemSkeleton />
                  <PostItemSkeleton />
                </div>
              }
            >
              <FeaturedPosts />
            </Suspense>
          </div>
          <Sidebar>
            <CategoryList
              title='Popular Categories'
              categories={popularCategories}
            />
          </Sidebar>
        </div>
      </main>
    </>
  )
}
