const express = require("express");
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

db.connect( (error)=> {
    if(error) {
        console.log(error)
    } else {
        console.log("Mysql connected...")
    } 
});

app.get("/diane", function(req,res){
    res.send("<h1>Welcome to 3ller</h1>");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT,function(){
    console.log("Listening to PORT 3000")
});


