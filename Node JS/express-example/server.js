const express = require('express');

const messageRouter = require('./routes/message.router')
const friendsRouter = require('./routes/friends.router')

const app = express();

PORT = 3000;


app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
})
app.use(express.json())


app.use("/friends", friendsRouter)

app.use('/message',messageRouter)

app.listen(PORT, () => {
    console.log("listening PORT " + PORT);
})