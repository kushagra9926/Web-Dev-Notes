const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

app.use(express.urlencoded({ extended : true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        username : "Kushagra",
        content : "I AM the BEST!",    
    },
    {
        username : "Raj",
        content : "I AM a SUCKER!",    
    },
    {
        username : "Shivansh",
        content : "I AM a GOONER!",    
    },
]

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});