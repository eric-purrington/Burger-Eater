var mysql = require("mysql");
require("dotenv").config();
var connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: "burgers_db",
    });
}


connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;
