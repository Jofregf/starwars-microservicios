const { response } = require("../utils");
const axios = require("axios");

module.exports = async (req, res) => {
    
    const apiURL = "http://database:8004/Film";
    const film = await axios.get(apiURL)
    response(res, 200, film.data)
}