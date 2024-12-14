import PostList from '@/components/post-list'
import Section, { SectionBody, SectionTitle } from '@/components/section'
import { posts } from '@/lib/data/blog-posts'

export default function FeaturedPosts() {
  return (
    <Section>
      <SectionTitle title='Featured Posts' />
      <SectionBody>
        <PostList posts={posts} itemsPerPage={4} />
      </SectionBody>
    </Section>
  )
}
