let fs = require('fs');
let rs = fs.createReadStream('./01.demofile.txt');
rs.on('open', function() {
    console.log('The file is open');
});