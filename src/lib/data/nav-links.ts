export interface INavLink {
  href: string
  label: string
}

export const navLinks: INavLink[] = [
  {
    href: '/',
    label: 'Home'
  },
  {
    href: '/blogs',
    label: 'Blog Posts'
  },
  {
    href: '/categories',
    label: 'Categories'
  },
  {
    href: '/about',
    label: 'About'
  }
]
