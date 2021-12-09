

const { getAllLaunches, addNewLaunch, isLaunchIdExist ,abortLaunchById} = require('../../model/launches.model');

function httpGetAllLaunches(req, res) {
    // console.log( Array.from( launches.values()));
    res.status(200).json(getAllLaunches())
}

function httpPostLaunch(req, res) {
    let launch = req.body;
    // console.log(launch);
    if (!launch.mission || !launch.rocket || !launch.launchDate || !launch.target) {
        return res.status(400).json({
            error: "Missing required launch property"
        })
    }
    launch.launchDate = new Date(launch.launchDate)
    // console.log(launch.launchDate.valueOf());
    if (isNaN(launch.launchDate.valueOf())) {
        return res.status(400).json({
            error: "Date is not in correct format, please put in Month Date, YYYY format"
        })
    }

    addNewLaunch(launch);

    return res.status(201).json(launch)
}

function httpAbortLaunch(req, res) {
    //does not exist

    const id = +req.params.id;
    // console.log(id);
    if (!isLaunchIdExist(id)) {
        return res.status(404).json({
            err: "Launch ID not found"
        })
    }
    //does exist
    const aborted = abortLaunchById(id)
    return res.status(200).json(aborted)
}
module.exports = {
    httpGetAllLaunches,
    httpPostLaunch,
    httpAbortLaunch
}