const mongoose = require("mongoose");

// mongoose.connect('REMOVED TO REPO', {
mongoose.connect('mongodb://localhost/joke_stack', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {console.log("Connection to MongoDB established")})
    .catch(err=>{console.log("Failed to connect to database", err)});