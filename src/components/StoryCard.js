import React from 'react'
import Image from 'next/image'

function StoryCard({name,src,profile}) {
  return (
    <div className='h-14 w-14 relative md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x p-3 hover:animate-pulse'>
    <Image
    className="absolute opacity-0 md:opacity-100
    rounded-full z-50 top-10"
    src={profile}
    width={40}
    height={40}
    />

    <Image
    className="object-cover filter brightness-75 rounded-3xl"
    src={src}
    fill
    style={{objectFit:"cover"}}
    />
    </div>
    
  )
}

export default StoryCard