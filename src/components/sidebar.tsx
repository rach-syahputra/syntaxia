export default function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div className='sticky top-0 hidden h-fit w-full flex-col gap-8 p-8 lg:col-span-3 lg:flex'>
      {children}
    </div>
  )
}
