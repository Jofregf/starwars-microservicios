// const characters = require("./characters.json");
const axios = require("axios");

// const apiUrl = "http://localhost:8004/Character";
const apiUrl = "http://database:8004/Character";

module.exports = {
    list: async () => {
        const {data} = await axios.get(apiUrl);
        return data.data;
    },

    create: async (character) => {
        // throw Error("hay un error en la BDD al momento de crear el personaje")
        const {data} = await axios.post(apiUrl, character);
        return data.data;
    },

    getOne: async (id) => {
        const {data} = await axios.get(`${apiUrl}/${id}`);
        return data.data;
    },

    remove: async (id) => {
        const {data} = await axios.delete(`${apiUrl}/${id}`);
        return data.data;
    },

    update: async (id, character) => {
        const {data} = await axios.put(`${apiUrl}/${id}`, character);
        return data.data;
    }
}