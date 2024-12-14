import { cn } from '@/lib/utils'
import Link from 'next/link'

type NavLinkProps = {
  href: string
  isActive?: boolean
  children: React.ReactNode
}

export default function NavLink({
  href,
  isActive = false,
  children
}: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn('lg:text-lg', {
        'font-bold': isActive
      })}
    >
      {children}
    </Link>
  )
}
