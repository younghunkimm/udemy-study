const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function() {
        return `${this.firstName} ${this.lastName}`; // Viggo Mortensen
    },
    /**
     * 화살표 함수에서는 this 가 window 객체를 가르킨다.
     */
    fullName2: () => {
        return `${this.firstName} ${this.lastName}`;
    },
    shoutName: function() {
        /**
         * setTimeout 함수는 window 객체의 메소드이기 때문에
         * this 는 window 객체를 가르켜서 window.fullName2 함수를 찾지못함.
         * 
         * setTimeout => window.setTimeout 동일함
         */
        setTimeout(function() {
            console.log(this.fullName());
        }, 3000);
    },
    shoutName2: function() {
        /**
         * 👍 화살표 함수 안에 있는 this 는 함수가 속해있는 곳의 상위 this를 계승받는다 👍
         * 👍 화살표 함수는 내부에 this 값을 가지지 않기 때문 👍
         */
        setTimeout(() => {
            console.log(this.fullName());
        }, 3000);
    }
}