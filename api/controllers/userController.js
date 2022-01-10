

module.exports = {

    regisitorNewUser: (req) => {

        return new Promise((resolve, reject) => {
            let { username, email, password } = req; //object properrties destructuring syntax

            if (username) {
                return resolve('I am from promisse resolve part');
            } else {

                let validatons = {
                    uname: 'is required field',
                    password: 'password is required'
                }

                return reject(validatons)
            }
        });


    },
}