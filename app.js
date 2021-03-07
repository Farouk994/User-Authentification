const express = require("express");
const path = require("path")
const mysql = require("mysql");
const dotenv = require("dotenv")

dotenv.config({ path: './.env'});


const app = express();

const db = mysql.createConnection({
    host : "localhost",
    password : "",
    user : "root",
    port : 3306,
    database : "nodejs-login"
});


// this is a variable that gives you access of currrent directory
const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));
app.set('view engine', 'exphbs');

db.connect( (error)=> {
    if(error) {
        console.log(error)
    } else {
        console.log("Mysql connected...")
    } 
});

app.get("/diane", function(req,res){
    // res.send("<h1>Welcome to 3ller</h1>");
    res.render(" index ")
});

const PORT = process.env.PORT || 3000;

app.listen(PORT,function(){
    console.log("Listening to PORT 3000")
});


