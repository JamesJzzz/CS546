// Zhiyuan(James) Zhang
// Sep 24 2017
// I pledge my honor that I have abided by the Stevens Honor System.
// ------James

const fileData = require("./fileData");

let textMetrics = exports = module.exports;

textMetrics.simplify = (text) => {
	text = text.toString().toLowerCase();
	text = text.replace(/[^\w\s]/g, '')
	text = text.replace(/\s\s+/g, ' ')
	return text;
}
textMetrics.totalLetters = (text) => {
	var count = 0;
	for (var i = 0; i < text.length; i++) {
		if(text[i] != ' '){
			count++;
		}
	}
	return count;
}

textMetrics.totalWords = (text) => {
	return text.length
}

textMetrics.uniqueWords = (text) => {
	var count = 0;
	for (var i = 0; i < text.length; i++) {
		if(text.indexOf(text[i]) == i){
			count++;
		}
	}
	return count;
}

textMetrics.longWords = (text) => {
	var count = 0;
	for (var i = 0; i < text.length; i++) {
		if(text[i].toString().length > 5){
			count++;
		}
	}
	return count;
}

textMetrics.averageWordLength = (text1,text2) => {
	return textMetrics.totalLetters(text1)/textMetrics.totalWords(text2);
}

textMetrics.wordOccurrences = (text) => {
	var Dic = "";
	for (var i = 0; i < text.length; i++) {
		if(text.indexOf(text[i]) == i){
			var count = 0;
			for (var j = 0; j < text.length; j++) {
				if(text[j] == text[i]){
					count++;
				}
			}
			Dic += (text[i].toString() + ": " + count.toString() + ", " )
		}
	}
	return Dic

}

textMetrics.createMetrics = (text) => {
	var simplifiedArray1 = textMetrics.simplify(text);
	var simplifiedArray3 = simplifiedArray1.split(' ');
	var Metrics = {
		totalLetters : textMetrics.totalLetters(simplifiedArray1),
		totalWords : textMetrics.totalWords(simplifiedArray3),
		uniqueWords : textMetrics.uniqueWords(simplifiedArray3),
		longWords : textMetrics.longWords(simplifiedArray3),
		averageWordLength : textMetrics.averageWordLength(simplifiedArray1,simplifiedArray3),
		wordOccurrences : textMetrics.wordOccurrences(simplifiedArray3)
	}
	return Metrics;
	
	
}
