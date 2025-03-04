// oop
// js is object oriented language
let animals = ['dog', 'cat', 'horse', 'elephant', 'lion'];
console.log(animals);
console.log(typeof animals);

let Ranil = {
    name: 'Ranil',
    age: 30,
    address: 'Colombo',
    isMarried: true,
    profession: 'Politician',
    horakanawa() {
        console.log(this.name, 'Hora kanawa');
    }
};
console.log(Ranil);
console.log(typeof Ranil);
Ranil.horakanawa();
Ranil.name = 'Ranil Wickramasinghe';//static changes
Ranil['age'] = 70;// dynamic changes
// we can avoid boilar plate code using classes and objects

class Person {
    constructor (name, age, address, isMarried, profession) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.isMarried = isMarried;
        this.profession = profession;
    }
    getVote() {
        console.log('man dinna');
        //method chaining
        return this;
    };

}
//inheritance
class Hora extends Person {
    constructor(legalState ,name, age, address, isMarried, profession) {
        super(name, age, address, isMarried, profession);
        this.legalState = legalState;
    }
    horakanawa(talent){
        console.log(this.name, talent);
        //method chaining
        return this;
    };

    doProtest(){
        console.log('#GoHome', this.name);
    };
}
class HodaEkkana extends Person {
    horuAllanawa (talent) {
        talent.forEach(element=>{
            console.log(element.name, 'alluwa (' + this.name + ')');
        })
        //method chaining
        return this;
    };
    apitaOniAnu() {
        console.log('#Apita oni ape', this.name);
    };
}
let Maninda = new Hora('Neethiya ape','Maninda', 30, 'Colombo', true, 'Engineer');
let Gotabaya = new Hora('Neethiya ape','Gotabaya', 70, 'Colombo', true, 'Politician');
let Anura = new HodaEkkana('Anura', 70, 'Colombo', true, 'Politician');
console.log(Maninda);
console.log(Gotabaya);
console.log(Anura);
Maninda.horakanawa('Hora kanawa');
Gotabaya.horakanawa('rata kawa');

let horuArr = [Maninda, Gotabaya];

//method chaining
Maninda.getVote().horakanawa('Hora kanawa').doProtest();
Anura.getVote().horuAllanawa(horuArr).apitaOniAnu();

//prototype

function Person2 (name,address) {
    this.name = name;
    this.address = address;
}
function Student (name) {
    this.name = name;
}

const Kamal = new Person2 ('Kamal', 'Colombo');
const Nimal = new Student ('Nimal');

Nimal.__proto__ = Kamal;
//basically we can inherit the properties of Kamal to Nimal(one of usage of prototype)

console.log(Kamal);
console.log(Nimal);

//insert a new property and method to the prototype
Person2.prototype.gender = 'Male';
Person2.prototype.sayHello =()=>{
    console.log('Hello');
}
console.log(Kamal.gender);
Kamal.sayHello();

// Geolocation API
/*
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((location) => {
        const longitude = location.coords.longitude;
        const latitude = location.coords.latitude;
        console.log(longitude, latitude);

        const mapData =new google.maps.Map(document.getElementById('map-context'), {
            center: {lat: latitude, lng: longitude},
            zoom: 8
        });

        new google.maps.Marker({
            position: {lat: latitude, lng: longitude},
            map: mapData,
            title: 'My Location'
        });
    })
} else {
    console.log('Geolocation is not supported');
}
*/

// design patterns

// 1. Singleton
// js clauses are singleton by default
const Singleton =( () => {
    let instance;
    const createInstance =()=> {
        return new Object();
    }
    return {
        getInstance: () => {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();
const i1 = Singleton.getInstance();
const i2 = Singleton.getInstance();
console.log(i1 === i2);

//2. Factory
class Customer {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}
class Factory {
    createCustomer(name, address) {
        return new Customer(name, address);
    }
}
const factory = new Factory();
const c1 = factory.createCustomer('Nimal', 'Colombo');
const c2 = factory.createCustomer('Amlal', 'Kandy');
console.log(c1);
console.log(c2);

//3. Observer

class Subject{
    constructor() {
        this.observers =[];
    }
    Substribe(observer){
        this.observers.push(observer);
    }
    Unsubstribe(observer){
        this.observers = this.observers.filter((obs) => obs !== observer);
    }
    notify(message) {
        this.observers.forEach((observer) => observer.showMessage(message));
    }
}
 class Observer{
    constructor(username) {
        this.username = username;
    }
    showMessage(message){
        console.log(`${this.username} received message: ${message}`);
    }
 }
    const subject = new Subject();
    const observer1 = new Observer('Nimal');
    const observer2 = new Observer('Kamal');
    subject.Substribe(observer1);
    subject.Substribe(observer2);
    subject.notify('Hello');


    // axios
// axios use for http requests in js (get, post, put, delete)
// axios is a promise based library
// axios is a third party library

/*
axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(dataResponse => {
        console.log(dataResponse.data);
    })
    .catch(error => {
        console.log(error);
    });
*/

// flatMap
// flatmap is a combination of map and flat
// flatmap is used to flatten the array
// flatmap is used to transform the array


const dataArray = [1,2,3,4,5];
const finalizedData = dataArray.flatMap((data) => [data * 2]);
console.log(finalizedData);
const finalizedData2 = dataArray.findIndex(data=>data>2);
console.log(finalizedData2);