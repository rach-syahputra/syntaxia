import { posts } from '@/lib/data/blog-posts'
import PostItem from '@/components/post-item'

export default function FeaturedPosts() {
  return (
    <section className='flex w-full flex-col'>
      <h2 className='text-3xl font-bold md:text-4xl'>
        <span className='text-gray'>Featured</span> Posts
      </h2>
      <div className='flex flex-col'>
        {posts.length > 0 &&
          posts.map((post, index) => <PostItem key={index} {...post} />)}
      </div>
    </section>
  )
}
