import React, { useRef, useState } from 'react'

const DemoRef = () => {

    const [count ,setCount] = useState(0);
    let x=0;

    const ref = useRef(0);

    function getValue()
    {
        x =x+1;
        console.log("x=" , x)
    }

    function getRef()
    {
        ref.current = ref.current+1;
        console.log("ref val" ,ref.current)

    }
    
  return (

    <div className='border border-black mt-6 w-72 p-4  m-2 cursor-pointer'>
    <div className='m-6 bg-green-100' onClick={()=>{setCount(count+1)}}>
        state increase:{count}

    </div>
    <div className=' bg-red-100 m-6'
    onClick={()=>{getValue()}}
   
   >
    
       let value:{x}

    </div>
    <div className=' bg-blue-100-100 m-6'
    onClick={()=>{getRef()}}>
    
    ref value:{ref.current}

    </div>
    </div>
  )
}

export default DemoRef