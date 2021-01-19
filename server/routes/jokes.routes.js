const JokeController = require("../controllers/jokes.controller");
const express = require("express");
const app = express();
require("../server")



module.exports = app => {

    app.get("/api/jokes/", JokeController.findAllJokes);
    app.get("/api/jokes/:id", JokeController.findSingleJoke);
    app.get("/api/jokes/random", JokeController.findRandomJoke);
    app.post("/api/jokes/new", JokeController.createNewJoke);
    app.put("/api/jokes/update/:id", JokeController.updateJoke);
    app.delete("/api/jokes/delete/:id", JokeController.removeJoke);
};

