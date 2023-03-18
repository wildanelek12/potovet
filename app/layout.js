import './globals.css'
import Link from 'next/link'
import { Montserrat } from '@next/font/google'
import Image from 'next/image'


const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: "fallback", // <--
})


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${montserrat.variable}  font-sans`}>
        <nav className={`${montserrat.variable} font-sans py-6 px-16 shadow-md flex items-center bg-white text-white`}>
          <Link href="/">
            <Image
              src="/logo.svg"
              width={1200}
              height={1200}

              className="w-32 object-contain self-center mr-8"
            />
          </Link>
          <div className='flex-1 flex-row space-x-12'>
            <Link href={"/project "} className="text-base font-medium text-[#6E6F70]">Home</Link>
            <Link href={"/project"} className="text-base font-medium text-[#6E6F70]">Pricing</Link>
            <Link href={"/project"} className="text-base font-medium text-[#6E6F70]">About</Link>
          </div>
          <div className='flex flex-row space-x-3'>
            <Image
              className='rounded-full w-10 h-10'
              src="https://picsum.photos/id/237/400/400"
              alt="Picture of the author"
              width={32}

              height={32}
            />
            <button className='bg-secondary text-white px-4 py-2 text-sm font-medium rounded-md '>Logout</button>
          </div>
        </nav>
        <div >
          {children}
        </div>
      </body>
    </html >
  )
}
