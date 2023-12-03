const express = require("express");
const app = express();

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