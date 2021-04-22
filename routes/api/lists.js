const List = require("../../db").List;
const route = require("express").Router();


route.get("/", (req, res) => {
    List.findAll()
        .then((lists) => {
            res.status(200).send(lists);
        })
        .catch((err) => {
            res.status(500).send({
                error: "Cound not retrive Tasks"
            });
        })
});

route.post("/", (req, res) => {
    List.create({
        listName: req.body.listName
    }).then((list) => {
        res.status(201).send(list);
    }).catch((err) => {
        res.status(501).send({
            error: "Could not create a new List"
        });
    });
});

module.exports = {
    route
}