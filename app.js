const express = require("express");
const path = require("path");
const mysql = require("mysql");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const db = mysql.createConnection({
    host : "localhost",
    password : "",
    user : "root",
    port : 3306,
    database : "nodejs-login"
});

db.connect( (error)=> {
    if(error) {
        console.log(error)
    } else {
        console.log("Mysql connected...")
    } 
});

// this is a variable that gives you access of currrent directory
const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

// Routes for html page
require("./routes/pages")(app);
require("./routes/pages")(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT,function(){
    console.log("Listening to PORT 3000")
});


