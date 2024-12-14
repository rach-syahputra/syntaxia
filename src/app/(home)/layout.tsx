import Footer from '@/components/footer'
import Navbar from '@/components/navbar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className='w-screen'>{children}</div>
      <Footer />
    </>
  )
}
