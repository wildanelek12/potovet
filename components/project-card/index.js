import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProjectCard() {
    return (
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
    )
}
