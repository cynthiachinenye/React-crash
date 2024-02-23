import React, { useState } from 'react'

const Example1 = () => {
    const [isvisible, setIsVisible] =useState(false)
  return (
   
      <div className='mikky'>
      <button onClick={() => setIsVisible((prev) => !prev)}>
      {isVisible ? "Hide" : "Show"}
      </button>

      {isvisible && <h1>Hidden text</h1>}
      </div>
    
  )
}

export default Example1
