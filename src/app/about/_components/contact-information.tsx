import Link from 'next/link'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Section, { SectionBody, SectionTitle } from '@/components/section'

export default function ContactInformation() {
  return (
    <Section>
      <SectionTitle title='Let’s Connect and Code Together!' />
      <SectionBody className='flex flex-col gap-4'>
        <p className='text-base lg:text-lg'>
          Got a question, a coding tip, or just want to say hi? Rachmat is
          always excited to hear from you! Connect with him through any of the
          links below to get in touch and chat about code, coffee, or whatever’s
          on your mind.
        </p>

        <div className='flex items-center gap-4'>
          <Link
            href='https://api.whatsapp.com/send?phone=6281347580400&text=Hello%2C%20I%27d%20like%20to%20work%20with%20you!wa.link/o1758o'
            target='_blank'
            aria-label='whatsapp'
          >
            <FontAwesomeIcon icon={faWhatsapp} className='h-8 w-8 text-dark' />
          </Link>
          <Link
            href='mailto:rach.syahputra@gmail.com'
            target='_blank'
            aria-label='email'
          >
            <FontAwesomeIcon icon={faEnvelope} className='h-8 w-8 text-dark' />
          </Link>
          <Link
            href='https://www.instagram.com/rach.syahputra/'
            target='_blank'
            aria-label='instagram'
          >
            <FontAwesomeIcon icon={faInstagram} className='h-8 w-8 text-dark' />
          </Link>
        </div>
      </SectionBody>
    </Section>
  )
}
