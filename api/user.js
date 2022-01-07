let db = require('../db').localConnect();
let express = require('express');
let mysql = require('mysql');

const routes = express.Router();

routes.get("/", (req, res) => {
    userSql = "select * from user";

    db.query(userSql, function (error, results, fields) {
        res.json({ "user": results });

        if (error) {
            return reject(error);;
        } else {
            return resolve(results);
        }
    });

});


module.exports = routes;
