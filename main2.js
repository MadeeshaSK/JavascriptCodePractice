// Rest  and spread
// rest
let numbers = [1, 2, 3, 4, 5];
let [first, second, ...rest] = numbers;
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]
// spread
let numbers1 = [1, 2, 3];
let numbers2 = [4, 5, 6];
let numbers3 = [...numbers1, ...numbers2, 7, 8, 9];
console.log(numbers3); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

//date and time
let date = new Date();
console.log(date); // 2020-06-10T12:00:00.000Z
console.log(date.getFullYear()); // 2020
console.log(date.getMonth()); // 5(6-1)
console.log(date.getDate()); // 10
console.log(date.getDay()); // 3 0= sunday, 1= monday, 2= tuesday, 3= wednesday, 4= thursday, 5= friday, 6= saturday
console.log(date.getHours()); // 12
console.log(date.getMinutes()); // 0
console.log(date.getSeconds()); // 0
console.log(date.getMilliseconds()); // 0
console.log(date.getTime()); // 1591785600000
console.log(date.getTimezoneOffset()); // -330
let date2 = new Date('2020-10-20');
console.log(date2); // 2020-10-20T00:00:00.000Z
console.log(date2.toISOString()); // 2020-10-20T00:00:00.000Z
console.log(date2.toISOString().split('T')[0]); // 2020-10-20
//pipe
let date3 = new Date('2020-10-20');
let options = { year: 'numeric', month: 'long', day: 'numeric' };   
console.log(date3.toLocaleDateString('en-US', options)); // October 20, 2020
console.log(date3.toDateString()); // Tue Oct 20 2020
console.log(date3.toTimeString()); // 05:30:00 GMT+0530 (India Standard Time)
console.log(date3.getDate()+7); // 27

//Math
console.log(Math.PI); // 3.141592653589793
console.log(Math.round(4.7)); // 5
console.log(Math.round(4.4)); // 4
console.log(Math.pow(2, 3)); // 8
console.log(Math.sqrt(16)); // 4
console.log(Math.abs(-4.7)); // 4.7
console.log(Math.ceil(4.4)); // 5 (higher integer)
console.log(Math.floor(4.7)); // 4(lower integer)
console.log(Math.sin(90 * Math.PI / 180)); // 1
console.log(Math.cos(0 * Math.PI / 180)); // 1
console.log(Math.min(0, 150, 30, 20, -8, -200)); // -200
console.log(Math.max(0, 150, 30, 20, -8, -200)); // 150
console.log(Math.random()); // 0.123456789
console.log(Math.floor(Math.random() * 11)); // 4
console.log(Math.floor(Math.random() * 11)); // 8
console.log(Math.floor(Math.random() * 11)); // 1

//regular expression(regex) for form validation
const text = new RegExp('js')
console.log(text.test('js')) // true;
let message = 'Hello, welcome to javascript';
let pattern = /javascript/;
console.log(pattern.test(message)); // true
let pattern1 = /Hello/;
console.log(pattern1.test(message)); // true
let pattern2 = /hello/;
console.log(pattern2.test(message)); // false
//flags
let pattern3 = /hello/i;
// i - case insensitive, g - global search, m - multiline search
console.log(pattern3.test(message)); // true
let pattern4 = /\d/;
console.log(pattern4.test(message)); // false
// \s - space, \d - digit, \w - word character, \S - non-space, \D - non-digit, \W - non-word character
//quantifiers
// + - one or more, * - zero or more, ? - zero or one, {n} - exactly n times, {n,} - n or more times, {n,m} - n to m times

// local storage and session storage and cookies
// local storage - data is stored without expiration date, and will not be deleted when the browser is closed
//5MB for each domain in local storage in google chrome
let token = '123456';
localStorage.setItem('token', token);
let expDate = new Date();
expDate.setDate(expDate.getDate() + 31);
let obj = { 
    token2: 'dfsfdfsfds',
    expDate: expDate 
};
localStorage.setItem('user', JSON.stringify(obj));
let getObj = JSON.parse(localStorage.getItem('user'));
console.log(getObj.token2); // dfsfdfsfds
console.log(getObj); // { token2: 'dfsfdfsfds', expDate: '2020-07-11T12:00:00.000Z' }
localStorage.removeItem('token');
localStorage.clear();// clear all items
// session storage - data is stored for one session (data is lost when the browser tab is closed)
sessionStorage.setItem('token', token);
sessionStorage.setItem('user', JSON.stringify(obj));
let getObj2 = JSON.parse(sessionStorage.getItem('user'));
console.log(getObj2.token2); // dfsfdfsfds
console.log(getObj2); // { token2: 'dfsfdfsfds', expDate: '2020-07-11T12:00:00.000Z' }
sessionStorage.removeItem('token');
sessionStorage.clear();// clear all items
//cookies
// cookies are data, stored in small text files, on your computer, by the websites you visit, cookies are used to remember information about the user
// cookies are stored in the browser
// cookies are sent to the server with each request
// cookies can be set to expire after a specific date
// cookies can only be read by the domain that set them
// more secure than local storage and session storage
//if you use cookies , need to get permission from the user by using cookie consent banner or popup or user agreement
document.cookie = 'username=John Doe; expires=Thu, 18 Dec 2020 12:00:00 UTC; path=/';

//ajax
//ajax - asynchronous javascript and xml
//ajax is a technique for creating fast and dynamic web pages
//ajax allows web pages to be updated asynchronously by exchanging small amounts of data with the server behind the scenes
//ajax is used for sending data to the server without refreshing the page
//ajax is used for updating the page without refreshing the page
//ajax is used for getting data from the server without refreshing the page

let btn = document.getElementById('btnId');
btn.addEventListener('click', (event) => {
    let data = document.getElementById('postId');
    let id = data.value;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/'+id, true);
    xhr.onload = () => {
        console.log(xhr.responseText);
    }
    xhr.send();
})

// this
// this keyword refers to the object it belongs to
// this keyword is used to access the object properties and methods
// this keyword is used to access the object constructor
// this keyword is used to access the object itself
// this keyword is used to access the object elements
// this keyword is used to access the object events

// this keyword in global context
console.log(this); // window object

// this keyword in function context
const student = {
    name: 'John',
    age: 25,
    getMarks : function() {
        let sayMarks = () => {
            console.log(`hello ${this.name}`);
        }
    }
}

//jQuery
//jQuery is a fast, small, and feature-rich javascript library
//jQuery is a cross-platform javascript library

// let state = true;
// const showAndHide = () => {
//     if(state) {
//         document.getElementById('box').style.display = 'none';
//     } else {
//         document.getElementById('box').style.display = 'block';
//     }
//     state = !state;
// }

// we can write the above code in jQuery as below in easy way
// add jquery cdn in before the js file in html file , get the code from jquery.com google cdn
// then search for code in jquery.com for show and hide and copy the code and paste it in the js file
// $ is the symbol for jquery

// let state = true;
// $('#btn').click(() => {
//     if(state) {
//         $('#box').hide(2000);//more ... fadeIn and fadeOut
//     } else {
//         $('#box').show(2000);
//     }
//     state = !state;
// })

let state = true;
$('#btn').click(() => {
    $('#box').toggle(2000); //more ... mouseenter and mouseleave
    // $('#box').css('background-color', 'green');
    // $('#box').css('color', 'white');
    $('#box').css({
        'background-color': 'green',
        'color': 'white'
    })
})

// click image and set the image in the box
const setImage =(id) => {
    if (id == 1) {
        // let url1 = $('.i1').css('background-image');
        // $('.top').css('background-image', url1);
        $('.top').css('background-image', $('.i1').css('background-image'));
    } else if (id == 2) {
        $('.top').css('background-image', $('.i2').css('background-image'));
    } else if (id == 3) {
        $('.top').css('background-image', $('.i3').css('background-image'));
    } else if (id == 4) {
        $('.top').css('background-image', $('.i4').css('background-image'));
    }
}

// load data using ajex and jquery with bootstrap

$(document).ready(() => {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/photos',
        type: 'GET',
        dataType: 'json',
        success: (response) => {
            let tBody = $('.table tbody');
            tBody.empty();
            response.slice(0, 10).forEach((item) => {//response.forEach((item) => { // all data
                let row = $('<tr>').appendTo(tBody);
                $('<td>').text(item.id).appendTo(row);
                $('<td>').text(item.title).appendTo(row);
                $('<td>').append($('<img>').attr('src', item.url)).css({width :"100px", hieght :'50px'}).appendTo(row);
            })

        },error: (error) => {
            console.log(error);
        }
    })
});



