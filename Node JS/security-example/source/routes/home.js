import express from 'express'
import path from 'path'

const homrRoute = express.Router()

homrRoute.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'))
})

export { homrRoute }
