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
    console.log(request.body)
    userController.regisitorNewUser(request.body)
        .then(
            (success) => {
                console.log(success)
                return new Promise((resolve, reject) => {
                    resolve('from inside chain')
                })
            },
            (error) => { console.log(`i am in error  ${error}`) }
        )
        .then(
            (sss) => { console.log(`promisechain---in effect ${sss}`) },
            (erro) => console.log(erro)
        )


});



module.exports = routes;
