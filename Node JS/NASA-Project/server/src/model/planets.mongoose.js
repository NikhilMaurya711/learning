const mongoose = require('mongoose')

const newPlanetSchema = new mongoose.Schema({

    kepler_name:{
        type: String,
        required: true
    }
})
module.exports = mongoose.model("Planet",newPlanetSchema)