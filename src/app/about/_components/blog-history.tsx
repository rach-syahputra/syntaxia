import Section, { SectionBody, SectionTitle } from '@/components/section'

export default function BlogHistory() {
  return (
    <Section>
      <SectionTitle title='How It All Started' />
      <SectionBody>
        <p className='text-base lg:text-lg'>
          This blog was created with a simple yet powerful idea: to help web
          developers find small-scale coding tips while improving my own skills
          along the way. What started as a passion project quickly became a
          space to share knowledge and connect with fellow developers. Through
          writing and exploring new ideas, this blog has become a journey of
          continuous learning and growth
        </p>
      </SectionBody>
    </Section>
  )
}
