import Image from 'next/image'
import Link from 'next/link'
import DesktopNavbarMenu from './desktop-navbar-menu'
import MobileNavbarMenu from './mobile-navbar-menu'

export default function Navbar() {
  return (
    <nav className='border-light sticky top-0 z-10 flex h-[80px] items-center justify-between border-b bg-white px-8'>
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
