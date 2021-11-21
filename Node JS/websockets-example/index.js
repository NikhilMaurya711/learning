const Websocket = require("ws");
const randomstring = require('randomstring');

const wss = new Websocket.Server({port:3000});

wss.on("connection", (connection, ws)=>{
    console.log("New client connected");
    console.log((ws));
    connection.id = randomstring.generate({
        length: 17,
        charset: '23456789ABCDEFGHJKLMNPQRSTWXYZabcdefghijkmnopqrstuvwxyz',
      });
    console.log("connection ID", connection.id);

    // ws.emit("open", ()=>{
    //     console.log("client has connected\n======================");
    // })
    ws.on("close", ()=>{
        console.log("client has disconnected\n======================");
    })
})