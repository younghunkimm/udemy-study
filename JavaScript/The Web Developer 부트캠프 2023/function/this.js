/**
 * 'THIS' in Methods
 * 
 * this 는 사용된 함수의 호출 컨텍스트에 따라 값이 달라진다.
 */
const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow() {
        console.log('THIS IS:', this);
        console.log(`${this.name} says MEOWWWW`);
    }
}
cat.meow(); // Blue Steele says MEOWWW (this 가 cat 객체를 가르킨다)

const meow2 = cat.meow;
meow2() // {blank} says MEOWWW (this 가 window 객체를 가르킨다)





// this 의 값은 함수를 호출한 방법에 의해 결정된다
const car = {
    name: 'KIA',
    getName() {
        console.log("car getName", this);
    }
}
car.getName(); // A.b - this 가 car 객체를 가르킨다.


const globalCar = car.getName;
globalCar(); // b - this 가 window 객체를 가르킨다.


const car2 = {
    name: 'hyundai',
    getName: car.getName
}
car2.getName(); // this 가 car2 객체를 가르킨다.

// this 는 호출하는 객체를 가르킨다!


const btn = document.getElementById('button');
btn.addEventListener('click', car.getName);


// this 의 값을 고정 시키기 위한 함수 (bind)
const bindGetName = car2.getName.bind(car);
bindGetName(); // this 가 car 객체를 가르킨다

const btn2 = document.getElementById('button2');
btn2.addEventListener('click', car.getName.bind(car));


/**
 * 👍 화살표 함수에서의 this는 함수가 속해있는 곳의 상위 this를 계승받는다 👍
 * 👍 화살표 함수는 내부에 this 값을 가지지 않기 때문 👍
 */
const testCar = {
    name: 'benz',
    getName() {
        console.log('getname', this.name); // this 가 testCar 를 가르킨다.
        const innerFunc = function() {
            console.log('innerFunc', this.name); // this 가 window 객체를 가르킨다.
        }
        innerFunc(); // window 객체가 호출한거

        // 👍 this 가 testCar 를 가르키게 하는 방법
        const innerFunc2 = () => {
            console.log('innerFunc2', this.name); // this 가 testCar 를 가르킨다.
        }
        innerFunc2();
    }
}

testCar.getName();