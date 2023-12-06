const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
.then(() => {
    console.log("CONNECTION OPEN!!!")
})
.catch(err => {
    console.log("OH NO ERROR!!!!");
    console.log(err);
});

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String,
});

const Movie = mongoose.model('Movie', movieSchema);
// const amadeus = new Movie({ title: 'Amadeus', year: 1986, score: 9.2, rating: 'R' });



/**
 * MongoDB
 * 
 * 1. mongosh
 * 2. show dbs : DB 를 조회한다.
 * 3. use [DB] : DB 연결
 * 4. show collections : Table 을 조회한다.
 * 
 * [조회]
 * 5. db.[Table].find() : Table 에서 데이터를 조회한다.
 *      - db.[Table].find({key: value})
 * 
 * [삽입]
 * 6. db.[Table].insert()
 *    db.[Table].insertOne()
 *    db.[Table].insertMany()
 * 
 *      - db.[Table].insertOne({name: "Charlie", age: 3, breed: "corgi", CatFriendly: true})
 *      - db.[Table].insert([{name: "Wyatt"}, {name: "Tonya"}])
 * 
 * [수정]
 * 7. db.[Table].updateOne()
 *    db.[Table].updateMany()
 * 
 *      - db.[Table].updateOne({name: "Charlie"}, {$set: {age: 4}}) : `name: Charlie` 인 데이터 1개를 `age: 4` 로 업데이트
 *      - db.[Table].updateMany({catFriendly: true}, {$set: {isAvailable: false}}) : `catFriendly: true` 인 데이터를 모두 업데이트
 *      - db.[Table].updateOne({age: 6}, {$set: {age: 7}, $currentDate: {lastModified: true}}) : lastModified 가 현재날짜로 업데이트
 * 
 * [삭제]
 * 8. db.[Table].deleteOne()
 *    db.[Table].deleteMany()
 * 
 *      - db.[Table].deleteOne({name: "Blue Steele"}) : `name: Blue Steele` 인 데이터 1개를 삭제
 *      - db.[Table].deleteMany({isAvailable: false}) : `isAvailable: false` 인 데이터를 모두 삭제
 * 
 * [기타 연산자]
 * {
 *      "_id": ObjectId("65706604acf6c7e03b327b18"),
 *      "name": "Dodger",
 *      "age": "10"
 *      "personality": {
 *          "catFriendly": true,
 *          "childFriendly": true
 *      }
 * }
 * 
 * <?> `age: 10` 이고 `catFriendly: true` 인 데이터 조회
 * db.[Table].find({'personality.childFriendly': true, age: 10})
 * 
 * db.[Table].find({age: {$gt: 8}}) : age > 8
 * db.[Table].find({age: {$gte: 8}}) : age >= 8
 * db.[Table].find({age: {$lt: 8}}) : age < 8
 * db.[Table].find({age: {$lte: 8}}) : age <= 8
 * 
 * db.[Table].find({breed: {$in: ['Mutt', 'Corgi']}}) : `breed` 가 (`Mutt` or `Corgi`) 인 데이터 조회
 * db.[Table].find({breed: {$nin: ['Mutt', 'Corgi']}}) : $in 의 반대
 * 
 * db.[Table].find({$or: [{'personality.catFriendly': true}, {age: {$lte: 2}}]}) : `catFriendly: true` or `age <= 2` 인 데이터 조회
 * db.[Table].find({$and: [{'personality.catFriendly': true}, {age: {$lte: 2}}]}) : `catFriendly: true` and `age <= 2` 인 데이터 조회
 */




/**
 * 데이터 대량 삽입하기
 * 
 * 1. 아래 주석 풀기
 * 2. node index.js
 */
// Movie.insertMany([
//     { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
//     { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
//     { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
//     { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
//     { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' }
// ])
// .then(data => {
//     console.log("IT WORKED");
//     console.log(data);
// })



/**
 * mongoose
 * 
 * Mongoose queries are not PROMISES.
 * Queries are THENABLE.
 */

/**
 * Model.find()
 * - 결과를 하나 또는 여러 개 찾는다.
 * 
 * 1. node
 * 2. .load index.js
 * 
 * [조회]
 * 3. Movie.find({}) : 쿼리 객체를 반환
 *      - Movie.find({}).then(data => console.log(data)) 🔥 정보를 가져오려면 `then`을 쓴다.
 *      - Movie.find({year: {$gte: 2010}}).then(data => console.log(data)) 🔥 year >= 2010 데이터를 반환
 *      - Movie.find({year: {$lt: 1990}}).then(data => console.log(data)) 🔥 year < 1990 데이터를 반환
 * 
 * 4. Movie.findById() : id 값으로 조회
 *      - Movie.findById('65706604acf6c7e03b327b18').then(m => console.log(m))
 * 
 * [수정]
 * 5. Movie.updateOne()
 *    Movie:updateMany()
 * 
 *      - Movie.updateOne({title: 'Amadeus'}, {year: 1984}).then(res => console.log(res)) : 진행결과만 알려준다.
 *      - Movie.updateMany({title: {$in: ['Amadeus', 'Stand By Me']}}, {score: 10}).then(res => console.log(res))
 * 
 * 6. Movie.findOneAndUpdate()
 * 
 *      - Movie.findOneAndUpdate({title: 'The Iron Giant'}, {score: 7.0}).then(m => console.log(m)) : 수정되기 전 데이터를 반환
 *      - Movie.findOneAndUpdate({title: 'The Iron Giant'}, {score: 7.8}, {new: true}).then(m => console.log(m)) : 수정된 후 데이터를 반환
 * 
 * [삭제]
 * 7. Movie.deleteOne()
 *    Movie.deleteMany()
 * 
 *      - Movie.deleteOne({title: 'Amelie'}).then(msg => console.log(msg)) : 진행결과만 알려준다.
 *      - Movie.deleteMany({year: {$gte: 1999}}).then(msg => console.log(msg))
 * 
 * 8. Movie.findOneAndDelete()
 * 
 *      - Movie.findOneAndDelete({title: 'Alien'}).then(m => console.log(m)) : 데이터를 반환
 */