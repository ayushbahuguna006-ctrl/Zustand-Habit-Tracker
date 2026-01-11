import { useState } from 'react'
import './App.css'
import { usecount } from './Store/Store'

function App() {
  const {count,inccount,deccount}=usecount()
  const handledecrease=()=>{
    if(count>0){
      deccount(1)
    }
    else{
      return
    }
  }
    const handleincrease=()=>{
      if(count<=9){
        inccount(1)
      }
  }


  return (
    <>
    <div className='min-h-screen flex flex-col bg-black items-center justify-evenly font-mono'> <button className='border-2 border-black px-0.5 bg-white rounded-md active:w-20 hover:bg-white hover:text-blue-500 font-mono' onClick={()=>{handleincrease(7)}}>Increase</button><button className='border-2 active:w-20 border-black rounded-md px-0.5 hover:bg-white bg-white hover:text-blue-500'onClick={()=>{handledecrease()}}>Decrease</button> 
     <p>count is <h1 className='text-center text-2xl text-red-500 font-bold'>{count}</h1></p>
    </div>

   
    </>
  )
}

export default App
