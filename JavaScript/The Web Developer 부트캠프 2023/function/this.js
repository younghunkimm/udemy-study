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