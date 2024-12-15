import FilterList from '@/components/filter-list'
import SearchBar from './search-bar'
import CategoryList, {
  CategoryBody,
  CategoryTitle
} from '@/components/category-list'
import { allCategories, popularCategories } from '@/lib/data/categories'

export default function TopBar() {
  return (
    <div className='flex flex-col gap-6 p-4 md:gap-8 md:px-8 lg:hidden'>
      <div className='flex flex-wrap gap-6'>
        <FilterList />
        <CategoryList>
          <CategoryTitle>Popular categories</CategoryTitle>
          <CategoryBody categories={popularCategories} />
        </CategoryList>
        <CategoryList>
          <CategoryTitle>All categories</CategoryTitle>
          <CategoryBody categories={allCategories} />
        </CategoryList>
      </div>
      <SearchBar />
    </div>
  )
}
