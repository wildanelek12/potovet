import React from 'react'

export default function index(props) {
    return (
        <div className={` h-fit ${props.isActive ? "bg-white text-black" : "bg-[#0A0A0A] text-white text-med"}  px-8 py-2 font-medium rounded-full`}>
            <p className={`myClass`}
            >{props.title}</p>
        </div>
    )
}
