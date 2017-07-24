//The fs.open() method takes a "flag" as the second argument, 
//if the flag is "w" for "writing", the specified file is opened for writing. 
//If the file does not exist, an empty file is created:

let fs = require('fs');

fs.open('08.mynewfile2.txt', 'w', function(err, file) {
    if (err) throw err;
    console.log("08.mynewfile2.txt is saved!");
});