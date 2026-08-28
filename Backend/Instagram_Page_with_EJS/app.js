const express = require("express");
const app = express();
const path = require("path");

let port = 8080;

// app.use((req, res) => {
//     console.log("request received")
// });

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.static(path.join(__dirname, "public/js")));
app.get("/ig/:username", (req, res) => {
    let { username } = req.params;  
    const instaData = require("./data.json");
    // console.log(instaData); 
    const data = instaData[username]; 
    if(data) {
        res.render("instagram.ejs", { data });
    } else{
        res.render("error.ejs");
    }
    
});
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});