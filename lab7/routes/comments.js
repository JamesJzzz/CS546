const todo = require("./todo");
const express = require('express');
const router = express.Router();

router.get("/recipe/:recipeId", async function (req, res) {
	try {
		const list = todo.getAllCommentsForRecipe(req.params.recipeId);
		res.json(list);
	}
	catch(e){
		res.status(404).json({ error: "Recipe not found" });
	}
	
});

router.get("/:commentId", async function (req, res) {
	try{
		const list = todo.listOfComment(req.params.commentId);
		res.json(list);
	}
	catch(e){
		res.status(404).json({ error: "Comment not found" });
	}
});

router.post("/:recipeId", async function (req, res){
	const postData = req.body;
	if (!postData) {
        res.status(400).json({ error: "Error" });
        return;
    }
    if(!postData.poster){
    	res.status(400).json({ error: "Error" });
        return;
    }
    if(!postData.comment){
    	res.status(400).json({ error: "Error" });
        return;
    }
	try{
		const newRecipe = await todo.createComment(req.params.recipeId, postData.poster, postData.comment);
		res.json(newRecipe);
	}
	catch(e){
		res.sendStatus(500);
	}

});

router.put("/:recipeId/:commentId", async function (req, res){
    const CommentInfo = req.body;

    if (!CommentInfo) {
        res.status(400).json({ error: "You must provide data to update a Comment" });
        return;
    }
    if(!CommentInfo.poster){
    	res.status(400).json({ error: "Error" });
        return;
    }
    if(!CommentInfo.comment){
    	res.status(400).json({ error: "Error" });
        return;
    }
    try{
    	await todo.getCommentbyCID(req.params.commentId);

    }
    catch(e){
    	res.status(404).json({ error: "Comment not found" });
    	return;
    }
    try{
    	const updatedComment = await todo.updateComment(req.params.recipeId, req.params.commentId, CommentInfo);
    	res.json(updatedComment);
    }
    catch(e){
    	res.sendStatus(500);
    }

});

router.delete("/:id", async function (req,res) {
	try{
		await todo.getCommentbyCID(req.params.id);
		res.sendStatus(200);
	}
	catch(e){
		res.status(404),json({error:"Recipe Not Found"});
		return;
	}
	try{
		await todo.deleteCommentbyCID(req.params.id);
		res.sendStatus(200);
	}
	catch(e){
		res.sendStatus(500).json({error:error});
		return;
	}
});

module.exports = router;