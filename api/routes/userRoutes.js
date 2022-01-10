let db = require('../../db').localConnect();
let express = require('express');

const routes = express.Router();

// let userController = require('../controllers/userController');

routes.get("/", (request, response) => {
    db.query('select * from user', function (error, results, fields) {
        if (error) throw error;
        // connected!
        console.log(results)
        response.json({ users: results })
    });
});


// router.post('/register', function (request, response) {
//     // templateController.addNewTemplateSize(req).then((data) => {
//     //     res.send(data);
//     // }).catch((error) => {
//     //     res.send(error);
//     // })
//   });



module.exports = routes;
