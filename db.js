var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'yuj_dashboard'
});

connection.connect();

connection.query('select * from user', function (error, results, fields) {
    console.log(results)
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});

connection.end();