

module.exports = {

    regisitorNewUser: (req) => {

        return new Promise((resolve, reject) => {

            if (true) {
                return resolve('I am from promisse resolve part');
            } else {
                return reject('validations did not passed')
            }
        });


    },
}