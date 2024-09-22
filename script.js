const display = document.querySelector(".display");
const previous = document.querySelector(".previous");
const current = document.querySelector(".current");
const buttons = document.querySelectorAll(".btn");
const equalBtn = document.querySelector(".equal");
const clearBtn = document.querySelector(".clear")
let numOne = "";
let numTwo = "";
let operator = "";

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

const opArray = ["+", "-", "X", "/"]

buttons.forEach((button) => {
    button.addEventListener("click", ()=>{

        let btnValue = button.innerText;
        if(!Number.isInteger(btnValue)){
            current.innerText += btnValue;
            numOne += btnValue;
            for(let op of opArray){
                if(btnValue == op){
                    current.innerText = ""
                    previous.append(numOne);
                    numTwo += btnValue;
                }
            }
            if(btnValue == equalBtn.innerText){
                const resultDiv = document.createElement("div")
                resultDiv.innerText = numOne + numTwo
                display.appendChild(resultDiv)

            }

        }
       
    })
})


