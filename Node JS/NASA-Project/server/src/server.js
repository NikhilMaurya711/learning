const http = require('http');

const app = require('./app')


const server = http.createServer(app);

const PORT = process.env.PORT || 8000;
const { loadPlanetData } = require('./model/planets.model')

async function startServer() {
    await loadPlanetData;
    server.listen(PORT, () => {
        console.log("listening to port " + PORT);
    })

}
startServer();
