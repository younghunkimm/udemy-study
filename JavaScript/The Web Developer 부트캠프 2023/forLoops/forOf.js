const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer'];

// 클래식한 방법
for (let i = 0; i < subreddits.length; i++) {
    console.log(`Visit reddit.com/r/${subreddits[i]}`);
}

// for...of 를 이용한 방법
for (let subreddit of subreddits) {
    console.log(`Visit reddit.com/r/${subreddit}`);
}



// for.html 을 for...of 로
const seatingChart = [
    ['Kristen', 'Erik', 'NAmita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
];



for (let row of seatingChart) {
    for (let student of row) {
        console.log(student);
    }
}

for (let char of "hello world") {
    console.log(char);
}