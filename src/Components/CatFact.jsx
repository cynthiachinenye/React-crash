import React, {useState,useEffect }from 'react'
import Axios from 'axios';


const CatFact = () => {
    const [catFact, setCatFact] = useState('');
  
    const fetchData = () => {
        Axios.get('https://catfact.ninja/fact')
        .then((res)=>{
            setCatFact(res.data.fact)
        })
    }
    useEffect (()=>{
        fetchData();
    },[])

  return (
    <div className='App'>
    <button onClick={fetchData}>Generate Cat Fact</button>
    <p>{catFact}</p>
      
    </div>
  )
}

export default CatFact
