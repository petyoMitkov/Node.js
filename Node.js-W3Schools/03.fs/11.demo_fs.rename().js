let fs = require('fs');

fs.rename('11.oldfilename.txt', 'newfilename.txt', function(err) {
    if (err) throw err;
    console.log('File Renamed!');
});