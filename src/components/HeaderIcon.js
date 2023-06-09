import React from 'react'

function HeaderIcon({Icon,active}) {
  return (
    <div className='group cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 flex items-center rounded-xl active:border-b-2 active:border-blue-500'>
        <Icon className={`h-6 text-gray-600 group-hover:text-blue-500 text-center sm:h-7 mx-auto ${active?'text-blue-500':''} `}/>
    </div>
  )
}

export default HeaderIcon 