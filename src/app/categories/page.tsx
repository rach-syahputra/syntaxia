import CategoryList, { CategoryBody } from '@/components/category-list'
import CategoryDetail from './_components/category-detail'
import CategoryPostList from './_components/category-post-list'
import { allCategories } from '@/lib/data/categories'

export default function Page() {
  return (
    <main className='p mx-auto w-full max-w-screen-xl p-4 md:p-8'>
      <div className='flex flex-col items-center justify-center gap-8'>
        <CategoryList className='flex items-center justify-center'>
          <CategoryBody categories={allCategories} />
        </CategoryList>
        <CategoryDetail />
        <CategoryPostList />
      </div>
    </main>
  )
}
