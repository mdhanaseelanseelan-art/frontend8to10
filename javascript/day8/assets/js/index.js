let a=[10,20,30,40,50]
for(let b=0; b<a.length; b++){
    console.log(a[b])
}

let b=["dhana", "ex", "dhivya", "Abi", "pro" ]
for(let a=0; a<b.length; a++){
    console.log(b[a])
}

let c=[1,2,3,4,5,6,7,8,9,10]
  for(let i=0; i<c.length; i++){
    if(c[i]%2===0){
        console.log(c[i])
    }
  }

  let students=[{name:"dhana", mark:68},
    {name:"dhivya", mark:95}
  ];
  for(let x=0; x<students.length; x++){
    if(students[x].mark>80){
        console.log(students[x].name)
    }
  }


  let number=(a,b) => {
    return a+b
  };
  console.log(number(10,20))



let studentdetails=(name,mark)=>{
    return name+mark
};
console.log(studentdetails("dhana",55))