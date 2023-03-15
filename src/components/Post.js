import Image from 'next/image'
import React from 'react'
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";
function Post({name,email,message,imageUrl,timeStamp,image}) {
  return (
    <div className='flex flex-col'>
        <div className='p-5 bg-white mt-5 rounded-t-2xl shadow'>
            <div className='flex items-center space-x-2'>
                <img className='rounded-full' src={image} width={40} height ={40}></img>
                <div>
                    <p>{name}</p>
                    {
                      timeStamp?
                      <p className='text-xs text-gray-400'>{timeStamp} </p>
                      :
                      <p className='text-xs text-gray-400'>Loading </p>
                    }
                </div>
            </div>
            <p className='pt-4 '>{message}</p>

        </div>
        {imageUrl && 
            
             <div className='relative h-56 md:h-96 bg-white'>
                <Image src={imageUrl} fill  style={{objectFit:"cover"}}/>
             </div> 
        }
      <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
                <div className="inputIcon rounded-none rounded-bl-2xl ">
                        <ThumbUpIcon className="h-4" />
                        <p className="text-xs sm:text-base">Like</p>
                </div>
                <div className="inputIcon rounded-none ">
                        <ChatAltIcon className="h-4" />
                        <p className="text-xs sm:text-base">Comment</p>
                     </div>
                <div className="inputIcon rounded-br-2xl rounded-none">
                    <ShareIcon className="h-4"/>
                <p className="text-xs sm:text-base">Share</p>
                </div>
</div>

    </div>

  )
}

export default Post