const express = require("express");
const app = express();

/**
 * app.use
 * 
 * 들어오는 요청이 있다면 언제든지 콜백 함수를 실행한다.
 * @param req - 들어오는 요청을 의미하는 객체
 * @param res - 응답을 의미하는 객체
 */
// app.use((req, res) => {
    // console.log("WE GOT A NEW REQUEST!!");
    // res.send("HELLO, WE GOT YOUR REQUEST! THIS IS A RESPONSE!");
    // res.send({ color: 'red' })
    // res.send("<h1>This is my webpage!</h1>");
// });



app.get('/', (req, res) => {
    res.send("THIS IS THE HOME PAGE!!!!!");
});

app.post('/cats', (req, res) => {
    res.send("POST REQUEST TO /cats!!!! THIS IS DEFFERENT THAN A GET REQUEST!");
});

app.get('/cats', (req, res) => {
    res.send("MEOW!!");
});
app.get('/dogs', (req, res) => {
    res.send("WOOF!!");
});

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the [${subreddit}] subreddit</h1>`);
});

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing Post ID: [${postId}] on the [${subreddit}] subreddit</h1>`);
});

app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send("NOTHING FOUND IF NOTHING SEARCHED!");
    }
    res.send(`<h1>Search results for: ${q}</h1>`);
});



// 이 코드를 위로 올리면 덮여버림
app.get('*', (req, res) => {
    res.send(`I don't know that path!`);
});

/**
 * app.listen
 * 
 * 서버를 실행한다.
 * localhost:{포트번호}
 */
app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080!");
});