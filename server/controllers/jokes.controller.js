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
                res.json({response: data});
            })
            .catch(err => {
                console.log(err);
                res.json({error: err.message});
            })
    },

//Create new joke:

    createNewJoke : (req, res) => {
        console.log("createNewJoke data:", req.body);
        Joke.create(req.body)
        .then(newJoke => {
            console.log("POST-ing a newJoke:", newJoke);
            newJoke.save();
            res.json({response: newJoke});
        })
        .catch(err => {
            res.json({error: err.message});
        });
    },

//Update joke:

    updateJoke : (req, res) => {
        Joke.findOneAndUpdate({"_id": req.params.id}, req.body)
            .then(updatedJoke => {
                console.log("update data:", updatedJoke);
                res.json({updatedJoke: updatedJoke})
            })
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

};
