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
 which is taking time to execute, js is single threaded language,  syncronize (one after one)*/

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

//jsonplaceholder-free fake restapis
/*in actual projects,
 there are some situations to wait until data load from http get reques,
  so call back need for accurate code running as there will be delays*/

// http request

// console.log('Start');
// let comments ;
// //create a new instance of XMLHttpRequest
// let http1 = new XMLHttpRequest();
// //initialize the request
// http1.open('GET','https://jsonplaceholder.typicode.com/comments');
// //send the request
// http1.send();
// //listen for the response
// function loadData(printData){
//     http1.onreadystatechange = function(){
//         if (http1.readyState === 4 && http1.status === 200) {
//             comments = JSON.parse(http1.responseText);
//             printData();
//         }
//     }
// }
// function printData(){
//     console.log(comments);
// }
// loadData(printData);
// console.log('End');

//when we refresh without saving, show alert

window.addEventListener('beforeunload', (event)=>{
    event.preventDefault();
    event.returnValue('are you crazy?');
})

//fetch api

const loadData = (url, callback) => {
    const http = new XMLHttpRequest();
    http.addEventListener('readystatechange',()=>{
        if(http.readyState === 4 && http.status === 200) {
            callback(undefined,JSON.parse(http.responseText));
        }else if(http.readyState === 4){
            callback('could not fetch data', undefined);
        }
    })
    http.open('GET', url);
    http.send();
}

//ladder of callback(inner call) we call it callback hell, like recursive function

loadData('https://jsonplaceholder.typicode.com/posts', (error, data)=>{
    console.log(data);

    loadData('https://jsonplaceholder.typicode.com/comments', (error, data)=>{
        console.log(data);
    })
})

// loadData('https://jsonplaceholder.typicode.com/posts', (error, data)=>{
//     if(data) {
//         console.log(data);
//     } else {
//         console.log(error);
//     }
// })
// loadData('https://jsonplaceholder.typicode.com/comments', (error, data)=>{
//     if(data) {
//         console.log(data);
//     } else {
//         console.log(error);
//     }
// })

// function checkResponse(error, data){
//     if(data) {
//         console.log(data);
//     } else {
//         console.log(error);
//     }
// }
// loadData(checkResponse);


//ready states
/*  0 - request not initialized
    1 - server connection established
    2 - request received
    3 - processing request
    4 - request finished and response is ready
*/

//status codes
/*  200 - OK
    404 - Not Found / (client error -400..)
    500 - Internal Server Error / (server error -500..)
*/

// JSON is a object type to transfer data (as string) esasily between a server and a client rather than XML

/*
JSON
{
    "name": "John",
    "age": 30,
    "city": "New York"
}
XML
<person>
    <name>John</name>
    <age>30</age>
    <city>New York</city>
</person>
*/

//promises
//solution for avoid drowbacks of callback hell

const doYouLikeMe = (salary) => {
    return new Promise((resolve, reject) => {    
        if (salary > 50000) {
            resolve('Yes, I do');
        } else {    
            reject("No, I don't");
        }
    });
}

doYouLikeMe(60000).then(data => {
    console.log(data);
}).catch(error => {
    console.log(error);
})

//A **boilerplate** is a standard, reusable piece of code or text that provides a basic structure for a project or document.

//fetch api (promise based)

const fetchData = (url) => {
    return new Promise((resolve, reject) => {
        const http = new XMLHttpRequest();
        http.addEventListener('readystatechange', () => {
            if (http.readyState === 4 && http.status === 200) {
                resolve(JSON.parse(http.responseText));
            } else if (http.readyState === 4) {
                reject('could not fetch data');
            }
        });
        http.open('GET', url);
        http.send();
    });
};

fetchData('https://jsonplaceholder.typicode.com/posts').then(data => {
    console.log(data);
}).catch(error => {
    console.log(error);
});

// const urls = [
//     'https://jsonplaceholder.typicode.com/posts',
//     'https://jsonplaceholder.typicode.com/users',
//     'https://jsonplaceholder.typicode.com/comments'
// ];

// urls.forEach(url => {
//     fetchData(url).then(data => {
//         console.log(`Data from ${url}:`, data);
//     }).catch(error => {
//         console.log(`Error fetching ${url}:`, error);
//     });
// });

//chain promises

fetchData('https://jsonplaceholder.typicode.com/posts').then(data => {
    console.log(data);
    return fetchData('https://jsonplaceholder.typicode.com/comments');
}).then(data => {
    console.log(data);
}).catch(error => {
    console.log(error);
});

//fletch is inbuild function which returns promise
//fletch API

fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
    return response.json();
}).then(data => {    
    console.log(data);
}).catch(error => {
    console.log(error);
});

// async await
// we use async await because we want to wait for the response from the server before executing the next line of code 
// async await is a syntactic sugar for promises

const loadData = async () => {
    let dataSet = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await dataSet.json();
    return data;
}
loadData().then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

//callback -> callback hell -> promises -> async await

// error handling

const loadData = async () => {  
    try {
        let dataSet = await fetch('https://jsonplaceholder.typicode.com/posts');
        let data = await dataSet.json();
        return data;
    } catch (error) {
        return error;
    }
}
