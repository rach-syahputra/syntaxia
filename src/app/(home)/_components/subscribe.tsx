import Section, { SectionBody, SectionTitle } from '@/components/section'

export default function Subscribe() {
  return (
    <Section>
      <SectionTitle title='Subscribe to Newsletter' />
      <SectionBody className='flex flex-col gap-4'>
        <p className='lg:text-lg'>
          Don&rsquo;t miss a byte! Subscribe for updates
        </p>
        <div className='flex'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='email' className='sr-only'>
              Email
            </label>
            <input
              type='email'
              className='w-[200px] rounded-l-md border border-dark-gray px-3 py-1 focus:shadow-[0_0_2px_1px_rgba(0,0,0,0.2)] focus:outline-none lg:w-[350px] lg:text-lg'
              placeholder='user@example.com'
              required
            />
          </div>
          <button className='rounded-r-md bg-dark px-3 py-1 text-white'>
            Subscribe
          </button>
        </div>
      </SectionBody>
    </Section>
  )
}
