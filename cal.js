let inputElementObj = document.getElementById('inputNumber');
let numberOne;
let numberTwo;
let number1Obj = document.getElementById('number1');
let number2Obj = document.getElementById('number2');

inputElementObj.addEventListener('keyup', (event)=>{
    if (event.key == 'Enter'){
        let tempValue = inputElementObj.value;
        //check whhether number or not
        if (!isNaN(tempValue)){
            numberOne = parseInt(tempValue);
            inputElementObj.textContent = '';
            number1Obj.textContent = numberOne;
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
