// const characters = require("./characters.json");
const axios = require("axios");

const apiUrl = "http://database:8004/Character";

module.exports = {
    list: async () => {
        return await axios.get(apiUrl);
    },

    create: async (character) => {
        // throw Error("hay un error en la BDD al momento de crear el personaje")
        return await axios.post(apiUrl, character);
    },

    getOne: async (id) => {
        return await axios.get(`${apiUrl}/${id}`);
    },

    remove: async (id) => {
        return await axios.delete(`${apiUrl}/${id}`);
    },

    update: async (id, character) => {
        return await axios.put(`${apiUrl}/${id}`, character);
    }
}