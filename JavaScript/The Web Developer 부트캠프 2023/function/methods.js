/**
 * 모든 메서드는 함수이지만
 * 모든 함수가 메서드인 건 아님
 */

const myMath = {
    PI: 3.14159,
    square: function(num) {
        return num * num;
    },
    cube: function(num) {
        return num ** 3;
    }
}

// Short Hand
const myMath2 = {
    PI: 3.14159,
    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    }
}