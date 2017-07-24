//Parse an address with the url.parse() method, and it will return 
//a URL object with each part of the address as properties:

let url = require('url');
let adr = 'http://localhost:8080/default.htm?year=2017&month=february';
let q = url.parse(adr, true);

console.log(q.host);        //returns 'localhost:8080'
console.log(q.pathname);    //returns '/default.htm'
console.log(q.search);      //returns '?year=2017&month=february'

let qdate = q.query;        //returns an object: { year: 2017, month: 'february' }
console.log(qdate.month);   //returns 'february'
