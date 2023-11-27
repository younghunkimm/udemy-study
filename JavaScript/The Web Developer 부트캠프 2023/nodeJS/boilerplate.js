const fs = require('fs');

const folderName = process.argv[2] || 'Project';

// console.log(fs);

/**
 * 비동기 함수
 * 
 * 비동기 함수에는 콜백 함수가 있음❗️❗️
 * 
 * Dogs 폴더를 생성한다.
 */
// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log("IN THE CALLBACK!!");
//     if (err) throw err;
// });


try {
    /**
     * 동기 함수
     * 
     * Cats 폴더를 생성한다.
     */
    fs.mkdirSync(folderName);
    
    // 스크립트를 실행한 곳에서 코드가 실행된다. (실행한 곳에 폴더 및 파일이 만들어지므로 주의❗️)
    fs.writeFileSync(`${folderName}/index.html`, '');
    fs.writeFileSync(`${folderName}/app.css`, '');
    fs.writeFileSync(`${folderName}/app.js`, '');
} catch (e) {
    console.log("SOMETHING WENT WRONG!!!");
    console.log(e);
}


// console.log("I COME AFTER MKDIR!!!");