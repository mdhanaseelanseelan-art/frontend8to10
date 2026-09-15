const add=()=>{

    let sum=0;
    return()=>{
        sum++;
        return sum;

    };
};
const counter=add();
console.log(counter());
console.log(counter());
console.log(counter());
