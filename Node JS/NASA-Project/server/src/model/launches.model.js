const launchesDB = require('./launches.mangoose')
const planets = require('./planets.mongoose')

const launches = new Map();
let latestFlightNUmber = 100;

const launch = {
    flightNumber: 100,
    mission: 'kepler Exploreation X',
    rocket: 'Explorer IS1',
    launchDate: new Date('2030, 11, 24'),
    target: 'Kepler-442 b',
    customers: ['nik', 'ZTM', 'NSSA'],
    upcoming: true,
    success: true,
}

saveLaunch(launch)
// launches.set(launch.flightNumber, launch)
// console.log(launches.get(100));
async function getAllLaunches() {
    // await saveLaunch(launch)
    return await launchesDB
    .find({},{
        '_id':0,'__v':0
    })
    // return Array.from(launches.values)
}
function isLaunchIdExist(id) {

    return launches.has(id)
}

function abortLaunchById(id) {
    const aborted = launches.get(id);
    aborted.success = false;
    aborted.upcoming = false;

    return aborted;

}
async function saveLaunch(launch) {

    const planet =await planets.findOne({
        kepler_name : launch.target
    })

    if(!planet){
        throw new Error("Target planet does not match")
    }

    await launchesDB.updateOne({
        flightNumber: launch.flightNumber,
    }, launch, {
        upsert: true,
    })
}
async function addNewLaunch(launch) {
    latestFlightNUmber++;
    launches.set(latestFlightNUmber, Object.assign(launch, {
        flightNumber: latestFlightNUmber,
        customer: ['nik', 'ZTM', 'NSSA'],
        upcoming: true,
        success: true
    }))
    return launches.get(latestFlightNUmber) 
    // return await saveLaunch(launch) 

}
module.exports = {
    getAllLaunches,
    addNewLaunch,
    isLaunchIdExist,
    abortLaunchById,
};