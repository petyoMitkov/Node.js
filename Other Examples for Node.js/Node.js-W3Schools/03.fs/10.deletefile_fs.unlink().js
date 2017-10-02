let fs = require('fs');

fs.unlink('10.file-for-delete.txt', function(err) {
    if (err) throw err; 
    console.log('File deleted!');
});

fs.appendFile('10.file-for-delete.txt',"New file", function(err) {
    if (err) throw err;
    console.log('New file is created!');
});