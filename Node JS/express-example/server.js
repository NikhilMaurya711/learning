const express = require('express');
const path = require('path')

const messageRouter = require('./routes/message.router')
const friendsRouter = require('./routes/friends.router')

const app = express();

app.set('view engine','hbs');
app.set('views',path.join(__dirname,'views'))

PORT = 3000;


app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
})

app.use('/site',express.static(path.join(__dirname,'public')))

app.use(express.json())

app.get('/',(req,res)=>{
    res.render('index',{
        title:'test',
        name:'Nik'
    })
})
app.use("/friends", friendsRouter)

app.use('/message',messageRouter)

app.listen(PORT, () => {
    console.log("listening PORT " + PORT);
})