import React from 'react'

export default function RecentSearch(props) {
    return (
        <div className={` h-fit  bg-transparent border-white border text-white text-med px-4 py-2 font-medium rounded-full`}>
            <p className={`myClass`}
            >{props.title}</p>
        </div>
    )
}
