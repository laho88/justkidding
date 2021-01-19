const JokeController = require("../controllers/jokes.controller");

module.exports = app => {

    app.delete("/api/jokes/delete/:id", JokeController.removeJoke);
    app.put("/api/jokes/update/:id", JokeController.updateJoke);
    app.post("/api/jokes/new", JokeController.createNewJoke);
    app.get("/api/jokes/:id", JokeController.findSingleJoke);
    app.get("/api/jokes/", JokeController.findAllJokes);
};

