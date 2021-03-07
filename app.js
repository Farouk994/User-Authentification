const express = require("express");
const path = require("path");
var exphbs = require("express-handlebars");
const mysql = require("mysql");
const dotenv = require("dotenv")
const app = express();

dotenv.config({ path: './.env'});
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

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/signup", function(req,res){
    res.sendFile(path.join(__dirname, "./public/signup.html"));
});

app.get("/login", function(req,res){
    res.sendFile(path.join(__dirname, "./public/login.html"));
});


const PORT = process.env.PORT || 3000;

app.listen(PORT,function(){
    console.log("Listening to PORT 3000")
});


