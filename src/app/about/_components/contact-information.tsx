import Section, { SectionBody, SectionTitle } from '@/components/section'

export default function ContactInformation() {
  return (
    <Section>
      <SectionTitle title='Let’s Connect and Code Together!' />
      <SectionBody>
        <p className='text-base lg:text-lg'>
          Got a question, a coding tip, or just want to say hi? Rachmat is
          always excited to hear from you! Connect with him through any of the
          links below to get in touch and chat about code, coffee, or whatever’s
          on your mind.
        </p>
      </SectionBody>
    </Section>
  )
}
