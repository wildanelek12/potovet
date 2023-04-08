import { showMonthContent, showProjectContent } from '@/recoil/atom';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useSetRecoilState } from 'recoil';

export default function CardMonth() {
    const setIsShowMonth = useSetRecoilState(showMonthContent);
    const setIsShowProject = useSetRecoilState(showProjectContent);
    return (
        <>
            <div className='flex flex-col rounded-lg px-8 py-6 bg-primary w-fit' style={{
                backgroundImage: `linear-gradient(180deg, rgba(12, 173, 183, 0.95),rgba(230, 132, 110, 0.9)),url("/bg-profile.jpg")`,
                height: 'fit-content',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain,cover',
            }}>
                <div className='basis-1/2 flex flex-col justify-center items-center'>
                    <p className='font-bold text-4xl mt-4 text-white'>January</p>
                    <p className='font-normal text-2xl mt-2 text-white'>3 Project</p>
                </div>
                <hr className='my-4' />
                <div className='flex basis-1/2 items-center justify-center'>
                    <Image width={50} height={51} src={'/arrow.svg'} onClick={() => { setIsShowMonth(false); setIsShowProject(true) }} />
                </div>
            </div>
        </>
    )
}
