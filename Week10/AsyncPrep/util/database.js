const mysql = require("mysql2");


// Create a connection pool

const pool = mysql.createPool({
    // host : 'localhost',
    host : '45.55.136.114',
    user : 'dlash',
    // database : 'node-complete',
    database : 'dlash',
    password: "time4DB!"
});

module.exports = pool.promise();