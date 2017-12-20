// Zhiyuan(James) Zhang
// I pledge my honor that I have abided by the Stevens Honor System.
// ------James
// Sep 6 2017
// All testcases are commented out, please uncomment for testing purpose. 



function sumOfSquares(num1, num2, num3){
	if (isNaN(num1) || isNaN(num2) || isNaN(num3)){
		throw "Must Input Numbers";
	}
		return num1*num1+ num2*num2+num3*num3;
}

//console.log(sumOfSquares(5, 3, 10));
//console.log(sumOfSquares(5, 3, 1));
//console.log(sumOfSquares(2, 3, 4));
//console.log(sumOfSquares(5, 6, 7));
//console.log(sumOfSquares(8, 5, 20));


function sayHelloTo(firstName, lastName,title){

	//separate by case and check the validation separately. 

	if(firstName && lastName && title){
		if(firstName == null|| firstName == undefined || firstName ==""||
			lastName == null|| lastName== undefined || lastName ==""||
			title == null|| title == undefined || title ==""){
			throw "Invalid Input Type";
		}
		else{
			console.log(`Hello, ${title} ${firstName} ${lastName}! Have a good evening!`);
		}
	}
	else if(firstName && lastName){
		if(firstName == null|| firstName == undefined || firstName ==""||
			lastName == null|| lastName== undefined || lastName ==""){
			throw "Invalid Input Type";
		}
		else{
			console.log(`Hello, ${firstName} ${lastName}. I hope you are having a good day!`);
		}
	}
	else if(firstName){
		console.log(`Hello, ${firstName}!`);
	}
	else{
		throw "You Need to Input Something.";
	}
}

//sayHelloTo();
//sayHelloTo("Phil");
//sayHelloTo("Phil", "Barresi");
//sayHelloTo("Phil", "Barresi", "Mr.");


//construct a song string so that we can add to it. 
//later on we just return the result. 

let song = "";

function cupsOfCoffee(howManyCups){
	if (isNaN(howManyCups)) {
		throw "Invaild Input";
	}
	
	if(howManyCups>= 1){
		left = howManyCups - 1;
	}
	if (howManyCups== 1) {
		song =song +(`1 cup of coffee on the desk! 1 cup of coffee!\n`);
		song =song +(`Pick it up, drink the cup, no more coffee left on the desk!`);
		return song;
	}
	else if (howManyCups ==2) {
		song =song +("2 cups of coffee on the desk! 2 cups of coffee!\n");
		song =song +("Pick one up, drink the cup, 1 cup of coffee on the desk!\n\n");
		return cupsOfCoffee(left);
	}
	else if (howManyCups > 2){ 
		song =song +(howManyCups + " cups of coffee on the desk! " + howManyCups + " cups of coffee!\n");
		song =song +("Pick one up, drink the cup, " + left + " cups of coffee on the desk!\n\n");
		return cupsOfCoffee(left);
	}
}
//console.log(cupsOfCoffee(5));

function occurrencesOfSubstring(fullString, substring){
	//separate by case 1 and case 2;
	//return counter at the end.
	len = substring.length;
	lencounter = 0;
	counter = 0;
	if(len == 1){
		for (i = 0; i<fullString.length;i++){
			if(fullString[i] == substring){
				counter +=1;
			}
		}
	}
	
	else{
		for (j = 0; j<fullString.length;j++){
			if(fullString[j] == substring[0]){
				for(k = 1; k<substring.length; k++){
					if(fullString[j+k] == substring[k]){
						lencounter +=1;
					}
					else{
						break;
					}
				}
				if(lencounter+1 == substring.length){
					counter +=1;
				}
				lencounter = 0;
			}
		}
	}
	return counter;
}

//console.log(occurrencesOfSubstring("hello world", "o"));
//console.log(occurrencesOfSubstring("Helllllllo, class!", "ll"));

// define the paragraph outside of the function so we can always use it. 
var paragraph = "Hello, world! I am a paragraph. You can tell that I am a paragraph because there are multiple sentences that are split up by punctuation marks. Grammar can be funny, so I will only put in paragraphs with periods, exclamation marks, and question marks -- no quotations.";
function randomizeSentences(paragraph){
	array = [];
	array = paragraph.split(".");
	//take out a empty item from the last "." split
	array.splice(-1,1)
	result = "";
	//console.log(array.length);
	//console.log(array);

	maxnum = array.length;
	while(0!=maxnum){
		index = Math.floor(Math.random() * (maxnum));
		maxnum -=1;
		//console.log(maxnum);
		//console.log(array.length);
		temp = array[maxnum];
		array[maxnum] = array[index];
		array[index] = temp;
	}
	//console.log(array);
	//return result;
	for (m = array.length-1; m>=0; m--){
		result = result + array[m]+ ".";
	}
	return result;

	
}

//console.log(randomizeSentences(paragraph));































