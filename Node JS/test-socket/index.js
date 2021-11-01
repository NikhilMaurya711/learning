// const io = require("socket.io")(3000);

// io.on("connection", socket => {
//   // either with send()
//   socket.send("Hello!");

//   // or with emit() and custom event names
//   socket.emit("greetings", "Hey!", { "ms": "jane" }, Buffer.from([4, 3, 3, 1]));

//   // handle the event sent with socket.send()
//   socket.on("message", (data) => {
//     console.log(data);
//   });

//   // handle the event sent with socket.emit()
//   socket.on("salutations", (elem1, elem2, elem3) => {
//     console.log(elem1, elem2, elem3);
//   });
// });

// const { Server } = require("socket.io")(3000);

// const io = new Server({ /* options */ });

// io.on("connection", (socket) => {
//   // ...
//   console.log("lostening port 3000");
// });

// io.listen(3000);
// const { Server } = require("socket.io");

// const io = new Server(3000, { /* options */ });

// io.on("connection", (socket) => {
//   // ...
//   console.log("lostening port 3000");
// });

const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();
const io = new Server(httpServer, { /* options */ });

io.on("connection", (socket) => {
    console.log(socket.id); // x8WIv7-mJelg7on_ALbx
    console.log("lostening port 3000");
  });

httpServer.listen(3000);