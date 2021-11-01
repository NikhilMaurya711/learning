const express = require('express');
const app = express();
const server = require('http').createServer(app)

const io = require('socket.io')(server, { cors: { origin: '*' } });

const PORT = 3000;
app.set('view engine', 'ejs');
app.set('view options', {
    layout: false
});

app.get("/", (req, res) => {
    res.render("home");
})

server.listen(3000, () => {
    console.log('listening port 3000');
})

io.on("connection", (socket) => {
    console.log("User connected"+ socket.id);

    socket.on("message", (data)=>{
        socket.broadcast.emit("message",data)
    })
})