const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
}

// 객체를 반복시킬 땐 for...in
for (let person in testScores) {
    console.log(`${person} scored ${testScores[person]}`);
}

// Object.keys(), Object.values()
console.log('Object.keys', Object.keys(testScores));
console.log('Object.values', Object.values(testScores));

let total = 0;
let scores = Object.values(testScores);
for (let score of scores) {
    total += score;
}
console.log('total score', total);
console.log('average score', total / scores.length);