import React from 'react'
import SidebarRow from './SidebarRow'
import {
    ChevronDownIcon,
    ShoppingBagIcon,
    UserGroupIcon,
    } from "@heroicons/react/outline";
    import {
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,
    UsersIcon,
    } from "@heroicons/react/solid";
    import { useSession } from 'next-auth/react';


function Sidebar() {
    const session= useSession()
  return (
    <div className='p-2 mt-5 max-w-[200px] md:min-w-[300] xl:max-w-[500px]'>
        <SidebarRow src= {session.data.user.image} title={session.data.user.name}/>
        <SidebarRow Icon = {UsersIcon} title='Friends'/>
        <SidebarRow Icon = {UserGroupIcon} title='Groups'/>
        <SidebarRow Icon = {ShoppingBagIcon} title='Masterplace'/>
        <SidebarRow Icon = {DesktopComputerIcon} title='Watch'/>
        <SidebarRow Icon = {CalendarIcon} title='Events'/>
        <SidebarRow Icon = {ClockIcon} title='Memories'/>
        <SidebarRow Icon = {ChevronDownIcon} title='See More'/>
        </div>
  )
}

export default Sidebar