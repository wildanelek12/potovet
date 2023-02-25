import Image from 'next/image'
import styles from './page.module.css'

import { FaBeer } from 'react-icons/fa';
import Link from 'next/link';


export default function Home() {
  return (
    <div className=''>
      <div id='hero' className='flex flex-row bg-primary py-32  '>
        <div class="basis-1/2 self-center">
          <div className='flex flex-col justify-center pl-48 pr-32'>
            <h1 className='text-4xl font-semibold tracking-wider leading-tight text-white'>The <span className='text-secondary font-bold'>Future</span> Of Portofolio Here !</h1>
            <p className='text-base font-normal mt-6 leading-relaxed text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <button className='w-fit bg-secondary px-4 py-2 text-white font-medium rounded-md shadow-xl mt-4'>Get Started</button>
          </div>
        </div>
        <div class="basis-2/3 px-16">
          <Image
            src="/hero-2.svg"
            width={1200}
            height={1200}
            className="w-3/4 h-full object-cover self-center "
          />
        </div>
      </div>
      <div id='company' className='flex flex-col px-64 py-16'>
        <p className='text-center font-bold text-2xl'>Trusted by 5,000 Companies Worldwide</p>
        <div className='grid grid-cols-5 gap-5 mt-8'>
          <Image
            src="/gojek.svg"
            width={200}
            height={200}
            className="object-cover self-center fill-blue-500 "
          />
          <Image
            src="/gojek.svg"
            width={200}
            height={200}
            color={"white"}
            className="object-cover self-center "
          />
          <Image
            src="/gojek.svg"
            width={200}
            height={200}
            className="object-cover self-center "
          />
          <Image
            src="/gojek.svg"
            width={200}
            height={200}
            className="object-cover self-center "
          />
          <Image
            src="/gojek.svg"
            width={200}
            height={200}
            className="object-cover self-center "
          />



        </div>
      </div>
    </div>
  )
}
