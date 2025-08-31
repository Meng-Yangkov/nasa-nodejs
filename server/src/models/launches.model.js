const launches = new Map();

let latestFlightNumber = 100

const launch = {
  flightNumber: 100,
  mission: "Find Myself",
  rocket: 'Explorer IS1',
  launchDate: new Date('December 27, 2030'),
  target: 'Kepler-442 b',
  customers: ['Pheng Mengheak', 'Thy Maya'],
  upcoming: true,
  success: true
};

launches.set(launch.flightNumber, launch);

function existLaunchWithId(launchId){
  return launches.has(launchId);
}

function getAllLaunches(){
  return Array.from(launches.values());
}

function addNewLaunches(launch){
  latestFlightNumber++;
  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      success: true,
      upcoming: true,
      customers : ['Tom Holland', 'Mquire Queue'],
      flightNumber: latestFlightNumber
  }));
}

function abortLaunchById(launchId){
  const aborted = launches.get(launchId);
  aborted.upcoming = false;
  aborted.success = true;
  return aborted;
}

module.exports = {
  existLaunchWithId,
  getAllLaunches,
  addNewLaunches,
  abortLaunchById 
}