const db = require("../database/connection.js");

// const registerUser = (email, password) => {
//     return new Promise((resolve, reject) => {
//         db.run('INSERT into Users ')
//     })
// }


const getUsers = () => {
    return new Promise((resolve, reject) => {
        
        db.all('SELECT * FROM user_list', function (error, rows) {
            error && reject(error)
            if(rows == undefined){
                reject( new errors.noResult())
            }
            resolve(rows);
        })
        
    })
}

module.exports = {
    getUsers
}