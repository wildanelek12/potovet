import CardMonth from '@/components/month-card'
import React from 'react'

export default function SelectMonth() {
    return (
        <div className='flex-1 w-full mt-4 grid grid-cols-5 gap-8 px-16'>
            <CardMonth />
        </div>
    )
}
