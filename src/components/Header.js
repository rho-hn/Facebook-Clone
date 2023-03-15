import Image from 'next/image'
import React from 'react'
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
    } from "@heroicons/react/solid";

    import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,
    } from "@heroicons/react/outline";
import HeaderIcon from './HeaderIcon'
import { signOut, useSession } from 'next-auth/react';

function Header() {
    const session= useSession()
  return (

   <>

    <div className="flex items-center sticky top-0 z-20 bg-white p-2 md:p-5 shadow-md" >
            {/* Left */}
        <Image src="https://links.papareact.com/5me" 
        width={40} 
        height={40} />
        <div className="flex items-center ml-2 rounded-full bg-gray-100 p-2">
            <SearchIcon className = "h-6 ml-2 text-gray-600"/>
            <input className='hidden md:inline-flex flex ml-2 bg-transparent outline-none placeholder: color flex-shrink ' type="text" placeholder='Search facebook'/>
        </div>

{/* center */}
    <div className='flex justify-center flex-grow z-99999'>
        <div className='flex space-x-6 md:space-x-2'>
            <HeaderIcon active Icon={HomeIcon}/>
            <HeaderIcon Icon={FlagIcon}/>
            <HeaderIcon Icon={PlayIcon}/>
            <HeaderIcon Icon={ShoppingCartIcon}/>
            <HeaderIcon Icon={UserGroupIcon}/>
        </div>
    </div>

    {/* right side */}
    <div className='flex items-center md:space-x-2 justify-end'>
        {/* ?profile pic */}
        <Image 
        onClick={()=> signOut()}
        src={session?.data?.user?.image}
        className='rounded-full cursor-pointer'
        width={40}
        height={40}
        />
        <p className='font-semibold p-3 whitespace-nowrap'>{session?.data?.user?.name}</p>
        <ViewGridIcon className='icon'/>
        <ChatIcon className=' icon'/>
        <BellIcon className='  icon'/>
        <ChevronDownIcon className='icon'/>
    </div>

    </div>
   </>
  )
}

export default Header