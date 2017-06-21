let http = require('http');
let url = require('url');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    let q = url.parse(req.url, true).query;
    let text = q.year + " " + q.month;
    res.end(text);
}).listen(8080);

//Test on http://localhost:8080/?year=2017&month=July
