const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/db_jokes', {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => {console.log("Connection to MongoDB established")})
    .catch(err=>{console.log("Failed to connect to database", err)})