import { useState } from "react"

export default function Counter (){
    const [count, setCount] =useState(0)
    // console.log(abc)
    const handleEven=()=>{
        const newCount = count+(10*10)
        setCount(newCount)

    }

    function handleReduce(){ 
        const handleReduce = count - 1
        setCount(handleReduce)
    }
    return(
        <div style={{border:"2px solid yellow",borderRadius:"15px"}}>
            <h3>Counter: {count} </h3>
            <button onClick={handleEven}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}

