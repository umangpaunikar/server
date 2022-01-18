let db = require('../../db').localConnect();
let express = require('express');
const authMiddleware = require("../../middleware/auth");
const routes = express.Router();

let userController = require('../controllers/userController');

//GET ->  api/user 
routes.get("/", authMiddleware, (request, response) => {
    // console.log(request.headers);

    userController.getUsers()
        .then(
            (success) => {
                // console.log(success)
                response.json(success)

                //    response.status(500).json({ success: false, error: "Unathorized user" });
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
                response.status(400).json(error)
            }
        )
});

//POST -> api/user/login
//authMiddleware
routes.post('/login', function (request, response) {

    userController.loginUser(request.body)
        .then(
            (success) => {
                response.json(success)
            },
            (error) => {
                response.status(400).json(error)
            }
        )
});




module.exports = routes;
