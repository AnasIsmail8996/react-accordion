import React, { useEffect, useState } from 'react'
import fakeApi from '../Api/fake.json';
import FakeStore from './UI/FakeStore';
import './accordion.css'
const Accordian = () => {
  const[data, setData]=useState([]);
  const[active, setActive]=useState(false);

console.log(data);

  useEffect(()=>{
    setData(fakeApi)
  },[])

  const handleButton=(id)=>{
 setActive((prevId) => (prevId === id ? false : id))
  }
    return (    
    <>
   <div className="container accordion-mt">
     <h1 className="mb-4 text-center">Why We Should Learn React</h1>
      <div className="accordion" id="accordionExample">
        {data.map((currData) => (
          <FakeStore key={currData.id} currData={currData} 
           active={active === currData.id}
           onToggle={()=>{ handleButton(currData.id)}}
           />
        ))}
      </div>
    </div>
    </>
  )
}

export default Accordian;