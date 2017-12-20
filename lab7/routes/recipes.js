const todo = require("./todo");
const express = require('express');
const router = express.Router();

router.get("/", async function (req, res) {
	try{
		const r = await todo.getAllRecipes();
		res.json(r);
	}
	catch(e){
		res.status(500);
	}
	// todo.getAllRecipes().then((recipes) => {
	// 	res.send(recipes);
	// }, () => {
	// 	res.status(500);
	// });
});

router.get("/:id", async function (req, res) {
	try{
		const recipes = await todo.getRecipeByRID(req.params.id);
		res.json(recipes);
	}
	catch(e){
		res.status(404).json({error: error});
	}
	// todo.getRecipeByRID(req.params.id).then((recipes) => {
	// 	if (recipes === null) 
	// 		return Promise.reject("No Recipe Found")
	// 	res.json(recipes);
	// }).catch((error) => {
	// 	res.status(404).json({error: error});
	// });
});

router.post("/", async (req, res) => 
{

  const recipe = req.body;

  if (!recipe) 
  {
    res.status(400).json({ error: "You Must Provide Data to Create a Recipe!" });
    return;
  }

  if (!recipe.title) 
  {
    res.status(400).json({ error: "You Must Provide a Recipe Title!"});
    return;
  }

  if (!recipe.ingredients) 
  {
    res.status(400).json({ error: "You Must Provide Recipe Ingredients!" });
    return;
  }

  if (!recipe.steps)
  {
  	res.status(400).json({ error: "You Must Provide Recipe Steps!" });
    return;
  }

  try 
  {
  
    const newRecipe = await todo.createRecipe
    (
      recipe.title,
      recipe.ingredients,
      recipe.steps
    );
    res.json(newRecipe);
  } 

  catch (e) {
    res.json({ error: e.toString() });
  }

});


router.put("/:id", async function (req,res){
	const updateData = req.body;
	try{
		await todo.getRecipeByRID(req.params.id);
	}
	catch(e){
		res.status(404).json({error:"Recipe Not Found"});
	}
	try{
		updateRecipe = await todo.updateRecipe(req.params.id, postData);
		res.json(updateRecipe);
	}
	catch(e){
		res.sendstatus(500).json({error:error});
	}

});

router.delete("/:id", async function (req,res) {
	try{
		await todo.getRecipeByRID(req.params.id);
		res.sendStatus(200);
	}
	catch(e){
		res.status(404),json({error:"Recipe Not Found"});
	}
	try{
		await todo.deleteRecipebyRID(req.params.id);
		res.sendStatus(200);
	}
	catch(e){
		res.sendStatus(500).json({error:error});
	}
});

module.exports = router;