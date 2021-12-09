const { getAllplanets } = require('../../model/planets.model')

function httpGetAllplanets(req, res) {
    res.status(200).json(getAllplanets())
}


module.exports = { httpGetAllplanets };