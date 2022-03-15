const express = require("express");

// Create express app and set port
const app = express();
app.set("port", 5500);
const port = app.set("port");

// Configures express to read and write json
app.use(express.json());

// Run the server
app.listen(port, () => {
    console.log("The API is running on port: ", port);
});

// GET REQ

// POST REQ

// PUT REQ

// DELETE REQ