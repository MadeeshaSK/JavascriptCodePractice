let inputElementObj = document.getElementById('inputNumber');
let numberOne;
let numberTwo;
let number1Obj = document.getElementById('number1');
let number2Obj = document.getElementById('number2');
let isFirstNumber = true;
let operatorAdd = document.getElementById('add');
let operatorSub = document.getElementById('sub');
let operatorMul = document.getElementById('mul');
let operatorDiv = document.getElementById('div');
let operatorMod = document.getElementById('mod');
let operatorObj = document.getElementById('operator');
let answerObj = document.getElementById('answer');
let clearObj = document.getElementById('clear');

inputElementObj.addEventListener('keyup', (event)=>{
    if (event.key == 'Enter'){
        let tempValue = inputElementObj.value;
        //check whether number or not
        if (!isNaN(tempValue)){
            if (isFirstNumber){
                numberOne = parseInt(tempValue);
                number1Obj.textContent = numberOne;
                isFirstNumber = false;
                inputElementObj.placeholder = 'Enter second number';
            } else {
                numberTwo = parseInt(tempValue);
                number2Obj.textContent = numberTwo;
                inputElementObj.placeholder = 'Click on Operator';
            }
            inputElementObj.value = '';
        }
    } 
});

const operators = {
    add: (a, b) => a + b,
    sub: (a, b) => a - b,
    mul: (a, b) => a * b,
    div: (a, b) => a / b,
    mod: (a, b) => a % b
};

Object.keys(operators).forEach(op => {
    document.getElementById(op).addEventListener('click', () => {
        let result = operators[op](numberOne, numberTwo);
        answerObj.textContent = result;
        if (op == 'add'){
            operatorObj.textContent = '+';
        }
        if (op == 'sub'){
            operatorObj.textContent = '-';
        }
        if (op == 'mul'){
            operatorObj.textContent = '*';
        }
        if (op == 'div'){
            operatorObj.textContent = '/';
        }
        if (op == 'mod'){
            operatorObj.textContent = '%';
        }
        inputElementObj.placeholder = 'Answer is : ' + result;
    });
});


/*
operatorAdd.addEventListener('click', ()=>{
    let result = numberOne + numberTwo;
    answerObj.textContent = result;
    inputElementObj.placeholder = result;
});
operatorSub.addEventListener('click',()=>{
    let result = numberOne - numberTwo;
    answerObj.textContent = result;
    nputElementObj.placeholder = result;
});
operatorMul.addEventListener('click',()=>{
    let result = numberOne * numberTwo;
    answerObj.textContent = result;
    nputElementObj.placeholder = result;
});
operatorDiv.addEventListener('click',()=>{
    let result = numberOne / numberTwo;
    answerObj.textContent = result;
    inputElementObj.placeholder = result;
});
operatorMod.addEventListener('click',()=>{
    let result = numberOne % numberTwo;
    answerObj.textContent = result;
    nputElementObj.placeholder = result;
});
*/

clearObj.addEventListener('click', ()=>{
    numberOne = undefined;
    numberTwo = undefined;
    isFirstNumber = true; // if this place at the last, then it will not work
    number1Obj.textContent = 'Num 1';
    number2Obj.textContent = 'Num 2';
    answerObj.textContent = 'Answer';
    operatorObj.textContent = 'Operator';
    inputElementObj.placeholder = 'Enter first number';
    inputElementObj.value = '';
});
