const express = require('express');
const app = express();
const htpp = require ('http');
const server = htpp.createServer(app);

const {Server} = require('socket.io');//only import Server class from socket.io
const io = new Server(server); //creates a Socket.io server instance

app.use(express.static(__dirname));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
})

io.on('connection', (socket)=> { //.on() listens for an event --- socket represents individual user connection 
    console.log('a user connected');
    socket.on('chat message', (msg) => {
        //console.log('message: '+ msg); 
        io.emit('chat message' , msg);    
    })  
    //socket.on('disconnect', () => {
    //    console.log('user disconnected');
    //});
})

server.listen(3000,()=>{
    console.log("listening to port 3000");
})