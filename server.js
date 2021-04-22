const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api", require("./routes/api").route);
app.use("/", express.static(__dirname + "/public"));

app.listen(4000, () => {
    console.log("server has started on http://localhost:4000");
});