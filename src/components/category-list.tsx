interface CategoryListProps {
  title: string
  categories: string[]
}

export default function CategoryList({ title, categories }: CategoryListProps) {
  return (
    <div className='flex flex-col gap-2'>
      <h4 className='text-lg font-bold'>{title}</h4>
      <ul className='flex flex-wrap gap-2'>
        {categories.length > 0 ? (
          categories.map((category, index) => (
            <li
              key={index}
              className='bg-light hover:bg-light-gray cursor-pointer select-none rounded-full px-4 py-2 text-sm transition-all duration-300 ease-in-out'
            >
              {category}
            </li>
          ))
        ) : (
          <p className='text-gray text-sm'>No categories.</p>
        )}
      </ul>
    </div>
  )
}
