let db = require('../db').localConnect();
let express = require('express');

const routes = express.Router();

routes.get("/", (request, response) => {
    db.query('select * from user', function (error, results, fields) {
        if (error) throw error;
        // connected!
        console.log(results)
        response.json({ users: results })
    });
});

module.exports = routes;
