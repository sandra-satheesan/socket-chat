const express = require('express');
const app = express();
const htpp = require ('http');
const server = htpp.createServer(app);

app.get('/',(req,res)=>{
    res.send("Hello World");
})

server.listen(3000,()=>{
    console.log("listening to port 3000");
})