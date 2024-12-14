import { cn } from '@/lib/utils'
import Link from 'next/link'

type NavLinkProps = {
  href: string
  isActive?: boolean
  label: string
  children: React.ReactNode
}

export default function NavLink({
  href,
  isActive = false,
  label,
  children
}: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn('lg:text-lg', {
        'font-bold': isActive
      })}
      aria-label={label}
    >
      {children}
    </Link>
  )
}
