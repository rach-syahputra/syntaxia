import PostList from '@/components/post-list'
import Section, { SectionBody, SectionTitle } from '@/components/section'

export default function FeaturedPosts() {
  return (
    <Section>
      <SectionTitle title='Featured Posts' />
      <SectionBody>
        <PostList />
      </SectionBody>
    </Section>
  )
}
