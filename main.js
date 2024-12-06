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

let sh = document.getElementsByTagName('div')[1];
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