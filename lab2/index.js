// Zhiyuan(James) Zhang
// Sep 11 2017
// I pledge my honor that I have abided by the Stevens Honor System. 

const printShape = require("./printShape");

// print 10 triangles
for (a=1; a<=10; a++){
	console.log(a + ":")
	printShape.triangle(a);
	console.log("\n");
}

// print 10 squares
for (b=2; b<=11; b++){
	console.log(b + ":")
	printShape.square(b);
	console.log("\n");
}

// print 10 rhombuses
for (c=2; c<=20; c=c+2){
	console.log(c + ":")
	printShape.rhombus(c);
	console.log("\n");
}
