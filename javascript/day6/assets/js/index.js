let result=""
for(let a=1; a<=10; a++){
    result +=a +" "
}
console.log(result)


let even=""
for(let i=1; i<=20; i++)
    if(i%2===0){
        
        even += i +" "
    }
    console.log(even)

    let odd=""
    for(let b=1; b<=20; b++)
        if(b%2!=0){
            odd+=b +" "
        }
        console.log(odd)

let text="javascript"
let reverse=""
for(let a=text.length-1; a>=0; a--){
     reverse=reverse+text[a]
}
console.log(reverse)



let text = "javascript";
let target = "s";

for (let i = 0; i < text.length; i++) {
    if (text[i] === target) {
        console.log("Character Found: " + target);
        break;
    }
}  
