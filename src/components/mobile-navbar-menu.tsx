'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import NavLink from './nav-link'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { navLinks } from '@/lib/data/nav-links'

export default function MobileNavbarMenu() {
  const pathname = usePathname()
  const [openMenu, setOpenMenu] = useState<boolean>(false)

  return (
    <>
      <div className='h-8 w-8 md:hidden'>
        <FontAwesomeIcon
          icon={faBars}
          className='h-full w-full'
          onClick={() => setOpenMenu(true)}
        />
      </div>

      <div
        className={`${openMenu ? 'translate-x-0' : '-translate-x-full'} fixed left-0 top-0 h-screen w-screen bg-white transition-all duration-300 ease-in-out md:hidden`}
      >
        <div className='border-light flex h-[80px] items-center justify-between border-b px-8'>
          <Image
            src='/syntaxia.svg'
            alt='Syntaxia logo'
            width={120}
            height={40}
            className='h-auto w-[120px]'
          />
          <FontAwesomeIcon
            icon={faXmark}
            className='h-8 w-8'
            onClick={() => setOpenMenu(false)}
          />
        </div>
        <ul className='flex flex-col gap-16 p-8'>
          {navLinks.map((navLink, index) => (
            <li key={index}>
              <NavLink href={navLink.href} isActive={navLink.href === pathname}>
                {navLink.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
