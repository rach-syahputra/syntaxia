export default function CategoryPostItemSkeleton() {
  return (
    <div className='flex w-full flex-col gap-4 border-b border-light py-6 md:gap-8'>
      <div className='h-[144px] w-full animate-pulse bg-light-gray md:h-[200px] lg:h-[300px]'></div>
      <div className='flex w-full flex-col gap-2'>
        <div className='mb-2 h-4 w-full animate-pulse bg-light-gray md:mb-4 md:h-6'></div>
        <div className='h-2 w-full animate-pulse bg-light-gray md:h-4'></div>
        <div className='h-2 w-full animate-pulse bg-light-gray md:h-4'></div>
        <div className='h-2 w-28 animate-pulse bg-light-gray md:h-4'></div>
      </div>
    </div>
  )
}
