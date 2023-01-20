const express = require("express");
const app = express();
// app.use(express.json());
const obj = {
    phone: '18602100000',
    email: 'guestcaredominos@jublfood.com'
  }
app.get("/welcome", (req, res)=>{
    if(req.url != "/welocme"){
        return res.status(404).send("Invalid request...")
    }
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send("Welcome to Dominos!");
})
 

app.get("/contact", (req, res)=>{
    if(req.url != "/contact"){
        return res.status(404).send("Invalid request...")
    }
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(obj);
});
app.listen(8081, ()=>{
    console.log("listening to the port at 8081...");
})