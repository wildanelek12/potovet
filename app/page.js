import Image from 'next/image'
import styles from './page.module.css'
import { Montserrat } from '@next/font/google'
import { FaBeer } from 'react-icons/fa';
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export default function Home() {
  return (
    <div className={`${montserrat.variable} h-auto flex font-sans px-12 py-2 flex-col flex-1`}>
      <div className='flex flex-col justify-center items-center flex-1 '>
        <Image
          src={"https://st3.depositphotos.com/1017228/18878/i/950/depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg"}
          width={1200}
          height={1200}
          className="rounded-full w-32 h-32 object-cover mt-8"
        />
        <p className='mt-4 font-bold text-xl '>M Wildan Romiza</p>
        <p className='font-normal text-sm '>Programmer</p>
        <div className='flex-row space-x-4 mt-4'>
          <button className='bg-[#0CADB7] flex-row text-white px-4 py-2 text-sm font-medium rounded-xl '>Edit Profil</button>
          <button className='bg-[#FE7263] text-white px-4 py-2 text-sm font-medium rounded-xl '>Copy Link</button>
        </div>
      </div>
      <div className='flex space-x-8 mt-16 flex-row '>
        <p>All</p>
        <p>Web</p>
        <p>Mobile</p>
        <p>Paper</p>
      </div>
      <div className='flex h-0.5 mt-4 bg-gray-200 w-full' />
      <div className='flex-1 w-full mt-4 grid grid-cols-6 gap-8'>
        <div className='flex-col rounded-md'>
          <Image
            src={"https://st3.depositphotos.com/1017228/18878/i/950/depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg"}
            width={1200}
            height={1200}
            className="rounded-lg w-fit h-fit object-cover mt-8"
          />
          <div className='bg-[#0CADB7] rounded-b-lg p-4'>
            <p className='text-white font-semibold tracking-normal'>Website Hitung Otomatis</p>
            <p className='text-white font-normal text-sm mt-2 tracking-normal'>Website Perhitungan otomatis gaji karyawan yang .... Read More.</p>
            <p className='text-white font-thin text-xs mt-2 tracking-normal'>at 20 Feb 2022</p>
          </div>
        </div>
        <div className='flex-col rounded-md'>
          <Image
            src={"https://st3.depositphotos.com/1017228/18878/i/950/depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg"}
            width={1200}
            height={1200}
            className="rounded-lg w-fit h-fit object-cover mt-8"
          />
          <div className='bg-[#0CADB7] rounded-b-lg p-4'>
            <p className='text-white font-semibold tracking-normal'>Website Hitung Otomatis</p>
            <p className='text-white font-normal text-sm mt-2 tracking-normal'>Website Perhitungan otomatis gaji karyawan yang .... Read More.</p>
            <p className='text-white font-thin text-xs mt-2 tracking-normal'>at 20 Feb 2022</p>
          </div>
        </div>
        <div className='flex-col rounded-md'>
          <Image
            src={"https://st3.depositphotos.com/1017228/18878/i/950/depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg"}
            width={1200}
            height={1200}
            className="rounded-lg w-fit h-fit object-cover mt-8"
          />
          <div className='bg-[#0CADB7] rounded-b-lg p-4'>
            <p className='text-white font-semibold tracking-normal'>Website Hitung Otomatis</p>
            <p className='text-white font-normal text-sm mt-2 tracking-normal'>Website Perhitungan otomatis gaji karyawan yang .... Read More.</p>
            <p className='text-white font-thin text-xs mt-2 tracking-normal'>at 20 Feb 2022</p>
          </div>
        </div>
        <div className='flex-col rounded-md'>
          <Image
            src={"https://st3.depositphotos.com/1017228/18878/i/950/depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg"}
            width={1200}
            height={1200}
            className="rounded-lg w-fit h-fit object-cover mt-8"
          />
          <div className='bg-[#0CADB7] rounded-b-lg p-4'>
            <p className='text-white font-semibold tracking-normal'>Website Hitung Otomatis</p>
            <p className='text-white font-normal text-sm mt-2 tracking-normal'>Website Perhitungan otomatis gaji karyawan yang .... Read More.</p>
            <p className='text-white font-thin text-xs mt-2 tracking-normal'>at 20 Feb 2022</p>
          </div>
        </div>
        <div className='flex-col rounded-md'>
          <Image
            src={"https://st3.depositphotos.com/1017228/18878/i/950/depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg"}
            width={1200}
            height={1200}
            className="rounded-lg w-fit h-fit object-cover mt-8"
          />
          <div className='bg-[#0CADB7] rounded-b-lg p-4'>
            <p className='text-white font-semibold tracking-normal'>Website Hitung Otomatis</p>
            <p className='text-white font-normal text-sm mt-2 tracking-normal'>Website Perhitungan otomatis gaji karyawan yang .... Read More.</p>
            <p className='text-white font-thin text-xs mt-2 tracking-normal'>at 20 Feb 2022</p>
          </div>
        </div>
        <div className='flex-col rounded-md'>
          <Image
            src={"https://st3.depositphotos.com/1017228/18878/i/950/depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg"}
            width={1200}
            height={1200}
            className="rounded-lg w-fit h-fit object-cover mt-8"
          />
          <div className='bg-[#0CADB7] rounded-b-lg p-4'>
            <p className='text-white font-semibold tracking-normal'>Website Hitung Otomatis</p>
            <p className='text-white font-normal text-sm mt-2 tracking-normal'>Website Perhitungan otomatis gaji karyawan yang .... Read More.</p>
            <p className='text-white font-thin text-xs mt-2 tracking-normal'>at 20 Feb 2022</p>
          </div>
        </div>
      </div>

    </div >
  )
}
