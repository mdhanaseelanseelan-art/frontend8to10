import React, { useState } from 'react'


const App = () => {

const [userName,setuserName ] =useState("")
const [showData,setshowData]=useState("")
const handleChange=(event)=>{


  setuserName(event.target.value)

}

const handleClick=()=>{

  const datas= userName%2===0?"even":"odd"

setshowData(datas)


}
  return (
      <>
      
      <div>

        <input type="text" onChange={handleChange} />
      
        <button onClick={handleClick}>click</button>
        <p>{showData}</p>
      </div>
      
      
      </>
  )
}

export default App



//form handling in react