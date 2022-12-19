const express = require('express');
const router = express.Router();
let users = require('../db/users.json')

router.get("/register", (req, res) => {
    res.render('register');
});

router.post("/register", (req, res) => {
    const {email, password} = req.body;
    users.push({email, password});
    console.log(users);
    res.redirect("/");
});

router.get("/login", (req, res) => {
    res.json(users);
});

module.exports = router