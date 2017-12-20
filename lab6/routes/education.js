const express = require('express');
const router = express.Router();

router.get("/", (req,res)=>{
	res.json([{
		"schoolName": "The Worst School Ever",
		"degree": "High School Degree",
		"favoriteClass": "No Class",
		"favoriteMemory": "I Killed Someone in the School"
	},
	{
		"schoolName": "The Best School Ever",
		"degree": " BS Degree",
		"favoriteClass": "Your Class",
		"favoriteMemory": " I Killed myself in the School"
	}]);
});

router.post("/", (req,res) =>{
	res.status(501).send();

});

module.exports = router;