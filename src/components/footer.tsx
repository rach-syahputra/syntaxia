import Link from 'next/link'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
  return (
    <footer className='flex h-auto w-full items-center justify-center bg-dark py-16'>
      <div className='flex w-full max-w-full flex-col items-center justify-between gap-8 px-4 md:flex-row md:px-8 lg:max-w-screen-xl lg:gap-16 xl:gap-24'>
        <div className='flex flex-col gap-2'>
          <h4 className='text-xl font-bold text-white md:text-2xl'>
            Syntaxia.
          </h4>
          <p className='text-sm text-white md:text-base'>
            Powered by passion and semicolons.
          </p>
        </div>
        <div className='flex flex-col items-center justify-center gap-2'>
          <h4 className='font-bold text-white md:text-lg'>Contacts</h4>
          <div className='flex items-center justify-center gap-4'>
            <Link
              href='https://api.whatsapp.com/send?phone=6281347580400&text=Hello%2C%20I%27d%20like%20to%20work%20with%20you!wa.link/o1758o'
              target='_blank'
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                className='h-6 w-6 text-white'
              />
            </Link>
            <Link href='mailto:rach.syahputra@gmail.com' target='_blank'>
              <FontAwesomeIcon
                icon={faEnvelope}
                className='h-6 w-6 text-white'
              />
            </Link>
            <Link
              href='https://www.instagram.com/rach.syahputra/'
              target='_blank'
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className='h-6 w-6 text-white'
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
