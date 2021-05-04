const bcrypt = require("bcryptjs")
const db = require('./connection.js')

let insert_user_list = `INSERT INTO user_list (email, password)
                        VALUES ('user1@user.com', ?),
                        ('user2@user.com', ?),
                        ('user3@user.com', ?)`

let throttling = `INSERT INTO throttling (user_id, counter)
                    VALUES (1, 0),
                    (2, 0),
                    (3, 0)`

const digest1 = bcrypt.hashSync("test1", 10)
const digest2 = bcrypt.hashSync("test2", 10)
const digest3 = bcrypt.hashSync("test3", 10)


db.run(insert_user_list, [digest1, digest2, digest3],
  function (error) {
      error && console.log('error from seed1' + error)
  })


db.run(throttling,
  function (error) {
      console.log('error from seed2' + error);
  })