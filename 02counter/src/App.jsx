import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(10)
  const addVal=()=>{
    if (counter<20) {
      counter=counter+1;
      setCounter(counter);
    }
  }
  const decVal=()=>{
    if(counter>0){
      counter=counter-1;
      setCounter(counter);
    }
  }
  return (
    <>
      <h1>counter : {counter}</h1>
      <button onClick={addVal}>add value</button>
      <br />
      <button onClick={decVal}>dec value</button>
    </>
  )
}

export default App



