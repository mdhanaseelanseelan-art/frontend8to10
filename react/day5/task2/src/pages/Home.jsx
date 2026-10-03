import React from 'react'

const Home = () => {

const data="Dhanaseelan"
const text="Full Stack"
const active = true;
const arr=[8015263895]
const content= ["training"]
 const newarr=content.join("student") 


 



  return (
   <>
   <div className='student'>
    <h1>Student Profile</h1>
    <br /><br />
      <h3>Student Name:{data}</h3>
      <h3>Student course:  {text}</h3>
      <h3>Student id:{String(active)}</h3>
      <h3>Student contact:{arr}</h3>
     
      
     {content.map(()=>(
           <div>

           </div>
     ))}    

</div>
   
   </>
  )
}



export default Home
