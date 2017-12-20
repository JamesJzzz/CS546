(function () {
function isPalindrome(word) {
            if (!word || word == null) throw "Must provide input";
            if (typeof word !== "string") throw "Must provide a string";
	    word = word.replace(/[.,?\/#!$'%\^&\*;:{}=\-_`’~() ]/g,"").replace(/\s/g,'').toLowerCase();
            reversed_word = word.split('').reverse().join('');
	    return(word==reversed_word);
    }
    var staticForm = document.getElementById("static-form");

    if (staticForm) {
        var wordElement = document.getElementById("word");

        var errorContainer = document.getElementById("error-container");
        var errorTextElement = errorContainer.getElementsByClassName("text-goes-here")[0];

        var resultContainer = document.getElementById("result-container");
        var resultTextElement = resultContainer.getElementsByClassName("text-goes-here")[0];
        staticForm.addEventListener("submit", function (event) {
            event.preventDefault();

            try {
                errorContainer.classList.add("hidden");
                resultContainer.classList.add("hidden");

                var word = wordElement.value;
                var result = isPalindrome(word);
		var text;

		var paragraph = document.createElement("P");
		if(isPalindrome(word)){
			paragraph.className = "is-palindrome";
			text = document.createTextNode(word + " is a palindrome.");
		}
		else{
			paragraph.className = "not-palindrome";
			text = document.createTextNode(word + " is not a palindrome.");
		}
		paragraph.appendChild(text); 
		resultContainer.appendChild(paragraph);
                resultContainer.classList.remove("hidden");
            } catch (e) {
                var message = typeof e === "string" ? e : e.message;
                errorTextElement.textContent = e;
                errorContainer.classList.remove("hidden");
            }
        });
    }
})();
