const API_URL = 'http://localhost:8000';

//load planets and return as JSON
async function httpGetPlanets() {
  const response = await fetch(`${API_URL}/planets`);
  return await response.json();
}

//load launches, sort by flight number and return as JSON
async function httpGetLaunches() {
  const response = await fetch(`${API_URL}/launches`);
  const fetchedLaunches = await response.json();
  return fetchedLaunches.sort((number1, number2) => {
    return number1.flightNumber - number2.flightNumber;
  });
}

// Submit given launch data to launch system.
async function httpSubmitLaunch(launch) {
  try{
    return await fetch(`${API_URL}/launches`, {
      method: 'post', 
      headers : {
        "Content-Type" : "application/json"
      }, 
      body: JSON.stringify(launch),
    });
  } catch(err){
    return {
      ok: false,
    };
  }
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID. 
}       

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};