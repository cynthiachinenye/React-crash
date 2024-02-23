import React,{useState, useEffect} from 'react'
import Axios from 'axios';

const Exercise2 = () => {
    const[generate,setGenerate] = useState('');

    const fetchData =(excuse)=>{
      Axios.get('https://excuser-three.vercel.app/v1/excuse/family/')
      .then((res)=>{
        console.log(res.data);
        setGenerate(res.data[0].excuse)
      })
    }
    useEffect(()=>{
        fetchData();
    },[])

  return (
    <div className='exec'>
    <h1>Generate An Excuse</h1>
    <button onClick={() => fetchData('party') }>Party</button>
    <button onClick={() => fetchData('family')}>Family</button>
    <button onClick={() => fetchData('office')}>Office</button>
    <p>{generate}</p>
      
    </div>
  )
}

export default Exercise2
