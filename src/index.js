const express = require("express");
const app = express();
const obj = {
    phone: '18602100000',
    email: 'guestcaredominos@jublfood.com'
}
app.get("/welcome", (req, res)=>{
   return res.status(200).send("Welcome to Dominos!");
})
 

app.get("/contact", (req, res)=>{
   return res.status(200).send(obj);
});
app.listen(8081, ()=>{
    console.log("listening to the port at 8081...");
})