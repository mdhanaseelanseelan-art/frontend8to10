


let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


let student={
    name:"dhana",
    age:22,
    course:"js",
    mark:"75"
}  
console.log(student.name);
console.log(student.age);
console.log(student.course);
console.log(student.mark);


let student1=[
    {name:"dhana",
     mark:85   
    }, 
    {
        name:"janani",
        mark:1000
    },
    {
        name:"abiseik",
        mark:100
    }
]
for(let a=0; a<student1.length; a++){
    console.log(student1[a].name)
    console.log(student1[a].mark)
} 


let student2=[
    {name:"dhana",
     mark:85   
    },
    {
        name:"janani",
        mark:1000
    },
    {
        name:"abiseik",
        mark:100
    }
];
let search="janani";
for(let i=0; i<student2.length; i++){
    if(student2[i].name===search){
        console.log("name:",student2[i].name);
        console.log("mark:",student2[i].mark);
    }

}

let employees=[
    {name:"dhana",
     salary:85000   
    },   
    {
        name1:"janani",
        salary:40000
    },
    {
        name:"abiseik",
        salary:100000
    }

];

let search1="name1";
for(let b=0; b<employees.length; b++){
    if(employees[b].name1===search1){
        console.log("name:", employees[b].name)
        console.log("salary:", employees[b].salary)
    }
}      















