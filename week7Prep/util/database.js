const mysql = require('mysql2');
// set up 1 connection to

const pool = mysql.createPool( {
    host: '45.55.136.114',
    user: 'dlash',
    database: 'dlash',
    password: 'time4DB!'
});

module.exports = pool.promise();