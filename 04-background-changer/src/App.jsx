import { useState } from 'react'

function App() {

  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        
        <div className="flex flex-wrap justify-center gap-3 shadow-5xl bg-white px-3 py-2 rounded-3xl">
          <button onClick={()=>setColor("Red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=>setColor("Green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"green"}}>Green</button>
          <button onClick={()=>setColor("Purple")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"purple"}}>Purple</button>
          <button onClick={()=>setColor("Blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={()=>setColor("Tomato")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:"tomato"}}>Tomato</button>
          <button onClick={()=>setColor("Orange")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:"Orange"}}>Orange</button>
          <button onClick={()=>setColor("DodgerBlue")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:"DodgerBlue"}}>DodgerBlue</button>
          <button onClick={()=>setColor("MediumSeaGreen")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:"MediumSeaGreen"}}>MediumSeaGreen</button>
          <button onClick={()=>setColor("white")} className='outline-none px-4 py-1 rounded-full text-black shadow-xl' style={{backgroundColor:"white"}}>White</button>
          <button onClick={()=>setColor("black")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"black"}}>Black</button>
        </div>

      </div>
    </div>
  )
}

export default App

