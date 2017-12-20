const express = require('express');
const router = express.Router();

router.get("/", (req,res) =>{
	res.json({
		"storyTitle":"My daily life",
		"story": "I have nothing to tell. This is so boring. I don't knnow what to tell. I just have nothing to tell. My girlfriend's birthday is coming soon. What should I get her. Oh God this is the hardest task ever. I am so done with myself. oh, oh nevermind, I forgot what I was about to say. Is this a good story? I think it is. I like it so far. What do you say. BYE. THE END!!!"
	});
});

router.post("/", (req,res) => {
	res.status(501).send();

});

module.exports = router;