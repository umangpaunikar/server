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

              //  response.status(401).json({ success: false, error: "Unathorized user" });
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

//POST -> api/user/login
routes.post('/login', function (request, response) {

    userController.loginUser(request.body)
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
