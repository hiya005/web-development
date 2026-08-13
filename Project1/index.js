const express = require('express');
const app = express();
const packages = require('./data/tour')

app.get("/",(req,res)=>{
    res.send("Hi there !!!")
});

// app.get("/packages",(req,res)=>{
//     res.json(packages);
// })

app.get("/packages",(req,res)=>{
    const des = req.query.destination;
    if(!des){
        res.json(packages);
    }
})

app.get("/packages/:id",(req,res)=>{
    const id = Number(req.params.id);
    packages.find(item=>
        packages.find(item=>item.id == id_),
        response.json(onepack)
    )
})



app.listen(5000,()=>{
    console.log("Server is running on http://localhost:5000");
})