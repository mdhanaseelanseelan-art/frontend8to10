

const App = () => {
  const studentDetail=[  
    {stuName:"dhana", stuAge:22, stuMail:"dhana@gmail.com", stuCourse:"full stack" },
    {stuName:"deena", stuAge:22, stuMail:"dhana@gmail.com", stuCourse:"full stack" },
     {stuName:"deena", stuAge:22, stuMail:"dhana@gmail.com", stuCourse:"full stack" },
      {stuName:"deena", stuAge:22, stuMail:"dhana@gmail.com", stuCourse:"full stack" },
       {stuName:"deena", stuAge:22, stuMail:"dhana@gmail.com", stuCourse:"full stack" },
        {stuName:"deena", stuAge:22, stuMail:"dhana@gmail.com", stuCourse:"full stack" },
         {stuName:"deena", stuAge:22, stuMail:"dhana@gmail.com", stuCourse:"full stack" },
    {stuName:"deena", stuAge:22, stuMail:"dhana@gmail.com", stuCourse:"full stack" },
     

  ]
  return (
   <>
   <div className="student">     

    {
    studentDetail.map((e,i)=>(  
      <div className="student1" key={i}>     
        <h3>{e.stuName}</h3>
        <p>{e.stuAge}</p>
        <p>{e.stuMail}</p>     
        <p>{e.stuCourse}</p>
      </div>
     ))
     }
     
   </div>
   
   
   </>
  )
}

export default App
