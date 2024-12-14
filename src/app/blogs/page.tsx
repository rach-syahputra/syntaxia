import BlogPosts from './_components/blog-posts'
import SearchBar from './_components/search-bar'
import Sidebar from '@/components/sidebar'
import FilterList from '@/components/filter-list'
import CategoryList, {
  CategoryBody,
  CategoryTitle
} from '@/components/category-list'
import { allCategories, popularCategories } from '@/lib/data/categories'

export default function Page() {
  return (
    <main className='mx-auto w-full max-w-screen-xl'>
      <div className='relative grid lg:grid-cols-8'>
        <div className='mb-16 flex flex-col gap-10 border-r border-light px-4 py-8 md:gap-12 md:px-8 lg:col-span-5 lg:gap-16'>
          <BlogPosts />
        </div>
        <Sidebar>
          <SearchBar />
          <FilterList />
          <CategoryList>
            <CategoryTitle>Popular categories</CategoryTitle>
            <CategoryBody categories={popularCategories} />
          </CategoryList>
          <CategoryList>
            <CategoryTitle>All categories</CategoryTitle>
            <CategoryBody categories={allCategories} />
          </CategoryList>
        </Sidebar>
      </div>
    </main>
  )
}
