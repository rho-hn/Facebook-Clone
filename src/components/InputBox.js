import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import {EmojiHappyIcon} from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon} from "@heroicons/react/solid";
import {db, storage} from '../../firebase'
import { ref, uploadBytesResumable, getDownloadURL, uploadString,getStorage } from "firebase/storage";

import { collection, addDoc, doc,setDoc } from "firebase/firestore"; 


function InputBox() {
    const session = useSession()
    const inputRef = useRef(null)
    const filePickerRef = useRef(null)
    const [imageToPost,setImageToPost] = useState(null)
    const storage = getStorage()
  

   


    var date = new Date();


     const sendPost = async (e)=> {
        if(!inputRef.current.value) return
        e.preventDefault()

        // const storageRef = ref(storage, `/Posts/${Math.random()*10}`)
        // const uploadTask = uploadString(storageRef, imageToPost,'data_url');
        // uploadTask.then(
        //     "state_changed",
        //     (snapshot) => {
            
        //     },
        //     (err) => console.log(err),
        //     () => {
        //     // download url
        //     getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
        //     setImageUrl(url)
        //     });
        //    })


        const docRef = await addDoc(collection(db, "posts"), {
            message: inputRef.current.value,
            name:session?.data?.user?.name,
            email: session?.data?.user?.email,
            image: session?.data?.user?.image,
            timestamp:  ("0" + date.getHours() ).slice(-2) +":"+ ("0" + date.getMinutes()).slice(-2)
          }).then((docs)=> {
            if(!imageToPost){
return
            }
            const storageRef = ref(storage, `/Posts/${docs.id}`)
            const uploadTask = uploadString(storageRef, imageToPost,'data_url');
            uploadTask.then( ()=> 
            getDownloadURL(ref(storage, `/Posts/${docs.id}`))
            .then(async (url) => {
              console.log(url)
              await setDoc(doc(db, "posts", `${docs.id}` ), {
                                  imageUrl: url
                              },{merge:true})
            

          }))
     
     })
        
          
    
          
          removeImage()
          
        inputRef.current.value = ""
    }

    const removeImage = ()=>{
        setImageToPost(null)
    }
    const addImageToPost = (e) => {
        const reader = new FileReader()
        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0])
        }
        reader.onload = (readerEvent) => {
            setImageToPost(readerEvent.target.result)
        }
    }

  return (
    <div className='bg-white p-2 text-gray-500 font-medium mt-6 shadow-md'>
        <div className='flex space-x-4 p-4 items-center'>
            <Image
            src = {session.data.user.image}
            width ={40}
            height ={40}
            className='rounded-full'
            />
            <form className='flex flex-1'>

                <input ref={inputRef} className='rounded-full h-12 bg-gray-100 flex-grow px-5 outline-none' type='text' placeholder={`What's on your mind, ${session.data.user.name}?`}></input>
                <button hidden type='submit' onClick={sendPost}>Submit</button>
            </form>
            {imageToPost && (<div onClick={removeImage } className='flex flex-col hover:brightness-110 transition duration-150 transform scale-105 cursor-pointer'>
                <img className='h-10 object-contain' src={imageToPost}></img>
                <p className='text-xs text-red-500 text-center'>Remove</p>
            </div>)}
        </div>
        <div className='flex justify-evenly p-3 border-t'>

        <div className='inputIcon'>
            <VideoCameraIcon className="h-7 text-red-500" />
            <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div onClick={()=>filePickerRef.current.click()} className='inputIcon'>
        <CameraIcon  className="h-7 text-green-400" />
        <p className="text-xs sm:text-sm xl:text-base">Photo/Video </p>
        <input hidden ref={filePickerRef} type="file" onChange={addImageToPost}></input>
        </div>
        <div className='inputIcon'>
        <EmojiHappyIcon className="h-7 text-yellow-300"  />
            <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
        </div>
   
    </div>
  )
}

export default InputBox