class Pet {
    constructor(name, age) {
        console.log("IN PET CONSTRUCTOR!");
        this.name = name;
        this.age = age;
    }

    eat() {
        return `${this.name} is eating!`;
    }
}

class Cat extends Pet {
    constructor(name, age, livesLeft = 9) {
        console.log("IN CAT CONSTRUCTOR!");
        super(name, age); // Pet 의 constructor 를 상속한다.
        this.livesLeft = livesLeft; // Cat 만 별도로 추가 가능
    }

    meow() {
        return 'MEOWWWW!!';
    }
}

const monty = new Cat('monty', 9);
console.log(monty);
console.log(monty.eat());



class Dog extends Pet {
    bark() {
        return 'WOOOF!!';
    }

    eat() {
        return `${this.name} scarfs his food!`; // 상속된 Pet 의 eat 함수를 덮어쓴다.
    }
}

const wyatt = new Dog('Wyatt', 13);
console.log(wyatt);
console.log(wyatt.eat());