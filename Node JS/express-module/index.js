const express = require('express');

const friendsRouter = require('./routes/friends.router');
const messageRouter = require('./routes/message.router')

const app = express();

const friendController = require('./controller/freiends.controller');
const messageController = require('./controller/mssage.controller')

const PORT = 3000;




app.use((req,res,next)=>{
    const start = Date.now();
    console.log(`${req.method} ${req.baseUrl}${req.url}`);
    next();
    const delta = Date.now()-start;
    console.log(`total time ${delta}ms`);
})

app.use(express.json());

app.use('/friends',friendsRouter);
app.get('/message',messageController.getMessage)

app.listen(PORT,()=>{
    console.log('listening port 3000');
})