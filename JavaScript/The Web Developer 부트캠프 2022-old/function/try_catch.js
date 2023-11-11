'use strict';

// 코드를 문제없이 실행시키고 오류처리 가능
try {
  hello.toUpperCase();
} catch {
  console.log('ERROR!!!!');
}

// 문자열이 아닌 상황
function yell(msg) {
  try {
    console.log(msg.toUpperCase().repeat(3));
  } catch (e) {
    console.log(e);
    console.log('Please pass a string next time!');
  }
}
yell(14123);