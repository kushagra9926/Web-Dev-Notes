const express = require("express");
const app = express();
const path = require("path");
const port = 8080;
const { v4: uuidv4} = require('uuid');
app.use(express.urlencoded({ extended : true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id: uuidv4(),
        username : "Kushagra",
        content : "I AM the BEST!",    
    },
    {
        id: uuidv4(),
        username : "Raj",
        content : "I AM a SUCKER!",    
    },
    {
        id: uuidv4(),
        username : "Shivansh",
        content : "I AM a GOONER!",    
    },
]

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    let { username, content} = req.body;
    let id = uuidv4();
    posts.push({ id, username, content });
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", { post });
});
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});