export default function PostItemSkeleton() {
  return (
    <div className='border-light flex gap-4 border-b py-6 md:gap-8'>
      <div className='flex flex-1 flex-col gap-2'>
        <div className='bg-light-gray mb-2 h-4 w-full animate-pulse md:mb-4 md:h-6'></div>
        <div className='bg-light-gray h-2 w-full animate-pulse md:h-4'></div>
        <div className='bg-light-gray h-2 w-full animate-pulse md:h-4'></div>
        <div className='bg-light-gray h-2 w-28 animate-pulse md:h-4'></div>
      </div>
      <div className='bg-light-gray h-[80px] w-[80px] animate-pulse md:h-[144px] md:w-[144px]'></div>
    </div>
  )
}
