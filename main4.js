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