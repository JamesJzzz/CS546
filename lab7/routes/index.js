const recipesRoutes = require("./recipes");
const commentsRoutes = require("./comments");

const constructorMethod = (app) =>{
	app.use("/comments", commentsRoutes);
	app.use("/recipes", recipesRoutes);
	app.use("*", (req,res) => {
		res.sendStatus(404);
	});
};

module.exports = constructorMethod;