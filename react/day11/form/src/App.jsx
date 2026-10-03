import {useState} from 'react'

const App = () => {

  const [handleDatas, sethandleDatas]=useState({username:"",usernumber:"",useremail:""}) 

    const handleChange=(e)=>{
     
      const copy={...handleDatas,[e.target.name]:e.target.value}
      console.log(copy);
      
    
     

    }

    const handleClick=()=>{



    }


  return (
   <>
   
   <h1>app</h1>

   <form>

     <input type="text"    onChange={handleChange} />
     <input type="text"    onChange={handleChange} />
    <input type="text"    onChange={handleChange} />

    <button onClick={handleClick}>register</button>


   </form>
   
   </>
  )
}

export default App