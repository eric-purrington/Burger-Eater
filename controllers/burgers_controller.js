var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

// Select All Route
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        res.render("index", { burgers: data });
    });
});

// Insert Route
router.post("/api/burgers", function (req, res) {
    var burger_name = req.body.name;
    burger.insertOne(burger_name, function (result) {
        res.json({ id: result.insertId });
    });
});

// Update Route
router.put("/api/burgers/:id", function (req, res) {
    console.log(req.body.devoured)
    burger.updateOne(req.body.devoured, req.params.id, function (result) {
        if (result.changedRows === 0) {
            res.status(404).end();
        }
        res.status(200).end();
    });
});

module.exports = router;