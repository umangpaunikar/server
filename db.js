
var express = require('express'),
    db = require('mysql');

let mysqlConnect = function () {
    return db.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'yuj_dashboard',
        dateStrings: 'date'
    });
};

module.exports.localConnect = mysqlConnect;