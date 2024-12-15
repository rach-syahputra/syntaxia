import BlogPosts from './_components/blog-posts'
import SearchBar from './_components/search-bar'
import Sidebar from '@/components/sidebar'
import FilterList from '@/components/filter-list'
import CategoryList, {
  CategoryBody,
  CategoryTitle
} from '@/components/category-list'
import { allCategories, popularCategories } from '@/lib/data/categories'
import TopBar from './_components/top-bar'

export default function Page() {
  return (
    <main className='mx-auto w-full max-w-screen-xl'>
      <TopBar />
      <div className='relative grid lg:grid-cols-8'>
        <div className='mb-8 flex flex-col gap-10 border-r border-light px-4 py-4 md:gap-12 md:px-8 lg:col-span-5 lg:mb-16 lg:gap-16 lg:py-8'>
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
