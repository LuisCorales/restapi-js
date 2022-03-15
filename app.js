const express = require("express");

const db = require("./db.json");
const dbObj = db;

// Create express app and set port
const app = express();
app.set("port", 5000);
const port = app.set("port");

// Configures express to read and write json
app.use(express.json());

// Run the server
app.listen(port, () => {
    console.log("The API is running on localhost:" + port);
});

// GET ONE REQ
app.get("/users/:id", (req, res) =>
{
    return res.status(200).json(dbObj.users[dbObj.users.findIndex(item => item.id.toString() === req.params.id)]);
});

// GET ALL REQ
app.get("/users/", (req, res) =>
{
    return res.status(200).json(dbObj.users);
});

// POST REQ Create user
app.post("/users/", (req, res) =>
{
    dbObj.users.push({id: dbObj.users[dbObj.users.length - 1].id + 1, username: req.body.username});

    return res.status(200).json({
        message: "User " + req.body.username + " created"
    });
});

// PUT REQ Change username of user
app.put("/users/:id", (req, res) =>
{
    dbObj.users[dbObj.users.findIndex(item => item.id.toString() === req.params.id)].username = req.body.username;

    return res.status(200).json({
        message: "User with id " + req.params.id + " has been modified"
    });
});

// DELETE ONE REQ
app.delete("/users/:id", (req, res) =>
{
    const index = dbObj.users.findIndex(item => item.id.toString() === req.params.id);
    if(dbObj.users.length >= index)
        dbObj.users.splice(index, 1);

    return res.status(200).json({
        message: "User with id " + req.params.id + " has been deleted"
    });
});

// If request not found
app.use((req, res) => {
    return res.status(500).json({
        error: "Type of request not found: " + req.url
    });
});