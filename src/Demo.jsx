import React, { useMemo, useState } from 'react'
import { findNthPrime } from './PrimeCal';

export default function Demo() {

    const [toggleBtn ,setToggleBtn] = useState(false);

    const [num ,setNum] = useState(0);

    const [ans,setAns] = useState(1);

    function handleToggle()
    {
        setToggleBtn(!toggleBtn);
    }



    
      useMemo(()=>{
        setAns(findNthPrime(num));

      },[num])
  
    
  // if number changes then we should make operation of findNth prime
   
    
  return (
    <div className={`border border-black h-96 w-96 m-20   ${toggleBtn ? "bg-black text-white" : "bg-white text-black"}`}>

        <button className={ ' border border-red-500 bg-red rounded-lg m-4 p-3 bg-red-400 text-white' }
           
        onClick={() => handleToggle()}>
            Toggle
        </button>
       

        <input 
        className='w-40 h-10 border border-blue-600 m-10'
        type='number'
        value={num}
        onChange={(e)=>{setNum(e.target.value)}}/>

<div className='font-extrabold text-2xl w-11 ml-10'>
          {ans}
        </div>

       

      
    </div>
  )
}
