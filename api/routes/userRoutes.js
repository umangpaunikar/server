let db = require('../../db').localConnect();
let express = require('express');

const routes = express.Router();

let userController = require('../controllers/userController');

routes.get("/", (request, response) => {
    db.query('select * from user', function (error, results, fields) {
        if (error) throw error;
        // connected!
        console.log(results)
        response.json({ users: results })
    });
});

//api/user/register
routes.post('/register', function (request, response) {
  
    userController.regisitorNewUser(request.body)
        .then(
            (success) => {
                response.json(success)
            },
            (error) => {
                response.json(error)
            }
        )
});



module.exports = routes;
