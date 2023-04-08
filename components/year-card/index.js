import { showMonthContent, showYearContent } from '@/recoil/atom'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useSetRecoilState } from 'recoil'

export default function CardYear() {
    const setIsShowMonth = useSetRecoilState(showMonthContent);
    const setIsShowYear = useSetRecoilState(showYearContent);
    return (
        <>
            <div className='flex flex-row rounded-lg px-8 py-6' style={{
                backgroundImage: `linear-gradient(90deg, rgba(12, 173, 183, 0.7),rgba(230, 132, 110, 0.9)),url("/bg-profile.jpg")`,
                height: 'fit-content',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain,cover',
            }}>
                <div className='basis-2/3 flex flex-col'>
                    <Image width={50} height={51} src={'/calendar-card.svg'} />
                    <p className='font-bold text-6xl mt-4 text-white'>2023</p>
                    <p className='font-normal text-2xl mt-2 text-white'>3 Project</p>
                </div>
                <div className='flex basis-1/3 items-center justify-center'>
                    <Image width={50} height={51} src={'/arrow.svg'} onClick={() => { setIsShowMonth(true); setIsShowYear(false) }} />
                </div>
            </div>
        </>
    )
}
