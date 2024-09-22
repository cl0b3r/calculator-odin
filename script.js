const display = document.querySelector(".display");
const previous = document.querySelector(".previous");
const current = document.querySelector(".current");
const buttons = document.querySelectorAll(".btn");
const equalBtn = document.querySelector(".equal");
const clearBtn = document.querySelector(".clear")
let numOne = 0;
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

/* function operation(a,b){

    const alpha = 'abcdefghijklmnopqrstuvwxyz-=+X/'
    let num1= a.split();
    let num2 = b.split()

    for(let i = 0; i < num1.length  && i < num2.length ; i++){
        const element1 = num1.indexOf(i);
        const element2 = num2[i]; 
        if(isNaN(element1)  || isNaN(element2) ){
            num1.splice(element1, 1); 
        }
    }
    
} */


const opArray = ["+", "-", "X", "/"]

buttons.forEach((button) => {
    button.addEventListener("click", ()=>{

        let btnValue = button.innerText;
        current.innerText += btnValue;

        if(!Number.isInteger(btnValue)){
            if(!isNaN(btnValue)){
                btnValue = Number(btnValue)
            }
            numOne += btnValue;
            console.log(typeof(numOne))
            
            for(let op of opArray){
                if(btnValue == op){
                    current.innerText = ""
                    previous.append(numOne);
                    numTwo += btnValue;
                }
            }
            if(btnValue == equalBtn.innerText){
                const resultDiv = document.createElement("div");
                resultDiv.innerText = numOne + numTwo;
                current.innerText = "";
                previous.innerText = "";
                display.appendChild(resultDiv);

            }
        }
        
       
    })
})


