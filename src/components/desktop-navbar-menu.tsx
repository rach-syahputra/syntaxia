'use client'

import NavLink from './nav-link'
import { usePathname } from 'next/navigation'
import { navLinks } from '@/lib/data/nav-links'

export default function DesktopNavbarMenu() {
  const pathname = usePathname()

  return (
    <ul className='hidden gap-8 md:flex'>
      {navLinks.map((navLink, index) => (
        <li key={index}>
          <NavLink href={navLink.href} isActive={navLink.href === pathname}>
            {navLink.label}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}
