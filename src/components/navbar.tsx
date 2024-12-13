import Image from 'next/image'
import Link from 'next/link'
import DesktopNavbarMenu from './desktop-navbar-menu'
import MobileNavbarMenu from './mobile-navbar-menu'

export default function Navbar() {
  return (
    <nav className='border-light flex h-[80px] items-center justify-between border-b px-8 md:h-[100px]'>
      <Link href='/'>
        <Image
          src='/syntaxia.svg'
          alt='Syntaxia logo'
          width={135}
          height={40}
          className='h-auto w-[120px] lg:w-[135px]'
        />
      </Link>
      <MobileNavbarMenu />
      <DesktopNavbarMenu />
    </nav>
  )
}
