import React, { useState } from 'react'
import { RiSunFill } from "react-icons/ri";
import { FaMoon } from "react-icons/fa";
const App = () => {
   const [change ,setChange] = useState(0)
   const [inputVal ,setInputVal] = useState("")
   const [theme,setTheme] = useState("light")


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
   
   function toggle(){
    setTheme(theme === "light" ? "dark" : "light")
   }

  return (
    <div className={`h-screen ${theme === 'light' ? "bg-white" : "bg-gray-500"}`}>

      <div className='flex justify-end p-4 gap-4 mr-10 pt-6'>
      <button onClick={toggle}>
        {theme === 'light' ? <FaMoon className='h-10 w-10' />:  <RiSunFill style={{ color: "#f79456ff" }} className='h-10 w-10'/>}
      </button>
    </div>
     
   <h1 className={`m-5 text-5xl font-bold ${theme === "light" ? "text-gray-500" :"text-black-900"}`}>Counter</h1>
   <p className={`m-5 text-3xl ${change > 0 ? "text-green-500" :change === 0 ? "text-black-900": "text-red-500"}`}
   >count : {change}
   </p>
   <input className='m-5 outline-none border-1 border-black-500 rounded' 
   onChange={(e)=>setInputVal(e.target.value) }
   type = "number" 
   value = {inputVal}
   placeholder='Enter the positive number'
   /> 
   <button  disabled={change >= 10}
   className={`m-5 p-2  rounded w-20 h-10 ${theme === 'light' ? "bg-green-400" : "bg-green-900"}`}
   onClick={handleIncrement}
   >+</button>
    <button  disabled={change <= -10}
    className={`m-5 p-2  rounded w-20 h-10 ${theme === 'light' ? "bg-red-300" : "bg-red-900"}`}
    onClick={ handleDecrement }
   
    >-</button>
    <button className={`m-5 p-2 bg-yellow-600 rounded w-20 h-10 `}
    onClick={() => {
     setChange(0);
     setInputVal("");
   }}
    >Reset</button>
</div>
  )
}

export default App
