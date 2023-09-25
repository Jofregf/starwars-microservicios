const { catchedAsync } = require("../utils");

module.exports = {
    getPlanets: catchedAsync(require("./getPlanets")),
    createPlanet: catchedAsync(require("./createPlanet")),
    getPlanet: catchedAsync(require("./getPlanet")),
    removePlanet: catchedAsync(require("./removePlanet")),
    updatePlanets: catchedAsync(require("./updatePlanet"))
}