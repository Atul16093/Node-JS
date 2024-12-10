import express from "express";
const app = express();

//Middleware
app.use(function(req , res , next){
    // console.log(req);
    //We need to use next() cause it'll help us to push on the route
    next();
}) 

app.set("view engine" , "ejs");

//Here we are just configure the express static file and it's a middleware 
app.use(express.static('./public'));
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

app.get("/file" , (req , res)=>{
    //render method always find file inside the views folder 
    res.render("index" , {age : 23});
})
//For make dynamic route we can code like this 
app.listen(3000 , ()=>{
    console.log("Server is staring...");
})
