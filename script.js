const display = document.querySelector(".display")
const buttons = document.querySelectorAll("button");


function add(a,b){
    return a + b;
}
function substraction(){
    return a - b;
}
function multiplication(a,b){
    return a * b;
}
function division(a, b){
    return a / b;
}

let numOne = 0;
let numTwo = 0;
let operator = "";


buttons.forEach((button) => {
    button.addEventListener("click", ()=>{
        display.value += button.innerText;

        if(button.innerText === "C"){
            display.value = "";
        }
    })
})