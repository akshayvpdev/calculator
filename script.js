let display = document.querySelector("#screen");
let button = document.querySelectorAll(".btn");
let btnArray =Array.from(button);
btnArray.forEach(item =>{
    item.addEventListener('click',(e)=>{
        if( e.target.innerHTML=="="){
            display.value=eval(display.value)
        }
        else if(e.target.innerHTML=="AC"){
            display.value=""
        }
        else if(e.target.innerHTML=="DE"){
            display.value=display.value.substring(display.value.length-1,0)
        }
        else{display.value+=e.target.innerHTML}
    })
})
