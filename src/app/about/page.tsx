import AboutAuthor from './_components/about-author'
import BlogHistory from './_components/blog-history'
import ContactInformation from './_components/contact-information'
import MissionAndVision from './_components/mission-and-vision'

export default function Page() {
  return (
    <main className='mx-auto mb-16 flex w-full max-w-screen-md flex-col gap-12 py-4 md:py-8'>
      <BlogHistory />
      <AboutAuthor />
      <MissionAndVision />
      <ContactInformation />
    </main>
  )
}
