
// Everytime we run this, we will get a different hashed password. 
// I stored the the result from my first run to the user file.
// code below are commented out. 
const bcrypt = require('bcrypt');
const saltRounds = 16;

exports.compare = async function compare(plainTextPassword, hashedPassword) {

    const isCorrect = bcrypt.compare(plainTextPassword, hashedPassword);

    return isCorrect;
}

// hash password for user 1
//var ptp = 'elementarymydearwatson';
//var salt = bcrypt.genSaltSync(saltRounds);
//var hash = bcrypt.hashSync(ptp, salt);
//console.log(hash);

// hash password for user 2
//var ptp2 = 'damnyoujackdonaghy';
//var salt2 = bcrypt.genSaltSync(saltRounds);
//var hash2 = bcrypt.hashSync(ptp2, salt2);
//console.log(hash2);

// hash password for user 3
//var ptp3 = 'quidditch';
//var salt3 = bcrypt.genSaltSync(saltRounds);
//var hash3 = bcrypt.hashSync(ptp3, salt3);
//console.log(hash3);