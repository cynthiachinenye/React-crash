import React, { useState } from 'react'

const HookState = () => {
    const [count,setCount] = useState(0);

    const increment =()=>{
        setCount(count + 1);
    }
    const decrement =()=>{
        setCount (count - 1)
        
    }
    const zero = () =>{
        setCount(0)
    }

  return (
    <div>
    {count}<br></br>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>derement</button>
      <button onClick={zero}>set to Zero</button>
      
    </div>
  )
}

export default HookState
