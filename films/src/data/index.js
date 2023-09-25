// const films = require("./films.json");
const axios = require("axios");

// const apiUrl = "http://localhost:8004/Film";
const apiUrl = "http://database:8004/Film";

module.exports = {
    list: async () => {
        const {data} = await axios.get(apiUrl);
        return data.data;
    },

    create: async (film) => {
        // throw Error("hay un error en la BDD al momento de crear el film")
        const {data} = await axios.post(apiUrl, film);
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

    update: async (id, film) => {
        const {data} = await axios.put(`${apiUrl}/${id}`, film);
        return data.data;
    }
};