import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
//import './App.css'

function App() {
  const [color,setColor] = useState("red");

  return (
    
      
      <div className="w-full h-screen duration-200"
        style={{backgroundColor:color}}
       
        > <h1>akash</h1>
          <div className="fixed flex flex-wrap
           justify-center bottom-12 inset-x-0  px -2">
            <div className="flex flex-wrap justify-center gap-3 shadow-lg 
             bg-white px-2 py-3 rounded-3xl">
              <button
              onClick={()=>setColor("red")} 
              className="outline-none px-4
              rounded-full text-white shadow-sm "
              style={{backgroundColor:"red"}} 
              >red</button>
                <button
                onClick={()=>setColor("green")} className="outline-none px-4
              rounded-full text-white shadow-sm "
              style={{backgroundColor:"green"}} 
              >green</button>
                <button onClick={()=>setColor("blue")}
                 className="outline-none px-4
              rounded-full text-white shadow-sm "
              style={{backgroundColor:"blue"}} 
              >blue</button>
                <button
                onClick={()=>setColor("pink")} 
                className="outline-none px-4
              rounded-full text-white shadow-sm "
              style={{backgroundColor:"pink"}} 
              >pink</button>
                <button
                onClick={()=>setColor("orange")} className="outline-none px-4
              rounded-full text-white shadow-sm "
              style={{backgroundColor:"orange"}} 
              >orange</button>
                <button onClick={()=>setColor("skyblue")}
                 className="outline-none px-4
              rounded-full text-white shadow-sm "
              style={{backgroundColor:"skyblue"}} 
              >skyblue</button>
            </div>
           </div>
      </div>
    
  )
}

export default App
