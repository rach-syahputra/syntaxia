import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className='min-h-screen w-screen'>{children}</div>
      <Footer />
    </>
  )
}
