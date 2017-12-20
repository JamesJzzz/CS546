// Zhiyuan(James) Zhang
// Sep 30 2017
// I pledge my honor that I have abided by the Stevens Honor System.




const connection = require("./mongoConnection");
const todo = require("./todo");

const main = async () => {

const task1 = await todo.createTask("Ponder Dinosaurs", "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?");

console.log(task1);



const task2 = await todo.createTask("Play Pokemon with Twitch TV", "Should we revive Helix?");

console.log(task2);

const alltasks = await todo.getAllTasks(); 

console.log(alltasks);


await todo.removeTask(task1._id);
//console.log("Done22222222");

const remainingTask = await todo.getAllTasks();
//console.log("Done22222222");

console.log(remainingTask);
//console.log("Done22222222");

var taskleft = remainingTask;
//console.log("Done1111111");

await todo.completeTask(task2._id);
//console.log("Done1111111");


const final = await todo.getAllTasks();

console.log(final);
//console.log("Done1111111");


const db = await connection();
await db.close();

console.log("Done!");

};

main();



