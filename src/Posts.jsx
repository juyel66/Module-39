import { useEffect, useState } from "react"

export default function Posts(){

    const [posts, setPost] = useState([])
    
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then((data)=>setPost(data))
    },[])

    return(
        <div>
            <h3>Post: {posts.length}</h3>
            {
             
            }
        </div>
    )
}