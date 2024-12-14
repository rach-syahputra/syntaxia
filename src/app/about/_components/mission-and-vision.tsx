import Section, { SectionBody, SectionTitle } from '@/components/section'

export default function MissionAndVision() {
  return (
    <Section>
      <SectionTitle title='Coding with Purpose, Growing with Passion' />
      <SectionBody>
        <p className='text-base lg:text-lg'>
          Mission: To uncover those tiny, overlooked coding gems that developers
          usually skip past. Whether it’s a sneaky JavaScript trick or a smarter
          way to debug, this blog is all about making your coding life easier
          and a little more exciting.
          <br />
          <br />
          Vision: To create a space where developers can laugh, learn, and level
          up—one quirky tip at a time. The goal? To turn the small stuff into
          big wins and build a community that knows how to have fun while
          coding.
        </p>
      </SectionBody>
    </Section>
  )
}
