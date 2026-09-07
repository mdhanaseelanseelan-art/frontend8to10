let age=25
if(age>=18){
    console.log("eligible")
}


else{
    console.log("noteligible")
} 


let number=15
if(number%2===0){
    console.log("even")
}
else{
    console.log("odd")
}


let mark=85
if(mark>=90&& mark<=100){
    console.log("A+")
}
else if(mark>=75&&mark<=89){
    console.log("A")
}
else if(mark<=50&&mark>=74){
    console.log("B")
}
else if(mark>=35&&mark<=49){
    console.log("c")
}
else if(mark>=35){
    console.log("fail")
}
else{
    console.log("true")
}



let username="admin"
let passward="1234"
if(username==="admin"&&passward==="1234"){
    console.log("login success")
}
else{
    console.log("invalidlogin")
}


let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid Day");
}
