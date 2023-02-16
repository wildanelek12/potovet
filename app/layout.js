import './globals.css'
import Link from 'next/link'
import { Montserrat } from '@next/font/google'
import Image from 'next/image'


const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <nav className={`${montserrat.variable} font-sans py-6 px-12 shadow-md flex items-center`}>

          <Link href={"/a"} className="font-semibold text-emerald-700 text-xl w-32 tracking-wider">LIOKEE </Link>
          <div className='flex-1 flex-row space-x-12'>
            <Link href={"/a "} className="text-sm">Home</Link>
            <Link href={"/a"} className="text-sm">Pricing</Link>
            <Link href={"/a"} className="text-sm">About</Link>
          </div>
          <div className='flex flex-row space-x-3'>
            <Image
              className='rounded-full w-10 h-10'
              src="https://picsum.photos/id/237/400/400"
              alt="Picture of the author"
              width={32}

              height={32}
            />
            <button className='bg-emerald-700 text-white px-4 py-2 text-sm font-medium rounded-md '>Logout</button>
          </div>
        </nav>
        {children}
      </body>
    </html >
  )
}
