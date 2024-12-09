import express from "express";
const app = express();

//Middleware
app.use(function(req , res , next){
    console.log(req);
    //We need to use next() cause it'll help us to push on the route
    next();
})

//Routing
app.get("/" , (req ,res)=>{
    res.send("Hello from the server side");
});
app.get("/about" , (req , res)=>{
    res.send("Hellow From about section ")
})
app.get("/profile/harsh", (req , res)=>{
    res.send("<h1>Hello from the harsh side </h1>")
})
//For make dynamic route we can code like this 
app.listen(3000 , ()=>{
    console.log("Server is staring...");
})
