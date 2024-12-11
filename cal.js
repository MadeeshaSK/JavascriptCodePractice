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

inputElementObj.addEventListener('keyup', (event)=>{
    if (event.key == 'Enter'){
        let tempValue = inputElementObj.value;
        //check whhether number or not
        if (!isNaN(tempValue)){
            numberTwo = parseInt(tempValue);
            inputElementObj.textContent = '';
            number2Obj.textContent = numberTwo;
        }
    } 
});

addEventListener
