import Image from 'next/image'
import React from 'react'

function Contact({src,name}) {
  return (
    <div className='flex items-cente space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl'>
        <Image
        className='rounded-full'
        src = {src}
        height = {50}
        width={50}
        style={{objectFit:"cover"}}
        
        />
        <p>{name}</p>
        <div className="absolute bottom-2 left-7 bg-green-400
h-3 w-3 rounded-full animate-bounce" />
    </div>
  )
}

export default Contact