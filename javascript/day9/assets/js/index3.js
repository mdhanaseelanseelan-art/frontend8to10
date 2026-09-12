
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









var globalVar = "I am Global var";
let globalLet = "I am Global let";
const globalConst = "I am Global const";

console.log("Global var:", globalVar);
console.log("Global let:", globalLet);
console.log("Global const:", globalConst);



function testFunction() {

    var functionVar = "I am Function var";
    let functionLet = "I am Function let";
    const functionConst = "I am Function const";

    console.log("Inside Function - var:", functionVar);
    console.log("Inside Function - let:", functionLet);
    console.log("Inside Function - const:", functionConst);
}

testFunction();



{
    var blockVar = "I am Block var";
    let blockLet = "I am Block let";
    const blockConst = "I am Block const";

    console.log("Inside Block - var:", blockVar);
    console.log("Inside Block - let:", blockLet);
    console.log("Inside Block - const:", blockConst);
}



console.log("Outside Block - var:", blockVar);












console.log("var value:", myVar);

var myVar = 10;



try {
    console.log("let value:", myLet);
} catch (error) {
    console.log("let error:", error.message);
}

let myLet = 20;



try {
    console.log("const value:", myConst);
} catch (error) {
    console.log("const error:", error.message);
}

const myConst = 30;



sayHello();

function sayHello() {
    console.log("Hello! Function declaration is hoisted.");
}

