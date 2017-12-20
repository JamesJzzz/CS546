const mongoCollections = require("./mongoCollections");

const uuid = require("uuid/v4");

const todoItems = mongoCollections.todoItems;

let exportedMethods = {
	createRecipe(title, ingredients, steps) {
		if (!title||!ingredients||!steps) 
            return Promise.reject("You must provide a valid title, an ingredients and a steps for the new recipe");
        return todoItems().then((todoCollection) => {
        	let newRecipe = {
        		_id: uuid(),
    			title: title,
			    ingredients: ingredients,
			    steps: steps,
			    comments: []
        	};

        	return todoCollection.insertOne(newRecipe).then((newInsertInfo) => {
        			return newInsertInfo.insertedId;
        		})
        		.then((newId) => {
        			return this.getRecipeByRID(newId);
        		});
        });
	},

    getAllRecipes(){
        return todoItems().then((todoCollection) => {
            return todoCollection.find({}, {title: 1}).toArray();
        });
    },

	getRecipeByRID(Rid) {
		if (!Rid) 
            return Promise.reject("You must provide an Recipe id to search for");
        
        return todoItems().then((todoCollection) => {
            return todoCollection.findOne({_id: Rid});
        });
	},

	updateRecipe(Rid, update) {
        let updateData = {};
		if (!Rid||!update) 
            return Promise.reject("You must provide both an Recipe id and a update for update procedure");
        return todoItems().then((todoCollection) => {
            if (update.title) {
                updateData.title = update.title;
            }
            if (update.ingredients) {
                updateData.ingredients = update.ingredients;
            }
            if (update.steps) {
                updateData.steps = update.steps;
            }

            let updateCmd = {
                $set: updateData
            }
            return todoCollection.updateOne({_id: Rid}, updateCmd)
            .then(() => {
                return this.getRecipeByRID(Rid);
            });
        });
	},

	deleteRecipebyRID(Rid) {
		if (!Rid) 
            return Promise.reject("You must provide an recipe id to search for");
        
        return todoItems().then((todoCollection) => {
            return todoCollection.removeOne({_id: Rid}).then((deletionInfo) => {
                    if (deletionInfo.deletedCount === 0) {
                        throw(`Could not delete recipe with id of ${Rid}`)
                    }
                });
        });
	},

    createComment(Rid, poster, comment) {
        if (!Rid||!comment||!poster) 
            return Promise.reject("You must provide an Rid, a poster name and a comment");
        return todoItems().then((todoCollection) => {
            let newComment = {
                _id: uuid(),
                poster: poster,
                comment: comment
            };
            return todoCollection.update({_id: Rid}, {$push: {"comments": newComment}}).then(() => {
                return this.getRecipeByRID(Rid);
            });
        });
    },

    getCommentbyCID(Cid) {
        if (!Cid) 
            return Promise.reject("You must provide an comment id to search for");
        
        return todoItems().then((todoCollection) => {
            return todoCollection.findOne({"comments._id": Cid});
        });
    },

    updateComment(recipeId, commentId, updatedComment) {
        return todoItems().then((todoCollection) => {
            let updatedCommentData = {};

            if (updatedComment.poster) {
              updatedCommentData["comments.$.poster"] = updatedComment.poster;
            }

            if (updatedComment.comment) {
                updatedCommentData["comments.$.comment"] = updatedComment.comment;
            }


            let updateCommand = {
                $set: updatedCommentData
            };

            return todoCollection.updateOne({
                _id: recipeId,
                comments:{$elemMatch:{_id:commentId}}
            }, updateCommand).then((result) => {
                return this.getCommentbyCID(commentId);
            });
        });
    },

    deleteCommentbyCID(Cid) {
        if (!Cid) 
            return Promise.reject("You must provide an comment id to search for");
        
        return todoItems().then((todoCollection) => {
            return todoCollection.updateOne({},{$pull:{comments:{_id:Cid}}}).then((deletionInfo) => {
                    if (deletionInfo.deletedCount === 0) {
                        throw(`Could not delete comment with id of ${Cid}`)
                    }
                });
        });
    },

    listOfComment(Cid){
        return todoItems().then((todoCollection) => {
            return todoCollection
                .findOne({"comments._id": Cid})
                .then((recipe) => {
                    if (!recipe)
                        throw "Recipe not found";
                        for (let i=0; recipe.comments.length; i++){
                          if (Cid==recipe.comments[i]._id){
                            return {
                              _id: Cid,
                              recipeId: recipe._id,
                              recipeTitle: recipe.title,
                              poster: recipe.comments[i].poster,
                              comment: recipe.comments[i].comment
                            };
                          }
                        }
                });
        });
    },

    getAllCommentsForRecipe(Rid) {
        return todoItems().then((todoCollection) => {
            return todoCollection
                .findOne({_id: Rid})
                .then((recipe) => {
                    if (!recipe)
                        throw "Recipe not found";
                    let allComments = [];
                    for (let i=0; i < recipe.comments.length; i++){
                        var singleObj = {}
                        singleObj['_id'] = recipe.comments[i]._id;
                        singleObj['recipeId'] = Rid;
                        singleObj['recipeTitle'] = recipe.title;
                        singleObj['poster'] = recipe.comments[i].poster;
                        singleObj['comment'] = recipe.comments[i].comment;
                        allComments.push(singleObj);
                    }
                    return allComments;
            });
        });
    },
}


module.exports = exportedMethods;