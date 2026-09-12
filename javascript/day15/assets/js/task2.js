const data=document.getElementById("box")
const btndata=document.getElementById("btn")

let ison=false

btndata.addEventListener("click",()=>{


ison=!ison

    if(ison){
        data.style. display="none"
        btndata.textContent="show"
        
    }
    else{

        data.style.display="block"
        btndata.textContent="hide"      
    }
}) 