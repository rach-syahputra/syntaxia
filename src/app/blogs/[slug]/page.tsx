import PostDetail from './_components/post-detail'

export default async function Page({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  return (
    <div className='mx-auto mb-16 w-full max-w-screen-md px-4 py-8 md:px-8'>
      <PostDetail slug={(await params).slug} />
    </div>
  )
}
