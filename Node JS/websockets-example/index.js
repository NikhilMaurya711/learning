const Websocket = require("ws");

const wss = new Websocket.Server({port:3000});

wss.on("connection",ws=>{
    console.log("New client connected");
    console.log(ws);
    ws.on("close", ()=>{
        console.log("client has disconnected\n======================");
    })
})