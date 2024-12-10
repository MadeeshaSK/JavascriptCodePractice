let btn = document.getElementById('btn1');
btn.addEventListener('click', function(){
    alert('Hello World!');
    let para = document.querySelector('p');
    para.style.color = 'red';
    para.style.fontSize = '20px';
})        

let form = document.getElementById('student-form');
form.addEventListener('submit', function(event){
    //avoid the default behavior of the form as refreshing the page
    event.preventDefault();
    let name = form.elements['firstname'];
    console.log(name.value);
    form.reset();
})  

// trigger when scroll

window.addEventListener('scroll',()=>{
    if (window.pageYOffset > 100) {
        document.getElementById('header')
        .style.backgroundColor = 'red';
    }else {
        document.getElementById('header')
        .style.backgroundColor = 'aqua';
    }
})




// change text

// let head1 = document.getElementById('heading1');
// let btn2 = document.getElementById('btn2');
// btn2.addEventListener('click',()=>{
//     //change content of the heading
//     if (head1.textContent === 'Thankyou!') {
//         head1.textContent = 'Welcome!';
//         btn2.textContent = 'Click to Leave';
//     } else {
//         head1.textContent = 'Thankyou!';
//         btn2.textContent = 'Click to Enter';
//     }
// })

function change(){
    let head1 = document.getElementById('heading1');
    let btn2 = document.getElementById('btn2');
    //change content of the heading
    if (head1.textContent === 'Thankyou!') {
        head1.textContent = 'Welcome!';
        btn2.textContent = 'Click to Leave';
    } else {
        head1.textContent = 'Thankyou!';
        btn2.textContent = 'Click to Enter';
    }
}

/*
btn2.addEventListener //DOM sub object
let btn2 = document.QuerySelector //DOM method
head1.style.color = 'red'; //DOM property

*/

// hide/show

let sh = document.getElementsByTagName('div')[2];
let btn3 = document.getElementById('sh-d');
function showAndHide(){
    if (sh.style.display === 'none') {
        sh.style.display = 'block';
        btn3.textContent = 'Hide';
    } else {
        sh.style.display = 'none';
        btn3.textContent = 'Show';
    }
}

// hover

let hvr1 = document.getElementById('hvr');
hvr1.addEventListener('mouseover',()=>{
    hvr1.style.backgroundColor = 'blue';
})
hvr1.addEventListener('mouseout',()=>{
    hvr1.style.backgroundColor = 'red';
})
hvr1.addEventListener('mousemove',(e)=>{
    let x = e.clientX;
    let y = e.clientY;
    console.log(x,y);
})

//add/remove content

let ulList = document.getElementById('ul-list');
let counter = 1;
document.getElementById('btn-add')
.addEventListener('click',()=>{
    let li = document.createElement('li');
    li.textContent = 'New Item'+ counter;
    ulList.appendChild(li);
    counter++;
})
document.getElementById('btn-remove')
.addEventListener('click',()=>{
    let temp = ulList.getElementsByTagName('li');
    if (temp.length > 0) {
        ulList.removeChild(temp[temp.length-1]);
    }
    counter--;
})


// see what type

let inputElement = document.getElementById('input-element');
inputElement.addEventListener('keyup',(e)=>{
    console.log(e.target.value);
})

//bubeling
//avoid event propagation
// when click btn all 3 triger, when click inner, inner and outer trigger
let outerDiv = document.getElementById('outer');
let innerDiv = document.getElementById('inner');
let btnInner = document.getElementById('btn-inner');

outerDiv.addEventListener('click',()=>{console.log('Outer Div')});
innerDiv.addEventListener('click',(e)=>{console.log('Inner Div');e.stopPropagation();});
btnInner.addEventListener('click',(e)=>{console.log('Btn Inner');e.stopPropagation();});




// <!-- callback -->

/*pass a function as an argument to another function
if we want to trigger a codeblock after the completion of another codeblock,
 which is taking time to execute*/

/*
let product;
function orderMyPizza(){
    console.log('i am hungry');
    console.log('i am ordering ');
    setTimeout(()=>{
        product = 'Pizza';
    },3000)
}

orderMyPizza();
console.log('I am having my ' + product);
console.log('I am waiting ');
*/

/*
output
i am hungry
i am ordering 
I am having my undefined
I am waiting
*/
let product;
function orderMyPizza(callbackFunction){
    console.log('i am hungry');
    console.log('i am ordering ');
    setTimeout(()=>{
        product = 'Pizza';
        callbackFunction(product);
    },3000)
}
function complete(productName){
    console.log('I am having my ' + productName);
}
orderMyPizza(complete);
console.log('I am waiting ');

// http request

console.log('Start');
let comments ;
//create a new instance of XMLHttpRequest
let http1 = new XMLHttpRequest();
//initialize the request
http1.open('GET','https://jsonplaceholder.typicode.com/comments');
//send the request
http1.send();
//listen for the response
function loadData(printData){
    http1.onreadystatechange = function(){
        if (http1.readyState === 4 && http1.status === 200) {
            comments = JSON.parse(http1.responseText);
            printData();
        }
    }
}
function printData(){
    console.log(comments);
}
loadData(printData);
console.log('End');

//when we refresh without saving, show alert

window.addEventListener('beforeunload', (event)=>{
    event.preventDefault();
    event.returnValue('are you crazy?');
})