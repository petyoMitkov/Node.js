var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('06.demofile1.html', function(err, data) {
    if (err) {
        return console.log(err);
    }
    //console.log("Asynchron read: " + data.toString());
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data.toString());
    return res.end();
  });   
}).listen(8080);
