const express = require("express");
const app = express();
const port = 8000;


// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");


app.get("/api", (req, res) => {
    res.json({message: "testing testing TESTING!!!!"})
})

app.listen(port, () => {
    console.log({message: `app is staged and set on ${port}`})
})