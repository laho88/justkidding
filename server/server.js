const express = require("express");
const app = express();
const port = 8000;


// This will fire our mongoose.connect statement to initialize our database connection

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

require("../server/config/mongoose.config");
require('../server/routes/jokes.routes');


app.listen(port, () => {
    console.log({message: `app is staged and set on ${port}`})

});