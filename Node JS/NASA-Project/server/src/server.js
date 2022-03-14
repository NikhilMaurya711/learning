const http = require('http');
const mongoose  = require('mongoose')
const app = require('./app') 
const { loadPlanetData } = require('./model/planets.model')

const server = http.createServer(app);

const PORT = process.env.PORT || 8000;
const MONGO_URL = "mongodb+srv://nik:Nikhil123@cluster0.cxrhc.mongodb.net/nasa?retryWrites=true&w=majority"

mongoose.connection.once('open',()=>{
    console.log('MongoDB connection Ready')
})
mongoose.connection.on('error',(err)=>{
    console.log(err)
})
async function startServer() {
    await mongoose.connect(MONGO_URL)
    await loadPlanetData;
    server.listen(PORT, () => {
        console.log("listening to port " + PORT);
    })

}
startServer();
