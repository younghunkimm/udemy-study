const express = require("express");
const app = express();
const path = require("path");
const redditData = require('./data.json');

// 정적 Assets
app.use(express.static(path.join(__dirname, '/public')));

// ejs(embeded JavaScript) 를 쓰기 위해 세팅
app.set('view engine', 'ejs');

// 상위 폴더에서 `nodemon Templating/index.js` 를 실행하면 views 폴더를 상위폴더에서 찾기 때문에 에러가 발생한다.
// 현재 index.js 파일이 있는 현재 디렉토리를 가져와서 /views를 붙여준다
// 어느 폴더에서 서버를 실행해도 views 폴더를 찾을 수 있게
app.set('views', path.join(__dirname, '/views'));

app.get("/", (req, res) => {
    res.render('home');
});

app.get("/cats", (req, res) => {
    const cats = ["Blue", "Rocket", "Monty", "Stephanie", "Winston"];
    res.render('cats', { cats });
})

// 서브레딧 템플릿
app.get("/r/:subreddit", (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    if (data) {
        res.render('subreddit', { ...data });
    } else {
        res.render('notfound', { subreddit });
    }
});

// 템플릿에 데이터 전달하기
app.get("/rand", (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render("random", { num /* == num: num */ });
});

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000");
});