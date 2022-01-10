let db = require('../../db').localConnect();
let express = require('express');

const routes = express.Router();

let userController = require('../controllers/userController');

//GET ->  api/user 
routes.get("/", (request, response) => {
    userController.getUsers()
    .then(
            (success) => {
                console.log(success)
                response.json(success)
            },
            (reject) => {
                response.json(reject)
            }
        )
});

//POST -> api/user/register
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
