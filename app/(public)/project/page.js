import Image from 'next/image'
import { Montserrat } from '@next/font/google'
import { FaBeer } from 'react-icons/fa';
import Link from 'next/link';
import IconButtonDescription from '@/components/icon-project-desc';
import SelectCategoryProject from '@/components/select-category-project';
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export default function Home() {
  return (
    <div className={` h-auto flex font-sans  flex-col flex-1`}>
      <div className='flex flex-col justify-center items-center flex-1 py-16'
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0,0.7), rgba(0, 0, 0,0.3)),url("/bg-profile.jpg")`,
          height: 'fit-content',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain,cover',
        }}>
        <Image
          src={"https://st3.depositphotos.com/1017228/18878/i/950/depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg"}
          width={1200}
          height={1200}
          className="rounded-full w-36 h-36 object-cover "
        />
        <p className='mt-4 font-bold text-4xl text-white tracking-wide'>M Wildan Romiza</p>
        <p className='font-semibold text-sm text-white '>Programmer</p>
        <p className='font-normal text-normal text-white w-1/4 text-center mt-4'>I am a front-end programmer who is experienced and skilled in using Next.js technology. I enjoy creating attractive and easy-to-use user interfaces using a combination of HTML, CSS, and JavaScript. </p>
        <div className='flex flex-row space-x-4 mt-4 '>
          <IconButtonDescription src="/skill.svg" />
          <IconButtonDescription src="/work.svg" />
          <IconButtonDescription src="/education.svg" />
          <IconButtonDescription src="/interest.svg" />
          <IconButtonDescription src="/sosmed.svg" />
        </div>
      </div>
      <div className='font-medium text-center mt-8'>
        <p className='font-extrabold text-xl'>Portofolio's</p>
      </div>
      <div className='flex h-0.5 mt-4 bg-gray-200 w-auto mx-16' />
      <div className='flex-1 w-full mt-4 grid grid-cols-6 gap-8 px-16'>
        <Link href={'/project/2'}>
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
        </Link>
        <Link href={'/project/2'}>
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
        </Link>
        <Link href={'/project/2'}>
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
        </Link>
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
        <Link href={'/project/2'}>
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
        </Link>
        <Link href={'/project/2'}>
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
        </Link>
      </div>

    </div >
  )
}
