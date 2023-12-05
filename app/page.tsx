import { ArrowDownIcon, CloseIcon, ErrorIcon, FacebookIcon } from '@/components/icons'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <ErrorIcon className='h-10 w-10'/>
      <CloseIcon className='h-10 w-10' fill='#000'/>
      <FacebookIcon className='h-10 w-10' fill='000'/>
      <ArrowDownIcon className='h-10 w-10'/>
    </main>
  )
}
