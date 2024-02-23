import React,{useState,useEffect} from 'react'
import Axios from 'axios';
const Exercise = () => {
    const [name, setName] = useState('');
    const[predict,setPredict] = useState({})

    const fetchDataAge = () => {
     Axios.get(`https://api.agify.io/?name=${name}`)
     .then((res)=>{
       setPredict(res.data)
       console.log(res.data)
     })
    }
  return (
    <div className='code'>
       <button onClick={fetchDataAge}>Predict Age</button>
       <input placeholder="Ex.  Cyndi.." onChange={(event)=>{
        setName(event.target.value)
       }}/>
       <h2>Name:{predict?.name}</h2>
       <h2> Predicted Age: {predict?.age}</h2>
       <h2>Count:{predict?.count}</h2>
      
    </div>
  )
}

export default Exercise
