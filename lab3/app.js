// Zhiyuan(James) Zhang
// Sep 24 2017
// I pledge my honor that I have abided by the Stevens Honors System.
// ------James

const bluebird = require('bluebird');
const Promise = bluebird.Promise;
const fileData = require("./fileData.js");
const textMetrics = require("./textMetrics.js");
const fs = require ('fs');

// chapter 1
fs.access("chapter1.result.json", (error) =>{
    if (!error) {
        let stringResult = fileData.getFileAsString("chapter1.result.json");
        stringResult.then((data) => {
            console.log("The result file for chapter1 already exists. Here it is: \n");
            console.log(data);
        }).catch((error) =>{
            console.error("There was an error getting data");
        });
    }else{
        let a = fileData.getFileAsString(`chapter1.txt`);
        a.then((data) =>{
            var simplifyText = textMetrics.simplify(data);
            fileData.saveStringToFile('chapter1.debug.txt', simplifyText);
            var result = textMetrics.createMetrics(data);
            fileData.saveJSONToFile("chapter1.result.json", result);
            console.log("chapter 1 is Done")
        }).catch((error) =>{
            console.error("There was an error getting data");
            console.error(error);
        });
    }
})

// chapter 2 
fs.access("chapter2.result.json", (error) =>{
    if (!error) {
        let stringResult = fileData.getFileAsString("chapter2.result.json");
        stringResult.then((data) => {
            console.log("The result file for chapter2 already exists. Here it is: \n");
            console.log(data);
        }).catch((error) =>{
            console.error("There was an error getting data");
        });
    }else{
        let b = fileData.getFileAsString(`chapter2.txt`);
        b.then((data) =>{
            var simplifyText = textMetrics.simplify(data);
            fileData.saveStringToFile(`chapter2.debug.txt`, simplifyText);
            var result = textMetrics.createMetrics(data);
            fileData.saveJSONToFile("chapter2.result.json", result);
            console.log("chapter 2 is Done")
        }).catch((error) =>{
            console.error("There was an error getting data");
            console.error(error);
        });
    }
})

// chapter 3
fs.access("chapter3.result.json", (error) =>{
    if (!error) {
        let stringResult = fileData.getFileAsString("chapter3.result.json");
        stringResult.then((data) => {
            console.log("The result file for chapter3 already exists. Here it is: \n");
            console.log(data);
        }).catch((error) =>{
            console.error("There was an error getting data");
        });
    }else{
        let c = fileData.getFileAsString(`chapter3.txt`);
        c.then((data) =>{
            var simplifyText = textMetrics.simplify(data);
            fileData.saveStringToFile(`chapter3.debug.txt`, simplifyText);
            var result = textMetrics.createMetrics(data);
            fileData.saveJSONToFile("chapter3.result.json", result);
            console.log("chapter 3 is Done")
        }).catch((error) =>{
            console.error("There was an error getting data");
            console.error(error);
        });
    }
})