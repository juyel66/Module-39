import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './User'
import Friends from './Friends'
import Friend from './Friend'
import Posts from './Posts'
import Post from './Post'
Post
Posts
Friend
Users


function App() {
  const [count, setCount] = useState(0)

  function handlerClicked(){
    alert('button clicked')
  }

  const clickedEvenButton=()=>{
    alert("Second button clicked")
  }
  const addFour=(num)=>{
    alert(num+50)
  }

  return (
    <>
      <h1>Vite + React</h1>
      <Post></Post>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handlerClicked}>First Button</button>
      <button onClick={clickedEvenButton}>Second button</button>
      <button onClick={()=>{alert("third button clicked")}}>Third button</button>
      <button onClick={()=> addFour(50)}>Fourth</button>
    </>
  )
}


export default App
