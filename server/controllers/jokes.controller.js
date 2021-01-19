const Joke = require("../models/joke.model");

module.exports = {

//Get All:
    findAllJokes : (req, res) => {
        Joke.find()
        .then(data => {
            console.log(data);
            res.json({response: data});
        })
        .catch(err => {
            res.json({error: err.message});
        });
    },

//Get - One by Id:

    findSingleJoke : (req, res) => {
        Joke.findById({"_id": req.params.id})
            .then(data => {
                console.log(data);
                res.json({response: data})
                .catch(err => {
                    console.log(err);
                    res.json({error: err.message});
                })
            })
    },

//Get - One Random:

    findRandomJoke : (req, res) => {
        Joke.find()
            .then(data => {
                console.log("random?:", data);
                res.json({data})
            })
            .catch(err => {
                res.json({error: err.message})
            });
    },

//Create new joke:

    createNewJoke : (req, res) => {
        const incomingJoke = req.body;
        console.log("POST@server.js", incomingJoke);

        Joke.create(incomingJoke)
        .then(data => {
            console.log("POST data:", data);
            res.json({response: data});
        })
        .catch(err => {
            res.json({error: err.message});
        });
    },


//Update joke:

    updateJoke : (req, res) => {
        const { jokeData } = req.body;
        Joke.findOneAndUpdate({"_id": req.params.id}, jokeData)
            console.log("update data:", jokeData)
            .then(updatedJoke => res.json({updatedJoke: updatedJoke}))
            .catch(err => res.json({error: err.message}))
    },

// Delete Joke:

    removeJoke : (req, res) => {
        Joke.deleteOne({"_id": req.params.id})
        .then(()=> { 
            res.json({response: "Joke removed."})
        })
        .catch(err => res.json({error: err}))
    }

}
