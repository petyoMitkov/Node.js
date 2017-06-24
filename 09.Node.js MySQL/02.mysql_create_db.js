let mysql = require('mysql');

let con = mysql.createConnection({
    host: 'localhost',
    user: 'pepi',
    password: '!QAZ2wsx'
});

con.connect(function(err) {
    if(err) throw err;
    console.log('Connected!');
    con.query('CREATE DATABASE mydb', function(err, result) {
        if(err) throw err;
        console.log('Database created');
    })
});