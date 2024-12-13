import { IPost } from '@/lib/data/blog-posts'
import PostItem from '@/components/post-item'

interface PostListProps {
  title: string
  posts: IPost[]
}

export default function PostList({ title, posts }: PostListProps) {
  // split the title for styling purpose
  const [titleFirstWord, ...remainingTitleWords] = title.split(' ')

  return (
    <section className='flex w-full flex-col'>
      <h2 className='text-3xl font-bold md:text-4xl'>
        <span className='text-gray'>{titleFirstWord}</span>{' '}
        {remainingTitleWords.join(' ')}
      </h2>
      <div className='flex flex-col'>
        {posts.length > 0 &&
          posts.map((post, index) => <PostItem key={index} {...post} />)}
      </div>
    </section>
  )
}
