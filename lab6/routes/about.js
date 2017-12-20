const express = require('express');
const router = express.Router();

router.get("/", (req,res) => {
	res.json({
		"name": "James", 
		"biography": "This is James, 21 years old, and what else uh ...... Oh wait I am 22 years old damn. That is it I guess",
		"favoriteShows":["Agents of S.H.I.E.L.D.", "The Big Band Theory", "Game of Thrones"],
		"hobbies": ["Playing Basketball", "Coding", "Coding", "Coding FOR SURE!!! (What a boring hobby)",
		"Sleeping", "Cooking", "Watching Movie", "Swimming", "Eating"]
	});
});

router.post("/", (req, res) =>{
	res.status(501).send();
});

module.exports = router;