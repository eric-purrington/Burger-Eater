var connection = require("./connection.js");

var orm = {
    selectAll: function (selection, tableName, cb) {
        var queryString = `SELECT ${selection} FROM ${tableName}`;
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (tableName, colName, valueToInsert, cb) {
        var queryString = `INSERT INTO ${tableName} (${colName}) VALUES (${valueToInsert})`;
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function (tableName, colName1, updatedValue1, colName2, updatedValue2, id, cb) {
        var queryString = `UPDATE ${tableName} SET ${colName1} = ${updatedValue1}, ${colName2} = ${updatedValue2} WHERE id = ${id}`;
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    }
}

module.exports = orm;