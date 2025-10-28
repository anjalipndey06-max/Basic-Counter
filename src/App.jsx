import React, { useState } from 'react'

const App = () => {
   const [change ,setChange] = useState(0)
   const [inputVal ,setInputVal] = useState("")

   function handleIncrement (){
         const step = Number(inputVal) || 1;
        const newValue = Math.min(change + step, 10);
        setChange(newValue)
         setInputVal("");
   }
   function handleDecrement (){
       const step = Number(inputVal) || 1;
     const newValue = Math.max(change - step, -10);
     setChange(newValue)
         setInputVal("");
   }
   
   

  return (
    <div>
   <h1 className='m-5 text-5xl font-bold'>Counter</h1>
   <p className={`m-5 text-3xl ${change > 0 ? "text-green-500" :change === 0 ? "text-black-900": "text-red-500"}`}
   >count : {change}
   </p>
   <input className='m-5 outline-none border-1 border-gray-500 rounded' 
   onChange={(e)=>setInputVal(e.target.value) }
   type = "number" 
   value = {inputVal}
   placeholder='Enter the positive number'
   /> 
   <button  disabled={change >= 10}
   className='m-5 p-2 bg-green-600 rounded w-20 h-10'
   onClick={handleIncrement}
   >+</button>
    <button  disabled={change <= -10}
    className={`m-5 p-2 bg-red-600 rounded w-20 h-10`}
    onClick={ handleDecrement }
   
    >-</button>
    <button className={`m-5 p-2 bg-yellow-600 rounded w-20 h-10 `}
     onClick = {()=>setChange(0)}
    
   
    >Reset</button>
</div>
  )
}

export default App
