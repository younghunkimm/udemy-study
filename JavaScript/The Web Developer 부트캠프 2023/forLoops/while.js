/**
 * While Loops
 * 
 * 비밀번호를 입력하기전까지 무한반복된다.
 */
const SECRET = "BabyHippo";

let guess = prompt("enter the secret code...");
while (guess !== SECRET) {
    guess = prompt("enter the secret code...");
}
console.log("CONGRATS YOU GOT THE SECRET!!!");