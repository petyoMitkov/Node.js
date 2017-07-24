let mysql = require('mysql');

let con = mysql.createConnection({
    host: 'localhost',
    user: 'pepi',
    password: '!QAZ2wsx',
    database: 'mydb'
});

con.connect(function(err) {
    if(err) throw err;
    console.log('Connected!');
    //let sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
    var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
    con.query(sql, function(err, result) {
        if(err) throw err;
        console.log('Teable exists, then added primary key!'); //'Table created'
    });
});