const Task = require("../../db").Task;
const route = require("express").Router();

route.get("/", (req, res) => {
    Task.findAll({
        where: {
            listName: req.query.listname
        }
    })
        .then((tasks) => {
            res.status(200).send(tasks);
        })
        .catch((err) => {
            res.status(500).send({
                error: "Cound not retrive Tasks"
            });
        })
});

route.post("/", (req, res) => {
    Task.create({
        taskName: req.body.taskName,
        listName: req.body.listName,
        listListName: req.body.listName
    }).then((task) => {
        res.status(201).send(task);
    }).catch((err) => {
        res.status(501).send({
            error: "Could not create a new Task"
        });
    });
});

exports = module.exports = {
    route
};