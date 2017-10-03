let http = require('http');
let dt = require('./02.myfirstmodule');

http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "Text/html"});
    res.write('The date and the time are currently: ' + dt.myDateTime());
    res.write('\n' + dt.myName());
    res.end();
}).listen(2000);
