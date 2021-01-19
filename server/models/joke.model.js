const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    
    setup: {
        type: String,
        required: [true, "Setup is required"],
        minlength: [10, "Joke setup must be at least 10 characters long"]
  },
    punchline: {
        type: String,
        required: [true, "Punchline is required"],
        minlength: [3, "Joke punchline must be at least 3 characters long"]
    }
}, { timestamps: true });

const Joke = mongoose.model('Joke', JokeSchema);
console.log("@models.js", Joke);

module.exports = Joke;