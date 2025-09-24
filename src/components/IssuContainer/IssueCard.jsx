import React from 'react'

export default function IssueCard({ issue }) {
    const {requestedBy,description,priority,userImg,status,subject}=issue
    return (
            <div className='card  bg-gray-400 text-black px-3 py-4'>
                <img className='w-20 rounded-full' src={userImg} alt={requestedBy} />
                <p className='font-semibold py-1'>{requestedBy}</p>
                <div className='flex '>
                    <h3 className='font-bold text-3xl'>{subject}</h3>
                    <div className='flex'>
                        <button className='btn border-none  bg-red-300 text-red-600 mr-2'>{priority}</button>
                        <button className='btn border-none  bg-green-200 text-green-600'>{status}</button>
                    </div>
                </div>
                <p className='py-5'>{description}</p>
            </div>
    )
}
