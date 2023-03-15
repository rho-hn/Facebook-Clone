import React from 'react'
import { collection, getDocs } from "firebase/firestore";
import { getFirestore} from 'firebase/firestore';
import Post from './Post';

import { db } from '../../firebase';

import { useCollection } from 'react-firebase-hooks/firestore';
 function Posts({posts}) {

    const _ = require("lodash"); 

    const [value] = useCollection(
        collection (db, 'posts'),
        {
          snapshotListenOptions: { includeMetadataChanges: true },
        }
      );
     
 
    let gfg = []    
    value?.docs.forEach( (doc) =>
        gfg.push(_.sortBy(doc.data(), ['timestamp'])
    ))

    console.log(posts)


  return (
    <div>
         {value ? (
          <span>
           
            {value.docs.map((doc) => (
              <React.Fragment key={doc.id}>
                <Post
                key="key"
                name={doc.data().name}
                email={doc.data().email}
                image={doc.data().image}
                message={doc.data().message}
                imageUrl={doc.data().imageUrl}
                timeStamp={doc.data().timestamp}
                 /> 
                
                
              </React.Fragment>
            ))}
          </span>
        )
        : 
          posts.map((post)=>
          <Post
          key="key"
          name={post.name}
          email={post.email}
          image={post.image}
          message={post.message}
          imageUrl={post.imageUrl}
          timeStamp={post.timestamp}
           /> 
          
          )
        }
      
    </div>
  )
}

export default Posts