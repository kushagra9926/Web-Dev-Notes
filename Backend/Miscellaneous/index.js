const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended : true }));
app.use(express.json); // If json file is sent.

app.get("/register", (req, res) => {
    let {user, password} = req.query;
    res.send(`standard GET response. Welcome ${user}!`);
})
/*
Handling POST requests
    # Set up POST request route to get some response
    # Parse POST request data

app.use(express.urlencoded({ extended : true }));
app.use(express.json());
*/
app.post("/register", (req, res) => {
    let {user, password} = req.body;
    res.send(`standard POST response. Welcome ${user}!`);
})
app.listen(port, () => {
    console.log(`listening on port ${port}`);
})