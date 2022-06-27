import express from 'express'
import dotenv from 'dotenv'
// import { homrRoute } from './source/routes'
import path from 'path'
import { fileURLToPath } from 'url';
import fs from 'fs'
import https from 'https'
import helmet from 'helmet'

dotenv.config()

const PORT = process.env.PORT
const app = express()

app.use(helmet())

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log('directory-name 👉️', __dirname);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './source', './public', 'index.html'))
})

app.get('/secret', (req, res) => {
    res.send('Your personal secret value 7')
})

https.createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}, app).listen(PORT, () => {
    console.log('listening port', PORT);
})

//openssl req -x509 -newkey rsa:4096 -nodes -keyout key.pem -out cert.pem -days 365
//openssl req -config /etc/openssl.cnf -new -x509 -keyout private/cakey.pem -out cacert.pem -days 3650