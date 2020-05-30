var connection = require("./connection.js");

var orm = {
    selectAll: function (, cb) {
        var queryString = "SELECT * FROM burgers_db";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (, cb) {
        var queryString = "";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function (, cb) {
        var queryString = "";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    }
}

module.exports = orm;