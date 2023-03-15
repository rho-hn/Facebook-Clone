import Image from 'next/image'
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"

function Login() {
  return (
    <div className='flex flex-col mx-auto justify-center align-middle place-items-center'>
        <Image src='https://links.papareact.com/t4i' height={400} width={400}/>
        <p onClick={()=> signIn()} className='p-5 bg-blue-500 rounded-full  text-white mt-10'>Login with Facebook</p>
    </div>
  )
}

export default Login