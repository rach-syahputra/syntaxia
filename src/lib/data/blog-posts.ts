export interface IPost {
  id: number
  title: string
  description: string
  category: string
  imageUrl: string
  createdAt: Date
}

export const posts: IPost[] = [
  {
    id: 1,
    title: 'Oldest Explore React Compiler: Architecture and Optimization',
    description:
      'An in-depth look at React’s compilation mechanics and performance strategies',
    category: 'react',
    imageUrl: '/post-image.svg',
    createdAt: new Date('2024-01-15')
  },
  {
    id: 2,
    title: 'Explore React Compiler: Architecture and Optimization',
    description:
      'An in-depth look at React’s compilation mechanics and performance strategies',
    category: 'react',
    imageUrl: '/post-image.svg',
    createdAt: new Date('2024-01-16')
  },
  {
    id: 3,
    title: 'Explore React Compiler: Architecture and Optimization',
    description:
      'An in-depth look at React’s compilation mechanics and performance strategies',
    category: 'react',
    imageUrl: '/post-image.svg',
    createdAt: new Date('2024-01-18')
  },
  {
    id: 4,
    title: 'Explore React Compiler: Architecture and Optimization',
    description:
      'An in-depth look at React’s compilation mechanics and performance strategies',
    category: 'react',
    imageUrl: '/post-image.svg',
    createdAt: new Date('2024-01-15')
  },
  {
    id: 5,
    title: 'Explore React Compiler: Architecture and Optimization',
    description:
      'An in-depth look at React’s compilation mechanics and performance strategies',
    category: 'react',
    imageUrl: '/post-image.svg',
    createdAt: new Date('2024-01-15')
  },
  {
    id: 6,
    title: 'Explore React Compiler: Architecture and Optimization',
    description:
      'An in-depth look at React’s compilation mechanics and performance strategies',
    category: 'javascript',
    imageUrl: '/post-image.svg',
    createdAt: new Date('2024-01-15')
  },
  {
    id: 7,
    title: 'Explore React Compiler: Architecture and Optimization',
    description:
      'An in-depth look at React’s compilation mechanics and performance strategies',
    category: 'javascript',
    imageUrl: '/post-image.svg',
    createdAt: new Date('2024-01-15')
  },
  {
    id: 8,
    title: 'Newest Explore React Compiler: Architecture and Optimization',
    description:
      'An in-depth look at React’s compilation mechanics and performance strategies',
    category: 'typescript',
    imageUrl: '/post-image.svg',
    createdAt: new Date('2024-01-20')
  }
]
