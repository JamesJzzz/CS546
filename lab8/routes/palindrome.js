const express = require('express');
const router = express.Router();
const data = require("../data");
const calculator = data.calculator;

router.get("/static", (req, res) => {
    res.render("palindrome/static", {});
});

router.get("/server", (req, res) => {
    res.render("palindrome/server", {});
});

router.post("/server", (req, res) => {
    let word = req.body.word;
    let result;

    try {
       	result = palindrome.isPalindrome(word);
    } catch (e) {
        res.render("palindrome/server", { word : word, error: e });
        return;
    }

    res.render("palindrome/server", { word : word, error: e });
});

module.exports = router;
