// A company wants to build an airport in a new city because the old airport broke down.
// The dimensions of the old airport were not accurate and they want more accurate dimensions for the new airport.
// Suppose you are tasked with estimating the number of planes that will be arriving at the new airport with great accuracy.
// Suppose as well that the planes landing in the old airport will be landing in the new airport when it opens.
// You collect the following measurements of planes landing in the old airport per hour at different times of the day for a whole month:

num_planes_per_hour = [
  24, 18, 23, 26, 15, 20, 17, 31, 17, 26, 27, 8, 23, 17, 23, 17, 16,
  32, 15, 19, 23, 28, 18, 22, 21, 16, 25, 16, 19, 23, 24, 25, 20, 12,
  13, 18, 16, 17, 16, 13, 22, 24, 17, 28, 26, 25, 19, 15, 24, 18, 14,
  25, 16, 22, 23, 18, 10, 23, 18, 15, 14, 13, 20, 24, 22, 19, 14, 15,
  21, 19, 12, 21, 23, 31, 19, 22, 14, 12, 19, 24, 19, 16, 16, 13, 17,
  19, 25, 12, 23, 16, 15, 9, 13, 24, 26, 19, 19, 27, 21, 20,
]

// Suppose a runway can take care of 5 planes per hour at most.
// The company wants to optimize the number of runways to make as much money as possible.
// If the runways are all busy then a new plane cannot land and that would cost twice as much as having an empty runway.
// How many runways should the new airport build? Explain your answer.
// To attend the airplane that lending in the old airport the new need to build 20 runaway, but I propose 30 runaways, 
// supposing that the landing reduce to 80% compare with the old airport the new runways going to have a mean 2.66 landing per hour.
// But with this runaways the new airport can to growth 50% in lending.

// What is the probability of 30 planes arriving during an hour? Explain your answer.
// Now we have the 100 airplanes landing information from the old airport, we can calculate the P(30) = 30/100 = 0.3 equivalent to 30%
// With 30% the new airport is going to attend in 48 hour 1440 lendings, with One airplane per runway per hour.

// The company wants a 48 hour simulation of planes landing in the airport, report the results like `num_planes_day_simulation` and explain your answer.
// With 100% operation (5 planes per hour at most) and 30 runaways the new airport is going to attend 4800 lendings in total.

const totalRunway = new Map()

const assignRunaway = () => {
  // We sort the runway with fewer airplanes per hour
  totalRunway[Symbol.iterator] = function * () {
    yield * [...this.entries()].sort((a, b) => a[1].length - b[1].length)
  }
  return [...totalRunway][0]
}

const createRunaways = (runwayQuantity) => {
  for (let j = 0; j < runwayQuantity; j++) {
    totalRunway.set(`RNW-${j}`, [])
  }
}
export const simulation = (occupationPercent, runwayQuantity, simulationHours) => {
  const maxAirplanePerHour = numPlanesPerHour.length * (occupationPercent / 100)

  createRunaways(runwayQuantity)
  for (let i = 0; i < simulationHours; i++) {
    // In one hour We are going to attend the occupationPercent airplanes from numPlanesPerHour

    for (let a = 0; a < maxAirplanePerHour; a++) {
      const randomAirplane = numPlanesPerHour[Math.floor(Math.random() * numPlanesPerHour.length)]
      // We should get the runaway with lower airplanes
      const runaway = assignRunaway()

      // Assign the airplane to the runaway
      runaway[1].push(randomAirplane)
    //   console.log(`IN HOUR ${i} is arriving the AIRPLANE ${randomAirplane}`)
    }
  }

  const airplanesAttendedByRunawaysInOneHour = []
  let numPlanesDaySimulation = 0
  totalRunway.forEach((v) => {
    numPlanesDaySimulation += v.length
    airplanesAttendedByRunawaysInOneHour.push(v.length / simulationHours)
  })
  console.log('airplanesAttendedByRunawaysInOneHour', airplanesAttendedByRunawaysInOneHour)
  console.log('means', (numPlanesDaySimulation / runwayQuantity) / simulationHours)
  console.log('numPlanesDaySimulation', numPlanesDaySimulation)

  return numPlanesDaySimulation
}


// Tests 

// 100%, 30 runaways, 48 hours
// simulation(100, 30, 48)

// 80%, 30 runaways, 48 hours
// simulation(80, 30, 48)

// 30%, 30 runaways, 48 hours
// simulation(30, 30, 48)

