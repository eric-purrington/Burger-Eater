var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    insertOne: function (colName, valueToInsert, cb) {
        orm.insertOne("burgers", colName, valueToInsert, function (res) {
            cb(res);
        });
    },
    updateOne: function (colName1, updatedValue1, colName2, updatedValue2, id, cb) {
        orm.updateOne("burgers", colName1, updatedValue1, colName2, updatedValue2, id, function (res) {
            cb(res);
        });
    }
}

module.exports = burger;