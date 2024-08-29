

/* functions */

function add(a, b){
    return a + b;
};

function substract(a, b){
    return a - b
};

function multiply(a,  b){
    return a * b;
};

function divide(a, b){
    return a / b;
};

let firstNum;
let operator;
let secondNum;

function operate(num1, op, num2){
    if(op == "+"){
        return add(num1, num2);
    }
    else if(op ==="-"){
        return substract(num1, num2);
    }
    else if(op === "x"){
        return multiply(num1, num2);
    }
    else if(op === "/"){
        return divide(num1,num2)
    }
}