var connection = require("./connection.js");

var orm = {
    selectAll: function (tableName, cb) {
        var queryString = `SELECT * FROM ${tableName}`;
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (tableName, colName, burger_name, cb) {
        var queryString = `INSERT INTO ${tableName} (${colName}) VALUES ("${burger_name}")`;
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function (tableName, colName2, updatedValue2, id, cb) {
        var queryString = `UPDATE ${tableName} SET ${colName2} = ${updatedValue2} WHERE id = ${id}`;
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    }
}

module.exports = orm;