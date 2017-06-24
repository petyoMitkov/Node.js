let fs = require('fs');

//The fs.appendFile() method appends specified content to a file. 
//If the file does not exist, the file will be created:
fs.appendFile('07.mynewfile1.txt', 'Petyo is good at Node.js :)', function(err) {
    if (err) throw err;
    console.log('Saved!');
});