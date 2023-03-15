import React from 'react'
import StoryCard from './StoryCard'


const stories = [
{
name: "Rohan S.",
src: "https://media.istockphoto.com/id/1131421212/photo/healthy-avocado-sandwich-toast-bread-mushed-avocado-paste-on-wooden-background-guacamole.jpg?s=612x612&w=0&k=20&c=Tb224POkHQ5pcuhBnllm-ZsYgCKbW046zpncV4S2TC4=",
profile: "https://links.papareact.com/l4v",
},
{
name: "Elon Musk",
src: "https://links.papareact.com/4zn",
profile: "https://links.papareact.com/kxk",
},{
name: "Mark Zuckerberg",
src: "https://links.papareact.com/xql",
profile: "https://links.papareact.com/snf",
},
{
name: "Bill Gates",
src: "https://links.papareact.com/4u4",
profile: "https://links.papareact.com/zvy",
},
]

function Stories() {
  return (
    <div className='flex justify-center space-x-3 mx-auto'>
        {stories.map((story) => (
        <StoryCard name = {story.name} src= { story.src} profile={story.profile} />
        ))}
    </div>
  )
}

export default Stories