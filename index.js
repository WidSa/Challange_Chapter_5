const express = require('express');
const app = express();
const port = 3001;
const authRouter = require('./Routes/auth');

app.use(express.urlencoded({extended : false}));
app.use(express.json())
app.use(express.static('Challange'));
app.use(express.static('ChallengeChapter4'));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/Challange/index.html");
});

app.get("/minigame", (req, res) => {
    res.sendFile(__dirname + "/ChallengeChapter4/Chapter4.html");
});

app.use("/auth", authRouter);

app.listen(port, () => {
    console.log(`started at port ${port}`);
});