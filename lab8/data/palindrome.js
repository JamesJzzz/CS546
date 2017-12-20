let exportedMethods = {
	isPalindrome(word) {
            if (!word || word == null) throw "Must provide input";
            if (typeof word !== "string") throw "Must provide a string";
	    word = word.replace(/[.,?\/#!$'%\^&\*;:{}=\-_`’~() ]/g,"").replace(/\s/g,'').toLowerCase();
            reversed_word = word.split('').reverse().join('');
	    return(word==reversed_word);
    }
}

module.exports = exportedMethods;
