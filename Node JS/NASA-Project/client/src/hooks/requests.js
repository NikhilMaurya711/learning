const baseURL = "http://localhost:8000"

async function httpGetPlanets() {
  // Load planets and return as JSON.
  const response = await fetch(`${baseURL}/planets`)
  return await response.json()
}

async function httpGetLaunches() {
  // TODO: Once API is ready.
  // Load launches, sort by flight number, and return as JSON.

  const launchDetails = await fetch(`${baseURL}/launches`)
  const fetchedLaunches = await launchDetails.json();
  return (fetchedLaunches.sort((a, b) => {
    return a.flightNumber - b.flightNumber;
  }))

}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.

  console.log(launch);

  try {
    return await fetch(`${baseURL}/launches`, {
      method: 'post',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(launch)
    })
  }
  catch (err) {
    return { ok: false }
  }

}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
  try {
    return await fetch(`${baseURL}/launches/${id}`,
      {
        method: 'delete'
      })
  } catch (err) {
    return { ok: false }
  }
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};