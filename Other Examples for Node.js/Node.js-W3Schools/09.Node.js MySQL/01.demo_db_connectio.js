let mysql = require('mysql');

let con = mysql.createConnection({
    host: "localhost",
    user: "pepi",
    password: "!QAZ2wsx"
});

con.connect(function(err) {
    if(err) throw err;
    console.log("Connected!");
    /*
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Result: " + result);    
    });
    */
});