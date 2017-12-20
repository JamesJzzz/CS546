// Zhiyuan(James) Zhang
// Sep 30 2017
// I pledge my honor that I have abided by the Stevens Honor System.


const mongoCollections = require("./mongoCollections");
const todoItems = mongoCollections.todoItems;
const uuid = require("uuid/v4");


module.exports = {
	async createTask(title, description) {
		if(!title || !description){
			throw "Must Enter Valid Inputs for Title and Description";
		}
		if(description.length == 0){
			throw "Must Enter a Description";
		}
		if(title.length == 0){
			throw "Title cannot be null"
		}
		const todoItemCollection = await todoItems();
		let newtodo = {
			_id: uuid(),
			title: title,
			description: description,
			completed: false,
    		completedAt: null
		}
		const insertInfo = await todoItemCollection.insertOne(newtodo);
		if(insertInfo.insertedCount === 0){
			throw "Could Not Add Task";
		}
		const NewId = insertInfo.insertedId;
		const todo = await this.getTask(NewId);
		return todo;
  	},

	// 	async getAllDogs() {
  //   const dogCollection = await dogs();

  //   const dogs = await dogCollection.find({}).toArray();

  //   return dogs;
  // },

  	async getAllTasks(){
  		const todoItemCollection = await todoItems();
  		const todooo = todoItemCollection.find({}).toArray();
  		return todooo;
  	},
  

  // async getDogById(id) {
  //   if (!id) throw "You must provide an id to search for";

  //   const dogCollection = await dogs();
  //   const doggo = await dogCollection.findOne({ _id: id });
  //   if (doggo === null) throw "No dog with that id";

  //   return doggo;
  // },
  	async getTask(id){
  		if(!id){
  			throw "Must Provide a Valid ID";
  		}

  		const todoItemCollection = await todoItems();
  		const todos = await todoItemCollection.findOne({_id: id });
  		if(todos === null){
  			throw "Invalid ID for the Task";
  		}
  		return todos;
  	},

  // 	async updateDog(id, name, breeds) {
  //   if (!id) throw "You must provide an id to search for";

  //   if (!name) throw "You must provide a name for your dog";

  //   if (!breeds || !Array.isArray(breeds))
  //     throw "You must provide an array of breeds";

  //   if (breeds.length === 0) throw "You must provide at least one breed.";

  //   const dogCollection = await dogs();
  //   const updatedDog = {
  //     name: name,
  //     breeds: breeds
  //   };

  //   const updateInfo = await dogCollection.updateOne({ _id: id }, updatedDog);
  //   if (updatedInfo.modifiedCount === 0) {
  //     throw "could not update dog successfully";
  //   }

  //   return await this.getDogById(id);
  // }

  	async completeTask(taskId){
  		
  		let date = new Date();
		// let month = date.getMonth();
		// let day = date.getDate();
		// let year = date.getYear();
  		if(!taskId){
  			throw "Must Input a Valid taskId";
  		}
  		const todoItemCollection = await todoItems();

  		const updateTodo = {
			completed: true,
			completedAt: date	
		};

		const todoss = await todoItemCollection.updateOne({_id : taskId},updateTodo);
  		//const todos = await todoItemCollection.updateOne({_id: taskId}, { $set: {completed : true, completedAt: time}});
  		if(todoss.modifiedCount === 0){
  			throw "Could Not Update";
  		}
  		return await this.getTask(taskId);
  	},

  
// async removeDog(id) {
//     if (!id) throw "You must provide an id to search for";

//     const dogCollection = await dogs();
//     const deletionInfo = await dogCollection.removeOne({ _id: id });

//     if (deletionInfo.deletedCount === 0) {
//       throw `Could not delete dog with id of ${id}`;
//     }
//   },

  	async removeTask(id){
  		if(!id){
  			throw "Must Provide a Valid ID for Searching";
  		}
  		const todoItemCollection = await todoItems();
  		const deletionInfo = await todoItemCollection.removeOne({ _id: id });

  		if(deletionInfo.deletedCount === 0){
  			throw `Could not delete dog with id of ${id}`;
  		}
  	}
};

  	


