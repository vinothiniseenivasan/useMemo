import React, { useState } from 'react';

import { useCallback } from 'react';
import CallChild from './CallChild';


 
    
    

const CallParent = () => {


    
   
    // Memoize the parent function using useCallback
 const parent = useCallback(() => {
    console.log("parent component");
  }, []);
    
    
 
   
          return (
            <div className='border w-60 border-black '>
                <CallChild parent={parent} />
            </div>
          )
    
}

export default CallParent