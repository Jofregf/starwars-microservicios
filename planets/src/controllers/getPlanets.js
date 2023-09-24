const { response } = require("../utils");
const axios = require("axios");

module.exports = async (req, res) => {
    
    const apiURL = "http://database:8004/Planet";
    const planet = await axios.get(apiURL);
    response(res, 200, planet.data);
}