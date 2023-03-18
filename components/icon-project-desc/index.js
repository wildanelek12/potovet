import Image from 'next/image'
import React from 'react'

export default function IconButtonDescription(props) {
    return (
        <div className='bg-primary p-2 rounded-lg'>
            <Image
                src={`${props.src}`}
                width={32}
                height={32}
                className="w-8 h-8"
            />
        </div>
    )
}
