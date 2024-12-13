import Image from 'next/image'

export default function Hero() {
  return (
    <div className='bg-light flex h-auto w-full items-center justify-center py-16'>
      <div className='flex w-full max-w-full flex-col items-center justify-between gap-8 px-4 md:flex-row md:px-8 lg:max-w-screen-xl lg:gap-16 xl:gap-24'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-4xl font-bold leading-snug md:text-5xl md:leading-snug lg:text-6xl lg:leading-snug'>
            Code, Coffe and Creativity
          </h1>
          <p className='text-dark-gray'>
            Your ultimate one-stop blog for all things coding—tips, tricks,
            tutorials, and a sprinkle of creativity to make your web development
            journey smarter, smoother, and way more fun!
          </p>
        </div>
        <Image
          src='/hero.svg'
          alt='hero image'
          width={300}
          height={300}
          loading='eager'
          className='h-auto w-full max-w-[240px] lg:max-w-[340px]'
        />
      </div>
    </div>
  )
}
