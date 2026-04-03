const express = require("express");

const app = express();

const todoRoutes = require("./routes/todo.routes");
const cookieParser= require("cookie-parser");
const session= require("express-session");



app.use(express.json());
app.use(cookieParser());

app.get("/set-cookie",(req, res )=>{
    res.cookie("name","user-1");
    res.send("Cookie set");
});

app.get("/set-cookie",(req, res )=>{
    res.json(req.cookies)
});

app.use("/api/todos", todoRoutes);


app.post("/login",(res,req)=>{
    const{username}= req.body;
    req.session.user=username;
    res.send("user loggedin")
})

app.get("/profile",(req,res)=>{
    if(!req.session.user){
        return res.status(401).send("user not logined in")
    }
    res.send(`welcome ${req.session.user}`)
})

app.get("/logout",(res,req)=>{
    req.session.distroy()
    return res.send("logged out")
})
module.exports = app;