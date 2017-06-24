//The fs.writeFile() method replaces the specified file and content if it exists. 
//If the file does not exists a new file, containing the specified content, will be created:

let fs = require('fs');

fs.writeFile('09.mynewfile3.txt', 'fs.writeFile() example ;)', function(err) {
    if (err) throw err;
    console.log('Saved!'); 
});