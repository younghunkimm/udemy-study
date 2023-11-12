// 화살표 함수와 기존 함수 차이
const person = {
  firstName: 'Viggo',
  lastName: 'Mortensen',
  fullName: function() {
    return `${this.firstName} ${this.lastName}`;
  },
  shoutName: function() {
    // 화살표 함수를 쓰지 않으면 this가 window
    // setTimeout이 window 함수라서
    setTimeout(function() {
      console.log(this);
      console.log(this.fullName());
    }, 3000);
  }
}
console.log(person.fullName());
console.log(person.shoutName());

const person2 = {
  firstName: 'Viggo',
  lastName: 'Mortensen',
  fullName: function() {
    return `${this.firstName} ${this.lastName}`;
  },
  shoutName: function() {
    // 화살표 함수를 쓰면 this가 person2를 가르킴
    setTimeout(() => {
      console.log(this);
      console.log(this.fullName());
    }, 3000);
  }
}
console.log(person2.fullName());
console.log(person2.shoutName());