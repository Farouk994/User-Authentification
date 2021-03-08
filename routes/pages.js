
var path = require("path");
// 
module.exports = function(app){
    app.get('/login', (req,res)=>{
        res.sendFile(path.join(__dirname, "../public/login.html"));
    });

    app.get("/signup", (req,res)=>{
        res.sendFile(path.join(__dirname, "../public/signup.html"));
    });
}