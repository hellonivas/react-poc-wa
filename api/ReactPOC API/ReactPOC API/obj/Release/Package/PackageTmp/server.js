var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var routes = require("./routes/routes.js")(app);

var server = app.listen(3000, function () {
    console.log("Listening on port %s...", server.address().port);
});


app.get("/", function (req, res) {
    res.send("React POC API");
});

app.get("/account", function (req, res) {
    var accountMock = {
        "username": "nraboy",
        "password": "1234",
        "twitter": "@nraboy"
    }
    if (!req.query.username) {
        return res.send({ "status": "error", "message": "missing username" });
    } else if (req.query.username != accountMock.username) {
        return res.send({ "status": "error", "message": "wrong username" });
    } else {
        return res.send(accountMock);
    }
});