import {useState} from "react"
const App = () => {
   const[handleState,sethandleState]=useState({username:"",usernumber:"",useremail:""})

  const handleChange=(e)=>{

    const copy={...handleState,[e.target.name]:e.target.value}
    console.log(copy);
    

  }


  const handleClick=()=>{




  }
  return (
   <>
   
   <input type="text" name="username" onChange={handleChange} />
   <input type="text" name="usernumber" onChange={handleChange} />
   <input type="text" name="useremail" onChange={handleChange} />
   <button onClick={handleClick}>register</button>
   
   
   </>
  )
}

export default App

