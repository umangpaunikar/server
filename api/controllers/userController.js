let db = require('../../db').localConnect();

module.exports = {

    regisitorNewUser: (req) => {

        return new Promise((resolve, reject) => {
            let { username, email, password } = req; //object properrties destructuring syntax

            let query = "INSERT INTO `users_register` (`id`, `username`, `email`, `password`) VALUES (NULL, '" + username + "','" + email + "', '" + password + "')";

            db.query(query, (error, result, fields) => {
                if (error) {
                    return reject(error);
                } else {
                    return resolve(result);
                }
            });

        });


    },
}