const planets = require("./planets.json");

module.exports = {
    list: async () => {
        return planets;
    },
    create: async () => {
        throw Error("hay un error en la BDD al momento de crear un planeta");
    },
};