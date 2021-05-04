const sqlite = require('sqlite3')
const db = new sqlite.Database("database/fileUploader.db")
module.exports = db