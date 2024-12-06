// use let or var or const to declare a variable
/*
string
    let name = 'John';
    let name = "John Doe";
    print to console
        console.log('Hello World');
        console.log(typeof address);

number
    let age = 30;
    let age = 30.5;
    let age = -30;
    console.log(typeof age);

boolean
    let isMarried = true;
    let isMarried = false;
    console.log(isMarried);
    console.log(typeof isMarried);

null
    let car = null;
    console.log(car);
    console.log(typeof car);
    // null represents an empty value of an object

undefined
    let test;
    same as, let test = undefined;
    console.log(test);
    console.log(typeof test);
    // undefined represents an uninitialized value

symbol
    let sym = Symbol();
    console.log(sym);
    console.log(typeof sym);

object
    let address = {
        city: 'Jakarta',
        country: 'Indonesia',
        fav: ['music', 10, true]    
    };
    console.log(address);
    console.log(typeof address);
    // object is a non-primitive data type that represents a collection of key-value pairs

array
    let hobbies = ['music', 'movie', 'reading'];
    console.log(hobbies);
    console.log(typeof hobbies); // prints object
    let salad = ['a', 'apple', 10, true]; //prints object
    array is a subtype of object

function
    let greet = function() {
        return 'Hello';
    }
    console.log(greet);
    console.log(typeof greet);

*/

// hoisting
/*
    console.log(name);
    var name = 'John';
    // prints undefined
    // hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution
    // only variable declarations are hoisted, not the initializations
    // let and const are not hoisted, only var is hoisted.
    so dont use var anymore, use let or const , only use var if you have to use it.

    const should be initialized when declared, and cannot reassign a value to a constant variable.

    when we use functions , it also hoisted,
    greet();
    function greet() {
        console.log('Hello');
    }
        auto declaretion go to the top of the code.

function print() {
	var x = 10;
  console.log(x);
  if (true) {
  	var x = 20;
    console.log(x);
  }
  console.log(x);
}
print();
prints 10, 20, 20

function print() {  
    let x = 10;
    console.log(x);
    if (true) {
        let x = 20;
        console.log(x);
    }
    console.log(x);
}
print();
prints 10, 20, 10

var is function scoped, let and const are block scoped.


// operatoes
//arithmetic 

let x = 10;
let y = 3;
console.log(x + y); // 13
console.log(x - y); // 7
console.log(x * y); // 30
console.log(x / y); // 3.3333333333333335
console.log(x % y); // 1
console.log(x ** y); // 1000
increment (++)
console.log(x++); // 10
console.log(x); // 11
console.log(++x); // 12
decrement (--)
console.log(x--); // 12
console.log(x); // 11
console.log(--x); // 10

// assignment
let x = 10;
x = x + 5;
x += 5;
x -= 5;
x *= 5;
x /= 5;
x %= 5;

// comparison
let x = 1;
// relational
console.log(x > 0); // true
console.log(x >= 1); // true
console.log(x < 1); // false
console.log(x <= 1); // true
// equality
console.log(x === 1); // true
console.log(x !== 1); // false
// strict equality (type + value)
console.log(1 === 1); // true
console.log('1' === 1); // false
// lose equality (value)
console.log(1 == 1); // true
console.log('1' == 1); // true
console.log(true == 1); // true

// ternary
let points = 110;
let type = points > 100 ? 'gold' : 'silver';
console.log(type); // gold

// logical
// logical AND (&&)
console.log(true && true); // true
console.log(true && false); // false
// logical OR (||)
console.log(true || true); // true
console.log(true || false); // true
// logical NOT (!)
console.log(!true); // false
console.log(!false); // true

// bitwise
// 1 = 00000001
// 2 = 00000010
// 3 = 00000011
// R = 00000000
console.log(1 | 2); // 3
console.log(1 & 2); // 0

// typeof
let name = 'John';
console.log(typeof name); // string
let age = 30;
console.log(typeof age); // number
let isMarried = true;
console.log(typeof isMarried); // boolean
let car = null;
console.log(typeof car); // object
let test;
console.log(typeof test); // undefined
let sym = Symbol();

// control flow


*/

