const { getAllplanets } = require('../../model/planets.model')

async function httpGetAllplanets(req, res) {
    res.status(200).json(await getAllplanets())
}


module.exports = { httpGetAllplanets };