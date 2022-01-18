let db = require('../../db').localConnect();
const jwt = require('jsonwebtoken');
module.exports = {

    getUsers: () => {

        return new Promise((resolve, reject) => {
            db.query('select * from users_register', function (error, results, fields) {

                if (error) {
                    return reject(error)
                }

                return resolve(results);
            });

        })

    },

    regisitorNewUser: (req) => {

        return new Promise((resolve, reject) => {
            //  let { username, email, password } = req; //object properrties destructuring syntax



            try {
                // Get user input
                const { username, email, password } = req;

                // Validate user input
                if (!(email && password && username)) {
                    return reject("All input is required");
                }


                // // check if user already exist
                // // Validate if user exist in our database
                // const oldUser = await User.findOne({ email });

                // if (oldUser) {
                //     return res.status(409).send("User Already Exist. Please Login");
                // }
                //Encrypt user password
                // encryptedPassword =  bcrypt.hash(password, 10);


                let query = "INSERT INTO `users_register` (`id`, `username`, `email`, `password`) VALUES (NULL, '" + username + "','" + email + "', '" + password + "')";

                db.query(query, (error, result, fields) => {


                    if (error) {
                        return reject(error);
                    } else {

                        // Create token
                        const token = jwt.sign(
                            { user_id: username },
                            `${process.env.JWT_KEY}`,
                            {
                                expiresIn: "2h",
                            }
                        );
                        // save user token
                     

                        let user = {
                            token,
                            username,
                            email
                        }
                        
                        return resolve(user);
                    }
                });



            } catch (e) {
                return reject(error);
            }







        });


    },

    loginUser: (data) => {

        return new Promise((resolve, reject) => {
            let { username, password } = data; //object properrties destructuring syntax
            // Validate user input
            if (!(username && password)) {
                return reject("All input is required");
            }

            let query = "SELECT * FROM `users_register` WHERE username = '" + username + "' and password='" + password + "'";

            db.query(query, (error, result, fields) => {
                if (result.length > 0) {
                    // Create token
                    const token = jwt.sign(
                        { user_id: username },
                        `${process.env.TOKEN_KEY}`,
                        {
                            expiresIn: "2h",
                        }
                    );

                    let user = {
                        username,
                        token
                    }
                    return resolve(user);
                } else {
                    return reject("Invalid Credentials");
                }

            })
        })

    }
}