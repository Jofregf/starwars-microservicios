const films = require("./films.json");

module.exports = {
    list: async () => {
        return films;
    },

    create: async () => {
        throw Error("hay un error en la BDD al momento de crear el film")
    }
};