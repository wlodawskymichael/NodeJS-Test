var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "mysql.utweb.utexas.edu",
    user: "utw10030",
    password: "RT2U11RV9p69hez3"
});

connection.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
});