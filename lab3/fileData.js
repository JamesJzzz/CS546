// Zhiyuan(James) Zhang
// Sep 20 2017
// I pledge my honor that I have abided by the Stevens Honor System.


const bluebird = require('bluebird');
const Promise = bluebird.Promise;
const fs = bluebird.promisifyAll(require('fs'));

module.exports = {
    description: "fileData.js",
    getFileAsString: async function (path) {
    	if (!path || typeof path != "string") {
    		throw "No file name was provided."
    	}

    	const fileText = await fs.readFileAsync(path, "utf-8");

    	return fileText;
  	},
    getFileAsJSON: async function (path) {
        	if (!path) {
        		throw ("You did not provide a path");
        	}
            const fileText = await fs.readFileAsync(path, "utf-8");
                	
                	try {
                    		let jsonData = JSON.parse(data);
                    		return jsonData;
                	} 
                	catch (parsingError) {
                    		throw "parsingError";
					}
    },
    saveStringToFile: async function (path, text) {
        	if (!path || !text){
        		throw "You did not provide a path or text";
        	}
            const fileText = await fs.writeFileAsync(path, text);
                	
            return true;
    },
    saveJSONToFile: async function (path, obj) {
        	if (!path || !obj){
        		throw "You did not provide a path or object";
        	}
		const fileText = await fs.writeFileAsync(path, JSON.stringify(obj, null, 4))
                
                return (true);
	},
}
