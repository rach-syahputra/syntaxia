import { Suspense } from 'react'
import BlogPosts from './_components/blog-posts'
import SearchBar from './_components/search-bar'
import PostItemSkeleton from '@/components/post-item-skeleton'
import Sidebar from '@/components/sidebar'
import FilterList from '@/components/filter-list'
import CategoryList from '@/components/category-list'
import { allCategories, popularCategories } from '@/lib/data/categories'

export default function Page() {
  return (
    <>
      <main className='mx-auto w-full max-w-screen-xl'>
        <div className='relative grid lg:grid-cols-8'>
          <div className='mb-16 flex flex-col gap-10 border-r border-light px-4 py-8 md:gap-12 md:px-8 lg:col-span-5 lg:gap-16'>
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
              <BlogPosts />
            </Suspense>
          </div>
          <Sidebar>
            <SearchBar />
            <FilterList />
            <CategoryList
              title='Popular Categories'
              categories={popularCategories}
            />
            <CategoryList title='All Categories' categories={allCategories} />
          </Sidebar>
        </div>
      </main>
    </>
  )
}
