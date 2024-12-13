import Hero from './_components/hero'
import Sidebar from '@/components/sidebar'
import CategoryList from '@/components/category-list'
import PostList from '@/components/post-list'
import { posts } from '@/lib/data/blog-posts'
import { popularCategories } from '@/lib/data/categories'

export default function Home() {
  return (
    <>
      <Hero />
      <main className='mx-auto w-full max-w-screen-xl'>
        <div className='relative grid lg:grid-cols-8'>
          <div className='border-light flex flex-col border-r px-4 py-8 md:px-8 lg:col-span-5'>
            <PostList title='Featured Posts' posts={posts} />
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
