
console.log(a); 
var a = 10;



try {
    console.log(b); 
} catch (error) {
    console.log("let:", error.message);
}
let b = 20;


// CONST
try {
    console.log(c); 
} catch (error) {
    console.log("const:", error.message);
}
const c = 30;


sayHello();

function sayHello() {
    console.log("Hello from function!");
}