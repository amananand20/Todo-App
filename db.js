const Sequelize = require("sequelize");

const db = new Sequelize("todolist", "todouser", "todopass", {
    host: "localhost",
    dialect: "mysql"
});

const List = db.define("lists", {
    listName: {
        type: Sequelize.STRING,
        primaryKey: true
    }
});

const Task = db.define("tasks", {
    listName: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    taskName: {
        type: Sequelize.STRING,
        primaryKey: true
    }
});

List.hasMany(Task);
Task.belongsTo(List);

(async () => {
    await db.sync();
    console.log("db synced");
    await List.create({
        listName: "Default List"
    });
    console.log("default list added");
})().catch((err) => {
    console.log("Denied to add Default List twice...");
});

exports = module.exports = {
    Task,
    List
};
