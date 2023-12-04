const express = require("express");
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const { v4: uuid } = require('uuid');

/**
 * <POST>
 * 
 * req.body
 * - request body 에 제출된 데이터의 키-값 쌍을 포함
 * - 기본적으로 정의되지 않으며 `express.json()` 이나 express.urlencoded() 와 같은
 *      body 분석 middleware 사용 시 추가된다.
 */
app.use(express.urlencoded({ extended: true }));

/**
 * request body 에 JSON 데이터를 제출할 때
 */
app.use(express.json());

/**
 * 브라우저의 폼에서는 GET, POST 를 제외하면 보낼 수 없다. (Fetch, Axios 등 으로는 가능)
 * method-override 를 사용하여 express 에 PUT, DELETE 를 요청할 수 있다.
 */
app.use(methodOverride('_method'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

let comments = [
    {
        id: uuid(),
        username: "Todd",
        comment: 'lol that is so funny!'
    },
    {
        id: uuid(),
        username: "Skyler",
        comment: 'I like to go birdwatching with my dog'
    },
    {
        id: uuid(),
        username: "Sk8erBoi",
        comment: 'Plz delete your account, Todd'
    },
    {
        id: uuid(),
        username: "onlysayswoof",
        comment: 'woof woof woof'
    },
];

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
});

app.get('/comments/new', (req, res) => {
    res.render('comments/new');
})

app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ id: uuid(), username, comment });
    res.redirect('/comments');
});

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    // id 값이 req.params 에서 오기 때문에 문자열이 된다. (parseInt 사용)
    // uuid 를 쓰면 문자열이기 때문에 상관 X
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment });
});

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment });
});

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newCommentText;

    res.redirect('/comments')
})

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments');
});







app.get("/tacos", (req, res) => {
    res.send("GET /tacos response");
});

app.post("/tacos", (req, res) => {
    const { meat, qty } = req.body;
    res.send(`OK, here are your ${qty} ${meat} tacos`);
})

app.listen(3000, () => {
    console.log("ON PORT 3000");
})