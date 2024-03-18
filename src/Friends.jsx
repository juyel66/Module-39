import { useEffect, useState } from "react"
import Friend from "./Friend"

export default function Friends(){
    const FriendsStyleAdd={
        border:"2px solid red",
        margin: "15px",
        padding:"15px",
        borderRadius:"15px"
    }
     
    const [friends, setFriends]= useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then((data) =>setFriends(data))
    })

    return(
        <div style={FriendsStyleAdd}>
            <h3>Friends: {friends.length} </h3>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }

        </div>
    )
}