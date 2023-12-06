const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
.then(() => {
    console.log("CONNECTION OPEN!!!")
})
.catch(err => {
    console.log("OH NO ERROR!!!!");
    console.log(err);
});

const personSchema = new mongoose.Schema({
    first: String,
    last: String
});

/**
 * 가상 mongoose
 * 
 * `this` 는 사람 개인이자
 * 작업하는 인스턴스를 참조하며
 * 인스턴스 메서드와는 다름
 * 
 * 가상 특성에 대한 `getter`, `setter` 를 정의
 * 
 * 1. node
 * 2. .load person.js
 * 3. const tammy = new Person({ first: 'Tammy', last: 'Chow' })
 * 4. tammy.fullName -> Tammy Chow
 */
personSchema.virtual('fullName').get(function() {
    return `${this.first} ${this.last}`;
});

/**
 * middleware
 * 
 * 특정 mongoose 메서드 실행 전후에 실행하는 hook
 * 
 * 1. node
 * 2. .load person.js
 * 3. const colt = new Person({ first: 'Colt', last: 'Steele' })
 * 4. colt
 * 5. colt.save().then(p => console.log(p))
 */
personSchema.pre('save', async function() {
    this.first = 'YO';
    this.last = 'MAMA';
    console.log("ABOUT TO SAVE!!!!");
});
personSchema.post('save', async function() {
    console.log("JUST SAVED!!!!");
})

const Person = mongoose.model('Person', personSchema);