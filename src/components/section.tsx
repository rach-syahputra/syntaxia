import { cn } from '@/lib/utils'

interface SectionProps {
  className?: string
  children: React.ReactNode
}

interface SectionTitleProps {
  title: string
}

interface SectionBodyProps {
  className?: string
  children: React.ReactNode
}

export default function Section({ className, children }: SectionProps) {
  return (
    <section className={cn('flex w-full flex-col gap-4', className)}>
      {children}
    </section>
  )
}

export function SectionTitle({ title }: SectionTitleProps) {
  // split the title for styling purpose
  const [titleFirstWord, ...remainingTitleWords] = title.split(' ')

  return (
    <h2 className='text-3xl font-bold md:text-4xl'>
      <span className='text-gray'>{titleFirstWord}</span>{' '}
      {remainingTitleWords.join(' ')}
    </h2>
  )
}

export function SectionBody({ className, children }: SectionBodyProps) {
  return <div className={cn(className)}>{children}</div>
}
