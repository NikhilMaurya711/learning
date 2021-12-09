const launches = new Map();
let latestFlightNUmber = 100;

const launch = {
    flightNumber: 100,
    mission: 'kepler Exploreation X',
    rocket: 'Explorer IS1',
    launchDate: new Date('2030, 11, 24'),
    target: 'Kepler-442 b',
    customer: ['nik', 'ZTM', 'NSSA'],
    upcoming: true,
    success: true
}

launches.set(launch.flightNumber, launch)
// console.log(launches.get(100));
function getAllLaunches() {
    return Array.from(launches.values())
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
function addNewLaunch(launch) {
    latestFlightNUmber++;
     launches.set(latestFlightNUmber, Object.assign(launch, {
        flightNumber: latestFlightNUmber,
        customer: ['nik', 'ZTM', 'NSSA'],
        upcoming: true,
        success: true
    }))
    return launches.get(latestFlightNUmber)
}
module.exports = {
    getAllLaunches,
    addNewLaunch,
    isLaunchIdExist,
    abortLaunchById,
};