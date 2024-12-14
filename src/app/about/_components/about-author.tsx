import Section, { SectionBody, SectionTitle } from '@/components/section'

export default function AboutAuthor() {
  return (
    <Section>
      <SectionTitle title='Meet the Mind Behind the Code' />
      <SectionBody>
        <p className='text-base lg:text-lg'>
          Hi there! Meet Rachmat Syahputra, a passionate full-stack web
          developer born in 1999 in East Borneo, Indonesia. He’s obsessed with
          all things JavaScript. Rachmat makes coding look like a piece of cake
          (spoiler: it’s not, but don’t tell him that). This blog is his
          playground—a place to share quirky coding tips and fun experiments.
          <br />
          <br />
          Rachmat is currently enhancing his expertise in full-stack web
          development at Purwadhika Digital Technology School. Proudly building
          practical skills through real-world projects and collaborative
          learning, He thrives in team environments where ideas are shared, and
          solutions are crafted together.
        </p>
      </SectionBody>
    </Section>
  )
}
